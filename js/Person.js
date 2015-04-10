var Person = Class.create({
	initialize: function(firstname, lastname) {
		this.firstname  = firstname;
		this.lastname = lastname;
		this.uniqid = uniqid("person",true);
	},
	toString: function() {
		return this.firstname+" "+this.lastname;
	}
});