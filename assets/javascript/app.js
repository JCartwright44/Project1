/* Javascript */

console.log("test");

function loadPage(){
    $("#right-side").hide();
    $("#map").hide();
}

loadPage();

// Firebase
var config = {
    apiKey: "AIzaSyB95HHvt9Y67FcllrvjcNvMjYd8bGJK518",
    authDomain: "fir-cruz.firebaseapp.com",
    databaseURL: "https://fir-cruz.firebaseio.com",
    projectId: "fir-cruz",
    storageBucket: "fir-cruz.appspot.com",
    messagingSenderId: "192419918937"
  };
  firebase.initializeApp(config);

var database = firebase.database();

//------------------//

var name = 'name';
var city = 'city'
var state = 'state'
var website = 'website'
var number = 1;
var searchString = "";
var ebCity = '';

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

            var name = response[i].name;
            var address = response[i].street + ' ' + response[i].city + ' ' + response[i].state + ' ' + response[i].postal_code + ' ';
            var url = response[i].website_url;

            var favorites = $('<button class="click" data-name="' + name + '" data-address="' + address + '" data-website="'+ url  +'">Add to Favorites</button>' + '<br/>' + '<br/>')

    
            $("#brewery-info").append(brewName, brewAddress, website, favorites);

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

        // Firebase "Favorites" on-click function //

        $(".click").on('click', function(event){
            console.log("Favorites Button Clicked");
        
            event.preventDefault();
        
            var brewName = $(this).data('name');
            var brewAddress = $(this).data('address');
            var website = $(this).data('website');
        
            database.ref().push({
                brewName:brewName,
                brewAddress:brewAddress,
                website:website
            })
        })
        
      /*  database.ref().on("child_added", function(snap){
            var save = snap.val();
        
            var $div = $('<div>');
            $div.append('<strong>' + save.brewName + '</strong>' + '<br/>');
            $div.append(save.brewAddress + '<br/>');
            $div.append(save.website + '<hr>');
        
            $("#favBrew").append($div);
        }) */
    
        ebCity = response[0].city


        //==============================================
        $('#events').html('');
        var city = ebCity;
        console.log(ebCity)
        console.log('ebCity: ' + ebCity)

        var tokenEB = 'LTCWX6ZN5R4U7VWXPNCG';
        var queryURLEB = 'https://www.eventbriteapi.com/v3/events/search/?token=' + tokenEB + '&q=brewery&location.address=' + city + '&location.within=50mi';
        console.log(queryURLEB)


        $.ajax({
            url: queryURLEB,
            method: 'GET'
        }).then(function (response) {
            console.log(response);

            var num = response.events.length - 1;
            console.log('num: ' + num);
            var one = Math.round(Math.random() * num);
            var two = Math.round(Math.random() * num);
            var three = Math.round(Math.random() * num);
            var four = Math.round(Math.random() * num);
            var five = Math.round(Math.random() * num);
            var six = Math.round(Math.random() * num);


            if (response.events[one].logo === null || response.events[one].logo.url === null) {
                var imgOne = './images/eventbrite.png';
            }else {var imgOne = response.events[one].logo.url;}

            if (response.events[two].logo === null || response.events[two].logo.url === null) {
                var imgTwo = './images/eventbrite.png';
            }else {var imgTwo = response.events[two].logo.url;}

            if (response.events[three].logo=== null || response.events[three].logo.url === null) {
                var imgThree = './images/eventbrite.png';
            }else {var imgThree = response.events[three].logo.url;}

            if (response.events[four].logo === null || response.events[four].logo.url === null) {
                var imgFour = './images/eventbrite.png';
            }else {var imgFour = response.events[four].logo.url;}

            if (response.events[five].logo === null || response.events[five].logo.url === null) {
                var imgFive = './images/eventbrite.png';
            }else {var imgFive = response.events[five].logo.url;}

            if (response.events[six].logo === null || response.events[six].logo.url === null) {
                var imgSix = './images/eventbrite.png';
            }else {var imgSix = response.events[six].logo.url;}

            console.log(imgOne);
            console.log(imgTwo);
            console.log(imgThree);
            console.log(imgFour);
            console.log(imgFive);
            console.log(imgSix);

            var titleOne = response.events[one].name.text
            var titleTwo = response.events[two].name.text
            var titleThree = response.events[three].name.text
            var titleFour = response.events[four].name.text
            var titleFive = response.events[five].name.text
            var titleSix = response.events[six].name.text

            titleOne = titleOne.substring(0,30) + '...';
            titleTwo = titleTwo.substring(0,30) + '...';
            titleThree = titleThree.substring(0,30) + '...';
            titleFour = titleFour.substring(0,30) + '...';
            titleFive = titleFive.substring(0,30) + '...';
            titleSix = titleSix.substring(0,30) + '...';

            var timeOne = response.events[one].start.local
            var timeTwo = response.events[one].start.local
            var timeThree = response.events[one].start.local
            var timeFour = response.events[one].start.local
            var timeFive = response.events[one].start.local
            var timeSix = response.events[one].start.local
            timeOne = moment(timeOne).format('h:mm a on MM/DD/YY');
            timeTwo = moment(timeTwo).format('h:mm a on MM/DD/YY');
            timeThree = moment(timeThree).format('h:mm a on MM/DD/YY');
            timeFour = moment(timeFour).format('h:mm a on MM/DD/YY');
            timeFive = moment(timeFive).format('h:mm a on MM/DD/YY');
            timeSix = moment(timeSix).format('h:mm a on MM/DD/YY');

            var newRow = $('<td id="tableOne">').append(
                $('<tr class="eventOne">').append('<img src = "' + imgOne + '" /></li>'),
                $('<tr class="eventOne">').append('Event name: ' + titleOne),
                $('<tr class="eventOne">').append('Starts: ' + timeOne),
                $('<tr class="eventTwo">').append('<img src = "' + imgTwo + '" /></li>'),
                $('<tr class="eventTwo">').append('Event name: ' + titleTwo),
                $('<tr class="eventTwo">').append('Starts: ' + timeTwo),
            )
            $('#events').append(newRow);
            var newRow = $('<td id="tableTwo">').append(
                $('<tr class="eventThree">').append('<img src = "' + imgThree + '" /></li>'),
                $('<tr class="eventThree">').append('Event name: ' + titleThree),
                $('<tr class="eventThree">').append('Starts: ' + timeThree),
                $('<tr class="eventFour">').append('<img src = "' + imgFour + '" /></li>'),
                $('<tr class="eventFour">').append('Event name: ' + titleFour),
                $('<tr class="eventFour">').append('Starts: ' + timeFour),
            )
            $('#events').append(newRow);
            var newRow = $('<td id="tableThree">').append(
                $('<tr class="eventFive">').append('<img src = "' + imgFive + '" /></li>'),
                $('<tr class="eventFive">').append('Event name: ' + titleFive),
                $('<tr class="eventFive">').append('Starts: ' + timeFive),
                $('<tr class="eventSix">').append('<img src = "' + imgSix + '" /></li>'),
                $('<tr class="eventSix">').append('Event name: ' + titleSix),
                $('<tr class="eventSix">').append('Starts: ' + timeSix),
            )
            $('#events').append(newRow);

            $('.eventOne').on('click', function(e){ 
                e.preventDefault(); 
                var url = $(this).attr('href'); 
                window.open(response.events[one].url, '_blank');
            });
            $('.eventTwo').on('click', function(e){ 
                e.preventDefault(); 
                var url = $(this).attr('href'); 
                window.open(response.events[two].url, '_blank');
            });
            $('.eventThree').on('click', function(e){ 
                e.preventDefault(); 
                var url = $(this).attr('href'); 
                window.open(response.events[three].url, '_blank');
            });
            $('.eventFour').on('click', function(e){ 
                e.preventDefault(); 
                var url = $(this).attr('href'); 
                window.open(response.events[four].url, '_blank');
            });
            $('.eventFive').on('click', function(e){ 
                e.preventDefault(); 
                var url = $(this).attr('href'); 
                window.open(response.events[five].url, '_blank');
            });
            $('.eventSix').on('click', function(e){ 
                e.preventDefault(); 
                var url = $(this).attr('href'); 
                window.open(response.events[six].url, '_blank');
            });
        })
                //==============================================

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