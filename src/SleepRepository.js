class SleepRepository {
  constructor(sleepData) {
    this.sleeps = sleepData;
  }

  averageDailySleep(id) {
    const totalSleep = this.sleeps.filter((sleep) => {
      return sleep.userID === id;
    })
    const result = totalSleep.reduce((acc, sleep) => {
      return acc += sleep.hoursSlept;
    }, 0) / totalSleep.length;
    return result;
  }

  totalAverageSleep() {
    const result = this.sleeps.map(() => {

    });
  }

  dailySleepInfo(id, date) {
    const result = this.sleeps.find(() => {
      
    })
  }

  // method: for a user, the avg sleep quality per day over all time

  // method: sleep quality average for all users

  // For a user, their average sleep quality per day over all time
  // For a user, how many hours they slept for a specific day 
  // (identified by a date)

  // For a user, their sleep quality for a specific day (identified by a date)

  // For a user, how many hours slept each day over the course 
  // of a given week (7 days) - you should be able to calculate 
  // this for any week, not just the latest week

  // For a user, their sleep quality each day over the course 
  // of a given week (7 days) - you should be able to calculate this 
  // for any week, not just the latest week

  // For all users, the average sleep quality
}

export default SleepRepository;

// avg sleep quality and avg number of hours slept 
// per day is same iterator method

// same for the next 2 bullet