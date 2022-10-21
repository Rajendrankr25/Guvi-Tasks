let request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);

    function tagWithClass(tgname, attrname, attrvalue) {
        var ele = document.createElement(tgname);
        ele.setAttribute(attrname, attrvalue);
        return ele;
    }
    function tagWithIdClass(tgname, attrname, attrvalue, attrname1, attrvalue1) {
        var ele = document.createElement(tgname);
        ele.setAttribute(attrname, attrvalue);
        ele.setAttribute(attrname1, attrvalue1);
        return ele;
    }
    function tag(tgname) {
        var ele = document.createElement(tgname);
        return ele;
    }
    function tagWithClassContent(tgname, attrname, attrvalue, content) {
        var ele = document.createElement(tgname);
        ele.setAttribute(attrname, attrvalue);
        ele.innerHTML = content;
        return ele;
    }

    var div1 = tagWithClass("div", "class", "container");
    var div2 = tagWithClass("div", "class", "heading");
    var div3 = tagWithClass("div", "class", "table-responsive");
    var div4 = tagWithIdClass("div", "id", "buttons", "class", "d-flex justify-content-center");
    div1.append(div2, div3, div4);
    var h1 = tagWithClassContent("h1", "id", "title", "Pagination Task");
    var p1 = tagWithClassContent("p", "id", "description", "This is Pagination Task");
    div2.append(h1, p1);
    var table = tagWithClass("table", "class", "table table-bordered");
    div3.append(table);
    var thd = tagWithClass("thead", "class", "thead-dark");
    var tbd = tag("tbody");
    table.append(thd, tbd);
    var tr1 = tag("tr");
    thd.append(tr1);
    var th1 = tagWithClassContent("th", "scope", "col", "Id");
    var th2 = tagWithClassContent("th", "scope", "col", "Name");
    var th3 = tagWithClassContent("th", "scope", "col", "Email");
    tr1.append(th1, th2, th3);

    var temp=[];
    for(var i=0;i<10;i++){
        var button = document.createElement("button");
        button.setAttribute("id","button");
        button.innerHTML=i+1;
        button.addEventListener("click",print);
        div4.append(button);
        temp.push(document.getElementById("button").value);
    }
    //temp.forEach(print(x));
    function print(temp){
        
        for (var i = (temp-1)*10; i < (10*temp); i++) {
            let tr2 = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerHTML = res[i].id;
            let td2 = document.createElement("td");
            td2.innerHTML = res[i].name;
            let td3 = document.createElement("td");
            td3.innerHTML = res[i].email;
            tr2.append(td1, td2, td3);
            tbd.append(tr2);
        }
    }
    
    //console.log(x);
    
    



    document.body.append(div1);
}