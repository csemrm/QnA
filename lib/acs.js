/*
Library to wrap app-specific functionality around the ACS APIs
*/
// a couple local variables to save state
var currentUser = null;
var loggedIn = false;
var fb = require('facebook');
var Cloud = require('ti.cloud');
var searchFacebookFriends = null;

var categories = [];
var event_types = [];
// Cloud.debug = true;

var course_users = [];

exports.getMyShareCourses = function() {

	return course_users;
};
exports.isLoggedIn = function() {
	return loggedIn;
};

exports.currentUser = function() {
	return currentUser;
};

exports.getEventTypes = function() {
	return event_types;
};

exports.getCategories = function() {
	return categories;
};
exports.getFacebookFriends = function() {
	return searchFacebookFriends;
};
exports.login = function(username, password, callback) {
	Cloud.Users.login({
		login : username,
		password : password
	}, function(e) {
		if (e.success) {
			currentUser = e.users[0];
			loggedIn = true;
			callback(loggedIn);
		} else {
			Ti.API.info('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
			loggedIn = false;
			currentUser = null;
			callback(loggedIn);
		}
	});
};

exports.logout = function() {
	Cloud.Users.logout(function(e) {
		if (e.success) {
			currentUser = null;
			loggedIn = false;
		}
	});
};

exports.createUser = function(username, password, callback) {
	// ACS API requires password & confirm, but we do the checking elsewhere so
	// use the same for both here
	Cloud.Users.create({
		username : username,
		password : password,
		password_confirmation : password
	}, function(e) {
		if (e.success) {
			Ti.API.info('user = ' + JSON.stringify(e.users[0]));
			currentUser = e.users[0];
			loggedIn = true;
			callback(currentUser);
		} else {
			Ti.API.info('Error' + JSON.stringify(e));
			loggedIn = false;
			currentUser = null;
			callback(false);
		}
	});
};
exports.exlogin = function(callback) {

	Cloud.SocialIntegrations.externalAccountLogin({
		type : 'facebook',
		token : fb.accessToken

	}, function(e) {
		if (e.success) {
			var user = e.users[0];
			currentUser = e.users[0];
			loggedIn = true;
			callback(currentUser);
		} else {
			alert('Error: ' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
};
