import querySelectors from './scripts.js';
import globalVariables from './scripts.js';
import UserRepository from './UserRepository';
import HydroRepository from './HydroRepository';
import SleepRepository from './SleepRepository';
import ActivityRepository from './ActivityRepository';
import { fetchUsers, fetchHydration, fetchSleep, fetchActivityData }
  from './apiCalls';

let domUpdates = {

    updateFirstName() {
        globalVariables.currentUser = globalVariables.userList.findUser(globalVariables.userList.returnRandomUser());
        firstName.innerText = `Hello, ${globalVariables.currentUser.returnFirstName()}`;
      },

    fillUserCard(){
        profileName.innerText = `${globalVariables.currentUser.name}`;
        emailAddress.innerText = `${globalVariables.currentUser.email}`;
        stepGoal.innerText = `Your daily step goal is
        ${globalVariables.currentUser.dailyStepGoal}`;
        updateFriendsList();
      },

    updateFriendsList(){
        let friendNames = [];
        globalVariables.currentUser.friends.forEach((friend) => {
          let singleFriend = globalVariables.userList.findUser(friend);
          friendNames.push(singleFriend.name.split(" ")[0])
        });
        friendsList.innerText = `Your friends: ${friendNames.join(', ')}`;
      },

    updateStepCardDay(){
        stepGoalComparisons.innerHTML = `
        You took ${globalVariables.activityRepo.returnStepsPerDay(globalVariables.currentUser.id, globalVariables.today)} steps globalVariables.today compared to ${globalVariables.activityRepo.returnAllAverages(globalVariables.today).steps}, the average steps globalVariables.today of all users.
        <br>and walked ${globalVariables.activityRepo.returnMilesByDate(globalVariables.currentUser.id, globalVariables.currentUser.strideLength, globalVariables.today)} miles globalVariables.today.<br>
        Your step goal: ${globalVariables.currentUser.dailyStepGoal}
          Average step goal of all users: ${globalVariables.userList.calculateAverage()}.`;
      },

    updateHydroCardDay() {
        hydrationMessage.innerHTML = ``;
        hydrationMessage.innerHTML =
        `<p>today you drank ${globalVariables.hydroRepo.returnUserWaterPerDay(globalVariables.currentUser.id, globalVariables.today)} ounces of water.</p>`;
      },

    updateSleepCardDay() {
        sleepMessage.innerHTML = ``;
        sleepMessage.innerHTML = `Last night you slept ${globalVariables.sleepRepo.
          returnByDate(globalVariables.currentUser.id, globalVariables.today, 'hoursSlept')} hours. <br>
          Your average sleep quality score was ${globalVariables.sleepRepo.
          returnByDate(globalVariables.currentUser.id, globalVariables.today, 'sleepQuality')}.`;
      },

    updateActivityCardDay() {
        activityMessage.innerHTML = ``;
        activityMessage.innerHTML = `globalVariables.today, you were active for ${globalVariables.activityRepo.returnActiveMinutes(globalVariables.currentUser.id, globalVariables.today)} minutes <br>
        compared to ${globalVariables.activityRepo.returnAllAverages(globalVariables.today).minutes} minutes of all users.
        You climbed ${globalVariables.activityRepo.returnStairsPerDay(globalVariables.currentUser.id, globalVariables.today)} flights of stairs globalVariables.today, compared to ${globalVariables.activityRepo.returnAllAverages(globalVariables.today).stairs}, the average stairs climbed globalVariables.today for all users..
        `
      },

    updateStepCardWeek() {
        stepGoalComparisons.innerHTML = ``
        let result = globalVariables.activityRepo.returnDataPerWeek(globalVariables.currentUser.id, globalVariables.today);
        result.forEach((result) => {
          stepGoalComparisons.innerHTML += `${result.date}: Steps Taken: ${result.steps} <br>`
        })
      },

    updateSleepCardWeek() {
        sleepMessage.innerHTML = ``;
        let result = globalVariables.sleepRepo.returnUserSleepThisWeek(globalVariables.currentUser.id, globalVariables.today);
        result.forEach((result) => {
          sleepMessage.innerHTML += `${result.date}: Hours Slept:
          ${result.sleeps}, Quality: ${result.quality} <br>`;
        })
      },



    updateHydroCardWeek() {
        hydrationMessage.innerHTML = ``;
        let result = globalVariables.hydroRepo.returnUserWaterThisWeek(globalVariables.currentUser.id, globalVariables.today);
        result.forEach((result) => {
          hydrationMessage.innerHTML += `${result.date}:
            ${result.ounces} ounces <br>`;
        })
      },

    updateActivityCardWeek() {
        activityMessage.innerHTML = ``;
        let result = globalVariables.activityRepo.returnDataPerWeek(globalVariables.currentUser.id, globalVariables.today);
        result.forEach((result) => {
          activityMessage.innerHTML += `${result.date}: Stairs Climbed: ${result.stairs}, Minutes Active: ${result.minutes} <br>`
        })
      },

    updateSleepCardAllTime() {
        sleepMessage.innerHTML = ``;
        let resultHours = globalVariables.sleepRepo.returnDailyAvg(globalVariables.currentUser.id, 'hoursSlept');
        let resultQuality = globalVariables.sleepRepo.returnDailyAvg(globalVariables.currentUser.id, 'sleepQuality');
        sleepMessage.innerHTML = `Your total average hours for all time are:
          ${resultHours} <br> Your total average sleep quality is: ${resultQuality}`;
      },

    updateHydroCardAllTime() {
        hydrationMessage.innerHTML = ``;
        let result = globalVariables.hydroRepo.returnUserAvgPerDay(globalVariables.currentUser.id);
        hydrationMessage.innerHTML = `Your total average ounces of water drank
          per day is: ${result}.`;
      },

    updateHeaderDate() {
        headerMessage.innerText = `Here's globalVariables.today ${globalVariables.today} at a glance.`;
      },

    updateTitles(choice) {
        switch (choice) {
        case 'Day':
          stepTitle.innerText = `Steps (globalVariables.today)`;
          hydrationTitle.innerText = `Hydration (globalVariables.today)`;
          activityTitle.innerText = `Stairs (globalVariables.today)`;
          sleepTitle.innerText = `Sleep (globalVariables.today)`;
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
      },

    showInputForms() {
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
      },

    openUserForm() {
        stepsWidget.classList.add('hidden')
        sleepWidget.classList.add('hidden')
        waterWidget.classList.add('hidden')
        activityWidget.classList.add('hidden')
        userForm.classList.remove('hidden')
    },

    closeUserForm() {
        stepsWidget.classList.remove('hidden')
        sleepWidget.classList.remove('hidden')
        waterWidget.classList.remove('hidden')
        activityWidget.classList.remove('hidden')
        userForm.classList.add('hidden')
    }
  };

  export default  domUpdates;
