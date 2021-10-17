const User = require("../src/User")

class UserRepository {
  constructor(userData) {
    this.users = userData.forEach((element) => {
      element = new User(element)        
    })
    return this.users;
  }
}

export default UserRepository;