const faker = require('faker');

let usersList = [];

for (let i = 0; i < 6; i++) {
  const userObj = {
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: 'passwrod',
    createdAt: new Date(),
    updatedAt: new Date()
  };
  usersList.push(userObj);
}

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Users', usersList.concat([{
      id: faker.random.uuid(),
      firstName: 'Ezra',
      lastName: 'Keddell',
      email: 'ezrakeddell@gmail.com',
      password: 'passwrod',
      createdAt: new Date(),
      updatedAt: new Date()
    }]), {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};