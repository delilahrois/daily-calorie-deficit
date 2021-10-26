var dayjs = require('dayjs');
dayjs().format();

class HydroRepository {
  constructor(data) {
    this.hydroData = data;
  }
  returnUserAvgPerDay(id) {
    let userWaterData = this.hydroData.filter((data) => {
      return data.userID === id;
    })
    let result = userWaterData.reduce((acc, item) => {
      return acc += item.numOunces;
    }, 0) / userWaterData.length;
    return Math.round(100 * result) / 100;
  }

  returnUserWaterPerDay(id, date) {
    let userWaterData = this.hydroData.find((data) =>
      data.userID === id && data.date === date);
    return userWaterData.numOunces;
  }

  returnUserWaterPerWeek(id, dateStart, dateEnd) {
    let userWaterData = this.hydroData.filter((data) => {
      return data.userID === id;
    }).filter((data) => {
      return data.date >= dateStart && data.date <= dateEnd;
    }).map((data) => {
      return data.numOunces;
    })
    return userWaterData;
  }

  returnUserWaterThisWeek(id, dateEnd) {
    let weekPrior = dayjs(dateEnd).subtract(6, "days");
    let dateStart = weekPrior.format('YYYY/MM/DD');
    let userWaterData = this.hydroData.filter((data) => {
      return data.userID === id;
    }).filter((data) => {
      return data.date >= dateStart;
    }).map((data) => {
      return {date: data.date, ounces: data.numOunces};
    })
    return userWaterData;
  }
}


export default HydroRepository;
