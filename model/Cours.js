function Cours(name, id) {
	this.classType = "cours";
	this.name  = name;
	if(id == null){
		this.uniqid = uniqid("task",true);
	}else{
		this.uniqid = id;
	}
}

Cours.prototype.toString = function() {
	return this.name;
}