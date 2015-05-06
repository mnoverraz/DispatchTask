var Classe = Class.create({
	initialize: function(name) {
		this.name  = name;
		this.uniqid = uniqid("classe",true);
		this.personList = new Array();
	},
	addPerson: function(p){
		this.personList.push(p);
	},
	toString: function() {
		return this.name;
	}
});