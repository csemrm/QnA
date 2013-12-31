var self = Ti.UI.createTabGroup({
	fullscreen : true,
	title : 'Action Bar'
});
 
var win1 = Ti.UI.createWindow({
	title : 'win1'
});

var tab1 = Ti.UI.createTab({
	title : 'tab1',
	window : win1
});

var win2 = Ti.UI.createWindow({
	title : 'win1'
});

var tab2 = Ti.UI.createTab({
	title : 'tab2',
	window : win2
});

self.addTab(tab1);
self.addTab(tab2);

self.open();

self.addEventListener('open', function(e) {
	var activity = self.getActivity();

	activity.onCreateOptionsMenu = function(e) {
		var menu = e.menu;

		// Menu Item 1
		var menuItem1 = menu.add({
			title : "Item 1",
			icon : "images/action_about.png",
			showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
		});
		menuItem1.addEventListener("click", function(e) {
			alert("I was clicked 1");
		});

		// Menu Item 2
		var menuItem2 = menu.add({
			title : "Item 2",
			icon : "images/action_settings.png",
			showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
		});
		menuItem2.addEventListener("click", function(e) {
			alert("I was clicked 2");
		});
	};
});
/*


<?xml version="1.0" encoding="UTF-8"?>
<ti:app xmlns:ti="http://ti.appcelerator.org">
    <id>com.stendapps.teststatusbar</id>
    <name>QnA</name>
    <version>1.0</version>
    <publisher>stefano</publisher>
    <url>http://</url>
    <description>not specified</description>
    <copyright>2013 by stefano</copyright>
    <icon>appicon.png</icon>
    <persistent-wifi>false</persistent-wifi>
    <prerendered-icon>false</prerendered-icon>
    <statusbar-style>default</statusbar-style>
    <statusbar-hidden>false</statusbar-hidden>
    <fullscreen>true</fullscreen>
    <navbar-hidden>false</navbar-hidden>
    <analytics>true</analytics>
    <guid>056b02f9-512f-4a40-b1b6-fe7412fb2590</guid>
    <property name="ti.ui.defaultunit" type="string">system</property>
    <property name="ti.facebook.appid">410842299029388</property>
    <iphone>
        <orientations device="iphone">
            <orientation>Ti.UI.PORTRAIT</orientation>
        </orientations>
        <orientations device="ipad">
            <orientation>Ti.UI.PORTRAIT</orientation>
            <orientation>Ti.UI.UPSIDE_PORTRAIT</orientation>
            <orientation>Ti.UI.LANDSCAPE_LEFT</orientation>
            <orientation>Ti.UI.LANDSCAPE_RIGHT</orientation>
        </orientations>
    </iphone>
    <android xmlns:android="http://schemas.android.com/apk/res/android">
       
        <manifest android:installLocation="preferExternal">
        	<supports-screens android:anyDensity="false"/>
        	<uses-sdk android:maxSdkVersion="17" android:minSdkVersion="8" android:targetSdkVersion="14"/>
        	<application>
                <activity android:alwaysRetainTaskState="true"
                    android:configChanges="keyboardHidden|orientation"
                    android:label="Test "
                    android:name=".QnaActivity" android:theme="@android:style/Theme.Holo.Light">
                    <intent-filter>
                        <action android:name="android.intent.action.MAIN"/>
                        <category android:name="android.intent.category.LAUNCHER"/>
                    </intent-filter>
                     
                </activity> 
            </application>
             
        </manifest>
    </android>
    <mobileweb>
        <precache/>
        <splash>
            <enabled>true</enabled>
            <inline-css-images>true</inline-css-images>
        </splash>
        <theme>default</theme>
    </mobileweb>
    <modules>
        <module platform="android">ti.map</module>
    </modules>
    <deployment-targets>
        <target device="android">true</target>
        <target device="blackberry">false</target>
        <target device="ipad">true</target>
        <target device="iphone">true</target>
        <target device="mobileweb">true</target>
        <target device="tizen">false</target>
    </deployment-targets>
    <sdk-version>3.1.3.GA</sdk-version>
    <property name="ti.deploytype">development</property>
</ti:app>*/
