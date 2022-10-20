// Restcountries using Fetch API;

var result = fetch("https://restcountries.com/v2/all")
.then((data)=>data.json())
.then((data1)=> {
    var div1 = document.createElement("div");
    div1.setAttribute("class","container");
    var div2 = document.createElement("div");
    div2.setAttribute("class","row");
    var h1 = document.createElement("h1");
    h1.innerHTML="Restcountries using Fetch API";
    div1.append(h1,div2);
    document.body.append(div1);
    for(var i=0;i<data1.length;i++){
        var div3 = document.createElement("div");
        div3.setAttribute("class","col-lg-4");
        div3.innerHTML=`<div class="smallbox">
        <div class="card">
        <img src="${data1[i].flag}" class="card-img-top" alt="flag" height="200px" width="100px">
        <div class="card-body">
          <h5 class="card-title">${data1[i].name}</h5>
          <span class="card-text">Capital: ${data1[i].capital}</span>
          <span class="card-text">Region: ${data1[i].region}</span>
          <span class="card-text">Latitude: </span>
          <span class="card-text">Longitude: </span>
          <span class="card-text">Country Code: ${data1[i].alpha3Code}</span>
          <br>
          <a href="#" class="btn btn-primary">Click for Weather</a>
        </div>
        </div>
      </div>`
      div2.append(div3);
    }
})
.catch((error)=>console.log(error));