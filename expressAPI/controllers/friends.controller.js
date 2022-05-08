const model = require('../models/friends.model');

function postFriend(req, res) {
  if (!req.body.name) {
    res.status(400).json({
      error: 'Missing friend name',
    });
  } else {
    const newFriend = {
      id: model.length,
      name: req.body.name,
    };
    model.push(newFriend);
    res.json(newFriend);
  }
}

function getFriends(req, res) {
  res.json(model);
}

function getIndividualFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'Friend not found',
    });
  }
}

module.exports = {
  getFriends,
  getIndividualFriend,
  postFriend,
};
