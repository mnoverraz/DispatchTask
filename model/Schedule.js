function Schedule(begin,end, id){
	if(begin.toDateString() === end.toDateString()){
		this.begin = begin;
		this.end = end;
		this.dateOptions = { weekday: 'long', year: '2-digit', month: '2-digit', day: '2-digit', hour12: false };
		this.dateTimeFormat = new Intl.DateTimeFormat('fr-CH', this.dateOptions);
		if(id == null){
			this.uniqid = uniqid("schedule",true);
		}else{
			this.uniqid = id;
		}
	}else{
		alert("not same day error");
	}
}

Schedule.prototype.getDate = function(){
	return this.begin;
}

Schedule.prototype.equals = function(){
	return this.uniqid == obj.uniqid;
}

Schedule.prototype.toString = function(){
	return this.dateTimeFormat.format(this.begin);
}

Schedule.prototype.stringify = function(){
	return JSON.stringify(this);
}