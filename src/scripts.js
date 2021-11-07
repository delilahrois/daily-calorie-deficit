// Imports

import UserRepository from './UserRepository';
import HydroRepository from './HydroRepository';
import SleepRepository from './SleepRepository';
import ActivityRepository from './ActivityRepository';
import { fetchUsers, fetchHydration, fetchSleep, fetchActivityData }
  from './apiCalls';
import './css/styles.scss';
import './images/turing-logo.png';
import { domUpdates } from './domUpdates.js';
// Global Variables

const globalVariables {
today: '2020/01/22',
currentUser,
hydroRepo,
sleepRepo,
activityRepo,
userList
}


// Query Selectors
const querySelectors = {
allTimeBtn: document.querySelector('#allTimeBtn'),
dayBtn: document.querySelector('#dayBtn'),
emailAddress: document.querySelector('#emailAddress'),
firstName: document.querySelector('#userName'),
friendsList: document.querySelector('#friendsList'),
headerMessage: document.querySelector('#headerMessage'),
hydrationMessage: document.querySelector('#hydrationMessage'),
hydrationTitle: document.querySelector('#hydrationTitle'),
profileName: document.querySelector('#profileName'),
sleepMessage: document.querySelector('#sleepMessage'),
sleepTitle: document.querySelector('#sleepTitle'),
activityTitle: document.querySelector('#activityTitle'),
stepGoal: document.querySelector('#stepGoal'),
stepGoalComparisons: document.querySelector('#stepGoalMessage'),
stepTitle: document.querySelector('#stepTitle'),
weekBtn: document.querySelector('#weekBtn'),
addDataBtn: document.querySelector('#addData'),
stepsWidget: document.querySelector('#stepsWidget'),
waterWidget: document.querySelector('#waterWidget'),
sleepWidget: document.querySelector('#sleepWidget'),
activityWidget: document.querySelector('#activityWidget'),
userForm: document.querySelector('#userForm'),
stepForm: document.querySelector('#stepForm'),
sleepForm: document.querySelector('#sleepForm'),
waterForm: document.querySelector('#waterForm'),
submitButton: document.querySelector('#submitButton'),
sleepRadio: document.querySelector('#sleepAdd'),
waterRadio: document.querySelector('#waterAdd'),
activityRadio: document.querySelector('#stepAdd'),
flightsOfStairsInput: document.querySelector('#flightsOfStairsInput'),
minsActiveInput: document.querySelector('#minsActiveInput'),
numOfStepsInput: document.querySelector('#numOfStepsInput'),
hoursInput: document.querySelector('#hoursInput'),
qualityInput: document.querySelector('#qualityInput'),
wateryForm: document.querySelector('#wateryForm')
}

// Functions

const pageLoad = () => {
  fetchData();
  updateHeaderDate();
}

const fetchData = () => {
  Promise.all([fetchUsers, fetchHydration, fetchSleep, fetchActivityData]).then(values => {
    return Promise.all(values.map(result => result.json()));
  }).then(values => {
    generateUsers(values[0].userData)
    generateUserInfo();
    generateHydro(values[1].hydrationData)
    generateSleep(values[2].sleepData)
    generateActivity(values[3].activityData)
    updateDomDay()
  })
}

const postHydro = (data) => {
  fetch ('http://localhost:3001/api/v1/hydration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
    .then(generateHydro(data))
    .catch(error => console.log(error))
}

const postSleep = (data) => {
  fetch ('http://localhost:3001/api/v1/sleep', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
    .then(generateSleep(data))
    .catch(error => console.log(error))
}


const postActivity = (data) => {
  fetch ('http://localhost:3001/api/v1/activity', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
    .then(generateActivity(data))
    .catch(error => console.log(error))
}

const generateUsers = (users) => {
  userList = new UserRepository(users);
  userList.createEachUser();
}

const generateHydro = (data) => {
  hydroRepo = new HydroRepository(data)
}

const generateSleep = (data) => {
  sleepRepo = new SleepRepository(data)
}

const generateActivity = (data) => {
  activityRepo = new ActivityRepository(data)
}

const generateUserInfo = () => {
  domUpdates.updateFirstName();
  domUpdates.fillUserCard();
}

const updateDomDay = () => {
  domUpdates.closeUserForm();
  domUpdates.updateHydroCardDay();
  domUpdates.updateSleepCardDay();
  domUpdates.updateStepCardDay();
  domUpdates.updateActivityCardDay();
  domUpdates.updateTitles('Day');
}

const updateDomWeek = () => {
  domUpdates.closeUserForm();
  domUpdates.updateStepCardWeek();
  domUpdates.updateHydroCardWeek();
  domUpdates.updateSleepCardWeek();
  domUpdates.updateActivityCardWeek();
  domUpdates.updateTitles('Week');
}

const updateDomAllTime = () => {
  domUpdates.closeUserForm();
  domUpdates.updateHydroCardAllTime();
  domUpdates.updateSleepCardAllTime();
  domUpdates.updateTitles('All Time');
}




const selectData = () => {
  if (sleepRadio.checked) {
    submitSleepData();
  } else if (waterRadio.checked) {
    submitWaterData();
  } else if (activityRadio.checked) {
    submitActivityData();
  }
}

const submitWaterData = () => {
  let newData = {userID: currentUser.id, date: today, numOunces: wateryForm.value}
  postHydro(newData)
}

const submitSleepData = () => {
  let newData = {userID: currentUser.id, date: today, hoursSlept: hoursInput.value, sleepQuality: qualityInput.value}
  postSleep(newData)
}

const submitActivityData = () => {
  let newData = {userID: currentUser.id, date: today, flightsOfStairs: flightsOfStairsInput.value, minutesActive: minsActiveInput.value, numSteps: numOfStepsInput.value}
  postActivity(newData)
}

// Event Listeners

window.addEventListener('load', pageLoad);
querySelectors.weekBtn.addEventListener('click', updateDomWeek);
querySelectors.dayBtn.addEventListener('click', updateDomDay);
querySelectors.allTimeBtn.addEventListener('click', updateDomAllTime);
querySelectors.addDataBtn.addEventListener('click', domUpdates.openUserForm);
querySelectors.submitButton.addEventListener('click', selectData);
querySelectors.userForm.addEventListener('click', domUpdates.showInputForms);

export default querySelectors;