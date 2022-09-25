const options = require('./app/utils/options');
const UserBuilder = require('./app/utils/user-builder');
const UserFactory = require('./app/utils/user-factory');

const user = new UserBuilder()
.setPassword('159753')
.setEmail('5768862@gmail.com')
.setCity('Minsk')
.setAddress('Kuprevicha 3V')
.setFirstName('Nadzeya')
.setLastName('Brazgouka')
.setLogin('Nadzeya')
.build();

console.log(options);

console.log(user);

const anotherUser = UserFactory.getInvalidUser();

console.log(anotherUser);