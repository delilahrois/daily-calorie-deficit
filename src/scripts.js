// Imports
import userData from './data/users';
import UserRepository from './UserRepository';
import HydroRepository from './HydroRepository';
import User from '../src/User';
import fetchUsers from '../src/fetch';
import fetchHydration from '../src/fetch';
import fetchSleep from '../src/fetch';
import fetchActivityData from '../src/fetch';

import './css/styles.css';
import './images/turing-logo.png'

// Global Variables
let userList;
let currentUser;


//Query Selectors
const firstName = document.querySelector('#userName')
const profileName = document.querySelector('#profileName')
const emailAddress = document.querySelector('#emailAddress')
const stepGoal = document.querySelector('#stepGoal');
const friendsList = document.querySelector('#friendsList')
const stepGoalComparisons = document.querySelector('#stepGoalComparisons')
// const infoCard = document.querySelector()


// Event Listeners
window.addEventListener('load', getFetch);

// Functions

function pageLoad(users){
  generateUsers(users);
  updateFirstName();
  fillUserCard();
  updateStepCard();
}

function getFetch() {
  fetchUsers().then((users) => {
    console.log('users', users)
    pageLoad(users.userData)
  })
}


function generateUsers(users) {
  userList = new UserRepository(users);
  userList.createEachUser();
  console.log('user list', userList)
}

function updateFirstName() {
  currentUser = userList.findUser(userList.returnRandomUser());
  firstName.innerText = `Hello, ${currentUser.returnFirstName()}`
}

function fillUserCard() {
  profileName.innerText = `${currentUser.name}`;
  emailAddress.innerText = `${currentUser.email}`;
  stepGoal.innerText = `Your daily step goal is
  ${currentUser.dailyStepGoal}`;
  friendsList.innerText = `${currentUser.friends}`
}

function updateStepCard() {
  stepGoalComparisons.innerText = `Your step goal is
  ${currentUser.dailyStepGoal}- compared to the average step goal of all users:
   ${userList.calculateAverage()}`;
}

//creating a new class with its own methods to calculate avg fl oz
// consumed per day, all time, by specific day or per week.
