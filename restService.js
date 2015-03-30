var querystring = require('querystring');
var https = require('https');


var host = 'https://ec2-54-145-194-211.compute-1.amazonaws.com:80';


performRequest = function performRequest(endpoint, method, data, success) {
    var dataString = JSON.stringify(data);
    var headers = {};
    
    if (method == 'GET') {
        endpoint += '?' + querystring.stringify(data);
    }
    else {
        headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Content-Length': dataString.length
        };
    }
    
    var options = {
        host: host,
        port: 443,
        path: endpoint,
        method: method,
        headers: headers
    };
    
    var req = https.request(options, function (res) {
        res.setEncoding('utf-8');
        
        var responseString = '';
        
        res.on('data', function (data) {
            responseString += data;
        });
        
        res.on('end', function () {
            console.log(responseString);
            var responseObject = JSON.parse(responseString);
            success(responseObject);
        });
    });
    
    req.write(dataString);
    req.end();
}

