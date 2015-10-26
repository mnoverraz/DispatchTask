var dragSrcEl = null;

function handleDragStart(e) {
  // Target (this) element is the source node.
  this.firstChild.style.opacity = '0.2';

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
  //alert("handleDragEnter");
  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  //this.classList.add('over');
  //alert("handleDragEnter");
}

function handleDragLeave(e) {
  //this.firstChild.style.opacity =   // this / e.target is previous target element.
  //alert("handleDragLeave");
}

function handleDrop(e) {
  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  dragSrcEl.firstChild.style.opacity = '1';
  this.firstChild.style.opacity = '1'

  return false;
}

function handleDragEnd(e) {
  
}

function dragActivation(){
	var dragNames = document.querySelectorAll('.drag');
	[].forEach.call(dragNames, function(name) {
		name.addEventListener('dragstart', handleDragStart, false);
	  	name.addEventListener('dragenter', handleDragEnter, false)
	  	name.addEventListener('dragover', handleDragOver, false);
	  	name.addEventListener('dragleave', handleDragLeave, false);
	  	name.addEventListener('drop', handleDrop, false);
	  	name.addEventListener('dragend', handleDragEnd, false);
	});
}

function activateDrag(node){
	node.addEventListener('dragstart', handleDragStart, false);
	node.addEventListener('dragenter', handleDragEnter, false)
	node.addEventListener('dragover', handleDragOver, false);
	node.addEventListener('dragleave', handleDragLeave, false);
	node.addEventListener('drop', handleDrop, false);
	node.addEventListener('dragend', handleDragEnd, false);
}

// Setup the dnd listeners.
var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);

/*
elt1 = document.createElement("div");
temp = document.createElement("span");
temp.classList.add("dragName");
temp.appendChild(document.createTextNode("Element > 1"));
elt1.appendChild(temp);
elt1.classList.add("drag");
elt1.setAttribute("draggable",true);
elt1.setAttribute("id","elt1");

elt2 = document.createElement("div");
temp2 = document.createElement("span");
temp2.classList.add("dragName");
temp2.appendChild(document.createTextNode("Element > 2"));
elt2.appendChild(temp2);
elt2.classList.add("drag");
elt2.setAttribute("draggable",true);
elt2.setAttribute("id","elt2");


document.body.appendChild(elt1);
document.body.appendChild(elt2);
dragActivation();
elt1
*/