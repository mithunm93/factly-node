var express = require('express');
var bodyParser = require('body-parser');
var CitySDK = require('./city-sdk-api/citysdk.js');
var census = require('./city-sdk-api/citysdk.census.js');
var private = require('./private');

var sdk = new CitySDK(); //Create the CitySDK Instance
census = sdk.modules.census; //Create an instance of the module
census.enable(private.apiKey);

var request = {
  "level": "state",
  "state": "AK",
  "sublevel": true,
  "variables": [
            "B24124_407E",
            "age",
            "commute_time",
            "commute_time_carpool",
            "commute_time_other"
            ]
}


var callback = function(response) {
  // Do something with the response
  console.log("yo");
};

// Make the request
census.GEORequest(request, callback);

