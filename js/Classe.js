var Classe = Class.create({
	initialize: function(name) {
		this.name  = name;
		this.uniqid = uniqid("classe",true);
	},
	toString: function() {
		return this.name;
	}
});