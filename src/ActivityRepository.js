var dayjs = require('dayjs');
dayjs().format();


class ActivityRepository {
  constructor(activityData) {
    this.activities = activityData;
  }

returnStepsPerDay(id, date) {
  let stepsToday = this.activities.find((activity) => {
    return activity.userID === id && activity.date === date
  })
  return stepsToday.numSteps
}

  returnMilesByDate(id, strideLength, date) {

    let userActivity = this.activities.find((activity) => {
      return activity.userID === id && activity.date === date
    })
    let milesWalked = (userActivity.numSteps * strideLength) / 5280;
    return Math.round(100 * milesWalked) / 100;
  }

  returnActiveMinutes(id, date) {
    let userActivity = this.activities.find((activity) => {
      return activity.userID === id && activity.date === date;
    })
    return userActivity.minutesActive;
  }

  returnAverageActive(id, date) {
    let weekPrior = dayjs(date).subtract(6, "days");
    let dateStart = weekPrior.format('YYYY/MM/DD');
    let userActivityDate = this.activities.filter((data) => {
      return data.userID === id;
    }).filter((data) => {
      return data.date >= dateStart;
    }).map((data) => {
      return data.minutesActive
    }).reduce((sum, data) => {
      sum += data;
      return sum
    }) / 7
    return Math.round(100 * userActivityDate) / 100;
  }

  returnDailyGoal(id, goal, date) {
    let userActivity = this.activities.find((activity) => {
      return activity.userID === id && activity.date === date;
    });
    return goal <= userActivity.numSteps;
  }

  returnGoalsMet(id, goal) {
    let daysGoalMet = this.activities.filter((activity) => {
      return activity.userID === id && activity.numSteps >= goal;
    }).map((data) => {
      return data.date;
    })
    return daysGoalMet;
  }

  returnHighestStairs(id) {
    let highestStepCount = this.activities.filter((activity) => {
      return activity.userID === id
    }).sort((a,b) => {
      return b.flightsOfStairs - a.flightsOfStairs;
    })
    return highestStepCount[0].flightsOfStairs;
  }

  returnAllAverages(date) {
    let totalDays = this.activities.filter((activity) => {
      return activity.date === date;
    }).length;
    let sumForAllUsers = this.activities.filter((activity) => {
      return activity.date === date;
    }).reduce((obj, data) => {
      obj.stairs += data.flightsOfStairs;
      obj.steps += data.numSteps;
      obj.minutes += data.minutesActive;
      return obj;
    }, {stairs: 0, steps: 0, minutes: 0});
    sumForAllUsers.stairs = sumForAllUsers.stairs / totalDays;
    sumForAllUsers.steps = sumForAllUsers.steps / totalDays;
    sumForAllUsers.minutes = sumForAllUsers.minutes / totalDays;
    return sumForAllUsers;
  }

}

module.exports = ActivityRepository;
