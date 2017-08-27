

var elasticsearch = require('elasticsearch');


var connection = new elasticsearch.Client({
  host: [
    {
      host: 'c9a045f17b7a45a70b5a7a4a686c54f4.us-east-1.aws.found.io',
      auth: 'elastic:fcT4uy4uqn0sL7BnE6wShWrq',
      protocol: 'https',
      port: 9243
    }
  ]
});

function  getConnection(){
  return connection;
}

module.exports.getConnection = getConnection;
