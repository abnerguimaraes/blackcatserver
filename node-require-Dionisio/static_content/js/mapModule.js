
//import { MarkerClusterer } from "@googlemaps/markerclusterer";

document.addEventListener("DOMContentLoaded", function() {

    window.mapa = new Mapa();

});

var Mapa = function() {

    this.VERSION = '2021-12-23';

    // let locations = new Array();
    // locations = [
    //     { lat: -23.537389, lng: -46.762698 },
    //     { lat: -23.537489, lng: -46.762790 },
    //     { lat: -23.537989, lng: -46.762500 },

    // ];
 
    var map;

    function initialize() {

        let locations = new Array();

        if (!window.locations || window.locations == null || window.locations == undefined) {
            
            console.log("Buscar coordenadas");
            var request = new XMLHttpRequest();
            window.locations = new Array();
     
            request.onreadystatechange = function() {

                if (this.readyState == 4 && this.status == 200) {
                
                    window.locations = JSON.parse(this.response);
                
                    for (let i=0; i < window.locations.length; i++){
                
                        let newLoc = new Object();
                        newLoc.lat = parseFloat(window.locations[i].latitude);
                        newLoc.lng = parseFloat(window.locations[i].longitude);
                        locations.push(newLoc);
                
                    }

                    carregaMapa(locations);
                
                }
            }
        
            request.open("POST", "http://127.0.0.1:6500/getsellsplace", true);
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
            request.send();

        }


    }

    var carregaMapa = function(loc) {

        map = new google.maps.Map(document.getElementById("tt_map"), {
            zoom: 15,
            center : {
                lat: -23.538215,
                lng: -46.762171
            }
        });

        const infoWindow = new google.maps.InfoWindow({
            content: "",
            disableAutoPan: true
        });

        const labels = "ABCD";

        const markers = loc.map((position, i) => {
            const label = labels[i % labels.length];
            const marker = new google.maps.Marker({
                position,
                label
            });
            return marker;
        });

        new markerClusterer.MarkerClusterer({ map, markers });
    }

    initialize();

}
