
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

                    //carregaMapa(locations); google
                    carregaMapa(locations) //leaflej
                }
            }
        
            request.open("POST", "http://127.0.0.1:6500/getsellsplace", true);
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
            request.send();

        }


    }

    //leaf
    var carregaMapa = function(locations){
        var map = L.map('map').setView([-23.538215, -46.762171], 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiYWJuZXJndWltYXJhZXMiLCJhIjoiY2t5bWFtOGhtMDU2bzJ0bnNkbmE5Zmw3NiJ9.KLgHWT1arYZtrXBFYs2gpA'
        }).addTo(map);

        //api traz os pontos: 

        locations.map(function(item, index) {
            L.marker([item.lat, item.lng], {
                title: item.cidade,
            }).addTo(map)
        })
    }


    //google
    // var carregaMapa = function(loc) {

    //     map = new google.maps.Map(document.getElementById("tt_map"), {
    //         zoom: 15,
    //         center : {
    //             lat: -23.538215,
    //             lng: -46.762171
    //         }
    //     });

    //     const infoWindow = new google.maps.InfoWindow({
    //         content: "",
    //         disableAutoPan: true
    //     });

    //     const labels = ["BLA", "BLA", "BLA", "BLA"];

    //     const markers = loc.map((position, i) => {
    //         const label = labels[i % labels.length];
    //         const marker = new google.maps.Marker({
    //             position,
    //             label
    //         });
    //         return marker;
    //     });

    //     new markerClusterer.MarkerClusterer({ map, markers });
    // }

    initialize();

}
