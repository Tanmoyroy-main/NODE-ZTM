const express = require('express');

const friendRouter = require('./routes/friends.router');
const messageRouter = require('./routes/messages.router');

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
  console.log(`${req.method} : ${req.baseUrl}${req.url} : ${respTime}ms`);
});

//The below middleware will set the request as json instead of object so that it can be used in the next post req to friends below.
app.use(express.json());

app.use('/friends', friendRouter);
app.use('/messages', messageRouter);

// app.get('/', (req, res) => {
//   res.send('GET Hello from server');
// });

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
