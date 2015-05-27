var Person = Class.create({
	initialize: function(firstname, lastname, id) {
		this.firstname  = firstname;
		this.lastname = lastname;
		if(id == null){
			this.uniqid = uniqid("person",true);
		}else{
			this.uniqid = id;
		}
	},
	toString: function() {
		return this.firstname;
	},
	stringify: function(){
		return JSON.stringify(this);
	}
});