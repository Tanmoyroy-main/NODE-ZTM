const express = require('express');

const messagesController = require('./controllers/messages.controller');
const friendsController = require('./controllers/friends.controller');

const app = express();

const PORT = 3000;

//use of middleware
//app.use(function(req,res,next){

//})

//writing middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const respTime = Date.now() - start;
  console.log(`${req.method} : ${req.url} : ${respTime}ms`);
});

//The below middleware will set the request as json instead of object so that it can be used in the next post req to friends below.
app.use(express.json());

app.post('/friends', friendsController.postFriend);

app.get('/friends', friendsController.getFriends);

//parameterized route with err handling using express
app.get('/friends/:friendId', friendsController.getIndividualFriend);

app.get('/', (req, res) => {
  res.send('GET Hello from server');
});

app.get('/messages', messagesController.getMessages);

app.post('/messages', messagesController.getMessages);

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
