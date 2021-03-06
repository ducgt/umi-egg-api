'use strict';
const Service = require('egg').Service;

class UserDeleteService extends Service {
  async index(obj) {
    let result = await this.app.mysql.delete('react_user_info', {
      ...obj
    });
    return result;
  }
  async userRole(obj) {
    let result = await this.app.mysql.delete('react_user_role', {
      ...obj
    });
    return result;
  }
}
module.exports = UserDeleteService;
