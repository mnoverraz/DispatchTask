function Table(id) {
    if (typeof id === "string") {
        this.id = id;
    } else {
        this.id = "myTableId";
    }

    this.elements = {
        header: null,
        body: null,
        footer: null,
        x: null,
        y: null
    }
    this.table = this.createTable(this.id);
    this.hidecols = new Array();
}

Table.prototype.getTableHtmlElement = function(){
    return document.getElementById(this.id);
}

Table.prototype.createTable = function(id) {
    var table = document.createElement("table");
    table.setAttribute("id", id);
    this.elements.body = this.addElement(table, "tbody", null);
    return table;
}

Table.prototype.addHeader = function() {
    var header = this.table.createTHead();
    this.addRow(header);
    this.elements.header = header;
    return header;
}

Table.prototype.addFooter = function() {
    var footer = this.table.createTFoot();
    this.elements.footer = footer;
    return footer;
}

Table.prototype.addRow = function(target) {
    if (target instanceof HTMLElement) {
        var elt = target.insertRow();
        return elt;
    }
    return null;
}

Table.prototype.addElement = function(target, tagName, value) {
    var element = document.createElement(tagName);
    if (value != null || value != undefined) {
        if(value instanceof HTMLElement){
            element.appendChild(value);
        }else{
            element.appendChild(document.createTextNode(value.toString()));
        }
        
    }
    target.appendChild(element);
    return element;
}

Table.prototype.addClass = function(classNames) {
    var classes = classNames.split(" ");
    classes.forEach(function(cssClass, index, array) {
        this.table.classList.add(cssClass);
    }, this);

    return this.table;
}

Table.prototype.attach = function(target) {
    if (target instanceof HTMLElement) {
        return target.appendChild(this.table);
    } else {
        return null;
    }
}

Table.prototype.getId = function() {
    return this.id;
}

Table.prototype.fillXY = function(x, y, data, func) {
    this.fillX(x);
    this.fillY(y);
    this.fillXYBody(data, func);
}

Table.prototype.fillX = function(data) {
    var col = this.addElement(this.elements.header.lastChild, "th", null);
    col.classList.add("col0");
    data.forEach(function(value, index, array) {
        col = this.addElement(this.elements.header.lastChild, "th", value);
        col.classList.add("col"+(index+1));
    }, this);
    this.elements.x = data;
}

Table.prototype.fillY = function(data) {
    data.forEach(function(value, index, array) {
        var row = this.addRow(this.elements.body);
        var col = this.addElement(row, "th", value);
        col.classList.add("col0");
    }, this);
    this.elements.y = data;
}

Table.prototype.fillXYBody = function(data, func) {
    var target = this.elements.body.firstChild;
    this.elements.y.forEach(function(yElt, index, array) {
        this.elements.x.forEach(function(xElt, index, array) {
            var value = model.getPersonByTaskSchedule(yElt, xElt);
            var col = this.addElement(target, "td", value);
            col.classList.add("col"+(index+1));
        }, this);
        target = target.nextSibling;
    }, this);
}

/**
* Visualy hides columns
* @param Array columns the columns to hide. Starts at 0
* @return undefined
*/
Table.prototype.hideColumns = function(columns){
    columns.forEach(function(colNum, index, array){
        var elements = document.getElementsByClassName("col"+colNum);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
            this.hidecols.push(elements[i]);
        };
    }, this);
}

Table.prototype.showColumns = function(){
    for (var i = 0; i < this.hidecols.length; i++) {
        this.hidecols[i].style.display = "table-cell";
    };
    this.hidecols = null;

}

/**
* Add a new column to the table with content inside
* @param Array data the data content must be the same as the number of td to fill. The data[x] can be Objects.
* @return undefined
*/
Table.prototype.addColumn = function(data) {
    var col = this.addElement(this.elements.header.lastChild, "th", data[0]);
    col.classList.add("col" + this.elements.header.children[0].children.length);

    var nbrTr = this.elements.body.children.length;
    for (i = 0; i < nbrTr; i++) {
        var tr = this.elements.body.children[i];
        col = this.addElement(tr, "td", data[i + 1]);
        col.classList.add("col" + tr.children.length);
    }
}