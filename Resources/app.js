var MapModule = require('ti.map');

var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});

var mapview = MapModule.createView({
	mapType : Titanium.Map.STANDARD_TYPE,
	region : {
		latitude : 33.74511,
		longitude : -84.38993,
		latitudeDelta : 0.01,
		longitudeDelta : 0.01
	},
	animate : true,
	regionFit : true,
	userLocation : true,
});

win.add(mapview);

// Listen for click events.
mapview.addEventListener('regionchanged', function(e) {
	alert(mapview.getRegion());
});

mapview.addEventListener('complete', function(e) {
	alert('Complete');
});

win.open();
