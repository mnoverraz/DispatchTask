var Classe = Class.create({
	initialize: function(name, id) {
		this.name  = name;
		if(id == null){
			this.uniqid = uniqid("classe",true);
		}else{
			this.uniqid = id;
		}
		this.personList = new Array();
	},
	addPerson: function(p){
		this.personList.push(p);
	},
	toString: function() {
		return this.name;
	}
});