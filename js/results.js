'use strict';
//this JS file will drive landing page and results page
//we will deal with the form on landing page, and store  local info
//retreive local storage, and then send that on the reslts page

//TODO:************ handle info from form submit
//TODO: save user info to local storage
//TODO: landing page load signifies either new user or return user
// there is logic in bus mall app re knowing if something is in local storage or not yet

//we will need to access some of the things from app.js here 
// we're using the links constructor here to show results and links

var transferInfoToResultsPage = document.getElementById('user-input');//Maybe submit-user
transferInfoToResultsPage.addEventListener('submit', handleDataFromForm);//Is submit a valid action to listen to?
// TODO: create an object or object contructor for userProfile

function User(name, age, protests, travel, diningOut){
  this.name = name;
  this.age = age;
  this.protests = protests;
  this.travel = travel;
  this.diningOut = diningOut;
}

function handleDataFromForm (event){
  event.preventDefault();
  var playerName = event.target.name.value;
  var playerAge = event.target.age.value;
  var protests = event.target.interest1.checked;//later, if protests === true, give links on protests
  var travel = event.target.interest2.checked;
  var diningOut = event.target.interest3.checked;//nick helped us find this https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
  console.log('***', protests, travel, diningOut);
}

// For local storage:
// Stringify and store:
// ‘storedProfile’   (check in with TA re use of camel case vs hyphenated)
// Get from storage:
var getProfileFromStorage = localStorage.getItem(‘storedProfile’)
var profileFromStorage = JSON.parse(getProfileFromStorage)


var userProfileStringified = JSON.stringify(userProfile)
localStorage.setItem(‘storedProfile’, userProfileStringified)

