 
var win = Ti.UI.createWindow();

var mountainView = Titanium.Map.createAnnotation({
    latitude:37.390749,
    longitude:-122.081651,
    title:"Appcelerator Headquarters",
    subtitle:'Mountain View, CA',
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true,
    leftButton: '/images/appcelerator_small.png',
    myid:1 ,// Custom property to uniquely identify this annotation.
    rightButton: '/images/appcelerator_small.png',
});

var mapview = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:37.390749, longitude:-122.081651,
            latitudeDelta:0.04, longitudeDelta:0.04},
    animate:true,
    regionFit:true,
    userLocation:true,
    annotations:[mountainView]
});

win.add(mapview);
// Handle click events on any annotations on this map.
mapview.addEventListener('click', function(evt) {

    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);

    alert(evt.clicksource);

    // Check for all of the possible names that clicksouce
    // can report for the left button/view.
    if (evt.clicksource == 'leftButton' || evt.clicksource == 'leftPane' ||
        evt.clicksource == 'leftView') {
        Ti.API.info("Annotation " + evt.title + ", left button clicked.");
    }
});

win.open();
 