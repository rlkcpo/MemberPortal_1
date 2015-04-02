var Client = require('node-rest-client').Client;
client = new Client();


var REST_SERVER = 'http://ec2-54-145-194-211.compute-1.amazonaws.com';

module.exports = {
    
    getMrxUser: function (email, handler) {
        client.get(REST_SERVER + '/mrxuser/email/' + email, handler);
    }
}
