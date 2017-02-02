module.exports = {

  test: function (req, res) {

    // Retrieve all of the Fortune records.
    Fortune.find().exec(function(err, fortunes) {
      if (err) {return res.serverError(err);}

      // Add an additional record to the array, as per the test specifications.
      fortunes.push({id: 0, message: 'Additional fortune added at request time.'});

      // Render the `fortunes.ejs` view, using the `fortunes` array (sorted by message)
      // as a local variable in the template.
      return res.view('fortunes', {
        fortunes: _.sortBy(fortunes, 'message')
      });

    });

  }

};
