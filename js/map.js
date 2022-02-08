// globals
let myMarkers = L.featureGroup();
let data = [
	
    {
		'title':'Dublin',
		'lat': 53.34724140858375,
		'lon':  -6.25918589967779
	},
	{
		'title':'Cork',
		'lat': 51.8985492413488,
		'lon': -8.475112410325512
	}
]
// loop through data
data.forEach(function(item){
	// create marker
	let marker = L.marker([item.lat,item.lon]).bindPopup(item.title)

	// add marker to featuregroup
	myMarkers.addLayer(marker)

})
// after loop, add the FeatureGroup to map
myMarkers.addTo(map)
// zoom to the extent of all markers
map.fitBounds(myMarkers.getBounds())


var map = L.map('map').setView([34.0697,-118.4432], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// loop through data
data.forEach(function(item){
	// add marker to map
	var marker = L.marker([item.lat,item.lon]).addTo(map)
    .bindPopup(item.title)
    .openPopup();
})

        // zoom to the extent of all markers
map.fitBounds(myMarkers.getBounds())