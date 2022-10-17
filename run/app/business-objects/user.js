const UserBuilder = require ('../utils/user-builder');
const UserFactory = require ('../utils/user-factory');

const user = new UserBuilder ({
    firstname: 'Nadzeya',
    lastname: 'Brazgouka',
    street: 'Kuprevicha 3V',
    city: 'Minsk'
});

const defaultUser = UserFactory.getDefaultUser();

module.exports = user;
module.exports = defaultUser;