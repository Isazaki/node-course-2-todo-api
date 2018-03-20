const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5ab0ed1aa7986c2024e2e99f'}).then((todo) => {

});
Todo.findByIdAndRemove('5ab0ed1aa7986c2024e2e99f').then((todo) => {
  console.log(todo);
})
