import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
const userData = require('../src/data/users')

describe('User Repository', () => {
  let userRepo;


  beforeEach(() => {
    userRepo = new UserRepository(userData);
  });

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  })

  it('should instantiate a new user repository', function () {
    expect(userRepo).to.be.an.instanceOf(UserRepository);
  })

});
  


