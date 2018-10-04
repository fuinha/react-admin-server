const {BaseService} = require('../lib/seed')

class UserService extends BaseService {
  find () {
    return this.query(`select * from users`)
  }

  add (params) {
    return this.insert(params)
  }
}

UserService.$table = 'users'

module.exports = UserService