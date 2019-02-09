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

    })




// Eventbrite API. The first ajax gets the basic info, while the seond one gets the location info. For 'VenueID' the number has to be changed  to whichever item you're looking at on the page.


var city = 'Sacramento';


var tokenEB = 'LTCWX6ZN5R4U7VWXPNCG';
var queryURLEB = 'https://www.eventbriteapi.com/v3/events/search/?token=' + tokenEB + '&location.address=' + city ;

$.ajax({
    url: queryURLEB,
    method: 'GET'
}).then(function (response) {

    console.log(response);

})
