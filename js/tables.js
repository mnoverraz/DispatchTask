var tableName = "table";
var table = document.getElementById(tableName);
var dates = [new Date(2012,01,01), new Date(2012,01,02), new Date(2012,01,03)];
var postes = ["Poste 1", "Poste 2", "Poste 3"];
var eleves = [["a","c","b"],["b","a","c"],["c","b","a"]];
var elevesList = ["a","b","c"];

function createTable(){
	createDatesHeader();
	createContent();
}

function createDatesHeader(){
	var thead = table.createTHead();
	var row = thead.insertRow(0);
	row.insertCell(0);
	for (var i = 0; i < dates.length; i++) {
		var cell = row.insertCell(-1);
		cell.innerHTML = dates[i].toLocaleDateString();
	};
}

function createContent(){
	var tbody = document.getElementById("tbody");
	for (var i = 0; i < postes.length; i++) {
		var row = tbody.insertRow(-1);
		var cell = row.insertCell(-1)
		cell.innerHTML = postes[i];
		for (var j = 0; j < dates.length; j++) {
			var cell = row.insertCell(-1)
			cell.innerHTML = eleves[i][j];
		}
	};
	
}

function getJsonOutput(){
	return JSON.stringify(new Array(dates,postes,elevesList,eleves));
}

function save(){
	(function () {
		var textFile = null;
		var makeTextFile = function (text) {
		var data = new Blob([text], {type: 'application/json'});

		if (textFile !== null) {
		  window.URL.revokeObjectURL(textFile);
		}

		textFile = window.URL.createObjectURL(data);

		return textFile;
		};


		var create = document.getElementById('saveLink');
		create.addEventListener('click', function () {
			var link = document.getElementById('saveLink');
			link.href = makeTextFile(getJsonOutput());
		}, false);
	})();
}









createTable();