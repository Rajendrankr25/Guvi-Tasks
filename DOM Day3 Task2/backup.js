//DOM Table
function table(tagname, attrname, attrvalue) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    return ele;
}
var tb = table("table", "class", "table");
var th = table("thead", "class", "thead-dark");
tb.append(th);

function trow(tagname) {
    var ele = document.createElement(tagname);
    return ele;
}
var tr = trow("tr");
th.append(tr);

function thead(tagname, attrname, attrvalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content;
    return ele;
}
var thd1 = thead("th", "scope", "col", "Id");
var thd2 = thead("th", "scope", "col", "Name");
var thd3 = thead("th", "scope", "col", "Email");
tr.append(thd1, thd2, thd3);

var tbd=trow("tbody");
tb.append(tbd);

function but(tgname, attrname, attrvalue, value) {
    var ele = document.createElement(tgname)
    ele.setAttribute(attrname, attrvalue)
    ele.innerHTML=value;
    return ele;
}

function data(){
    var res;
    for(var i=0;i<5;i++) {
        var tr=document.createElement("tr");
        var td=document.createElement("td");
        td.innerHTML="res[i].id"
    }
}

var b1=but("button","onclick","data","ClickMe");


document.body.append(tb, b1);

