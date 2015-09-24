function createTable(model){
  createDatesHeader(model.getScheduleList());
  createContent(model);
  dropZone.style.border = "none";
  dropZone.style.backgroundColor = "transparent";
}

function createDatesHeader(scheduleList){
  var thead = table.createTHead();
  var row = thead.insertRow(0);
  row.insertCell(0);
  for (var i = 0; i < scheduleList.length; i++) {
    var date = scheduleList[i];
    var cell = row.insertCell(-1);
    cell.innerHTML = date.getDate();
  };
}

function createContent(model){
  //var tbody = document.getElementById("tbody");
  table.appendChild(document.createElement("tbody"));
  var tbody = table.tBodies[0];

  for (var i = 0; i < model.taskList.length; i++) {
    task = model.taskList[i];
    var row = tbody.insertRow(-1);
    var cell = row.insertCell(-1);
    cell.innerHTML = task.name;
    for (var j = 0; j < model.scheduleList.length; j++) {
      var cell = row.insertCell(-1);
      var person = model.getPersonByTaskSchedule(task, model.scheduleList[j]);
      cell.innerHTML = person;
    }
  };
}

function clearTable(){
  if(table.tHead != null){
    table.tHead.remove();
  }
  if(table.tBodies.length != 0){
    table.tBodies[0].remove();
  }
}

/**
* comment: compute the occurence of task by person
*
*/
function nbOccurance(person, task){
  var wl = model.getWorkingList();
  var counter = 0;
  for (var i = 0; i < wl.length; i++) {
    var dataSet = wl[i];
    if(dataSet[1] === person){
      if(dataSet[0] === task){
        counter++;
      }
    }
  };
  return counter;
}

function whoDoneTheLess(task, persons){
  var occupation = new Array();
  var ret = new Array();
  
  persons.forEach(function(person, index, array){
    occupation.push(new Array(person, nbOccurance(person,task)));
  });
  
  occupation.sort(function(a,b){
    if (a[1] > b[1]){return 1;}
    if (a[1] < b[1]){return -1;}
    return 0;
  });
  
 
  var minValue = occupation[0][1];
  occupation.forEach(function(elt, index, array){
    if(elt[1] == minValue){ ret.push(elt[0]);}
  });
  
  return ret;
}

function dispatchTasks(constraints){
  var dispatch = new Array();
  var availablePersons = model.getPersons();
  var availableTasks = model.getTasks();
  
  
  
  //Add every valid conditions and erase the person in availablePersons
  if(typeof contraints !== "undefined"){
    constraints.forEach(function(constraint, index, array){
       if(constraint[0] instanceof Task && constraint[1] instanceof Person && constraint[2] instanceof Schedule){
         dispatch.push(constraint);
         var indexPerson = availablePersons.indexOf(constraint[1]);
         var indexTask = availableTasks.indexOf(constraint[0]);
         availablePersons.splice(indexPerson, 1);
         availableTasks.splice(indexTask, 1);
       }
    });
  }
  
  //Celui qui a fait le moins une tâche doit la faire
  availableTasks.forEach(function(task, index, array){
    var eligiblePersons = whoDoneTheLess(task,availablePersons);
    var designatedPerson = eligiblePersons[Math.floor(Math.random() * eligiblePersons.length)];
    var indexPerson = availablePersons.indexOf(designatedPerson);
    
    dispatch.push(new Array(task, designatedPerson, new Schedule(new Date(), new Date())));
    availablePersons.splice(indexPerson, 1);
  });
  
  
  //On donne aléatoirement les tâches
 
  return dispatch;
}



function uniqid(prefix, more_entropy) {
  //  discuss at: http://phpjs.org/functions/uniqid/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //  revised by: Kankrelune (http://www.webfaktory.info/)
  //        note: Uses an internal counter (in php_js global) to avoid collision
  //        test: skip
  //   example 1: uniqid();
  //   returns 1: 'a30285b160c14'
  //   example 2: uniqid('foo');
  //   returns 2: 'fooa30285b1cd361'
  //   example 3: uniqid('bar', true);
  //   returns 3: 'bara20285b23dfd1.31879087'

  if (typeof prefix === 'undefined') {
    prefix = '';
  }

  var retId;
  var formatSeed = function(seed, reqWidth) {
    seed = parseInt(seed, 10)
      .toString(16); // to hex str
    if (reqWidth < seed.length) { // so long we split
      return seed.slice(seed.length - reqWidth);
    }
    if (reqWidth > seed.length) { // so short we pad
      return Array(1 + (reqWidth - seed.length))
        .join('0') + seed;
    }
    return seed;
  };

  // BEGIN REDUNDANT
  if (!this.php_js) {
    this.php_js = {};
  }
  // END REDUNDANT
  if (!this.php_js.uniqidSeed) { // init seed with big random int
    this.php_js.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);
  }
  this.php_js.uniqidSeed++;

  retId = prefix; // start with prefix, add current milliseconds hex string
  retId += formatSeed(parseInt(new Date()
    .getTime() / 1000, 10), 8);
  retId += formatSeed(this.php_js.uniqidSeed, 5); // add seed hex string
  if (more_entropy) {
    // for more entropy we add a float lower to 10
    retId += (Math.random() * 10)
      .toFixed(8)
      .toString();
  }

  return retId;
}