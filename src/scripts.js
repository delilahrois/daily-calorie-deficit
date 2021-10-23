// Imports

import UserRepository from './UserRepository';
import HydroRepository from './HydroRepository';
import SleepRepository from './SleepRepository';
import User from '../src/User';
import { fetchUsers, fetchHydration, fetchSleep, fetchActivityData }
  from './fetch';
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
const dayBtn = document.querySelector('#dayBtn')
const weekBtn = document.querySelector('#weekBtn')
const allTimeBtn = document.querySelector('#allTimeBtn')

// Functions

const pageLoad = () => {
  userFetch();
  hydroFetch();
  sleepFetch();
  // updateDom();
}

const userFetch = () => {
  fetchUsers().then((users) => {
    generateUsers(users.userData);
    generateUserInfo();
  })
}

const hydroFetch = () => {
  fetchHydration().then((data) => {
    hydroRepo = new HydroRepository(data.hydrationData);
  generateHydro()
})
}

const sleepFetch = () => {
  fetchSleep().then((data) => {
    sleepRepo = new SleepRepository(data.sleepData);
    generateSleepyTime()
  })
}

const generateUsers = (users) => {
  userList = new UserRepository(users);
  userList.createEachUser();
  // console.log(userList)
}

const generateUserInfo = () => {
  updateFirstName();
  fillUserCard();
  updateStepCard();
  // updateStairsCard();
}

const updateDom = () => {
  generateUserInfo();
  updateHydroCard();
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

const generateHydro = (data) => {
  // hydroRepo = new HydroRepository(data.hydrationData);
  console.log(hydroRepo, 'hydro repo')
  updateHydroCard()
}

const generateSleepyTime = (data) => {
  // sleepRepo = new SleepRepository(data);
  // console.log(sleepRepo, 'sleep repo')
  updateSleepCard()
}

const updateHydroCard = () => {
  hydrationMessage.innerText = `Today you drank ${hydroRepo.
    returnUserWaterPerDay(currentUser.id, today)} ounces of water.`;
}

const updateSleepCard = () => {
  sleepMessage.innerText = `Last night you slept ${sleepRepo.
    returnByDate(currentUser.id, today, 'hoursSlept')} hours.
    Your average sleep quality score was ${sleepRepo.
    returnByDate(currentUser.id, today, 'sleepQuality')}`;
}

const updateHydroCardWeek = () => {
  let result = hydroRepo.returnUserWaterThisWeek(currentUser.id, today)
  hydrationMessage.innerText = `Over the last week, you drank ${result} ounces`
  // console.log(hydroRepo.returnUserWaterThisWeek(currentUser.id, today))
}

const updateDomDay = () => {

}

// const updateDomWeek = () => {
//  hydroRepo.returnUserWaterThisWeek(currentUser.id, today)
// }

const updateDomAllTime = () => {

}

// const updateStairsCard = () => {
//   // stairsMessage.innerText = `You've climbed ${} flights of stairs today.`;
// }

// Event Listeners
window.addEventListener('load', pageLoad);
weekBtn.addEventListener('click', updateHydroCardWeek)
dayBtn.addEventListener('click', testFunction)

function testFunction() {
  console.log('hey!')
}
