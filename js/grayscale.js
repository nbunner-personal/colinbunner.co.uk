/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Countdown Timer
var wedding = new Date(); 
new Date(2015, 7-1, 25)
wedding = new Date(2015, 7-1, 25, 13, 0); 
$('.countdownTimer').countdown({until: wedding});

// Google Maps Scripts
// When the window has finished loading create our google map below

google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var windowWidth = $(window).width();
    if ( windowWidth < 330) {
        var zoomLevel = 11;
        isMobile = true;
    } else if(windowWidth < 801)  {
        var zoomLevel = 12;
        
    } else  {
        
        var zoomLevel = 13;
    }
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: zoomLevel,


        

        // The latitude and longitude to center the map (always required)
        //center: new google.maps.LatLng(40.6700, -73.9400), // New York
        // center: new google.maps.LatLng(51.553269, 0.275090), // All Saints
        center: new google.maps.LatLng(51.570039, 0.211681), // Middle of all 3

        // Disables the default Google Maps UI components
        disableDefaultUI: false,
        scrollwheel: false,
        draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: 
        [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
        // [{
        //     "featureType": "water",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 17
        //     }]
        // }, {
        //     "featureType": "landscape",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 20
        //     }]
        // }, {
        //     "featureType": "road.highway",
        //     "elementType": "geometry.fill",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 17
        //     }]
        // }, {
        //     "featureType": "road.highway",
        //     "elementType": "geometry.stroke",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 29
        //     }, {
        //         "weight": 0.2
        //     }]
        // }, {
        //     "featureType": "road.arterial",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 18
        //     }]
        // }, {
        //     "featureType": "road.local",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 16
        //     }]
        // }, {
        //     "featureType": "poi",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 21
        //     }]
        // }, {
        //     "elementType": "labels.text.stroke",
        //     "stylers": [{
        //         "visibility": "on"
        //     }, {
        //         "color": "#000000"
        //     }, {
        //         "lightness": 16
        //     }]
        // }, {
        //     "elementType": "labels.text.fill",
        //     "stylers": [{
        //         "saturation": 36
        //     }, {
        //         "color": "#000000"
        //     }, {
        //         "lightness": 40
        //     }]
        // }, {
        //     "elementType": "labels.icon",
        //     "stylers": [{
        //         "visibility": "off"
        //     }]
        // }, {
        //     "featureType": "transit",
        //     "elementType": "geometry",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 19
        //     }]
        // }, {
        //     "featureType": "administrative",
        //     "elementType": "geometry.fill",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 20
        //     }]
        // }, {
        //     "featureType": "administrative",
        //     "elementType": "geometry.stroke",
        //     "stylers": [{
        //         "color": "#000000"
        //     }, {
        //         "lightness": 17
        //     }, {
        //         "weight": 1.2
        //     }]
        // }]
    };


    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Church
    // var image = {
    //     path: fontawesome.markers.HEART,
    //     scale: 0.5,
    //     strokeWeight: 0.2,
    //     strokeColor: 'black',
    //     strokeOpacity: 1,
    //     fillColor: '#1d96b4',
    //     fillOpacity: 0.7,
    // }     
    // var myLatLng = new google.maps.LatLng(51.552268, 0.266063);
    // var beachMarker = new google.maps.Marker({
    //     position: myLatLng,
    //     map: map,
    //     icon: image
    // });

    // Church
    var image = 'img/icon-heart.png';
    var myLatLng = new google.maps.LatLng(51.552268, 0.266063);
    var churchMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });

    // Reception
    var image = 'img/icon-cutlery.png';
    var myLatLng = new google.maps.LatLng(51.551933, 0.283030);
    var barnMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });


    // Premiere Inn
    var image = 'img/icon-bed.png';
    var myLatLng = new google.maps.LatLng(51.577826, 0.186501);
    var innMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });

    var churchDetails = '<div class="popup-content church-popup">'+   
        '<h2>The Church</h2>'+        
      '<p>All Saints Church, The Chase, Cranham, Essex, RM14 3YB0</p>'+
      '<p><i class="fa fa-external-link"></i> <a href="http://www.allsaintscranham.co.uk" target="_blank">Website</a></p>'+            
      '</div>';

    var barnDetails = '<div class="popup-content church-popup">'+  
        '<h2>Reception</h2>'+         
      '<p>The barn at Broadfields Farm, Thames Chase Forest Centre, Broadfields, Pike Lane, Upminster, RM14 3NS</p>'+
      '<p><i class="fa fa-external-link"></i> <a href="http://www.thameschase.org.uk" target="_blank">Website</a></p>'+            
      '</div>'; 

    var innDetails = '<div class="popup-content church-popup">'+           
      '<p>Premier Inn Hotel London Romford Central, Mercury Gardens, Essex, RM1 3EN</p>'+
      '<p><i class="fa fa-external-link"></i> <a href="http://www.premierinn.com/en/hotel/ROMLIB/london-romford-central" target="_blank">Website</a></p>'+            
      '</div>';        

    var churchInfoWindow = new google.maps.InfoWindow({
      content: churchDetails
    });

    var barnInfoWindow = new google.maps.InfoWindow({
      content: barnDetails
    });

    var innInfoWindow = new google.maps.InfoWindow({
      content: innDetails
    });

    google.maps.event.addListener(churchMarker, 'click', function() {
        churchInfoWindow.open(map,churchMarker);
    });

    google.maps.event.addListener(barnMarker, 'click', function() {
        barnInfoWindow.open(map,barnMarker);
    });

    google.maps.event.addListener(innMarker, 'click', function() {
        innInfoWindow.open(map,innMarker);
    });

}
