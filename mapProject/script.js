var map;
//Create a new blank array for all the listing markers.
var marker;
var markers = [];
var largeInfowindow;


function MapVM() {
    var self = this;
    // Create a styles array to use with the map.
    var styles = [
        {
            featureType: 'water',
            stylers: [
                { color: '#5fc9f8'}
            ]
        },{
            featureType: 'administrative',
            elementType: 'labels.text.stroke',
            stylers: [
                { color: '#ffffff' },
                { weight: 6 }
            ]
        },{
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [
                { color: '#fd1d1d' }
            ]
        },{
            featureType: 'transit.station',
            stylers: [
                { weight: 9 },
                { hue: '#5851db' }
            ]
        },{
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [
            { color: '#be2026'},
            { lightness: -25 },
            { visibility: 'on'}
            ]
        },{
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
            { visibility: 'off'}
            ]
        },{
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [
            { visibility: 'off'}
            ]
        },{
            featureType: 'road.highway',
            elementType: 'labels.text.stroke',
            stylers: [
            { visibility: 'off'},
            { hue: '#ff000a'}
            ]
        },{
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
            { color: '#575757'},
            { lightness: 18 }
            ]
        },{
            featureType: 'road.arterial',
            elementType: 'geometry.fill',
            stylers: [
            { color: '#e9fef0'}
            ]
        },{
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [
            { color: '#833ab4'}
            ]
        },{
            featureType: 'road.arterial',
            elementType: 'labels.text.stroke',
            stylers: [
            { color: '#e9e8dd'}
            ]
        },{
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [
            { color: '#aac1bf'},
            { lightness: 16 }
            ]
        },{
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
            { color: '#999999'}
            ]
        },{
            featureType: 'road.local',
            elementType: 'labels.text.stroke',
            stylers: [
            { saturation: -52 }
            ]
        },{
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [
                { lightness: 100 }
            ]
        },{
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
                { lightness: -100 }
            ]
        },{
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
                { visibility: 'on' },
                { color: '#f0e4d3' }
            ]
        }
    ];
    
    // Constructor creates a new map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7413549, lng: -73.9980244},
        zoom: 13,
        styles: styles,
        mapTypeControl: false
    });
    
    this.locationList = ko.observableArray([]);
    
    // Test for observable clickList function
    this.clickList = function(clickedItem) {
        var clickedItemName = clickedItem.title;
        console.log(clickedItemName);
        for (var item in self.locationList()){
            if (clickedItemName === self.locationList()[item].title) {
            largeInfowindow.setContent('<div>' + self.locationList()[item].title + '</div>');
            largeInfowindow.open(map, self.locationList()[item]);
            toggleBounce(self.locationList()[item]);
            // Make sure the marker property is cleared if the infowindow is closed.
            largeInfowindow.addListener('closeclick', function() {
                largeInfowindow.setMarker(null);
        
            });
            }
        }
        // Check to make sure the infowindow is not already opened on this marker.
        /*if (infowindow.marker != marker) {
            infowindow.marker = marker;
            infowindow.setContent('<div>' + self.locationList().title + '</div>');
            infowindow.open(map, marker);
            toggleBounce(self.marker);
            // Make sure the marker property is cleared if the infowindow is closed.
            infowindow.addListener('closeclick', function() {
                infowindow.setMarker(null);
        
            });
            var streetViewService = new google.maps.StreetViewService();
            var radius = 50;
            // In case the status is OK, which means the pano was found, compute the
            // position of the streetview image, then calculate the heading, then get a
            // panorama from that and set the options
            function getStreetView(data, status) {
                if (status == google.maps.StreetViewStatus.OK) {
                    var nearStreetViewLocation = data.location.latLng;
                    var heading = google.maps.geometry.spherical.computeHeading(
                    nearStreetViewLocation, marker.position);
                    infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>');
                    var panoramaOptions = {
                        position: nearStreetViewLocation,
                        pov: {
                            heading: heading,
                            pitch: 30
                        }
                    };
                    var panorama = new google.maps.StreetViewPanorama(
                    document.getElementById('pano'), panoramaOptions);
                } else {
                    infowindow.setContent('<div>' + marker.title + '</div>' +
                                         '<div>No Street View Found</div>');
                }
            }
            // Use streetview service to get the closest streetview image within
            // 50 meters of the markers position
            streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
            // Open the infowindow on the correct marker.
            infowindow.open(map, marker);
        }
        
    */};
    
    // These are the real estate listings that will be shown to the user.
    // Normally we'd have these in a database instead.
    var locations = [
        {title: 'New York Comic Con', location: {lat: 40.7582126, lng: -74.0026237}},
        {title: 'PlayStation Theater', location: {lat: 40.7573105, lng: -73.9864472}},
        {title: 'Top of The Rock', location: {lat: 40.7617307, lng: -73.9775213}},
        {title: 'Charging Bull', location: {lat: 40.7225347, lng: -74.0050003}},
        {title: 'Times Square', location: {lat: 40.758827, lng: -73.9853564}},
        {title: 'Rockefeller Center', location: {lat: 40.75855, lng: -73.9783778}},
        {title: 'United Nations Headquarters', location: {lat: 40.7488758, lng: -73.9680091}},
        {title: 'Nintendo NY', location: {lat: 40.7580463, lng: -73.981638}},
        {title: 'Midtown Comics Times Square', location: {lat: 40.7545205, lng: -73.9886768}},
        {title: 'Toy Tokyo', location: {lat: 40.7270802, lng: -73.991194}},
        {title: 'Forbidden Planet', location: {lat: 40.7334803, lng: -73.9929449}},
        {title: 'Kinokuniya New York', location: {lat: 40.7539067, lng: -73.9847976}},
        {title: 'Sony Square NYC', location: {lat: 40.7420027, lng: -73.9871945}},
        {title: 'Discovery Times Square', location: {lat: 40.7592014, lng: -73.9876671}},
        {title: 'Central Park', location: {lat: 40.779667, lng: -73.969}}
    ];
    
    largeInfowindow = new google.maps.InfoWindow();
    
    // Style the markers a bit. This will be our listing marker icon.
    var defaultIcon = makeMarkerIcon('63DE63');
    
    // Create a "highlighted location" marker color for when the user
    // mouses over the marker.
    var highlightedIcon = makeMarkerIcon('fd1d1d');
    
    //The following group uses the location array to create an array of markers on initialization.
    for (var i = 0; i < locations.length; i++) {
        //Get the position from the location array.
        var position = locations[i].location;
        var title = locations[i].title;
        //Create a marker per location, and put into markers array.
        marker = new google.maps.Marker({
            position: position,
            title: title,
            icon: defaultIcon,
            animation: google.maps.Animation.DROP,
            id: i
        });
        // Push the marker to the array of markers.
        markers.push(marker);
        self.locationList.push(marker);
        console.log(self.locationList());
        // Create an onclick event to open an infowindow at each marker.
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
        });
        // Two event listeners - one for mouseover, one for mouseout,
        // to change the colors back and forth.
        marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
        });
        marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
        });
        new ListName(marker.title);
    }

}
    // This function populates the infowindow when the marker is clicked. It will only allow
    // one infowindow which will open at the marker that is clicked, and populate based 
    // on that markers position.
    function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
            infowindow.marker = marker;
            infowindow.setContent('<div>' + marker.title + '</div>');
            infowindow.open(map, marker);
            toggleBounce(marker);
            // Make sure the marker property is cleared if the infowindow is closed.
            infowindow.addListener('closeclick', function() {
                infowindow.setMarker(null);
        
            });
            var streetViewService = new google.maps.StreetViewService();
            var radius = 50;
            // In case the status is OK, which means the pano was found, compute the
            // position of the streetview image, then calculate the heading, then get a
            // panorama from that and set the options
            function getStreetView(data, status) {
                if (status == google.maps.StreetViewStatus.OK) {
                    var nearStreetViewLocation = data.location.latLng;
                    var heading = google.maps.geometry.spherical.computeHeading(
                    nearStreetViewLocation, marker.position);
                    infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>');
                    var panoramaOptions = {
                        position: nearStreetViewLocation,
                        pov: {
                            heading: heading,
                            pitch: 30
                        }
                    };
                    var panorama = new google.maps.StreetViewPanorama(
                    document.getElementById('pano'), panoramaOptions);
                } else {
                    infowindow.setContent('<div>' + marker.title + '</div>' +
                                         '<div>No Street View Found</div>');
                }
            }
            // Use streetview service to get the closest streetview image within
            // 50 meters of the markers position
            streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
            // Open the infowindow on the correct marker.
            infowindow.open(map, marker);
        }
        
    }
    // This function will toggle a bounce animation to the marker when clicked
    function toggleBounce(marker) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setAnimation(null);
        
        }  
        marker.setAnimation(google.maps.Animation.BOUNCE);
        console.log(marker);
    }

    // This function will loop through the markers array and display them all.
    function showListings() {
        var bounds = new google.maps.LatLngBounds();
        // Extend the boundaries of the map for each marker and display the marker
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
            //Extend the boundaries of the map for each marker
            bounds.extend(markers[i].position);
        }
        map.fitBounds(bounds);
    }
    
    // This function will loop through the listings and hide them all.
    function hideListings() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
    }
    function ListName(title){
        var self = this;
        self.name = title;
        console.log(self.name);
    }
    // This function takes in a COLOR, and then creates a new marker
    // icon of that color. The icon will be 21x wide by 34 high, have an origin
    // of 0, 0 and be anchored at 10, 34).
    function makeMarkerIcon(markerColor) {
        var markerImage = new google.maps.MarkerImage(
        'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
        '|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21, 34));
    return markerImage;
        
    }


function loadMap() {
    ko.applyBindings(new MapVM());
};
