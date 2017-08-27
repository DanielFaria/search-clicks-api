

var elasticsearch = require('elasticsearch');


var connection = new elasticsearch.Client({
  host: [
    {
      host: '5f51696e41fa26a385469d1d9cf8d026.us-east-1.aws.found.io',
      auth: 'elastic:RGlPzo7U31DCf7c0kzK6Q8Z0',
      protocol: 'https',
      port: 9243
    }
  ]
});

function  getConnection(){
  return connection;
}

module.exports.getConnection = getConnection;
