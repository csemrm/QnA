

var win = Ti.UI.createWindow({
	navBarHidden : true,
	exitOnClose : true,
	backgroundColor : '#fff'
});

var acs = require('lib/acs');
var fb = require('facebook');

fb.forceDialogAuth = false;

fb.appid = 155930931197402;
fb.permissions = ['publish_stream', 'publish_actions', 'read_stream', 'email', 'create_event', 'create_note', 'photo_upload', 'share_item', 'video_upload', 'friends_events', 'rsvp_event', 'user_events', 'user_about_me', 'friends_about_me', 'friends_location'];

win.add(fb.createLoginButton({
	top : 50,
	style : fb.BUTTON_STYLE_WIDE
}));

fb.addEventListener('login', function(e) {
	if (e.success) {
		acs.exlogin(function(user) {
			alert(user);
		});

	}
});

win.open(); 