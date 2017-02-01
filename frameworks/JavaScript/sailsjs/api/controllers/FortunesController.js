module.exports = {

  test: function (req, res) {

    Fortune.find().exec(function(err, fortunes) {
      if (err) {return res.serverError(err);}
      fortunes.push({id: 0, message: 'Additional fortune added at request time.'});
      res.set('Server', 'Sails <sailsjs.com>');
      return res.view('fortunes', {
        fortunes: _.sortBy(fortunes, 'message')
      });
    });

  }

};
