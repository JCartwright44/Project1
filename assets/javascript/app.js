/* Javascript */

console.log("test");

function loadPage(){
    $("#right-side").hide();
    $("#map").hide();
}

loadPage();

var name = 'name';
var city = 'city'
var state = 'state'
var website = 'website'
var number = 1;
var searchString = "";

var options = {
    url: function(search) {
        return 'https://api.openbrewerydb.org/breweries?by_name=' + search;
    },

    getValue: name,
};

$("#data-remote").easyAutocomplete(options);

var newOptions = {
    url: function(search) {
        return 'https://api.openbrewerydb.org/breweries?by_city=' + search;
    },

    getValue: city,
};

$("#city").easyAutocomplete(newOptions);

var newState = {
    url: function(search) {
        return 'https://api.openbrewerydb.org/breweries?by_state=' + search;
    },

    getValue: state,
};

$("#state").easyAutocomplete(newState);


// Function to call brewery information //

function getBreweryInfo(search){
    console.log("This is the search", search);
    

var queryURL = "https://api.openbrewerydb.org/breweries?" + search + "&page=" + number + "&per_page=5"

console.log(queryURL);

console.log("Get Brewery Info");

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {

    console.log(response);
    $("#brewery-info").empty();
    $("#right-side").show();
    $("#map").show();

    for (i = 0; i<response.length; i++){
        var brewName = $("<h1>");
        brewName.html(response[i].name);

        var brewAddress = $('<address>'
        + response[i].street + '<br/>'
        + response[i].city + ', ' 
        + response[i].state +', ' 
        + response[i].postal_code 
        + '</address>');

        var website = $('<a id="website">');
        website.attr("href", response[i].website_url);
        website.html(response[i].website_url + '<br/>' + '<br/>');

    
    $("#brewery-info").append(brewName, brewAddress, website);

    var resultsBtn = $('<button id="results">See More Results</button>');
    var lastPage = $('<button id="last-page">Previous Results</button>');
    resultsBtn.show();

    }

    $("#brewery-info").append(lastPage);
    $("#brewery-info").append(resultsBtn);
    
    

    $("#results").on('click', function(){
        lastPage.show();
        number++;
        getBreweryInfo(searchString);

        console.log("Button Clicked");
    })

    $("#last-page").on('click', function(){
        number--;
        getBreweryInfo(searchString);

        console.log("Button Clicked");
    })
})
}
    

$(".smallbutton").on('click', function(event){
    var lastPage = $("#last-page");
    lastPage.hide();
    
    event.preventDefault();
    searchQuery = [];
    console.log("Button clicked");
    var inputBrew = $("#data-remote").val().trim();
    if (inputBrew.length > 0){
        searchQuery.push("by_name=" + inputBrew + "&sort=type,name");
    }
    var inputCity = $("#city").val().trim();
    if (inputCity.length > 0){
        searchQuery.push("by_city=" + inputCity + "&sort=type,name");
    }
    var inputState = $("#state"). val().trim();
    if (inputState.length > 0){
        searchQuery.push("by_state=" + inputState + "&sort=type,name");
    }

    searchString = searchQuery.join("&");

    getBreweryInfo(searchString);

    $("#data-remote").val('');
    $("#city").val('');
    $("#state").val('');

})
// Open Brewery DB API - www.openbrewerydb.org






// Eventbrite API. The first ajax gets the basic info, while the seond one gets the location info. For 'VenueID' the number has to be changed  to whichever item you're looking at on the page.

var one = Math.round(Math.random() * 49);
var two = Math.round(Math.random() * 49);
var three = Math.round(Math.random() * 49);
var four = Math.round(Math.random() * 49);
var five = Math.round(Math.random() * 49);
var six = Math.round(Math.random() * 49);

console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);

var city = 'Lake Tahoe';
var city2 = city.replace(/ /g,"+");
var searchE = '';
var searchE2 = searchE.replace(/ /g,"+");


var tokenEB = 'LTCWX6ZN5R4U7VWXPNCG';
var queryURLEB = 'https://www.eventbriteapi.com/v3/events/search/?token=' + tokenEB + '&q=brewery+' + searchE2;


$.ajax({
    url: queryURLEB,
    method: 'GET'
}).then(function (response) {
    console.log(response);

var imgOne = response.events[one].logo.url;
var imgTwo = response.events[two].logo.url;
var imgThree = response.events[three].logo.url;
var imgFour = response.events[four].logo.url;
var imgFive = response.events[five].logo.url;
var imgSix = response.events[six].logo.url;





var newRow = $('<td>').append(
    $('<tr>').append('<img src = "' + imgOne + '" /></li>'),
    $('<tr>').append('Event name: ' + response.events[one].name.text),
    $('<tr>').append('Starts: ' + response.events[one].start.local),
    $('<tr>').append('<img src = "' + imgTwo + '" /></li>'),
    $('<tr>').append('Event name: ' + response.events[two].name.text),
    $('<tr>').append('Starts: ' + response.events[two].start.local),
)
$('#events').append(newRow);
var newRow = $('<td>').append(
    $('<tr>').append('<img src = "' + imgThree + '" /></li>'),
    $('<tr>').append('Event name: ' + response.events[three].name.text),
    $('<tr>').append('Starts: ' + response.events[three].start.local),
    $('<tr>').append('<img src = "' + imgFour + '" /></li>'),
    $('<tr>').append('Event name: ' + response.events[four].name.text),
    $('<tr>').append('Starts: ' + response.events[four].start.local),
)
$('#events').append(newRow);
var newRow = $('<td>').append(
    $('<tr>').append('<img src = "' + imgFive + '" /></li>'),
    $('<tr>').append('Event name: ' + response.events[five].name.text),
    $('<tr>').append('Starts: ' + response.events[five].start.local),
    $('<tr>').append('<img src = "' + imgSix + '" /></li>'),
    $('<tr>').append('Event name: ' + response.events[six].name.text),
    $('<tr>').append('Starts: ' + response.events[six].start.local),
)
$('#events').append(newRow);

})
