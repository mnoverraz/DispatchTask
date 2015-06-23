function db(id){
	if(id == null){
		this.uniqid = uniqid("task",true);
	}else{
		this.uniqid = id;
	}
	this.taskList = new Array();
	this.scheduleList = new Array();
	this.personList = new Array();
	this.classe = null;
	this.cours = null;
	this.workingList = new Array();
}

db.prototype.addPerson = function(firstname, lastname, id){
	var person = new Person(firstname, lastname, id);
	this.personList.push(person);
	return person;
}

db.prototype.addCours = function(coursName){
	this.cours = new Cours(coursName);
	return this.getCours();
}

db.prototype.addTask = function(name, id){
	var task = new Task(name, id);
	this.taskList.push(task);
	return task;
}

db.prototype.addTaskWork = function(t,p,s){
	this.workingList.push(new Array(t,p,s));
}

db.prototype.addClasse = function(name, id){
	var classe = new Classe(name, id);
	this.classe = classe;
	return classe;
}

db.prototype.addSchedule = function(begin, end, id){
	var s = new Schedule(begin,end, id);
	this.scheduleList.push(s);
	return s;
}

db.prototype.getCours = function(){
	return this.cours;
}

db.prototype.getPerson = function(indice){
	return this.personList[indice];
}

db.prototype.getPersons = function(){
	return this.personList;
}

db.prototype.getPersonByUniqId = function(uid){
	for (var i = 0; i < this.personList.length; i++) {
		if(this.personList[i].uniqid == uid){
			return this.personList[i];
		}
	}
}

db.prototype.getPersonByName = function(firstname, lastname){
	for (var i = 0; i < this.personList.length; i++) {
		if(this.personList[i].firstname == firstname){
			if(this.personList[i].lastname == firstname){
				return this.personList[i];
			}
			return this.personList[i];
		}
	}
}

db.prototype.getPersonByTaskSchedule = function(t,s){
	if(this.workingList == null || this.workingList.length == 0) { return null; }
	
	for (var i = 0; i < this.workingList.length; i++) {
		var iTask= this.workingList[i][0];
		var iPerson = this.workingList[i][1];
		var iSchedule = this.workingList[i][2];
		if(iTask == t){
			if( s==iSchedule ){
				return iPerson;
			}
		}
	}
	return null;
}

db.prototype.getSchedule = function(indice){
	return this.scheduleList[indice];
}

db.prototype.getScheduleByUniqId = function(uid){
	for (var i = 0; i < this.scheduleList.length; i++) {
		if(this.scheduleList[i].uniqid == uid){
			return this.scheduleList[i];
		}
	}
}

db.prototype.getScheduleList = function(){
		return this.scheduleList;
}

db.prototype.getTask = function(indice){
	return this.taskList[indice];
}

db.prototype.getTaskByUniqId = function(uid){
	for (var i = 0; i < this.taskList.length; i++) {
		if(this.taskList[i].uniqid == uid){
			return this.taskList[i];
		}
	}
}

db.prototype.getTaskList = function(){
	return this.taskList;
}

db.prototype.toString = function() {
	return this.name;
}