var Schedule = Class.create({
	initialize: function(begin, end) {
		if(this.checkSameDay(begin,end)){
			this.begin = begin;
			this.end = end;
			this.uniqid = uniqid("person",true);
		}else{
			alert("not same day error");
		}
	},
	checkSameDay: function(begin, end){
		return begin.toDateString() === end.toDateString();
	},
	toString: function() {
		return this.firstname+" "+this.lastname;
	}
});