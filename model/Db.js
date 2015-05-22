var db = Class.create({
	initialize: function() {
		this.uniqid = uniqid("db",true);
		this.taskList = new Array();
		this.scheduleList = new Array();
		this.personList = new Array();
		this.classe = null;
		this.cours = null;
		this.workingList = new Array();
	},
	addPerson: function(firstname, lastname){
		var person = new Person(firstname, lastname);
		this.personList.push(person);
		return person;
	},
	addCours: function(coursName){
		this.cours = new Cours(coursName);
		return this.getCours();
	},
	addTask: function(name){
		var task = new Task(name);
		this.taskList.push(task);
		return task;
	},
	addTaskWork: function(t,p,s){
		this.workingList.push(new Array(t,p,s));
	},
	addClasse: function(name){
		var classe = new Classe(name);
		this.classe = classe;
		return classe;
	},
	addSchedule: function(begin, end){
		var s = new Schedule(begin,end);
		this.scheduleList.push(s);
		return s;
	},
	getCours: function(){
		return this.cours;
	},
	getPerson: function(indice){
		return this.personList[indice];
	},
	getPersonByName: function(firstname, lastname){
		for (var i = 0; i < this.personList.length; i++) {
			if(this.personList[i].firstname == firstname){
				if(this.personList[i].lastname == firstname){
					return this.personList[i];
				}
				return this.personList[i];
			}
		};
	},
	getPersonByTaskSchedule: function(t,s){
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
	},
	getSchedule: function(indice){
		return this.scheduleList[indice];
	},
	getScheduleList: function(){
		return this.scheduleList;
	},
	getTask: function(indice){
		return this.taskList[indice];
	},
	getTaskList: function(){
		return this.taskList;
	},
	toString: function() {
		return this.name;
	}
});