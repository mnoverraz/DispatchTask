function Task(name, id){
	this.name = name;
	if(id == null){
		this.uniqid = uniqid("task",true);
	}else{
		this.uniqid = id;
	}
}

Task.prototype.toString = function(){
	return this.name;
}

Task.prototype.stringify = function(){
	return JSON.stringify(this);
}