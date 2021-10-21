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
      data.userID === id && data.date === date)
    return userWaterData.numOunces
  }


}


export default HydroRepository;
