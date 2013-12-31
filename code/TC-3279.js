/*
 * HTTPClient: setting autoRedirect off for 302s on Android calls onerror
 */


var win1 = Titanium.UI.createWindow({

});

// Create a Button.
var aButton = Ti.UI.createButton({
	title : 'aButton',
});

// Listen for click events.
aButton.addEventListener('click', function() {

	var url = "http://appc.mrtechnologybd.com/redirect.php";
	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			Ti.API.info('e ' + JSON.stringify(e));
			Ti.API.info("Received HEADERS_RECEIVED: " + this.HEADERS_RECEIVED);
			Ti.API.info("Received status: " + this.status);
			Ti.API.info("Received statusText: " + this.statusText);
			Ti.API.info("Received responseText: " + this.responseText);

			alert('success');
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			Ti.API.debug(e.error);
			Ti.API.info("Received HEADERS_RECEIVED: " + this.HEADERS_RECEIVED);
			Ti.API.info("Received status: " + this.status);
			Ti.API.info("Received statusText: " + this.statusText);
			Ti.API.info("Received responseText: " + this.responseText);

			alert('error');
		},
		timeout : 5000, // in milliseconds
		autoRedirect : false, 

	});
	// Prepare the connection.

	client.open("GET", url);
	// Send the request.
	client.send();

});

// Add to the parent view.
win1.add(aButton);

win1.open();
