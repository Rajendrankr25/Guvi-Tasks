//DOM Manipulation with Forms
//Functions
function tagWithClass(tagname, attrname, attrvalue) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    return ele;
}
function tagWithContent(tagname, content) {
    var ele = document.createElement(tagname);
    ele.innerHTML = content;
    return ele;
}
function tagWithClassContent(tagname, attrname, attrvalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content;
    return ele;
}
function tagWithClassId(tagname, attrname, attrvalue, attrname1, attrvalue1) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1, attrvalue1);
    return ele;
}
function tagWithClassIdContent(tagname, attrname, attrvalue, attrname1, attrvalue1, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1, attrvalue1);
    ele.innerHTML = content;
    return ele;
}
function tagWithClassIdPlace(tagname, attrname, attrvalue, attrname1, attrvalue1, attrname2, attrvalue2) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1, attrvalue1);
    ele.setAttribute(attrname2, attrvalue2);
    return ele;
}
function tag(tagname) {
    var ele = document.createElement(tagname);
    return ele;
}
function txtArea(tagname, attrname, attrvalue, attrname1, attrvalue1, attrname2, attrvalue2, attrname3, attrvalue3) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1, attrvalue1);
    ele.setAttribute(attrname2, attrvalue2);
    ele.setAttribute(attrname3, attrvalue3);
    return ele;
}

//Form contents;
var div = tagWithClass("div", "class", "box");
var div1 = tagWithClass("div", "class", "container");
var div2 = tagWithClass("div", "class", "row");
var div3 = tagWithClass("div", "class", "col-md-3");
var div4 = tagWithClass("div", "class", "col-md-9");
var h1 = tagWithClassContent("h1", "id", "title", "Form Submission");
var p1 = tagWithClassContent("p", "id", "description", "DOM Manipulation with Forms");
var form = tagWithClassId("form", "class","survey-form","id", "survey-form");
form.setAttribute("onsubmit", '');
div.append(div1);
div1.append(div2);
div2.append(div3, div4);
div3.append(h1, p1, form);
var lbl1 = tagWithClassContent("label", "for", "first-name", "First Name :");
var br1 = tag("br");
var inp1 = tagWithClassIdPlace("input", "type", "text", "id", "first-name", "placeholder", "First Name");
inp1.setAttribute("name", "first-name");
var br2 = tag("br");
var br3 = tag("br");
var lbl2 = tagWithClassContent("label", "for", "last-name", "Last Name :");
var br4 = tag("br");
var inp2 = tagWithClassIdPlace("input", "type", "text", "id", "last-name", "placeholder", "Last Name");
var br5 = tag("br");
var br6 = tag("br");
var lbl3 = tagWithClassContent("label", "for", "address", "Address :");
var br7 = tag("br");
var addrs = txtArea("textarea", "id", "address", "cols", "30", "rows", "2", "placeholder", "Enter your address here");
var divf = tagWithClass("div", "class", "form-group");
divf.append(addrs);
var lbl4 = tagWithClassContent("label", "for", "pincode", "Pincode :");
var br8 = tag("br");
var inp3 = txtArea("textarea", "id", "pincode", "cols", "30", "rows", "1", "placeholder", ".e.g. 600000");
var br9 = tag("br");
var br10 = tag("br");
var lbl5 = tagWithClassContent("label", "for", "gender", "Gender :");
var br11 = tag("br");
var inp4 = tagWithClassIdPlace("input", "type", "radio", "name", "gender", "id", "male");
inp4.setAttribute("value", "Male");
var lbl6 = tagWithClassContent("label", "for", "male", "&nbspMale&nbsp");
var inp5 = tagWithClassIdPlace("input", "type", "radio", "name", "gender", "id", "female");
inp5.setAttribute("value", "Female");
var lbl7 = tagWithClassContent("label", "for", "female", "&nbspFemale&nbsp");
var br12 = tag("br");
var br13 = tag("br");
var lbl8 = tagWithClassContent("label", "for", "food", "Choice of Food :");
var sm1 = tagWithContent("small", " (must choose atleast 2 out of 5)");
var br14 = tag("br");
var inp6 = tagWithClassIdPlace("input", "type", "checkbox", "name", "food", "id", "indian");
inp6.setAttribute("value", "indian");
var lbl9 = tagWithClassContent("label", "for", "indian", "&nbspIndian");
var br15 = tag("br");
var inp7 = tagWithClassIdPlace("input", "type", "checkbox", "name", "food", "id", "italian");
inp7.setAttribute("value", "italian");
var lbl10 = tagWithClassContent("label", "for", "italian", "&nbspItalian");
var br16 = tag("br");
var inp8 = tagWithClassIdPlace("input", "type", "checkbox", "name", "food", "id", "american");
inp8.setAttribute("value", "american");
var lbl11 = tagWithClassContent("label", "for", "american", "&nbspAmerican");
var br17 = tag("br");
var inp9 = tagWithClassIdPlace("input", "type", "checkbox", "name", "food", "id", "arabian");
inp9.setAttribute("value", "arabian");
var lbl12 = tagWithClassContent("label", "for", "arabian", "&nbspArabian");
var br18 = tag("br");
var inp10 = tagWithClassIdPlace("input", "type", "checkbox", "name", "food", "id", "chinese");
inp10.setAttribute("value", "chinese");
var lbl13 = tagWithClassContent("label", "for", "chinese", "&nbspChinese");
var br19 = tag("br");
var br20 = tag("br");
var lbl14 = tagWithClassContent("label", "for", "state", "State :");
var br21 = tag("br");
var inp11 = tagWithClassIdPlace("input", "type", "text", "id", "state", "placeholder", ".e.g. Tamil Nadu");
var br22 = tag("br");
var br23 = tag("br");
var lbl15 = tagWithClassContent("label", "for", "country", "Country :");
var br24 = tag("br");
var inp12 = tagWithClassIdPlace("input", "type", "text", "id", "country", "placeholder", ".e.g. India");
var br25 = tag("br");
var br26 = tag("br");
var btn1 = tagWithClassIdContent("button", "class", "btn btn-primary", "id", "submit", "Submit");
btn1.addEventListener("click", dataRetrive);
var br27 = tag("br");
var br28 = tag("br");

form.append(lbl1, br1, inp1, br2, br3, lbl2, br4, inp2, br5, br6, lbl3, br7, divf, lbl4, br8, inp3, br9, br10, lbl5, br11, inp4, lbl6, inp5, lbl7
    , br12, br13, lbl8, sm1, br14, inp6, lbl9, br15, inp7, lbl10, br16, inp8, lbl11, br17, inp9, lbl12, br18, inp10, lbl13,
    br19, br20, lbl14, br21, inp11, br22, br23, lbl15, br24, inp12, br25, br26, btn1, br27, br28);

//Table contents;
var h2 = tagWithClassContent("h1", "id", "title", "Temproary Database");
var table = tagWithClass("table", "class", "table");
div4.append(h2, table);
var thead = tagWithClass("thead", "class", "thead-dark");
var tbody = tag("tbody");
table.append(thead, tbody);
var thd1 = tagWithClassContent("th", "scope", "col", "First Name");
var thd2 = tagWithClassContent("th", "scope", "col", "Last Name");
var thd3 = tagWithClassContent("th", "scope", "col", "Address");
var thd4 = tagWithClassContent("th", "scope", "col", "Pincode");
var thd5 = tagWithClassContent("th", "scope", "col", "Gender");
var thd6 = tagWithClassContent("th", "scope", "col", "Food");
var thd7 = tagWithClassContent("th", "scope", "col", "State");
var thd8 = tagWithClassContent("th", "scope", "col", "Country");
thead.append(thd1, thd2, thd3, thd4, thd5, thd6, thd7, thd8);
document.body.append(div);

//Gender Choose Function;
var ml, fml;
function genderChoose(ml, fml) {
    if (male.checked) {
        let ml = document.getElementById("male").value;
        return ml;
    } else if (female.checked) {
        let fml = document.getElementById("female").value;
        return fml;
    } else {
        alert("Choose Gender");
    }
}

//Food Choose Function;
var temp = [];
var food;
function foodChoose(food) {
    let fd = document.getElementsByTagName("checkbox").checked;
    temp.push(fd);
    if (temp.length >= 2) {
        food = [...temp];
        return food;
    } else {
        alert("Must choose atleast 2 food choices");
    }
}

//Function for Appending to Table;
function dataRetrive(event) {
    event.preventDefault();
    
    var fn = document.getElementById("first-name").value;
    var ln = document.getElementById("last-name").value;
    var adrs = document.getElementById("address").value;;
    var pin = document.getElementById("pincode").value;
    var gndr = genderChoose(ml, fml);
    var cfood = foodChoose(food);
    var ste = document.getElementById("state").value;
    var cntry = document.getElementById("country").value;
    console.log(`First Name: ${fn}, Last Name: ${ln}, Address: ${adrs}, Pincode: ${pin}, Gender: ${gndr}, Choice of Food: ${cfood}, State: ${ste}, Country: ${cntry}`);
//Creating table data;
    var trow = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = fn;
    var td2 = document.createElement("td");
    td2.innerHTML = ln;
    var td3 = document.createElement("td");
    td3.innerHTML = adrs;
    var td4 = document.createElement("td");
    td4.innerHTML = pin;
    var td5 = document.createElement("td");
    td5.innerHTML = gndr;
    var td6 = document.createElement("td");
    td6.innerHTML = cfood;
    var td7 = document.createElement("td");
    td7.innerHTML = ste;
    var td8 = document.createElement("td");
    td8.innerHTML = cntry;
    trow.append(td1, td2, td3, td4, td5, td6, td7, td8);
    tbody.append(trow);
    document.getElementById("survey-form").reset();
}
