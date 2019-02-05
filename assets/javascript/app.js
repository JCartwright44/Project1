/* Javascript */

console.log("test");


// Open Brewery DB API - www.openbrewerydb.org
var search = '';
var brewery_type = '';
var city = '';
var country = '';
var id = '';
var latitude  = '';
var longitude = '';
var name = '';
var phone = '';
var postal_code = '';
var state = '';
var street = '';
var updated_at = '';
var website_url = '';
var limit = '';

var queryURL = 'https://api.openbrewerydb.org/breweries?';

$.ajax ({
    url: queryURL,
    method: 'GET'
}).then(function(response) {

    console.log(queryURL);
    console.log(response)
})

// Google Maps API - we need to make sure that it is actually free to use, otherwise we'll have to find another.

var api = 'AIzaSyChEiFO_52CO3UialiJJN9aqgsjOXrr7Io'
var queryURLMap = 'https://maps.googleapis.com/maps/api/js?key=' + api + 'callback=initMap';

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

$.ajax ({
    url: queryURLMap, 
    method: 'Get'

}).then(function(response) {
    console.log(queryURLMap);
    console.log(response)
});

