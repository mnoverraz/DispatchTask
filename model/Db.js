var db = Class.create({
	initialize: function() {
		this.classType = "cours";
		this.name  = name;
		this.uniqid = uniqid("cours",true);
		this.taskList = new Array();
		this.scheduleList = new Array();
		this.classe = null;
		this.listTab = new Array();
	},
	addPerson: function(p){
		this.personList.push(p);
	},
	addTask: function(t){
		if(t instanceof Task){
			this.taskList.push(t);
		}
	},
	addClasse: function(c){
		this.classe = c;
	},
	addSchedule: function(s){
		this.scheduleList.push(s);
	},
	toString: function() {
		return this.name;
	}
});