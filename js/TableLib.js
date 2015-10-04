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
        element.appendChild(document.createTextNode(value.toString()));
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
    this.addElement(this.elements.header.lastChild, "th", null);
    data.forEach(function(value, index, array) {
        this.addElement(this.elements.header.lastChild, "th", value.toString());
    }, this);
    this.elements.x = data;
}

Table.prototype.fillY = function(data) {
    data.forEach(function(value, index, array) {
        var row = this.addRow(this.elements.body);
        this.addElement(row, "th", value);
    }, this);
    this.elements.y = data;
}

Table.prototype.fillXYBody = function(data, func) {
    var target = this.elements.body.firstChild;
    this.elements.y.forEach(function(yElt, index, array) {
        this.elements.x.forEach(function(xElt, index, array) {
            var value = model.getPersonByTaskSchedule(yElt, xElt);
            this.addElement(target, "td", value);
        }, this);
        target = target.nextSibling;
    }, this);
}

/*toto = new Table("totoid");
toto.addHeader();
toto.addFooter();
toto.fillXY(model.getScheduleList(), model.getTasks(), model.getWorkingList());
toto.addClass("table table-striped table-bordered table-responsive");
toto.attach(document.body);*/