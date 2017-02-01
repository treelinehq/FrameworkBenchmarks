var text = 'Hello, World!';
module.exports = {

  test: function(req, res) {

    res.set('Server', 'Sails <sailsjs.com>');
    res.set('content-type', 'text/plain');
    return res.send(text);

  }

};
