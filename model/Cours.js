var Cours = Class.create({
	initialize: function(name, id) {
		this.classType = "cours";
		this.name  = name;
		if(id == null){
			this.uniqid = uniqid("task",true);
		}else{
			this.uniqid = id;
		}
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
	getPersonByTaskSchedule: function(t,s){
		if(this.listTab == null || this.listTab.length == 0) { return null; }
		var find = false;

		for (var i = 0; i < this.listTab.length; i++) {
			if(this.listTab[i][0] == t){
				if( s.equals(this.listTab[i][2]) ){
					return this.listTab[i][1];
				}
			}
		}
		return null;
	},
	toString: function() {
		return this.name;
	},
	stringify: function(){

	}
});