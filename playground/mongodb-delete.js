const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
  //   console.log(result);
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  // Delete all documents with the name Isazakii
  // db.collection('Users').deleteMany({name: 'Isazaki'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndDelete({
  //       _id: new ObjectID('5aa4309fd586a55d67c90ece')
  //     }).then((result) => {
  //         console.log(JSON.stringify(result, undefined, 2));
  //     });

  //db.close();
});
