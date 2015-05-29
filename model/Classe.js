function Classe(name, id){
	this.name  = name;
	if(id == null){
		this.uniqid = uniqid("classe",true);
	}else{
		this.uniqid = id;
	}
	this.personList = new Array();
}

Classe.prototype.addPerson = function(p){
	this.personList.push(p);
}

Classe.prototype.toString = function(){
	return this.name;
}