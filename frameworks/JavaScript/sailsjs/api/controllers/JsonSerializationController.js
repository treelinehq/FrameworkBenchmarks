module.exports = {

  test: function(req, res) {

    // Send back a POJO meeting the test specification.
    return res.json({message: 'Hello, World!'});

  }

};
