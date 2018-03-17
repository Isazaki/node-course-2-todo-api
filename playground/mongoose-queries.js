const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5aaced54de429557c753f56a';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Returns an array...
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos Find', todos);
// });
//
// // Use this instead...
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userId = '5aa6c1f240b5192ac0639c1b';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('Unable to find user.');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
