function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

function handleFileSelect(evt) {
  console.log('handleFileSelect');
  evt.stopPropagation();
  evt.preventDefault();

  files = evt.dataTransfer.files; // FileList object.
  theFile = files[0];

  reader = new FileReader();
  reader.onload = function(e) {
    model = importToDb(e.target.result);
    clearTable();
    createTable(model);
  }
  reader.readAsText(theFile);
}


function importToDb(obj){
  o = JSON.parse(obj);

  model2 = new db(o.uniqid);

  var pl = o.personList;
  var tl = o.taskList;
  var sl = o.scheduleList;
  var wl = o.workingList;

  for (var i = 0; i < pl.length; i++) {
    var p = pl[i];
    model2.addPerson(p.firstname, p.lastname, p.uniqid);
  };

  for (var i = 0; i < tl.length; i++) {
    var t = tl[i];
    model2.addTask(t.name, t.uniqid);
  };

  for (var i = 0; i < sl.length; i++) {
    var s = sl[i];
    model2.addSchedule(new Date(s.begin), new Date(s.end), s.uniqid);
  };

  for (var i = 0; i < wl.length; i++) {
    var w = wl[i];
    t = model2.getTaskByUniqId(w[0].uniqid);
    p = model2.getPersonByUniqId(w[1].uniqid);
    s = model2.getScheduleByUniqId(w[2].uniqid);
    model2.addTaskWork(t,p,s);
  };

  return model2;
}