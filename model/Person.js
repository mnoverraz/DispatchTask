function Person(firstname, lastname, id){
	this.firstname  = firstname;
	this.lastname = lastname;
	if(id == null){
		this.uniqid = uniqid("person",true);
	}else{
		this.uniqid = id;
	}
}

Person.prototype.toString = function() {
	return this.firstname;
}

Person.prototype.stringify = function(){
	return JSON.stringify(this);
}