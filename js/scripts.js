// Business Logic for Places List
function PlacesList() {
  this.places = {};
  this.currentId = 0;
}

PlacesList.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

PlacesList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

PlacesList.prototype.findPlace = function(id) {
  if (this.places[id] !== undefined) {
    return this.places[id];
  }
  return false;
}

PlacesList.prototype.deletePlace = function(id) {
  if (this.places[id] === undefined) {
    return false;
  }
  delete this.places[id];
  return true;
};

// Business Logic for Places
function Place(cityName, countryName, date, landMarks, notes) {
  this.cityName = cityName;
  this.countryName = countryName;
  this.date = date;
  this.landMarks = landMarks;
  this.notes = notes;
}

Place.prototype.whereWhen = function() {
  return this.cityName + " " + this.countryName + " " + this.date;
};

//User Interface Logic
let placesList = new PlacesList();

function listPlaces(placesListToDisplay) {
  let placesDiv = document.querySelector("div#places");
  placesDiv.innerText =  null;
  const ul = document.createElement("ul");
  Object.keys(placesListToDisplay.places).forEach(function(key) {
    const place = placesListToDisplay.findPlace(key);
    const li = document.createElement("li");
    li.append(place.whereWhen());
    li.setAttribute("id", place.id);
    ul.append(li);
  });
  placesDiv.append(ul);
}

function displayPlacesDetails(event) {
  const place = placesList.findPlace(event.target.id);
  document.querySelector(".city-name").innerText = place.cityName;
  document.querySelector(".country-name").innerText = place.countryName;
  document.querySelector(".date").innerText = place.date;
  document.querySelector(".landmarks").innerText = place.landMarks;
  document.querySelector(".notes").innerText = place.notes;
  document.querySelector("button.delete").setAttribute("id", place.id);
  document.querySelector("div#places-details").removeAttribute("class");
}



function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedCityName = document.querySelector("input#new-city-name").value;
  const inputtedCountryName = document.querySelector("input#new-country-name").value;
  const inputtedDate = document.querySelector("input#new-date-visited").value;
  const inputtedLandmarks = document.querySelector("input#new-landmarks").value.split(",");
  const inputtedNotes= document.querySelector("input#new-notes").value;
  let newPlace = new Place(inputtedCityName, inputtedCountryName, inputtedDate, inputtedLandmarks, inputtedNotes);
  console.log(newPlace);
  console.log(inputtedLandmarks);
  placesList.addPlace(newPlace);
  listPlaces(placesList);
  document.querySelector("input#new-city-name").value = null;
  document.querySelector("input#new-country-name").value = null;
  document.querySelector("input#new-date-visited").value = null;
  document.querySelector("input#new-landmarks").value = null;
  document.querySelector("input#new-notes").value = null;
  
}

window.addEventListener("load", function() {
  document.querySelector("form#new-place").addEventListener("submit", handleFormSubmission);
  document.querySelector("div#places").addEventListener("click", displayPlacesDetails);
});
