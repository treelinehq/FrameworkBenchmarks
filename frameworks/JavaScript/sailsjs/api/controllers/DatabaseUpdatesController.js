module.exports = {

  test: function (req, res) {

    var numQueries = req.param('queries');
    if (isNaN(parseInt(numQueries)) || numQueries < 1) {
      numQueries = 1;
    } else if (numQueries > 500) {
      numQueries = 500;
    }

    var ids = _.map(_.range(numQueries), function() {
      return Math.floor(Math.random() * 10000) + 1;
    });

    async.map(ids, function(id, cb) {
      var newRandomNumber = Math.floor(Math.random() * 10000) + 1;
      World.update({id: id}, {randomNumber: newRandomNumber}).exec(function(err) {
        if (err) {return cb(err);}
        return cb(undefined, {
          id: id,
          randomNumber: newRandomNumber
        });
      });
    }, function(err, results) {
      if (err) {return res.serverError(err);}
      res.set('Server', 'Sails <sailsjs.com>');
      return res.json(results);
    });

  }

};
