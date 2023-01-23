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
  this.landmarks = landMarks;
  this.notes = notes;
}

Place.prototype.whereWhen = function() {
  return this.cityName + " " + this.countryName + " " + this.date;
};

//User Interface Logic
let PlacesList = new PlacesList();

function handleFormSubmission(event) {
  event.preseventDefault();
  const inputtedCityName = document.querySelector("input#new-city-name").value;
  const inputtedCountryName = document.querySelector("input#new-country-name").value;
  const inputtedDate = document.querySelector("input#new-date-visited").value;
  const inputtedLandmarks = document.querySelector("input#new-landmarks").value;
  const inputtedNotes= document.querySelector("input#new-notes").value;
  let newPlace = new Place(inputtedCityName, inputtedCountryName, inputtedDate, inputtedLandmarks, inputtedNotes);
  
}