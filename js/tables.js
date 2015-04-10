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
	return JSON.stringify(new Array(dates,postes,elevesList,eleves, new Person("Mathieu","Noverraz")));
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

/*function handleFileSelect(evt) {
	evt.stopPropagation();
	evt.preventDefault();

	var files = evt.dataTransfer.files; // FileList object.

	// files is a FileList of File objects. List some properties.
	var output = [];
	for (var i = 0, f; f = files[i]; i++) {
		output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
			f.size, ' bytes, last modified: ',
	    	f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
	    '</li>');
	}
	document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}*/


function handleFileSelect(evt) {
	console.log('handleFileSelect');
	evt.stopPropagation();
	evt.preventDefault();

	files = evt.dataTransfer.files; // FileList object.
	theFile = files[0];

	reader = new FileReader();
	reader.onload = function(e) {
		alert(e.target.result);
	}
	reader.readAsText(theFile);

      // Closure to capture the file information.
      /*reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('drop_zone').insertBefore(span, null);
        };
      })(f);*/

      // Read in the image file as a data URL.
      //reader.readAsDataURL(f);

}

function handleDragOver(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

function nbOccurance(row, val){
	var occ = 0;
	for (var i = 1; i <= row.length-1; i++) {
		if(row[i].innerHTML == val){
			occ++;
		}
	};
	return occ;
}




// Setup the dnd listeners.
var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);

createTable();