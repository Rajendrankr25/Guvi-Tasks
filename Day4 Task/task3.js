// Use the restcountries API and print all countries name, region, sub region and populations

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function() {
    var res=JSON.parse(request.response);
    console.log(res);

    for(let i=0; i<res.length; i++) {
        console.log("Country Name : " + res[i].name + ", Region : " + res[i].region + ", Sub Region : " + res[i].subregion + ", Population : " + res[i].population);
    }
}