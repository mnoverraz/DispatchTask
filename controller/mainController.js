function createTable(model){
  createDatesHeader(model.getScheduleList());
  createContent(model);
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

function nbOccurance(row, val){
  var occ = 0;
  for (var i = 1; i <= row.length-1; i++) {
    if(row[i].innerHTML == val){
      occ++;
    }
  };
  return occ;
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