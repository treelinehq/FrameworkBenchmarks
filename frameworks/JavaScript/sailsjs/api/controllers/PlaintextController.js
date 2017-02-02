var text = 'Hello, World!';
module.exports = {

  test: function(req, res) {

    // Set the content-type header as per the test specification.
    res.set('content-type', 'text/plain');

    // Send back the text string as per the test specification.
    return res.send(text);

  }

};
