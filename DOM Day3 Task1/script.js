//DOM Manipulation with Forms

function tagWithClass(tagname, attrname, attrvalue){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    return ele;
}
function tagWithContent(tagname,content){
    var ele=document.createElement(tagname);
    ele.innerHTML=content;
    return ele;
}
function tagWithClassContent(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function tagWithClassId(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function tagWithClassIdPlace(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    ele.setAttribute(attrname2,attrvalue2);
    return ele;
}
function tag(tagname){
    var ele=document.createElement(tagname);
    return ele;
}
function txtarea(){
    var ele=document.createElement("textarea");
    ele.setAttribute("id","address");
    ele.setAttribute("cols","70");
    ele.setAttribute("rows","2");
    ele.setAttribute("placeholder","enter your address here")
    return ele;
}

var div1 = tagWithClass("div","class","container");
var h1 = tagWithClassContent("h1","id","title","Form Submission");
var p1 = tagWithClassContent("p","id","description","DOM Manipulation with Forms");
var form = tagWithClass("form","id","form");
div1.append(h1, p1, form);
var lbl1 = tagWithClassContent("label","for","first-name","First Name :");
var br1 = tag("br");
var inp1 = tagWithClassIdPlace("input","type","text","id","first-name","placeholder","First Name");
var br2 = tag("br");
var br3 = tag("br");
var lbl2 = tagWithClassContent("label","for","last-name","Last Name :");
var br4 = tag("br");
var inp2 = tagWithClassIdPlace("input","type","text","id","last-name","placeholder","Last Name"); 
var br5 = tag("br");
var br6 = tag("br");
var lbl3 = tagWithClassContent("label","for","address","Address :");
var br7 = tag("br");
var addrs = txtarea();
var div2 = tagWithClass("div","class","form-group");
div2.append(addrs);
form.append(lbl1,br1,inp1,br2,br3,lbl2,br4,inp2,br5,br6,lbl3,br7,div2);



document.body.append(div1);

