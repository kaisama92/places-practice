# Places You've Been

## Technologies Used

* _HTML_
* _CSS_
* JavaScript

## Description

_This webpage creates a list of Places a user visited and let's user interact with the list._


## Setup/Installation Requirements

* _You need a web browser_


## Known Bugs

* _No known bugs_


## License

_If you run into a problem or in case you have any ideas or concerns please contact me._

Copyright (c) _01/23/2023_ _Asia Kaplanyan and Kai Clausen_

## Tests
Describe: Place()

Test: "It should create an object."
Code: 
new place("cityName", "countryName", "date", "landMarks", "notes");
Expected Output: undefined - Creates an object behind the scenes

Describe: Place.whereWhen()

Test: "It should return a String consisting of a city name, country name and a date."
Code: 
portland.whereWhen()
Expected Output: Portland United States 01/23/2023

Describe: PlacesList()

Test: "It should create an empty object"
Code: 
new PlacesList()
Expected Output: undefined

Describe: assignId()

Test: "It should assignId to a current object"
Code: 
PlacesList.assignId() 
Expected Output: returns next Id


Describe: PlacesList.addPlace()

Test: "It should add a place to the PlacesList"
Code: 
placesList.addPlace(Seattle);
Expected Output: undefined

Describe: PlacesList.findPlace(id)

Test: "It should returned a place by id"
Code: 
PlacesList.findPlace(1);
Expected Output: Place {cityName: 'Seattle', countryName: 'United States', date: '12/12/2022', landmarks: Array(3), notes: "Great place, don't forget an umbrella", …}

Describe: PlacesList.deletePlace(id)

Test: "It should delete place with correspoding id from the list"
Code: 
PlacesList.deletePlace(1);
Expected Output: true

Describe:  listPlaces(placesListToDisplay)

Test: "It should display all places added by user as a list"
Code: 
listPlaces(placesList);
Expected Output: "* Portland United States 2020-05-05

Describe:  displayPlacesDetails()

Test: "It should display the details of on place if user clicks on it"
Code: 
document.querySelector("div#places").addEventListener("click", displayPlacesDetails);
Expected Output: 
Contact Details:
City Name: Portland
Country Name: United States
Date: 2020-05-05
Landmarks: Rose Garden, Moda Center
Notes: Bring a rainproof jacket.

Describe:  handleDelete()

Test: "It should delete the place from the list"
Code: 
document.querySelector("button.delete").addEventListener("click", handleDelete);
Expected Output: the list of all places but deleted is displayed