import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';

describe('User Repository', () => {
  let userRepo;
  let users;


  beforeEach(() => {
    // userRepo = new UserRepository(users);
    // userRepo.createEachUser();
    // userRepo.findUser(1);
    users = [
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
      },
    ];
    userRepo = new UserRepository(users);
    userRepo.createEachUser();
    userRepo.findUser(1);
  });

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should instantiate a new user repository', function () {
    expect(userRepo).to.be.an.instanceOf(UserRepository);
  });

  it('should accept a parameter', function() {
    expect(userRepo.users).to.equal(users);
  });

  it('should create instances of User', function () {
    expect(userRepo.createdUsers[0]).to.be.an.instanceOf(User);
  });

  it('should return User data based on the user ID', function() {
    expect(userRepo.findUser(1)).to.deep.equal(userRepo.createdUsers[0]);
  });

  it('should be able to calculate average step goal of all users', function() {
    expect(userRepo.calculateAverage()).to.equal(6400);
  });
});
