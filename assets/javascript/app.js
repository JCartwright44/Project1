/* Javascript */

console.log("test");


// Open Brewery DB API - www.openbrewerydb.org
var param = $.param({
    search: 'Ace',
    by_brewery_type: '',
    by_city: '',
    by_country:  '',
    by_latitude:  '',
    by_longitude:  '',
    by_name:  '',
    by_phone:  '',
    by_postal_code:  '',
    by_state:  'New Jersey',
    by_street:  '',
    by_updated_at:  '',
    by_website_url:  '',
    by_limit:  ''
})
if (param.search !== ''){
    var queryURL = 'https://api.openbrewerydb.org/breweries/search?='+ param.search;
} else {
var queryURL = 'https://api.openbrewerydb.org/breweries?' + param;
}

$.ajax ({
    url: queryURL,
    method: 'GET'
}).then(function(response) {

    console.log(queryURL);
    console.log(response)
})

// Google Maps API - we need to make sure that it is actually free to use, otherwise we'll have to find another.

// var api = 'AIzaSyChEiFO_52CO3UialiJJN9aqgsjOXrr7Io'
// var queryURLMap = 'https://maps.googleapis.com/maps/api/js?key=' + api + 'callback=initMap';

// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }

// $.ajax ({
//     url: queryURLMap, 
//     method: 'Get'

// }).then(function(response) {
//     console.log(queryURLMap);
//     console.log(response)
// });

