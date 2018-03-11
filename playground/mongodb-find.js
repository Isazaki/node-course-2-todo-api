const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5aa42f7fdadbac548d7f8561')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos counts: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Users').find({name: 'Jane'}).count().then((count) => {
  //   console.log(`User count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch users...');
  // });

  db.collection('Users').find({name: 'Isazaki'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });
  
  //db.close();
});
