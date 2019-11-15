import $ from 'jquery';

export default class Map {
    constructor() {
        this.init();
    }

    init() {
        const ID = document.getElementById('map');

        if (!ID) return;

        const lat = ID.getAttribute('data-lat');
        const lng = ID.getAttribute('data-lng');


        $(window).on('load resize', function() {
            const centerLat = $(window).width() > 768 ? ID.getAttribute('data-center-lat') : lat;
            const centerLng = $(window).width() > 768 ? ID.getAttribute('data-center-lng') : lng;

            const map = new google.maps.Map(ID, {
                zoom: 17,
                center: new google.maps.LatLng(centerLat, centerLng),
                disableDefaultUI: true,
                zoomControl: true,
                styles: [
                    {
                        "featureType": "landscape",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 57
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "lightness": 24
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    }
                ]
            });

            const marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                map: map,
                icon: 'img/img/pin.png'
            });
        });

    }
}