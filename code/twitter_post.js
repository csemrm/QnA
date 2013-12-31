/*Hello, 

I have tested this issue with latest titanium build (ti sdk 3.2.0.GA and alloy 1.3.0). It’s working.  But need to make sure twitter apps access type is set "Read and Write".

*/
    $.win.open();
    
    var social = require('alloy/social').create({
    	consumerSecret : 'B1Jaq56PMEJ6vfj0rmxum4Ams7yozYzLjVky5zjNjsA',
    	consumerKey : 'EUDrT8OqKGJg8jlZYTc5Qw'
    });
    
    if (!social.isAuthorized()) {
    	social.authorize();
    }
    $.shareButton.addEventListener('click', function() {
    	social.share({
    		message : "Salut, Monde!",
    		success : function(e) {
    			alert('Success!');
    		},
    		error : function(e) {
    			alert('Error!');
    		}
    	});
    
    });


var win = Ti.UI.createWindow({
	backgroundColor : '#fff'
});

/**
 * Create a Button
 */
var shareButton = Ti.UI.createButton({
	width : 90,
	top : 10,
	height : 30,
	backgroundColor : 'black',
	title : 'Tweet'
});
win.add(shareButton);

/**
 * Now we include our JavaScript module.
 */
var social = require('social');
var twitter = social.create({
	site : 'Twitter',
	consumerKey : '', // <--- you'll want to replace this
	consumerSecret : '' // <--- and this with your own keys!
});

/**
 * And when the user clicks on the button, share a message with the world!
 * Note that this will show the authorization UI, if necessary.
 */
shareButton.addEventListener('click', function() {
	twitter.share({
		message : 'Hello, world from Titaniums!',
		success : function() {
			alert('Tweeted!');
		},
		error : function(error) {
			alert('Oh no! ' + error);
		}
	});
});

/**
 * Finally, To view the window
 */

win.open(); 