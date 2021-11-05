// Imports

import UserRepository from './UserRepository';
import HydroRepository from './HydroRepository';
import SleepRepository from './SleepRepository';
import { fetchUsers, fetchHydration, fetchSleep, fetchData }
  from './apiCalls';
import './css/styles.scss';
import './images/turing-logo.png';


// Global Variables

const today = '2020/01/22';
let currentUser;
let hydroRepo;
let sleepRepo;
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
const stairTitle = document.querySelector('#stairTitle');
const stepGoal = document.querySelector('#stepGoal');
const stepGoalComparisons = document.querySelector('#stepGoalMessage');
const stepTitle = document.querySelector('#stepTitle');
const weekBtn = document.querySelector('#weekBtn');



// Functions

const pageLoad = () => {
  userFetch();
  hydroFetch();
  sleepFetch();
  updateHeaderDate();
  updateDomDay();
}

const userFetch = () => {
  fetchData('users').then((data) => {
    generateUsers(data.userData);
    generateUserInfo();
  })
}

const hydroFetch = () => {
  fetchData('hydration').then((data) => {
    hydroRepo = new HydroRepository(data.hydrationData);
    updateHydroCardDay();
  })
}

const sleepFetch = () => {
  fetchData('sleep').then((data) => {
    sleepRepo = new SleepRepository(data.sleepData);
    updateSleepCardDay();
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

const updateStepCard = () => {
  stepGoalComparisons.innerText = `Your step goal: ${currentUser.dailyStepGoal}
    Average step goal of all users: ${userList.calculateAverage()}`;
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
    returnByDate(currentUser.id, today, 'sleepQuality')}`;
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
  updateHydroCardDay();
  updateSleepCardDay();
  updateTitles('Day');
}

const updateDomWeek = () => {
  updateHydroCardWeek();
  updateSleepCardWeek();
  updateTitles('Week');
}

const updateDomAllTime = () => {
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
    stairTitle.innerText = `Stairs (Today)`;
    sleepTitle.innerText = `Sleep (Today)`;
    break;
  case 'Week':
    stepTitle.innerText = `Steps (Last Week)`
    hydrationTitle.innerText = `Hydration (Last Week)`
    stairTitle.innerText = `Stairs (Last Week)`
    sleepTitle.innerText = `Sleep (Last Week)`
    break;
  case 'All Time':
    stepTitle.innerText = `Steps (All Time)`;
    hydrationTitle.innerText = `Hydration (All Time)`;
    stairTitle.innerText = `Stairs (All Time)`;
    sleepTitle.innerText = `Sleep (All Time)`;
    break;
  }
}

// Event Listeners

window.addEventListener('load', pageLoad);
weekBtn.addEventListener('click', updateDomWeek);
dayBtn.addEventListener('click', updateDomDay);
allTimeBtn.addEventListener('click', updateDomAllTime);
