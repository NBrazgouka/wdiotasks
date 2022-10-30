const UserBuilder = require ('../utils/user-builder');
const UserFactory = require ('../utils/user-factory');

const user = new UserBuilder().
  setCity('Minsk').
  setAddress('Kuprevicha 3V').
  setFirstName('Nadzeya').
  setLastName('Brazgouka').
  build();

const defaultUser = UserFactory.getDefaultUser();

module.exports = { user, defaultUser };