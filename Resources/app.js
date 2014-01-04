var win = Ti.UI.createWindow();

var mountainView = Titanium.Map.createAnnotation({
	latitude : 37.390749,
	longitude : -122.081651,
	title : "Appcelerator Headquarters",
	subtitle : 'Mountain View, CA',
	pincolor : Titanium.Map.ANNOTATION_RED,
	animate : true,
	leftButton : '/images/appcelerator_small.png',
	myid : 1, // Custom property to uniquely identify this annotation.
	rightButton : '/images/appcelerator_small.png',
});

var mapview = Titanium.Map.createView({
	mapType : Titanium.Map.STANDARD_TYPE,
	region : {
		latitude : 37.390749,
		longitude : -122.081651,
		latitudeDelta : 0.04,
		longitudeDelta : 0.04
	},
	animate : true,
	regionFit : true,
	userLocation : true,
	annotations : [mountainView]
});

win.add(mapview);
 

win.open();
