/* Javascript */

console.log("test");

var spec = 'name';
var city = 'city'
var zip = 'postal_code'
var state = 'state'

var options = {
    url: function(search) {
        return 'https://api.openbrewerydb.org/breweries?by_name=' + search;
    },

    getValue: spec,
};

$("#data-remote").easyAutocomplete(options);

var newOptions = {
    url: function(search) {
        return 'https://api.openbrewerydb.org/breweries?by_name=' + search;
    },

    getValue: city,
};

$("#city").easyAutocomplete(newOptions);

var postalCode = {
    url: function(search) {
        return 'https://api.openbrewerydb.org/breweries?by_name=' + search;
    },

    getValue: zip,
};

$("#zip").easyAutocomplete(postalCode);

var newState = {
    url: function(search) {
        return 'https://api.openbrewerydb.org/breweries?by_name=' + search;
    },

    getValue: state,
};

$("#state").easyAutocomplete(newState);


// Function to call brewery information //

function getBreweryInfo(search){
    console.log("This is the search", search);
//     var name ='';
//     var city = 'Sacramento';
//     var pCode = '';
//     var state = '';

// var param = $.param({
//     by_name:name,
//     by_city: city,
//     by_postal_code: pCode,
//     by_state: state,
//     per_page: '4'
// })
// console.log(param)

// var search = '';

// if (search !== '') {
//     var queryURL = 'https://api.openbrewerydb.org/breweries/search?query=' + search + '&' + param;
// } else {
//     var queryURL = 'https://api.openbrewerydb.org/breweries?' + param;
// }

var queryURL = "https://api.openbrewerydb.org/breweries?" + search + "&per_page=5"

console.log(queryURL);

console.log("Get Brewery Info");

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {

    console.log(response);
    $("#brewery-info").empty();

    for (i = 0; i<response.length; i++){
        var brewName = $("<h1>");
        brewName.html(response[i].name);

        var brewAddress = $("<p>");
        brewAddress.html(response[i].street);

        var brewCity = $("<p>");
        brewCity.html(response[i].city);

        var brewState = $("<p>");
        brewState.html(response[i].state);

        var brewZip = $("<p>");
        brewZip.html(response[i].postal_code);

    console.log("brew name", brewName);

    
    $("#brewery-info").append(brewName, brewAddress, brewCity, brewState, brewZip);


    console.log(queryURL);
    console.log(brewName, brewAddress, brewCity, brewState, brewZip)

    }

})
}

    

$(".smallbutton").on('click', function(event){
    
    event.preventDefault();
    searchQuery = [];
    console.log("Button clicked");
    var inputBrew = $("#data-remote").val().trim();
    if (inputBrew.length > 0){
        searchQuery.push("by_name=" + inputBrew);
    }
    var inputCity = $("#city").val().trim();
    if (inputCity.length > 0){
        searchQuery.push("by_city=" + inputCity);
    }
    var inputState = $("#state"). val().trim();
    if (inputState.length > 0){
        searchQuery.push("by_state=" + inputState);
    }
    var inputZip = $("#zip").val().trim();
    if (inputZip.length > 0){
        searchQuery.push("by_postal_code=" + inputZip);
    }
    searchQuery = searchQuery.join("&");

    getBreweryInfo(searchQuery);

})
// Open Brewery DB API - www.openbrewerydb.org






// Eventbrite API. The first ajax gets the basic info, while the seond one gets the location info. For 'VenueID' the number has to be changed  to whichever item you're looking at on the page.


var city = 'Sacramento';



var tokenEB = 'LTCWX6ZN5R4U7VWXPNCG';
var queryURLEB = 'https://www.eventbriteapi.com/v3/events/search/?token=' + tokenEB + '&location.address=' + city ;


$.ajax({
    url: queryURLEB,
    method: 'GET'
}).then(function (response) {

    // console.log(response);


})

