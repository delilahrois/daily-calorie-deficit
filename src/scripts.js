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
const headerMessage = document.querySelector('#headerMessage')

// Functions

const pageLoad = () => {
  userFetch();
  hydroFetch();
  sleepFetch();
  updateHeaderDate();
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
  updateDomDay();
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
  updateHydroCardDay()
}

const generateSleepyTime = (data) => {
  // sleepRepo = new SleepRepository(data);
  // console.log(sleepRepo, 'sleep repo')
  updateSleepCardDay()
}

const updateHydroCardDay = () => {
  hydrationMessage.innerHTML = ``
  hydrationMessage.innerHTML =
  `<p>Today you drank ${hydroRepo.
    returnUserWaterPerDay(currentUser.id, today)} ounces of water.</p>`
}

const updateSleepCardDay = () => {
  sleepMessage.innerHTML = ``
  sleepMessage.innerHTML = `Last night you slept ${sleepRepo.
    returnByDate(currentUser.id, today, 'hoursSlept')} hours.
    Your average sleep quality score was ${sleepRepo.
    returnByDate(currentUser.id, today, 'sleepQuality')}`;
}

const updateSleepCardWeek = () => {
  sleepMessage.innerHTML = ``
  let result = sleepRepo.returnUserSleepThisWeek(currentUser.id, today)
  result.forEach((result) => {
    sleepMessage.innerHTML += `${result.date}: Hours Slept: ${result.sleeps}, Quality: ${result.quality} <br>`
  })
}

const updateHydroCardWeek = () => {
  hydrationMessage.innerHTML = ``
  let result = hydroRepo.returnUserWaterThisWeek(currentUser.id, today)
  result.forEach((result) => {
    hydrationMessage.innerHTML += `${result.date}: ${result.ounces} ounces <br>`
  })
}

const updateSleepCardAllTime = () => {
  sleepMessage.innerHTML = ``
  let resultHours = sleepRepo.returnDailyAvg(currentUser.id, 'hoursSlept')
  let resultQuality = sleepRepo.returnDailyAvg(currentUser.id, 'sleepQuality')
  sleepMessage.innerHTML = `Your total average hours for all time are: ${resultHours} <br>
  Your total average sleep quality is: ${resultQuality}`
}

const updateHydroCardAllTime = () => {
  hydrationMessage.innerHTML = ``
  let result = hydroRepo.returnUserAvgPerDay(currentUser.id)
  hydrationMessage.innerHTML = `Your total average ounces of water drank per day is: ${result}.`
}

const updateDomDay = () => {
  updateHydroCardDay();
  updateSleepCardDay();
}

const updateDomWeek = () => {
  updateHydroCardWeek();
  updateSleepCardWeek();
}

const updateDomAllTime = () => {
updateHydroCardAllTime();
updateSleepCardAllTime();
}

const updateHeaderDate = () => {
  headerMessage.innerText = `Here's today ${today}, at a glance.`
}

// const updateStairsCard = () => {
//   // stairsMessage.innerText = `You've climbed ${} flights of stairs today.`;
// }

// Event Listeners
window.addEventListener('load', pageLoad);
weekBtn.addEventListener('click', updateDomWeek)
dayBtn.addEventListener('click', updateDomDay)
allTimeBtn.addEventListener('click', updateDomAllTime)

function testFunction() {
  console.log('hey!')
}
