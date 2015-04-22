var Cours = Class.create({
	initialize: function(name) {
		this.name  = name;
		this.uniqid = uniqid("cours",true);
		this.taskList = new Array();
		this.scheduleList = new Array();
		this.classe = null;
		this.listTab = new Array();
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