function trial(data) {
  var person4 = JSON.parse(data.target.responseText);
  //   console.log(person4);

  var person4Name = document.getElementById("person4Name");
  person4Name.innerHTML = person4.name;

  function planet(data) {
    let planet1 = JSON.parse(data.target.responseText);
    // console.log(planet1);
    var person4HomeWorld = document.getElementById("person4HomeWorld");
    person4HomeWorld.innerHTML = planet1.name;
  }

  var planetReq = new XMLHttpRequest();
  planetReq.addEventListener("load", planet);
  planetReq.open("GET", "https://swapi.co/api/planets/1/");
  planetReq.send();

  var person4HomeWorld = document.getElementById("person4HomeWorld");
  person4HomeWorld.innerHTML = person4.homeworld;
}
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", trial);
oReq.open("GET", "https://swapi.co/api/people/4");
oReq.send();

function problemTwo(data) {
  let person14 = JSON.parse(data.target.responseText);
  //   console.log(person14);

  var person14Name = document.getElementById("person14Name");
  person14Name.innerHTML = person14.name;

  function species(data) {
    let species1 = JSON.parse(data.target.responseText);
    // console.log(species1);
    var person14Species = document.getElementById("person14Species");
    person14Species.innerHTML = species1.name;
  }

  var speciesReq = new XMLHttpRequest();
  speciesReq.addEventListener("load", species);
  speciesReq.open("GET", "https://swapi.co/api/species/1/");
  speciesReq.send();
}

var newReq = new XMLHttpRequest();
newReq.addEventListener("load", problemTwo);
newReq.open("GET", "https://swapi.co/api/people/14");
newReq.send();

// function problem3(data) {
//   var films = JSON.parse(data.target.responseText);
//   //   console.log(films.results);
//   for (var i = 0; i < films.results.length; i++) {
//     var filmLi = document.createElement("li");
//     filmLi.className = "film";
//     filmList.appendChild(filmLi);
//     var filmVal = document.createElement("h2");

//     filmVal.innerHTML = films.results[i].title;
//     filmLi.appendChild(filmVal);
//     var planetHeader = document.createElement("h3");
//     planetHeader.innerHTML = "Planets:";
//     filmLi.appendChild(planetHeader);
//     var filmPlanets = document.createElement("ul");
//     filmPlanets.className = "filmPlanets";
//     filmLi.appendChild(filmPlanets);

// for (var j = 0; j < films.results[i].planets.length; j++) {
//   //   console.log(films.results[i].planets[j]);

//   function getPlanet(data) {
//     // console.log(planets2.name);
//     var planets2 = JSON.parse(data.target.responseText);
//     var planet = document.createElement("li");
//     planet.className = "planet";
//     planet.innerHTML = planets2.name;
//     filmPlanets.appendChild(planet);
//     // var planetName = document.createElement("h4");
//     // planetName.className = "planetName";
//     // planetName.innerHTML = planets2.name;
//     console.log(planets2.name);

//     // planet.appendChild(planetName);
//   }

//   var newPlanetReq = new XMLHttpRequest();
//   newPlanetReq.addEventListener("load", getPlanet);
//   newPlanetReq.open("GET", films.results[i].planets[j]);
//   newPlanetReq.send();
//     // }
//   }
// }

const request = (url, callback) => {
  const oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function(data) {
    const resData = JSON.parse(data.target.responseText);
    callback(resData);
  });
  oReq.open("GET", url);
  oReq.send();
};

request("https://swapi.co/api/films/", function(data) {
  console.log(data.results);
  data.results.forEach(movie => {
    // console.log(movie.title);
    let filmList = document.getElementById("filmList");
    let title = document.createElement("li");
    title.innerHTML = movie.title;
    filmList.appendChild(title);
    // console.log(movie.planets);
    movie.planets.forEach(planet => {
      request(planet, function(data) {
        console.log(data.name);
        let planetName = document.createElement("ul");
        planetName.innerHTML = data.name;
        title.appendChild(planetName);
      });
    });
  });
});

// let filmReq = new XMLHttpRequest();
// filmReq.addEventListener("load", problem3);
// filmReq.open("GET", "https://swapi.co/api/films/");
// filmReq.send();
