// Imports

import UserRepository from './UserRepository';
import HydroRepository from './HydroRepository';
import SleepRepository from './SleepRepository';
import ActivityRepository from './ActivityRepository';
import { fetchUsers, fetchHydration, fetchSleep, fetchActivityData }
  from './apiCalls';
import './css/styles.scss';
import './images/turing-logo.png';


// Global Variables

const today = '2020/01/22';
let currentUser;
let hydroRepo;
let sleepRepo;
let activityRepo;
let userList;


//Query Selectors

const allTimeBtn = document.querySelector('#allTimeBtn');
const dayBtn = document.querySelector('#dayBtn');
const emailAddress = document.querySelector('#emailAddress');
const firstName = document.querySelector('#userName');
const friendsList = document.querySelector('#friendsList');
const headerMessage = document.querySelector('#headerMessage');
const hydrationMessage = document.querySelector('#hydrationMessage');
const hydrationTitle = document.querySelector('#hydrationTitle');
const profileName = document.querySelector('#profileName');
const sleepMessage = document.querySelector('#sleepMessage');
const sleepTitle = document.querySelector('#sleepTitle');
const activityTitle = document.querySelector('#activityTitle');
const stepGoal = document.querySelector('#stepGoal');
const stepGoalComparisons = document.querySelector('#stepGoalMessage');
const stepTitle = document.querySelector('#stepTitle');
const weekBtn = document.querySelector('#weekBtn');
const addDataBtn = document.querySelector('#addData')
const stepsWidget = document.querySelector('#stepsWidget')
const waterWidget = document.querySelector('#waterWidget')
const sleepWidget = document.querySelector('#sleepWidget')
const activityWidget = document.querySelector('#activityWidget')
const userForm = document.querySelector('#userForm')
const stepForm = document.querySelector('#stepForm')
const sleepForm = document.querySelector('#sleepForm')
const waterForm = document.querySelector('#waterForm')
const submitButton = document.querySelector('#submitButton')
const sleepRadio = document.querySelector('#sleepAdd')
const waterRadio = document.querySelector('#waterAdd')
const activityRadio = document.querySelector('#stepAdd')
const flightsOfStairsInput = document.querySelector('#flightsOfStairsInput')
const minsActiveInput = document.querySelector('#minsActiveInput')
const numOfStepsInput = document.querySelector('#numOfStepsInput')
const hoursInput = document.querySelector('#hoursInput')
const qualityInput = document.querySelector('#qualityInput')
const wateryForm = document.querySelector('#wateryForm')


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
  updateFirstName();
  fillUserCard();
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
  updateFriendsList();
}

const updateFriendsList = () => {
  let friendNames = [];
  currentUser.friends.forEach((friend) => {
    let singleFriend = userList.findUser(friend);
    friendNames.push(singleFriend.name.split(" ")[0])
  });
  friendsList.innerText = `Your friends: ${friendNames.join(', ')}`;
}

const updateStepCardDay = () => {
  stepGoalComparisons.innerHTML = `
  You took ${activityRepo.returnStepsPerDay(currentUser.id, today)} steps today compared to ${activityRepo.returnAllAverages(today).steps}, the average steps today of all users.
  <br>and walked ${activityRepo.returnMilesByDate(currentUser.id, currentUser.strideLength, today)} miles today.<br>
  Your step goal: ${currentUser.dailyStepGoal}
    Average step goal of all users: ${userList.calculateAverage()}.`;
}

const updateHydroCardDay = () => {
  hydrationMessage.innerHTML = ``;
  hydrationMessage.innerHTML =
  `<p>Today you drank ${hydroRepo.
    returnUserWaterPerDay(currentUser.id, today)} ounces of water.</p>`;
}

const updateSleepCardDay = () => {
  sleepMessage.innerHTML = ``;
  sleepMessage.innerHTML = `Last night you slept ${sleepRepo.
    returnByDate(currentUser.id, today, 'hoursSlept')} hours. <br>
    Your average sleep quality score was ${sleepRepo.
    returnByDate(currentUser.id, today, 'sleepQuality')}.`;
}

const updateActivityCardDay = () => {
  activityMessage.innerHTML = ``;
  activityMessage.innerHTML = `Today, you were active for ${activityRepo.returnActiveMinutes(currentUser.id, today)} minutes <br>
  compared to ${activityRepo.returnAllAverages(today).minutes} minutes of all users.
  You climbed ${activityRepo.returnStairsPerDay(currentUser.id, today)} flights of stairs today, compared to ${activityRepo.returnAllAverages(today).stairs}, the average stairs climbed today for all users..
  `
}

const updateStepCardWeek = () => {
  stepGoalComparisons.innerHTML = ``
  let result = activityRepo.returnDataPerWeek(currentUser.id, today);
  result.forEach((result) => {
    stepGoalComparisons.innerHTML += `${result.date}: Steps Taken: ${result.steps} <br>`
  })
}

const updateSleepCardWeek = () => {
  sleepMessage.innerHTML = ``;
  let result = sleepRepo.returnUserSleepThisWeek(currentUser.id, today);
  result.forEach((result) => {
    sleepMessage.innerHTML += `${result.date}: Hours Slept:
    ${result.sleeps}, Quality: ${result.quality} <br>`;
  })
}



const updateHydroCardWeek = () => {
  hydrationMessage.innerHTML = ``;
  let result = hydroRepo.returnUserWaterThisWeek(currentUser.id, today);
  result.forEach((result) => {
    hydrationMessage.innerHTML += `${result.date}:
      ${result.ounces} ounces <br>`;
  })
}

const updateActivityCardWeek = () => {
  activityMessage.innerHTML = ``;
  let result = activityRepo.returnDataPerWeek(currentUser.id, today);
  result.forEach((result) => {
    activityMessage.innerHTML += `${result.date}: Stairs Climbed: ${result.stairs}, Minutes Active: ${result.minutes} <br>`
  })
}

const updateSleepCardAllTime = () => {
  sleepMessage.innerHTML = ``;
  let resultHours = sleepRepo.returnDailyAvg(currentUser.id, 'hoursSlept');
  let resultQuality = sleepRepo.returnDailyAvg(currentUser.id, 'sleepQuality');
  sleepMessage.innerHTML = `Your total average hours for all time are:
    ${resultHours} <br> Your total average sleep quality is: ${resultQuality}`;
}



const updateHydroCardAllTime = () => {
  hydrationMessage.innerHTML = ``;
  let result = hydroRepo.returnUserAvgPerDay(currentUser.id);
  hydrationMessage.innerHTML = `Your total average ounces of water drank
    per day is: ${result}.`;
}

const updateDomDay = () => {
  closeUserForm();
  updateHydroCardDay();
  updateSleepCardDay();
  updateStepCardDay();
  updateActivityCardDay();
  updateTitles('Day');
}

const updateDomWeek = () => {
  closeUserForm();
  updateStepCardWeek();
  updateHydroCardWeek();
  updateSleepCardWeek();
  updateActivityCardWeek();
  updateTitles('Week');
}

const updateDomAllTime = () => {
  closeUserForm();
  updateHydroCardAllTime();
  updateSleepCardAllTime();
  updateTitles('All Time');
}

const updateHeaderDate = () => {
  headerMessage.innerText = `Here's today ${today} at a glance.`;
}

const updateTitles = (choice) => {
  switch (choice) {
  case 'Day':
    stepTitle.innerText = `Steps (Today)`;
    hydrationTitle.innerText = `Hydration (Today)`;
    activityTitle.innerText = `Stairs (Today)`;
    sleepTitle.innerText = `Sleep (Today)`;
    break;
  case 'Week':
    stepTitle.innerText = `Steps (Last Week)`
    hydrationTitle.innerText = `Hydration (Last Week)`
    activityTitle.innerText = `Stairs (Last Week)`
    sleepTitle.innerText = `Sleep (Last Week)`
    break;
  case 'All Time':
    stepTitle.innerText = `Steps (All Time)`;
    hydrationTitle.innerText = `Hydration (All Time)`;
    activityTitle.innerText = `Stairs (All Time)`;
    sleepTitle.innerText = `Sleep (All Time)`;
    break;
  }
}


const openUserForm = () => {
  stepsWidget.classList.add('hidden')
  sleepWidget.classList.add('hidden')
  waterWidget.classList.add('hidden')
  activityWidget.classList.add('hidden')
  userForm.classList.remove('hidden')
}

const closeUserForm = () => {
  stepsWidget.classList.remove('hidden')
  sleepWidget.classList.remove('hidden')
  waterWidget.classList.remove('hidden')
  activityWidget.classList.remove('hidden')
  userForm.classList.add('hidden')
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

const showInputForms = () => {
  if (sleepRadio.checked) {
    sleepForm.classList.remove('hidden')
    waterForm.classList.add('hidden')
    stepForm.classList.add('hidden')
  } else if (waterRadio.checked) {
    sleepForm.classList.add('hidden')
    waterForm.classList.remove('hidden')
    stepForm.classList.add('hidden')
  } else if (activityRadio.checked) {
    sleepForm.classList.add('hidden')
    waterForm.classList.add('hidden')
    stepForm.classList.remove('hidden')
  }
}


// Event Listeners

window.addEventListener('load', pageLoad);
weekBtn.addEventListener('click', updateDomWeek);
dayBtn.addEventListener('click', updateDomDay);
allTimeBtn.addEventListener('click', updateDomAllTime);
addDataBtn.addEventListener('click', openUserForm);
submitButton.addEventListener('click', selectData);
userForm.addEventListener('click', showInputForms);
