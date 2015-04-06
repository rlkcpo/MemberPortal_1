var Client = require('node-rest-client').Client;
client = new Client();


var REST_SERVER = 'http://ec2-54-145-194-211.compute-1.amazonaws.com';



module.exports = {

    getToken: function(token, handler) {
        client.get(REST_SERVER + '/mrxuser/token/' + token, handler).on('error', function(error) {
            console.log("something went wrong on the request", error.request.options);
        });
    },

    login: function(email, password,  handler) {
        client.post(REST_SERVER + '/user/login?email=' + email + '&password=' + password, handler).on('error', function(error) {
                    console.log("something went wrong on the request", error.request.options);
                });
    },


    getMrxUser: function(email, handler) {
        client.get(REST_SERVER + '/mrxuser/email/' + email, handler).on('error', function(error) {
                    console.log("something went wrong on the request", error.request.options);
                });
    }
}
