(function(){
	var map = L.map('map').setView([40.80859, -73.964803], 17);
	L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 22}).addTo(map);

	var marker = L.marker([40.80859, -73.964803]).addTo(map);
	marker.bindPopup("<b>This is Columbia University</b><br>Welcome to my school!").openPopup();

	var marker = L.marker([31.2989, 121.4992]).addTo(map);
	marker.bindPopup("<b>This is Fudan University</b><br>Welcome to my hometown!");


	var circle = L.circle([40.7, -74.0], 30000, {
    color: 'pink',
    fillColor: 'pink',
    fillOpacity: 0.5}).addTo(map);
	circle.bindPopup("This is New York City.");

    var circle = L.circle([31.2, 121.5], 50000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5}).addTo(map);
    circle.bindPopup("This is Shanghai City.");

    var popup = L.popup();
	function onMapClick(e) {
	    popup
	        .setLatLng(e.latlng)
	        .setContent("You clicked the map at " + e.latlng.toString())
	        .openOn(map);
	}
	map.on('click', onMapClick);

}).call(this);

	