exports.add = function(v) {


// Create a Label.
var Registration = Ti.UI.createLabel({
	text : 'Registration',
	color : 'red',
	font : {fontSize:30},
	height : Titanium.UI.SIZE,
	width :Titanium.UI.SIZE,
	top : 10,
	
});

// Add to the parent view.
v.add(Registration);

// Create a TextField.
var name = Ti.UI.createTextField({
	height : Titanium.UI.SIZE,
	top : 10,
	width : Titanium.UI.FILL,
	hintText : 'Enter name',
	//softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

name.addEventListener('return', function(e) {
	pass.blur();
	alert('Input was: ' + name.value);
});

v.add(name);


// Create a TextField.
var pass = Ti.UI.createTextField({
	height : Titanium.UI.SIZE,
	top : 10,
	width : Titanium.UI.FILL,
	hintText : 'Enter password',
	//softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
pass.addEventListener('return', function(e) {
	pass.blur();
	alert('Input was: ' + pass.value);
});

// Add to the parent view.
v.add(pass);


// Create a TextField.
var re_pass = Ti.UI.createTextField({
	height : Titanium.UI.SIZE,
	top : 10,
	width : Titanium.UI.FILL,
	hintText : 'Enter repassword',
//	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
re_pass.addEventListener('return', function(e) {
	re_pass.blur();
	alert('Input was: ' + re_pass.value);
});

// Add to the parent view.
v.add(re_pass);


var email = Ti.UI.createTextField({
	height : Titanium.UI.SIZE,
	top : 10,
	width : Titanium.UI.FILL,
	hintText : 'Enter Email',
	//softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
email.addEventListener('return', function(e) {
	re_pass.blur();
	alert('Input was: ' + email.value);
});

// Add to the parent view.
v.add(email);


var re_email = Ti.UI.createTextField({
	height : Titanium.UI.SIZE,
	top : 10,
	width : Titanium.UI.FILL,
	hintText : 'Enter Email again',
	//softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
re_email.addEventListener('return', function(e) {
	re_pass.blur();
	alert('Input was: ' + re_email.value);
});

// Add to the parent view.
v.add(re_email);


var address = Ti.UI.createTextField({
	height : Titanium.UI.SIZE,
	top : 10,
	width : Titanium.UI.FILL,
	hintText : 'Enter address',
	//softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
address.addEventListener('return', function(e) {
	address.blur();
	alert('Input was: ' + address.value);
});

// Add to the parent view.
v.add(address);

};



