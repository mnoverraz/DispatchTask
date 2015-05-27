var Task = Class.create({
	initialize: function(name, id) {
		this.name  = name;
		if(id == null){
			this.uniqid = uniqid("task",true);
		}else{
			this.uniqid = id;
		}
	},
	toString: function() {
		return this.name;
	},
	stringify: function(){
		return JSON.stringify(this);
	}
});