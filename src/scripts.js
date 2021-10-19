// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import userData from './data/users';
import UserRepository from './UserRepository';
import User from '../src/User';




// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');
console.log('Heeeey')
// window.addEventListener('load', pageLoad)

// An example of how you tell webpack to use a JS file

const example = 'Hey'

//Query Selectors
const firstName = document.querySelector('#userName')


//Event Listeners


//functions

function pageLoad(){
  generateUsers();
  updateFirstName();
}

function generateUsers() {
  let userList = new UserRepository(userData);
  userList.createEachUser();
}

function updateFirstName() {
  firstName.innerText = `Hello, ${userList.findUser(43)}`
}
