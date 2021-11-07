import { expect } from 'chai';
import ActivityRepository from '../src/ActivityRepository';
import UserRepository from '../src/UserRepository';
// import User from '../src/User';

describe('ActivityRepository', () => {
  let userRepo;
  let activityRepo;
  let activities;
  let users;

  beforeEach(() => {

    userRepo = [
      {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          9,
          18,
          24,
          19
        ]
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          19,
          11,
          42,
          33
        ]
      },
      {
        "id": 4,
        "name": "Mae Connelly",
        "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
        "email": "Marcos_Pollich@hotmail.com",
        "strideLength": 3.1,
        "dailyStepGoal": 4000,
        "friends": [
          48,
          7,
          44,
          8
        ]
      },
      {
        "id": 5,
        "name": "Erick Schaden",
        "address": "514 Mayert Walk, Jordaneside SC 55023-6523",
        "email": "Vanessa_Gerhold@gmail.com",
        "strideLength": 3.1,
        "dailyStepGoal": 8000,
        "friends": [
          13,
          44,
          49,
          33,
          10
        ]
      }
    ];

    activityRepo = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      },
      {
        "userID": 4,
        "date": "2019/06/15",
        "numSteps": 3486,
        "minutesActive": 114,
        "flightsOfStairs": 32
      },
      {
        "userID": 5,
        "date": "2019/06/15",
        "numSteps": 11374,
        "minutesActive": 213,
        "flightsOfStairs": 13
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numSteps": 6637,
        "minutesActive": 175,
        "flightsOfStairs": 36
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numSteps": 14329,
        "minutesActive": 168,
        "flightsOfStairs": 18
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numSteps": 4419,
        "minutesActive": 165,
        "flightsOfStairs": 33
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numSteps": 8429,
        "minutesActive": 275,
        "flightsOfStairs": 2
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numSteps": 14478,
        "minutesActive": 140,
        "flightsOfStairs": 12
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numSteps": 6760,
        "minutesActive": 135,
        "flightsOfStairs": 6
      }
    ];

    users = new UserRepository(userRepo);
    users.createEachUser();
    activities = new ActivityRepository(activityRepo);
  });

  it('should be a function', () => {
    expect(ActivityRepository).to.be.a('function');
  });

  it('should instantiate a new activity repository', () => {
    expect(activities).to.be.an.instanceOf(ActivityRepository);
  });

  it('should calculate miles walked in a day', () => {
    expect(activities.returnMilesByDate(1, 4.3, "2019/06/15")).to.equal(2.91)
  });

  it('should return the number of steps per day', () => {
    expect(activities.returnStepsPerDay(1, "2019/06/15")).to.equal(3577)
  })

  it('should be able to calculate how many minutes active for a given day', () => {
    expect(activities.returnActiveMinutes(1, '2019/06/15')).to.equal(140)
  });

  it('should calculate the average minutes active for the past week', () => {
    expect(activities.returnAverageActive(1, "2019/06/21")).to.equal(171.14)
  });

  it('should determine if a step goal was reached for a given day', () => {
    expect(activities.returnDailyGoal(1, 10000, "2019/06/21")).to.equal(false)
  });

  it('should be able to find all days the step goal was exceeded', () => {
    expect(activities.returnGoalsMet(1, 10000)).to.deep.equal(["2019/06/17","2019/06/20"])
  });

  it('should be able to return the highest stair climb record', () => {
    expect(activities.returnHighestStairs(1)).to.equal(36)
  });

  it('should return the average stairs, steps, and minutes for all users for a specified date', () => {
    expect(activities.returnAllAverages("2019/06/15")).to.deep.equal({stairs: 21, steps: 6027, minutes: 144})
  })
});
