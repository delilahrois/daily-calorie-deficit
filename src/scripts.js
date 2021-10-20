// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import userData from './data/users';
import UserRepository from './UserRepository';
import User from '../src/User';
import fetchUsers from '../src/fetch';
// console.log(fetchUsers.userData)

let userList


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');
// console.log('Heeeey')
window.addEventListener('load', pageLoad)

// An example of how you tell webpack to use a JS file

const example = 'Hey'

//Query Selectors
const firstName = document.querySelector('#userName')
const profileName = document.querySelector('#profileName')
const emailAddress = document.querySelector('#emailAddress')
const stepGoal = document.querySelector('#stepGoal');
const friendsList = document.querySelector('#friendsList')
const stepGoalComparisons = document.querySelector('#stepGoalComparisons')
// const infoCard = document.querySelector()


//Event Listeners


//functions

function pageLoad(){
  generateUsers();
  updateFirstName();
  fillUserCard();
  updateStepCard();
}

function generateUsers() {
  userList = new UserRepository(fetchUsers);
  console.log('user list', userList)
  userList.createEachUser();
}

function updateFirstName() {
  firstName.innerText = `Hello, ${userList.findUser(43).returnFirstName()}`
}

function fillUserCard() {
  profileName.innerText = `${userList.createdUsers[42].name}`
  emailAddress.innerText = `${userList.createdUsers[42].email}`
  stepGoal.innerText = `Your daily step goal is ${userList.createdUsers[42].dailyStepGoal}`
  friendsList.innerText = `${userList.createdUsers[42].friends}`
}

function updateStepCard(){
  stepGoalComparisons.innerText = `Your step goal is ${userList.createdUsers[42].dailyStepGoal} - compared to the average step goal of all users: ${userList.calculateAverage()}`
}

// need to write a function that updates the user infoCard section with
//relevant user info: Name, Email, strideLength, Daily Step Goal, and amount of friends?
// make sure we have relevant query selectors for the user info card section
// this function should run on page load, so it can be slapped into the pageLoad function
