module.exports = {

  test: function(req, res) {

    // The required response for this test is a JSON-stringified
    // version of the object:
    // {
    //   "message": "Hello, World!"
    // }

    res.set('Server', 'Sails <sailsjs.com>');
    return res.json({message: 'Hello, World!'});

  }

};
