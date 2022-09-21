// Use rescountries API and display all countries flags in console;

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function() {
    var res=JSON.parse(request.response);
    console.log(res);

    for(let i=0; i<res.length; i++) {
        console.log("Country Name: " + res[i].name + ", Flag is:" + res[i].flag);
    }
}