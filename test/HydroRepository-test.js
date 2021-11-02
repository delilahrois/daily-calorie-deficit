const chai = require('chai');
const expect = chai.expect;

import HydroRepository from '../src/HydroRepository';

describe('HydroRepository', () => {

  let testData;
  let hydro;

  beforeEach(() => {
    testData = [{
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
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numOunces": 69
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "numOunces": 91
    },
    {
      "userID": 3,
      "date": "2019/06/16",
      "numOunces": 99
    },
    {
      "userID": 4,
      "date": "2019/06/16",
      "numOunces": 95
    },
    {
      "userID": 5,
      "date": "2019/06/16",
      "numOunces": 79
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "numOunces": 96
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "numOunces": 96
    },
    {
      "userID": 3,
      "date": "2019/06/17",
      "numOunces": 28
    },
    {
      "userID": 4,
      "date": "2019/06/17",
      "numOunces": 82
    },
    {
      "userID": 5,
      "date": "2019/06/17",
      "numOunces": 99
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "numOunces": 61
    },
    {
      "userID": 2,
      "date": "2019/06/18",
      "numOunces": 70
    },
    {
      "userID": 3,
      "date": "2019/06/18",
      "numOunces": 40
    },
    {
      "userID": 4,
      "date": "2019/06/18",
      "numOunces": 93
    },
    {
      "userID": 5,
      "date": "2019/06/18",
      "numOunces": 39
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "numOunces": 91
    },
    {
      "userID": 2,
      "date": "2019/06/19",
      "numOunces": 76
    },
    {
      "userID": 3,
      "date": "2019/06/19",
      "numOunces": 85
    },
    {
      "userID": 4,
      "date": "2019/06/19",
      "numOunces": 21
    },
    {
      "userID": 5,
      "date": "2019/06/19",
      "numOunces": 69
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "numOunces": 50
    },
    {
      "userID": 2,
      "date": "2019/06/20",
      "numOunces": 71
    },
    {
      "userID": 3,
      "date": "2019/06/20",
      "numOunces": 51
    },
    {
      "userID": 4,
      "date": "2019/06/20",
      "numOunces": 95
    },
    {
      "userID": 5,
      "date": "2019/06/20",
      "numOunces": 89
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "numOunces": 50
    },
    {
      "userID": 2,
      "date": "2019/06/21",
      "numOunces": 27
    },
    {
      "userID": 3,
      "date": "2019/06/21",
      "numOunces": 41
    },
    {
      "userID": 4,
      "date": "2019/06/21",
      "numOunces": 91
    },
    {
      "userID": 5,
      "date": "2019/06/21",
      "numOunces": 73
    },
    ]

    hydro = new HydroRepository(testData);

  });

  it('should be a function', () => {
    expect(HydroRepository).to.be.a('function');
  });

  it('should be able to instantiate a new hydration repository', () => {
    expect(hydro).to.be.an.instanceof(HydroRepository);
  });

  it('should return users avg fl oz consumed per day for all time', () => {
    expect(hydro.returnUserAvgPerDay(1)).to.equal(64.86);
  });

  it('should return how many fluid ounces user consumed for a day', () => {
    expect(hydro.returnUserWaterPerDay(3, "2019/06/15")).to.equal(47);
  });

  it('should return amount of water consumed each day over 1 week', () => {
    expect(hydro.returnUserWaterPerWeek(2, "2019/06/15", "2019/06/21"))
      .to.deep.equal([75, 91, 96, 70, 76, 71, 27]);
  });

  it('should return water consumed per day over last week', () => {
    expect(hydro.returnUserWaterThisWeek(2, "2019/06/21")).to.deep.equal([{
      date: '2019/06/15',
      ounces: 75
    },
    {
      date: '2019/06/16',
      ounces: 91
    },
    {
      date: '2019/06/17',
      ounces: 96
    },
    {
      date: '2019/06/18',
      ounces: 70
    },
    {
      date: '2019/06/19',
      ounces: 76
    },
    {
      date: '2019/06/20',
      ounces: 71
    },
    {
      date: '2019/06/21',
      ounces: 27
    }
    ]);
  });
});
