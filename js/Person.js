var Person = Class.create({
	initialize: function(firstname, lastname) {
		this.classType = "person";
		this.firstname  = firstname;
		this.lastname = lastname;
		this.uniqid = uniqid("person",true);
	},
	toString: function() {
		return this.firstname;
	},
	stringify: function(){
		return JSON.stringify(this);
	}
});