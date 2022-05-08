function getMessages(req, res) {
  res.send('GET Hello from messages');
}
function postMessage(req, res) {
  console.log('Updating messages');
  res.send('Hello from POST messages');
}

module.exports = {
  getMessages,
  postMessage,
};
