var MapModule = require('ti.map');
var win = Titanium.UI.createWindow();

var mountainView = MapModule.createAnnotation({
	latitude : 37.390749,
	longitude : -122.081651,
	title : "Appcelerator Headquarters",
	subtitle : 'Mountain View, CA',
	pincolor : MapModule.ANNOTATION_RED,
	myid : 1 // Custom property to uniquely identify this annotation.
});

var mapview = MapModule.createView({
	mapType : MapModule.NORMAL_TYPE,
	region : {
		latitude : 33.74511,
		longitude : -84.38993,
		latitudeDelta : 0.01,
		longitudeDelta : 0.01
	},
	animate : true,
	regionFit : true,
	userLocation : true,
	annotations : [mountainView]
});

win.add(mapview);
// Handle click events on any annotations on this map.
mapview.addEventListener('click', function(evt) {
	alert('ss');
	Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
});
win.open();


/*
 * <android xmlns:android="http://schemas.android.com/apk/res/android">
        <tool-api-level>10</tool-api-level>
        <manifest android:installLocation="preferExternal">
            <!-- Allows the API to download data from Google Map servers -->
            <uses-permission android:name="android.permission.INTERNET"/>
            <!-- Allows the API to cache data -->
            <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
            <!-- Use GPS for device location -->
            <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
            <!-- Use Wi-Fi or mobile connection for device location -->
            <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
            <!-- Allows the API to access Google web-based services -->
            <uses-permission android:name="com.google.android.providers.gsf.permission.READ_GSERVICES"/>
            <!-- Specify OpenGL ES 2.0 as a requirement -->
            <uses-feature android:glEsVersion="0x00020000" android:required="true"/>
            <!-- Replace com.domain.appid with your application ID -->
            <uses-permission android:name="com.stendapps.teststatusbar.permission.MAPS_RECEIVE"/>
            <permission
                android:name="com.stendapps.teststatusbar.permission.MAPS_RECEIVE" android:protectionLevel="signature"/>
            <application>
                <!-- Replace "PASTE YOUR GOOGLE MAPS API KEY HERE" with the Google API key you obtained -->
                <meta-data
                    android:name="com.google.android.maps.v2.API_KEY" android:value="AIzaSyAcWZCtLS8GLctMoh78bhlQeupKfTxKfwQ"/>
            </application>
        </manifest>
    </android>
 */