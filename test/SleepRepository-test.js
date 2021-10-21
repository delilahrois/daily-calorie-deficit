import { expect } from 'chai';
import SleepRepository from '../src/SleepRepository';

describe('SleepRepository', () => {

  let sleepRepo;
  let sleepData;

  beforeEach(() => {

    sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      },
      {
        "userID": 4,
        "date": "2019/06/15",
        "hoursSlept": 5.4,
        "sleepQuality": 3
      },
      {
        "userID": 5,
        "date": "2019/06/15",
        "hoursSlept": 4.1,
        "sleepQuality": 3.6
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "hoursSlept": 7.8,
        "sleepQuality": 4.2
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "hoursSlept": 4.3,
        "sleepQuality": 4.8
      },
      {
        "userID": 3,
        "date": "2019/06/21",
        "hoursSlept": 8.9,
        "sleepQuality": 3.7
      },
      {
        "userID": 4,
        "date": "2019/06/21",
        "hoursSlept": 10.6,
        "sleepQuality": 2.7
      },
      {
        "userID": 5,
        "date": "2019/06/21",
        "hoursSlept": 9.6,
        "sleepQuality": 4.1
      },
      {
        "userID": 1,
        "date": "2019/06/24",
        "hoursSlept": 8,
        "sleepQuality": 1.3
      },
      {
        "userID": 2,
        "date": "2019/06/24",
        "hoursSlept": 10.8,
        "sleepQuality": 1
      },
      {
        "userID": 3,
        "date": "2019/06/24",
        "hoursSlept": 9.3,
        "sleepQuality": 1.8
      },
      {
        "userID": 4,
        "date": "2019/06/24",
        "hoursSlept": 5,
        "sleepQuality": 3.5
      },
      {
        "userID": 5,
        "date": "2019/06/24",
        "hoursSlept": 6.8,
        "sleepQuality": 2.1
      }
    ];
    sleepRepo = new SleepRepository(sleepData);

  })

  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function')
  })

  it('should be an instance of our class', () => {
    expect(sleepRepo).to.be.an.instanceOf(SleepRepository)
  })

  it('should calculate average daily sleep', () => {
    expect(sleepRepo.averageDailySleep(2)).to.equal(7)
  })

  it('should calculate average ')

})