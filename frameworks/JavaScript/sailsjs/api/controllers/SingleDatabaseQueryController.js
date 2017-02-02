module.exports = {

  test: function (req, res) {

    // Get a random number between 1 and 10,000.
    var id = Math.floor(Math.random() * 10000) + 1;

    // Retrieve the World record with that ID.
    World.findOne({id: id}).exec(function(err, row) {
      if (err) {return res.serverError(err);}
      // Respond with the retrieved record.
      return res.json(row);
    });

  }

};
