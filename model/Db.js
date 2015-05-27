var db = Class.create({
	initialize: function(id) {
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
	},
	addPerson: function(firstname, lastname, id){
		var person = new Person(firstname, lastname, id);
		this.personList.push(person);
		return person;
	},
	addCours: function(coursName){
		this.cours = new Cours(coursName);
		return this.getCours();
	},
	addTask: function(name, id){
		var task = new Task(name, id);
		this.taskList.push(task);
		return task;
	},
	addTaskWork: function(t,p,s){
		this.workingList.push(new Array(t,p,s));
	},
	addClasse: function(name, id){
		var classe = new Classe(name, id);
		this.classe = classe;
		return classe;
	},
	addSchedule: function(begin, end, id){
		var s = new Schedule(begin,end, id);
		this.scheduleList.push(s);
		return s;
	},
	getCours: function(){
		return this.cours;
	},
	getPerson: function(indice){
		return this.personList[indice];
	},
	getPersonByUniqId: function(uid){
		for (var i = 0; i < this.personList.length; i++) {
			if(this.personList[i].uniqid == uid){
				return this.personList[i];
			}
		};
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
	getScheduleByUniqId: function(uid){
		for (var i = 0; i < this.scheduleList.length; i++) {
			if(this.scheduleList[i].uniqid == uid){
				return this.scheduleList[i];
			}
		};
	},
	getScheduleList: function(){
		return this.scheduleList;
	},
	getTask: function(indice){
		return this.taskList[indice];
	},
	getTaskByUniqId: function(uid){
		for (var i = 0; i < this.taskList.length; i++) {
			if(this.taskList[i].uniqid == uid){
				return this.taskList[i];
			}
		};
	},
	getTaskList: function(){
		return this.taskList;
	},
	toString: function() {
		return this.name;
	}
});