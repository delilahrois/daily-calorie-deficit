const User = require(../src/data/User)

class UserRepository {
  constructor(userData) {
    userData.forEach((element) => {
      element = new User(element)        
    })

  }

}

export default UserRepository;