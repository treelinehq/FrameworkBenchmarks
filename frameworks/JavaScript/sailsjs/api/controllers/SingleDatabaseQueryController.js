module.exports = {

  test: function (req, res) {

    var id = Math.floor(Math.random() * 10000) + 1;
    World.findOne({id: id}).exec(function(err, row) {
      if (err) {return res.serverError(err);}
      res.set('Server', 'Sails <sailsjs.com>');
      return res.json(row);
    });

  }

};
