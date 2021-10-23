var dayjs = require('dayjs')
dayjs().format()

class HydroRepository {
  constructor(data) {
    this.hydroData = data
  }
  returnUserAvgPerDay(id) {
    let userWaterData = this.hydroData.filter((data) => {
      return data.userID === id;
    })
    let result = userWaterData.reduce((acc, item) => {
      return acc += item.numOunces;
    }, 0) / userWaterData.length
    return result
  }

  returnUserWaterPerDay(id, date) {
    let userWaterData = this.hydroData.find((data) =>
      data.userID === id && data.date === date);
    return userWaterData.numOunces
  }

  returnUserWaterPerWeek(id, dateStart, dateEnd) {
    let userWaterData = this.hydroData.filter((data) => {
      return data.userID === id
    }).filter((data) => {
      return data.date >= dateStart && data.date <= dateEnd
    }).map((data) => {
      return data.numOunces
    })
    return userWaterData
  }

  returnUserWaterThisWeek(id, dateEnd) {
    let weekPrior = dayjs(dateEnd).subtract(1, "week");
    let dateStart = weekPrior.format('YYYY/MM/DD');
    console.log('date Start', dateStart)
    console.log('date end', dateEnd)
    let userWaterData = this.hydroData.filter((data) => {
      return data.userID === id
    }).filter((data) => {
      return data.date >= dateStart
    }).map((data) => {
      return data.numOunces
    })
    // console.log(userWaterData)
    return userWaterData
  }
}


export default HydroRepository;
