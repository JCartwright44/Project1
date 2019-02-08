/* Javascript */

console.log("test");


// Open Brewery DB API - www.openbrewerydb.org

var param = $.param({
    by_city: 'Sacramento',
    by_postal_code: '',
    by_state: '',
    per_page: '5'
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
})

// Eventbrite API. The first ajax gets the basic info, while the seond one gets the location info. For 'VenueID' the number has to be changed  to whichever item you're looking at on the page.

var tokenEB = 'LTCWX6ZN5R4U7VWXPNCG';
var queryURLEB = 'https://www.eventbriteapi.com/v3/events/search/?token=' + tokenEB;

$.ajax({
    url: queryURLEB,
    method: 'GET'
}).then(function (response) {

    console.log(response);
    var secretTokenEB = 'GFBRL2DNRQJRRLKXRXK3'
    var venueID = response.events[32].venue_id;
    console.log('Venue' + venueID);
    var queryURLEBVenue = 'https://www.eventbriteapi.com/v3/venues/' + venueID + '/?token=' + secretTokenEB;

    $.ajax({
        url: queryURLEBVenue,
        method: 'GET'
    }).then(function (response2) {
        console.log(response2)
    })
})
