function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(0, -0),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}