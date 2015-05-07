function getJsonOutput(){
  return JSON.stringify(cours);
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
}

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}