// LF 07/24/2019

 // global variables

var map;
var info_window;
var state_array = [];
var markers_array = [];
var distance_array = [];
var multiple_result = 0;
var zip_array = [];

// constant variables - change as needed

var LOADING = ".loading";
var NEW_LIST = "#new-list";
var OLD_LIST = "#location-list"; // if you need to change this, please also do a search for this ID and replace those as well

var SEARCH_TEXT = "#postSearch";
var LOCATIONS_FILE = "/js/locations.js";
var STARTING_POSITION = {
  lat: 39.8097343,
  lng: -98.5556199 // set the starting position and reset button of the map

};
var MAP_ZOOM = 4; // initial zoom of map - set this to a numeric value - the higher the number the more zoomed in it is.

var BOTTOM_DROPDOWNS = true; // create dropdowns below map

// Note: set the map styles in the styles.js file

function initMap() {
  buildMap();
  loadLocations();
  bindSearchButtonClick();
  bindResetButtonClick();
} // end initMap


function buildMap() {
  // builds the base state for the map
  map = new google.maps.Map(document.getElementById('map'), {
    center: STARTING_POSITION,
    zoom: MAP_ZOOM,
    scrollwheel: false,
    scaleControl: false,
    styles: MAP_STYLES,
    mapTypeControl: false
  });
} // end buildMap


function loadLocations() {
  $.ajax({
    url: LOCATIONS_FILE,
    context: document.head,
    success: function success() {
      console.log("loaded " + LOCATIONS_FILE);
    }
  });
} // end loadLocations()

function bindSearchButtonClick() {
  $("#searchBtn").click(function () {
    resetMap(map, STARTING_POSITION, info_window);
    var zipCode = document.getElementById("searchInput").value;
    getDistance(zipCode);
  });
} // end bindSearchButtonClick

function bindResetButtonClick() {
  $("#resetBtn").click(function () {
    resetMap(map, STARTING_POSITION, info_window);
  });
} // end bindResetButtonClick

function eqfeed_callback(results) {
  // generate markers from locations.js file
  info_window = new google.maps.InfoWindow();
  var numLocations = results.features.length;
  buildMarkers(numLocations, results);

  if (BOTTOM_DROPDOWNS) {
    buildStateDropdowns(state_array, numLocations, results);
  }

  clickTitle(OLD_LIST);
} // end eq-callback

function buildMarkers(numLocations, results) {
  for (var index = 0; index < numLocations; index++) {
    var location = results.features[index].properties;
    var state = location.statename.toLowerCase();
    var coords = results.features[index].geometry.coordinates;
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(coords[0], coords[1]),
      map: map,
      clickable: true,
      id: index,
      content: location.dealerName
    });
    markers_array.push(marker); // pushes each map location to the array so we can store their ID for later
    buildLeftList(location, index);
    buildStateArray(location, state_array);
    activateMarker(marker, location, coords);
  }
} // end buildMarkers

function buildLeftList(location, index) {
  var list = document.getElementById("location-list");
  var newLi = document.createElement("li");
  newLi.setAttribute("class", location.zip);
  var newH4 = "<h4>".concat(location.dealerName, "</h4>");
  var newWebsite = location.website ? "<span class='website'><a href='".concat(location.website, "' target='_blank'>").concat(location.website, "</a></span>") : "";
  var newPhone = location.phone ? "<a href='tel:".concat(location.phone, "' target='_blank' class='phone'>").concat(location.phone, "</a>") : "";
  var newAddress = "<span class='address'><i class='fa fa-map-marker'></i> ".concat(location.address, ",  <span>").concat(location.city, ", ").concat(location.state, " ").concat(location.zip, "</span></span>");
  newLi.innerHTML = "<div id='".concat(index, "'> ").concat(newH4, " ").concat(newWebsite, " ").concat(newPhone, " ").concat(newAddress, "</div>");
  list.appendChild(newLi);
} // end buildLeftList

function buildStateArray(location, state_array) {
  if (!(state_array.indexOf(location.statename) >= 0)) {
    state_array.push(location.statename);
  }

  state_array = state_array.sort();
} // end buildStateArray


function activateMarker(marker, location, coords) {
  google.maps.event.addListener(marker, "click", function (e) {
    resetMap(map, STARTING_POSITION, info_window);
    var dealerName = location.dealerName;
    var dealerAddress = "".concat(location.city, ", ").concat(location.state);
    var position = {
      lat: coords[0],
      lng: coords[1]
    };
    var markerClass = marker.id;
    var directions = directionsLink(location.dealerName, location.address, location.city, location.state, location.zip, "Directions", "lead-button");
    var website = location.website ? "<a href='".concat(location.website, "' target='_blank' class='lead-button site-button'>Visit Site</a>") : "";
    var contentString = "<div class=\"dealership-info\"><h3>".concat(dealerName, "</h3><p>").concat(dealerAddress, "</p> ").concat(directions, " ").concat(website, "</div>");
    info_window.setContent(contentString);
    info_window.open(map, marker);
    bounceAndZoom(10, marker, map, 750);
    var notClicked = $(OLD_LIST + " > li > div:not(#" + markerClass + ")").parent();
    reverseElementDisplay(notClicked, SEARCH_TEXT);
    $(SEARCH_TEXT).text("You clicked:");
  });
}; // end activateMarker

function bounceAndZoom(zoom, marker, map, seconds) {
  map.panTo(marker.getPosition());
  map.setZoom(zoom);
  marker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(function () {
    marker.setAnimation(null);
  }, seconds);
}

function buildStateDropdowns(state_array, numLocations, results) {
  for (var i = 0; i < state_array.length; i++) {
    var state = state_array[i];
    var header = "<li class='panel state-".concat(state, "'><h4 id='toggle").concat(state, "' class='state-heading'><a class='locations-toggle collapsed' data-parent='#area-locations' data-toggle='collapse' href='#locations").concat(state, "'> <span>").concat(state, "</span></a></h4>");
    var inner = "<div class='state-content collapse' id='locations".concat(state, "' role='tabpanel'><div><ul class='locations-list'></ul></div></div>");
    $("#area-locations").append(header + inner);
  }

  for (var i = 0; i < numLocations; i++) {
    var loc = results.features[i].properties;
    var statename = "state-" + loc.statename;
    var innerWebsite = loc.website ? "<a href='".concat(loc.website, "' target='_blank'>").concat(loc.dealerName, "</a>") : loc.dealerName;
    var innerAddress = "<span class='address'><span>".concat(loc.address, "</span><span>").concat(loc.city, ", ").concat(loc.state, "&nbsp;").concat(loc.zip, "</span></span>");
    var innerText = "<h4>".concat(innerWebsite, "</h4>").concat(innerAddress);
    var innerPhone = loc.phone ? "<span class='phone'><a href='tel:".concat(loc.phone, "'>").concat(loc.phone, "</a></span>") : "";
    var innerDirections = directionsLink(loc.dealerName, loc.address, loc.city, loc.state, loc.zip, "Get Directions", "");
    $("#area-locations").find(".".concat(statename, " .state-content > div > .locations-list")).append("<li class='state-location'>".concat(innerText, " ").concat(innerPhone, " ").concat(innerDirections, "</li>"));
  }
} // end buildStateDropdowns

function getDistance(search) {
  findDistance(search).then(function () {
    sortByDistance();

    if (multiple_result == 0) {
      singleResult();
    } else {
      cloneByDistance();
    }

    clickTitle(NEW_LIST);
    bounceTopResult();
  }).catch(function () {
    alert("Incorrect location or zip entered. Please try again.");
  });
} // end getDistance

function findDistance(search) {
  return new Promise(function (resolve, reject) {
    reverseElementDisplay(OLD_LIST, NEW_LIST);
    var completed = 0;
    var total = $("#location-list li").length;
    var searchRadius = parseInt($("#SearchRadius option:selected").text().replace(/[^\d.-]/g, ''));
    $("#location-list li").each(function (index) {
      var thisZip = this.className;
      zip_array.push(thisZip);
    });
    var distanceService = new google.maps.DistanceMatrixService();
    distanceService.getDistanceMatrix({
      origins: [search],
      destinations: zip_array,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      durationInTraffic: true,
      avoidHighways: false,
      avoidTolls: false
    }, function (response, status) {
      if (status !== google.maps.DistanceMatrixStatus.OK || response.rows[0].elements[0].distance == undefined) {
        reverseElementDisplay(NEW_LIST, OLD_LIST);
        reject(console.log('Error:', status));
      } else {
        $(SEARCH_TEXT).css("display", "block");

        for (var i = 0; i < total; i++) {
          var distanceText = parseInt(response.rows[0].elements[i].distance.text.replace(/[^\d.-]/g, ''));
          distance_array.push(distanceText);
        }

        for (var i = 0; i < total; i++) {
          var current = $("#location-list > li")[i];
          $(current).attr("data-distance", distance_array[i]);

          if (distance_array[i] < searchRadius) {
            multiple_result++;
          }

          completed += 1;
        }

        if (completed == total) {
          resolve("complete");
        }
      }
    });
  });
} // end findDistance

function sortByDistance() {
  var $wrapper = $(OLD_LIST);
  $wrapper.find('li').sort(function (a, b) {
    return +a.dataset.distance - +b.dataset.distance;
  }).appendTo($wrapper);
} // end sortByDistance

function singleResult() {
  $(LOADING).css("display", "none");
  var newList = $(NEW_LIST + " li");
  var firstChild = $(OLD_LIST + " li:first-child");
  var dist = firstChild.attr("data-distance");
  $(firstChild).clone().appendTo(NEW_LIST);
  $(SEARCH_TEXT).text("The closest dealership is " + dist + " miles away.");
} // end singleResult

function cloneByDistance() {
  $(LOADING).css("display", "none");
  $(OLD_LIST + " > li").each(function (index) {
    var thisLi = $(this);
    var thisDist = parseInt(thisLi.attr("data-distance"));
    var thisSearchDist = parseInt($("#SearchRadius option:selected").text().replace(/[^\d.-]/g, ''));

    if (thisDist < thisSearchDist) {
      $(thisLi).clone().appendTo(NEW_LIST);
    }
  });
} // end cloneByDistance

function bounceTopResult() {
  var top = $(NEW_LIST + " > li:nth-child(2) > div > h4");
  var id = $(top).parent().attr('id');
  var thisMarker = markers_array[id];
  bounceAndZoom(8, thisMarker, map, 750);
} // end bounceTopResult

function directionsLink(name, address, city, state, zip, text, class_name) {
  return "<a href=\"https://www.google.com/maps/dir/?api=1&destination=".concat(name, "&nbsp;").concat(address, "&nbsp;").concat(city, "&nbsp;").concat(state, ", ").concat(zip, "/@\" class='").concat(class_name, "' target=\"_blank\">").concat(text, "</a>");
}

function clickTitle(listID) {
  $(listID + ' > li > div > h4').on('click', function () {
    var id = $(this).parent().attr('id');
    google.maps.event.trigger(markers_array[id], 'click');
  });
} // end clickTitle

function reverseElementDisplay(hideElem, showElem) {
  $(hideElem).css("display", "none");
  $(showElem).css("display", "block");
} // end reverseElementDisplay

function resetMap(map, starting, info_window) {
  distance_array = [];
  zip_array = [];
  multiple_result = 0;
  $(NEW_LIST).find('*').not(LOADING).remove();
  reverseElementDisplay(NEW_LIST, OLD_LIST);
  reverseElementDisplay(SEARCH_TEXT, LOADING);
  $(OLD_LIST + " > li").css("display", "block");
  map.setCenter(starting);
  map.setZoom(MAP_ZOOM);
  info_window.close();
  $(SEARCH_TEXT).text("The closest dealerships are:");
} // end resetMap
