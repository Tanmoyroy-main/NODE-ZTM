const path = require('path');

function getMessage(req, res) {
  // res.send('GET Hello from messages');
  // res.sendFile(path.join(__dirname, '..', 'public', 'img.png'));
  res.render('messages', {
    title: 'Messages to my friends!',
    friend: 'Elon Musk',
  });
}
function postMessage(req, res) {
  console.log('Updating messages');
  res.send('Hello from POST messages');
}

module.exports = {
  getMessage,
  postMessage,
};
