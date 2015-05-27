//testData();
var tableName = "table";
var table = document.getElementById(tableName);





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

//createTable(testModel);