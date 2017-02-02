module.exports = {

  test: function (req, res) {

    // Get the number of queries to run from the request param.
    var numQueries = req.param('queries');

    // If numQueries is NaN, or <1, set it to 1.
    if (isNaN(parseInt(numQueries)) || numQueries < 1) {
      numQueries = 1;
    }
    // If numQueries is > 500, set it to 500.
    else if (numQueries > 500) {
      numQueries = 500;
    }

    // Get a numQueries-length array of random numbers between 1 and 10,000.
    var ids = _.map(_.range(numQueries), function() {
      return Math.floor(Math.random() * 10000) + 1;
    });

    // Transform the array of random numbers.
    async.map(ids, function(id, cb) {

      // Retrieve the World record whose ID matches the current array item,
      // and return it as an item in the transformed array.
      World.findOne({id: id}).exec(cb);
    },

    function doneQuerying(err, results) {
      if (err) {return res.serverError(err);}
      // Respond with the transformed array.
      return res.json(results);
    });

  }

};
