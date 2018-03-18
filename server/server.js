var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    {ObjectId}  = require('mongodb'),
    {mongoose}  = require('./db/mongoose'),
    {Todo}      = require('./models/todo'),
    {User}      = require('./models/user')

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e)
  });
});

// GET /todos/1234324
app.get('/todos/:id', (req, res) => {
  // res.send(req.params); // Postman testing...
  var id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
})

app.listen(port, () => {
  console.log(`Listening to Music on port ${port}`);
});

module.exports = {app};
