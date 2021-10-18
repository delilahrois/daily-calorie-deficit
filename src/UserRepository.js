const User = require("../src/User.js")
const userData = require('/src/data/users.js')

class UserRepository {
  constructor(userData) {
    this.users = userData;
    this.createdUsers = [];
  }

  createEachUser() {
    this.users.forEach((user) => {
      let uniqueUser = new User(user);
      this.createdUsers.push(uniqueUser)
    })
  }
}

export default UserRepository;

