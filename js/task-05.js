import users from './array.js';
// Write code under this line
const getUserWithEmail = (array, mail) =>
  array.find(({ email }) => email === mail);

console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));
