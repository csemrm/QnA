var currentUser = null;

var loggedIn = false;

var Cloud = require('ti.cloud');

var categories = [];
var event_types = [];
Cloud.debug = true;

function subscribeToChannel(deviceToken) {
	Cloud.PushNotifications.subscribeToken({
		device_token : deviceToken,
		channel : 'JonoPriyo',
		type : Ti.Platform.name == 'android' ? 'android' : 'ios'
	}, function(e) {
		if (e.success) {
			Ti.API.info('Subscribed');
		} else {
			Ti.API.info('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
};
exports.subscribeToChannel = subscribeToChannel;
exports.sendTestNotification = function(deviceToken) {
	Cloud.PushNotifications.notifyTokens({
		to_tokens : deviceToken,
		channel : 'test',
		payload : 'This is a test.'
	}, function(e) {
		if (e.success) {
			Ti.API.info('Push notification sent');
		} else {
			Ti.API.info('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
};

exports.unsubscribeToChannel = function(deviceToken) {
	Cloud.PushNotifications.unsubscribeToken({
		device_token : deviceToken,
		channel : 'JonoPriyo',
	}, function(e) {
		subscribeToChannel(deviceToken);
	});
};
