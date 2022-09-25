class UserFactory {
 
    static getDefaultUser() {
      return {
        username: '5768862@gmail.com',
        password: '159753'
      }
    }
   
    static getInvalidUser() {
      return {
        username: 'Invalid User',
        password: '3698741'
      }
    }
  }
   
  module.exports = UserFactory;