// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import userData from './data/users';
import UserRepository from './UserRepository';
import User from '../src/User';
console.log(userData)

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
// const infoCard = document.querySelector()


//Event Listeners


//functions

function pageLoad(){
  generateUsers();
  updateFirstName();
}

function generateUsers() {
  userList = new UserRepository(userData);
  userList.createEachUser();
}

function updateFirstName() {
  firstName.innerText = `Hello, ${userList.findUser(43).returnFirstName()}`
}

// need to write a function that updates the user infoCard section with
//relevant user info: Name, Email, strideLength, Daily Step Goal, and amount of friends?
// make sure we have relevant query selectors for the user info card section
// this function should run on page load, so it can be slapped into the pageLoad function
