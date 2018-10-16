var friends = require('../data/friends.js');
module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });
  app.post('/api/friends', function (req, res) {
    var delta = 40;
    var matchName = '';
    var matchPic = '';
    friends.forEach(function (friend) {
      var matchedScoresArray = [];
      var totalDelta = 40;
      function add(total, num) {
        return total + num;
      }
      for (var i = 0; i < friend.scores.length; i++) {
        matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));
      }
      totalDelta = matchedScoresArray.reduce(add, 0);
      if (totalDelta < delta) {
        delta = totalDelta;
        matchName = friend.name;
        matchPic = friend.photo;
      }
    });
    res.json({
      name: matchName,
      photo: matchPic
    });
    friends.push(req.body);
  });
}
