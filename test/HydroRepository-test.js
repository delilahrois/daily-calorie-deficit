const chai = require('chai');
const expect = chai.expect;

import HydroRepository from '../src/HydroRepository';

describe('HydroRepository', function() {

  let testData
  let hydro
  beforeEach(() => {
    testData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numOunces": 75
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "numOunces": 47
      },
      {
        "userID": 4,
        "date": "2019/06/15",
        "numOunces": 85
      },
      {
        "userID": 5,
        "date": "2019/06/15",
        "numOunces": 42
      }
    ]

    hydro = new HydroRepository(testData)
  })

  it('should be a function', function() {
    expect(HydroRepository).to.be.a('function')
  })

  it('should be able to instantiate a new hydration repository', function() {
    expect(hydro).to.be.an.instanceof(HydroRepository)
  })

  it('should, for a single user, be able to return the average fluid ounces consumed per day for all time', function() {
    expect(hydro.returnUserAvgPerDay(1)).to.equal(37)
  })

  it('should be able to return how many fluid ounces they consumed for a day', function() {
    expect(hydro.returnUserWaterPerDay(3, "2019/06/15")).to.equal(47)
  })

})
