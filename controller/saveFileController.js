function getJsonOutput(){
  return JSON.stringify(testModel);
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