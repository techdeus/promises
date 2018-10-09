/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');


// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf8', (err, data) => {
    if ( err ) {
      console.log('readFile failed');
      callback(err);
    } else {
      var data = data.toString().split('\n');
      console.log('this is data: ', data[0]);
      callback(null, data[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = (url, callback) => {
  request(url, (err, statusCode) => {
    if (err) {
      statusCode = 404;
      callback(err);
    } else {
      statusCode = 200;
      callback(null, statusCode);
    } 
  });
  
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
