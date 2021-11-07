// let domUpdates = {

//     const updateFirstName = () => {
//         currentUser = userList.findUser(userList.returnRandomUser());
//         firstName.innerText = `Hello, ${currentUser.returnFirstName()}`;
//       }
      
//       const fillUserCard = () => {
//         profileName.innerText = `${currentUser.name}`;
//         emailAddress.innerText = `${currentUser.email}`;
//         stepGoal.innerText = `Your daily step goal is
//         ${currentUser.dailyStepGoal}`;
//         updateFriendsList();
//       }
      
//       const updateFriendsList = () => {
//         let friendNames = [];
//         currentUser.friends.forEach((friend) => {
//           let singleFriend = userList.findUser(friend);
//           friendNames.push(singleFriend.name.split(" ")[0])
//         });
//         friendsList.innerText = `Your friends: ${friendNames.join(', ')}`;
//       }
      
//       const updateStepCardDay = () => {
//         stepGoalComparisons.innerHTML = `
//         You took ${activityRepo.returnStepsPerDay(currentUser.id, today)} steps today compared to ${activityRepo.returnAllAverages(today).steps}, the average steps today of all users.
//         <br>and walked ${activityRepo.returnMilesByDate(currentUser.id, currentUser.strideLength, today)} miles today.<br>
//         Your step goal: ${currentUser.dailyStepGoal}
//           Average step goal of all users: ${userList.calculateAverage()}.`;
//       }
      
//       const updateHydroCardDay = () => {
//         hydrationMessage.innerHTML = ``;
//         hydrationMessage.innerHTML =
//         `<p>Today you drank ${hydroRepo.
//           returnUserWaterPerDay(currentUser.id, today)} ounces of water.</p>`;
//       }
      
//       const updateSleepCardDay = () => {
//         sleepMessage.innerHTML = ``;
//         sleepMessage.innerHTML = `Last night you slept ${sleepRepo.
//           returnByDate(currentUser.id, today, 'hoursSlept')} hours. <br>
//           Your average sleep quality score was ${sleepRepo.
//           returnByDate(currentUser.id, today, 'sleepQuality')}.`;
//       }
      
//       const updateActivityCardDay = () => {
//         activityMessage.innerHTML = ``;
//         activityMessage.innerHTML = `Today, you were active for ${activityRepo.returnActiveMinutes(currentUser.id, today)} minutes <br>
//         compared to ${activityRepo.returnAllAverages(today).minutes} minutes of all users.
//         You climbed ${activityRepo.returnStairsPerDay(currentUser.id, today)} flights of stairs today, compared to ${activityRepo.returnAllAverages(today).stairs}, the average stairs climbed today for all users..
//         `
//       }
      
//       const updateStepCardWeek = () => {
//         stepGoalComparisons.innerHTML = ``
//         let result = activityRepo.returnDataPerWeek(currentUser.id, today);
//         result.forEach((result) => {
//           stepGoalComparisons.innerHTML += `${result.date}: Steps Taken: ${result.steps} <br>`
//         })
//       }
      
//       const updateSleepCardWeek = () => {
//         sleepMessage.innerHTML = ``;
//         let result = sleepRepo.returnUserSleepThisWeek(currentUser.id, today);
//         result.forEach((result) => {
//           sleepMessage.innerHTML += `${result.date}: Hours Slept:
//           ${result.sleeps}, Quality: ${result.quality} <br>`;
//         })
//       }
      
      
      
//       const updateHydroCardWeek = () => {
//         hydrationMessage.innerHTML = ``;
//         let result = hydroRepo.returnUserWaterThisWeek(currentUser.id, today);
//         result.forEach((result) => {
//           hydrationMessage.innerHTML += `${result.date}:
//             ${result.ounces} ounces <br>`;
//         })
//       }
      
//       const updateActivityCardWeek = () => {
//         activityMessage.innerHTML = ``;
//         let result = activityRepo.returnDataPerWeek(currentUser.id, today);
//         result.forEach((result) => {
//           activityMessage.innerHTML += `${result.date}: Stairs Climbed: ${result.stairs}, Minutes Active: ${result.minutes} <br>`
//         })
//       }
      
//       const updateSleepCardAllTime = () => {
//         sleepMessage.innerHTML = ``;
//         let resultHours = sleepRepo.returnDailyAvg(currentUser.id, 'hoursSlept');
//         let resultQuality = sleepRepo.returnDailyAvg(currentUser.id, 'sleepQuality');
//         sleepMessage.innerHTML = `Your total average hours for all time are:
//           ${resultHours} <br> Your total average sleep quality is: ${resultQuality}`;
//       }
      
      
      
//       const updateHydroCardAllTime = () => {
//         hydrationMessage.innerHTML = ``;
//         let result = hydroRepo.returnUserAvgPerDay(currentUser.id);
//         hydrationMessage.innerHTML = `Your total average ounces of water drank
//           per day is: ${result}.`;
//       }

//       const updateHeaderDate = () => {
//         headerMessage.innerText = `Here's today ${today} at a glance.`;
//       }
      
//       const updateTitles = (choice) => {
//         switch (choice) {
//         case 'Day':
//           stepTitle.innerText = `Steps (Today)`;
//           hydrationTitle.innerText = `Hydration (Today)`;
//           activityTitle.innerText = `Stairs (Today)`;
//           sleepTitle.innerText = `Sleep (Today)`;
//           break;
//         case 'Week':
//           stepTitle.innerText = `Steps (Last Week)`
//           hydrationTitle.innerText = `Hydration (Last Week)`
//           activityTitle.innerText = `Stairs (Last Week)`
//           sleepTitle.innerText = `Sleep (Last Week)`
//           break;
//         case 'All Time':
//           stepTitle.innerText = `Steps (All Time)`;
//           hydrationTitle.innerText = `Hydration (All Time)`;
//           activityTitle.innerText = `Stairs (All Time)`;
//           sleepTitle.innerText = `Sleep (All Time)`;
//           break;
//         }
//       }
      
//       const showInputForms = () => {
//         if (sleepRadio.checked) {
//           sleepForm.classList.remove('hidden')
//           waterForm.classList.add('hidden')
//           stepForm.classList.add('hidden')
//         } else if (waterRadio.checked) {
//           sleepForm.classList.add('hidden')
//           waterForm.classList.remove('hidden')
//           stepForm.classList.add('hidden')
//         } else if (activityRadio.checked) {
//           sleepForm.classList.add('hidden')
//           waterForm.classList.add('hidden')
//           stepForm.classList.remove('hidden')
//         }
//       }

//   };
  
//   export default  domUpdates;