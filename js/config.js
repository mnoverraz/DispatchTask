var config = {
	appName: 'Dispatch Task',
	author: {
		name: 'Mathieu Noverraz',
		email: 'mathieu.noverraz@gmail.com'
	},
	defaultLanguage: 'fr',
	loadLang: function(){
		var head= document.getElementsByTagName('head')[0];
		var script= document.createElement('script');
		script.type= 'text/javascript';
		script.src= 'i18n/'+this.defaultLanguage+'.js';
		head.appendChild(script);
	}
	
}
config.loadLang();
