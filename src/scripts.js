// Imports
import UserRepository from './UserRepository';
import HydroRepository from './HydroRepository';
import SleepRepository from './SleepRepository';
import User from '../src/User';
import fetchUsers from '../src/fetch';
import fetchHydration from '../src/fetch';
import fetchSleep from '../src/fetch';
import fetchActivityData from '../src/fetch';

import './css/styles.css';
import './images/turing-logo.png';

// Global Variables
let userList;
let currentUser;
let hydroRepo;
let sleepRepo;
const today = '2020/01/22';


//Query Selectors
const firstName = document.querySelector('#userName');
const profileName = document.querySelector('#profileName');
const emailAddress = document.querySelector('#emailAddress');
const stepGoal = document.querySelector('#stepGoal');
const friendsList = document.querySelector('#friendsList');
const stepGoalComparisons = document.querySelector('#stepGoalMessage');
const hydrationMessage = document.querySelector('#hydrationMessage');
const sleepMessage = document.querySelector('#sleepMessage');
const stairsMessage = document.querySelector('#stairsMessage');


// Functions

const pageLoad = () => {
  userFetch();
  hydroFetch(); 
  sleepFetch();
  generateUserInfo();
}


const userFetch = () => {
  fetchUsers().then((users) => {
    generateUsers(users.userData);
  })
  // fetchHydration().then((data) => {
  //   generateHydro(data);
  //   console.log(hydroRepo)
  // })
  // fetchSleep().then((data) => {
  //   generateSleepyTime(data.sleepData);
  //   generateUserInfo();
  // })
}

const hydroFetch = () => {
  fetchHydration().then((data) => {
    generateHydro(data);
    console.log(hydroRepo)
  })
}

const sleepFetch = () => {
  fetchSleep().then((data) => {
    generateSleepyTime(data.sleepData);
  })
}

const generateUsers = (users) => {
  userList = new UserRepository(users);
  userList.createEachUser();
}

const generateUserInfo = () => {
  updateFirstName();
  fillUserCard();
  updateStepCard();
  updateHydroCard();
}

const generateHydro = (data) => {
  hydroRepo = new HydroRepository(data);
}

const generateSleepyTime = (data) => {
  sleepRepo = new SleepRepository(data);
}

const updateFirstName = () => {
  currentUser = userList.findUser(userList.returnRandomUser());
  firstName.innerText = `Hello, ${currentUser.returnFirstName()}`;
}

const fillUserCard = () => {
  profileName.innerText = `${currentUser.name}`;
  emailAddress.innerText = `${currentUser.email}`;
  stepGoal.innerText = `Your daily step goal is
  ${currentUser.dailyStepGoal}`;
  friendsList.innerText = `${currentUser.friends}`
}

const updateStepCard = () => {
  stepGoalComparisons.innerText = `Your step goal is
  ${currentUser.dailyStepGoal}- compared to the average step goal of all users:
   ${userList.calculateAverage()}`;
}

const updateHydroCard = () => {
  hydrationMessage.innerText = `Today you drank ${hydroRepo.
    returnUserWaterPerDay(currentUser.id, today)} ounces of water.`;
}

const updateSleepCard = () => {
  sleepMessage.innerText = ``;
}

const updateStairsCard = () => {
  stairsMessage.innerText = ``;
}

// Event Listeners
window.addEventListener('load', pageLoad);
