/* Javascript */

console.log("test");


// Open Brewery DB API - www.openbrewerydb.org
var city = 'Sacramento';
var pCode = '';
var state = '';

var param = $.param({
    by_city: city,
    by_postal_code: pCode,
    by_state: state,
    per_page: '4'
})
console.log(param)

var search = '';

if (search !== '') {
    var queryURL = 'https://api.openbrewerydb.org/breweries/search?query=' + search + '&' + param;
} else {
    var queryURL = 'https://api.openbrewerydb.org/breweries?' + param;
}



$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {

    console.log(queryURL);
    console.log(response)
    // for (var i = 0; i < response.length; i++) {
    //     var newRow = $('<tr>').append(
    //         $('<td>').text(response[i].name),
    //         $('<td>').text(response[i].street),
    //         $('<td>').text(response[i].city + ', ' + response[i].country ),
    //         $('<td>').text(response[i].phone),
    //     )
    //     $('#list').append(newRow);
    })


// });

// Eventbrite API. The first ajax gets the basic info, while the seond one gets the location info. For 'VenueID' the number has to be changed  to whichever item you're looking at on the page.


var city = 'Sacramento';


var tokenEB = 'LTCWX6ZN5R4U7VWXPNCG';
var queryURLEB = 'https://www.eventbriteapi.com/v3/events/search/?location.address=' + city + '&token=' + tokenEB + '&limit=5';

$.ajax({
    url: queryURLEB,
    method: 'GET'
}).then(function (response) {

    console.log(response);

    // var secretTokenEB = 'GFBRL2DNRQJRRLKXRXK3'
    // var venueID = response.events[32].venue_id;
    // console.log('Venue' + venueID);
    // var queryURLEBVenue = 'https://www.eventbriteapi.com/v3/venues/' + venueID + '/?token=' + secretTokenEB;

    // $.ajax({
    //     url: queryURLEBVenue,
    //     method: 'GET'
    // }).then(function (response2) {
    //     console.log(response2)
    // })
})

// var secretTokenEB = 'GFBRL2DNRQJRRLKXRXK3'

// for (var i = 0; i < ; i++) {
//     var queryURLEBVenue = 'https://www.eventbriteapi.com/v3/venues/' + i + '/?token=' + secretTokenEB;
//     $.ajax({
//         url: queryURLEBVenue,
//         method: 'GET'
//     }).then(function (response2) {
//         console.log(response2)
//     })
// }




// Leaflet map info

// var mymap = $.map('mapid').setView([51.505, -0.09], 13);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamNhcnR3cmlnaHQ0NCIsImEiOiJjanJ2aGVoMjIwMjNrNDNwOXhpYXI5a2gyIn0.PEkZoUC1JOqEIJKW4ht-SA', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'pk.eyJ1IjoiamNhcnR3cmlnaHQ0NCIsImEiOiJjanJ2aGVoMjIwMjNrNDNwOXhpYXI5a2gyIn0.PEkZoUC1JOqEIJKW4ht-SA'
// }).addTo(mymap);

