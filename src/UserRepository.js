import User from '../src/User';


class UserRepository {
  constructor(userData) {
    this.users = userData;
    this.createdUsers = [];
  }

  createEachUser() {
    this.users.forEach((user) => {
      let uniqueUser = new User(user);
      this.createdUsers.push(uniqueUser);
    });
  }

  findUser(idNumber) {
    const result = this.createdUsers.find((user) => {
      return user.id === idNumber;
    });
    return result;
  }

  calculateAverage() {
    let average = this.createdUsers.reduce((acc, elem) => {
      let sum = acc + elem.dailyStepGoal;
      return sum;
    }, 0);
    return average / this.createdUsers.length;
  }

  returnRandomUser() {
    return Math.floor(Math.random() * this.createdUsers.length);
  }
}

export default UserRepository;
