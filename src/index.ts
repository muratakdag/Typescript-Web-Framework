import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.on('change', () => {});
user.on('change', () => {});
user.on('laskjdf', () => {});

console.log(user);
