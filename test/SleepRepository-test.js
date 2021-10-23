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
        "date": "2019/06/16",
        "hoursSlept": 4.1,
        "sleepQuality": 3.8
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      },
      {
        "userID": 3,
        "date": "2019/06/16",
        "hoursSlept": 10.7,
        "sleepQuality": 3.4
      },
      {
        "userID": 4,
        "date": "2019/06/16",
        "hoursSlept": 8.3,
        "sleepQuality": 4.5
      },
      {
        "userID": 5,
        "date": "2019/06/16",
        "hoursSlept": 7.4,
        "sleepQuality": 2.4
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 8,
        "sleepQuality": 2.6
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "hoursSlept": 5.7,
        "sleepQuality": 3
      },
      {
        "userID": 3,
        "date": "2019/06/17",
        "hoursSlept": 5.3,
        "sleepQuality": 4.9
      },
      {
        "userID": 4,
        "date": "2019/06/17",
        "hoursSlept": 5.7,
        "sleepQuality": 1.1
      },
      {
        "userID": 5,
        "date": "2019/06/17",
        "hoursSlept": 10.5,
        "sleepQuality": 3.7
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 10.4,
        "sleepQuality": 3.1
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "hoursSlept": 10.8,
        "sleepQuality": 3.2
      },
      {
        "userID": 3,
        "date": "2019/06/18",
        "hoursSlept": 9.8,
        "sleepQuality": 2.6
      },
      {
        "userID": 4,
        "date": "2019/06/18",
        "hoursSlept": 5.9,
        "sleepQuality": 2.5
      },
      {
        "userID": 5,
        "date": "2019/06/18",
        "hoursSlept": 5.2,
        "sleepQuality": 4.1
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "hoursSlept": 10.7,
        "sleepQuality": 1.2
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "hoursSlept": 9.6,
        "sleepQuality": 2.5
      },
      {
        "userID": 3,
        "date": "2019/06/19",
        "hoursSlept": 7.2,
        "sleepQuality": 3.4
      },
      {
        "userID": 4,
        "date": "2019/06/19",
        "hoursSlept": 5.2,
        "sleepQuality": 2.3
      },
      {
        "userID": 5,
        "date": "2019/06/19",
        "hoursSlept": 4.8,
        "sleepQuality": 3.4
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "hoursSlept": 9.3,
        "sleepQuality": 1.2
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "hoursSlept": 10.1,
        "sleepQuality": 2.4
      },
      {
        "userID": 3,
        "date": "2019/06/20",
        "hoursSlept": 9.4,
        "sleepQuality": 1.2
      },
      {
        "userID": 4,
        "date": "2019/06/20",
        "hoursSlept": 8.3,
        "sleepQuality": 1.9
      },
      {
        "userID": 5,
        "date": "2019/06/20",
        "hoursSlept": 10.1,
        "sleepQuality": 3.5
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

  it('should calculate average daily hrs slept by user ID', () => {
    expect(sleepRepo.returnDailyAvg(4)).to.equal(7.057142857142858)
  })

  it('should calculate average daily sleepQuality by user ID', () => {
    expect(sleepRepo.returnDailyAvg(1, 'sleepQuality')).
      to.equal(2.614285714285714)
  })

  it('should find hours slept on a given date', () => {
    expect(sleepRepo.returnByDate(4, '2019/06/15', 'hoursSlept')).to.equal(5.4)
  })

  it('should find sleep quality on a given date', () => {
    expect(sleepRepo.returnByDate(4, '2019/06/15', 'sleepQuality')).to.equal(3)
  })

  it('should return hours slept each day in a given week', () => {
    expect(sleepRepo.returnWeek(1, "2019/06/15", "2019/06/21", 'hoursSlept')).
      to.deep.equal([6.1, 4.1, 8, 10.4, 10.7, 9.3, 7.8])
  })

  it('should return sleep quality each day in a given week', () => {
    expect(sleepRepo.returnWeek(1, "2019/06/15", "2019/06/21", 'sleepQuality')).
      to.deep.equal([2.2, 3.8, 2.6, 3.1, 1.2, 1.2, 4.2])
  })

  it('should return the total average sleep quality of all users', () => {
    expect(sleepRepo.totalAvgSleepQual()).to.equal(3.1257142857142868)
  })

  it('should return hours slept every day for the last week', () => {
    // console.log(sleepRepo.returnUserSleepThisWeek(1, '2019/06/21'))
    expect(sleepRepo.returnUserSleepThisWeek(1, '2019/06/21')).to.deep.equal([
  { date: '2019/06/15', sleeps: 6.1, quality: 2.2 },
  { date: '2019/06/16', sleeps: 4.1, quality: 3.8 },
  { date: '2019/06/17', sleeps: 8, quality: 2.6 },
  { date: '2019/06/18', sleeps: 10.4, quality: 3.1 },
  { date: '2019/06/19', sleeps: 10.7, quality: 1.2 },
  { date: '2019/06/20', sleeps: 9.3, quality: 1.2 },
  { date: '2019/06/21', sleeps: 7.8, quality: 4.2 }
])
  })

})
