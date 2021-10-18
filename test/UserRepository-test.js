import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
const userData = require('../src/data/users');
import User from '/src/User';

describe('User Repository', () => {
  let userRepo;


  beforeEach(() => {
    userRepo = new UserRepository(userData);
    userRepo.createEachUser();
  });

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should instantiate a new user repository', function () {
    expect(userRepo).to.be.an.instanceOf(UserRepository);
  });

  it('should accept a parameter', function() {
    expect(userRepo.users).to.equal(userData);
  });
  
  it('should create instances of User', function () {
    expect(userRepo.createdUsers[0]).to.be.an.instanceOf(User);
  });
});
  


