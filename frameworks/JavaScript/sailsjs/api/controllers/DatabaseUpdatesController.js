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

      // Get a new random number between 1 and 10,000.
      var newRandomNumber = Math.floor(Math.random() * 10000) + 1;

      // Use the current item from the list to update a World record with that ID,
      // changing its `randomNumber` attribute to the new random number.
      World.update({id: id}, {randomNumber: newRandomNumber}).exec(function(err) {
        if (err) {return cb(err);}

        // Return the new World record for use in the transformed array.
        return cb(undefined, {
          id: id,
          randomNumber: newRandomNumber
        });
      });
    },

    function doneUpdating(err, results) {
      if (err) {return res.serverError(err);}
      // Respond with the transformed array.
      return res.json(results);
    });

  }

};
