// Demonstrates the API Managemement traffic managament capabilities
// Quota policy
// Policy setup on the geolocation API on APIgee

var request = require('request')

var url = "http://acloudfan-test.apigee.net/geolocationquota"

var numCalls = 6;
console.log("Invoking Quota Test - Geolocation API ",numCalls, " times")
for(var i=0; i< numCalls ; i++){
    quotaTest('0881'+i);
}

function    quotaTest(zipcode){
    request({
        url: url,
        qs: { address: zipcode },
        method: "GET",

    }, function (error, response, body) {
        if (error) {
            var rcvd = zipcode+": "+error
            console.log(rcvd)
        } else {
            var rcvd = zipcode+": "+response.statusCode+"  "+response.statusMessage
            console.log(rcvd);
        }
    });
}