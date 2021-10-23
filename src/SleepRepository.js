class SleepRepository {
  constructor(sleepData) {
    this.sleeps = sleepData;
  }

  returnDailyAvg(id, property) {
    const totalSleep = this.sleeps.filter((sleep) => {
      return sleep.userID === id;
    })
    const result = totalSleep.reduce((acc, sleep) => {
      if (property === 'sleepQuality') {
        return acc += sleep.sleepQuality;
      } else {
        return acc += sleep.hoursSlept;
      }
    }, 0) / totalSleep.length;
    return result;
  }

  returnByDate(id, date, property) {
    const sleepDay = this.sleeps.find((data) => {
      return data.userID === id && data.date === date;
    })
    if (property === 'sleepQuality') {
      return sleepDay.sleepQuality;
    } else {
      return sleepDay.hoursSlept;
    }
  }

  returnWeek(id, startDate, endDate, property) {
    const days = this.sleeps.filter((data) => {
      return data.userID === id;
    }).filter((day) => {
      return day.date >= startDate && day.date <= endDate;
    })
    return days.map((day) => {
      if (property === 'sleepQuality') {
        return day.sleepQuality;
      } else {
        return day.hoursSlept;
      }
    })
  }

  totalAvgSleepQual() {
    const result = this.sleeps.reduce((acc, sleep) => {
      return acc += sleep.sleepQuality;
    }, 0) / this.sleeps.length;
    return result;
  }
}

export default SleepRepository;