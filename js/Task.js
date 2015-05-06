var Task = Class.create({
	initialize: function(name) {
		this.name  = name;
		this.uniqid = uniqid("task",true);
	},
	toString: function() {
		return this.name;
	},
	stringify: function(){
		return JSON.stringify(this);
	}
});