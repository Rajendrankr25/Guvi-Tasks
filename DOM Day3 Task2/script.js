//HML HTTP Request
let request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);
    //console.log(res);

    function tag(tgname) {
        var ele = document.createElement(tgname);
        return ele;
    }
    function tagWithClass(tgname, attrname, attrvalue) {
        var ele = document.createElement(tgname);
        ele.setAttribute(attrname, attrvalue);
        return ele;
    }
    function tagWithClassContent(tgname, attrname, attrvalue, content) {
        var ele = document.createElement(tgname);
        ele.setAttribute(attrname, attrvalue);
        ele.innerHTML = content;
        return ele;
    }
    function tagWithIdClass(tgname, attrname, attrvalue, attrname1, attrvalue1) {
        var ele = document.createElement(tgname);
        ele.setAttribute(attrname, attrvalue);
        ele.setAttribute(attrname1, attrvalue1);
        return ele;
    }
    function btn(tgname, content, event, funname) {
        var ele = document.createElement(tgname);
        ele.innerHTML = content;
        ele.addEventListener(event, funname);
        return ele;
    }
    var div1 = tagWithClass("div", "class", "container");
    var div2 = tagWithClass("div", "class", "heading");
    var div3 = tagWithClass("div", "class", "table-responsive");
    var div4 = tagWithIdClass("div","id", "buttons","class","d-flex justify-content-center");
    var btnf = btn("button","first","click",page1);
    var btnp = btn("button", "previous", "click", page1);
    var btn1 = btn("button", "1", "click", page1);
    var btn2 = btn("button", "2", "click", page2);
    var btn3 = btn("button", "3", "click", page3);
    var btn4 = btn("button", "4", "click", page4);
    var btn5 = btn("button", "5", "click", page5);
    var btn6 = btn("button", "6", "click", page6);
    var btn7 = btn("button", "7", "click", page7);
    var btn8 = btn("button", "8", "click", page8);
    var btn9 = btn("button", "9", "click", page9);
    var btn10 = btn("button", "10", "click", page10);
    var btnn = btn("button", "next", "click", page10);
    var btnl = btn("button","last","click",page10);
    div1.append(div2, div3, div4);
    div4.append(btnf, btnp, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btnn, btnl);
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

    // var currentPage = 0;
    // var maxPage = 10;
    // function pagep() {
    //     if (currentPage > 1) {
    //         changePage(currentPage - 1);
    //     }
    // }
    // function pagen() {
    //     if (currentPage < maxPage) {
    //         changePage(currentPage + 1);
    //     }
    // }
    function page1() {
        tbd.innerHTML = "";
        for (var i = 0; i < 10; i++) {
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
    page1();
    function page2() {
        tbd.innerHTML = "";
        for (var i = 10; i < 20; i++) {
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
    function page3() {
        tbd.innerHTML = "";
        for (var i = 20; i < 30; i++) {
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
    function page4() {
        tbd.innerHTML = "";
        for (var i = 30; i < 40; i++) {
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
    function page5() {
        tbd.innerHTML = "";
        for (var i = 40; i < 50; i++) {
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
    function page6() {
        tbd.innerHTML = "";
        for (var i = 50; i < 60; i++) {
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
    function page7() {
        tbd.innerHTML = "";
        for (var i = 60; i < 70; i++) {
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
    function page8() {
        tbd.innerHTML = "";
        for (var i = 70; i < 80; i++) {
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
    function page9() {
        tbd.innerHTML = "";
        for (var i = 80; i < 90; i++) {
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
    function page10() {
        tbd.innerHTML = "";
        for (var i = 90; i < 100; i++) {
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

    document.body.append(div1);
}

