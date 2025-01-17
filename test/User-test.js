const chai = require('chai');
const expect = chai.expect;

import User from '../src/User';

describe('User', () => {

  let obj;
  let user1;

  beforeEach(() => {

    obj = {id: 3, name: "Colgan Meanor", address: "123 Coding Lane", 
      email: "cool.email@gmail.com", strideLength: 4.4, dailyStepGoal: 9001, 
      friends: [12, 19, 7]};
      
    user1 = new User(obj);

  })

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be able to instantiate a new user', () => {
    expect(user1).to.be.an.instanceof(User);
  });

  it('should be able to return the first name only', () => {
    user1.returnFirstName();
    expect(user1.returnFirstName()).to.equal('Colgan');
  });
});
