var Schedule = Class.create({
	initialize: function(begin, end, id) {
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
	},
	getDate: function(){
		return this.dateTimeFormat.format(this.begin);
	},
	equals: function(obj){
		return this.uniqid == obj.uniqid;
	},
	toString: function() {
		return this.getDate();
	},
	stringify: function(){
		return JSON.stringify(this);
	}
});