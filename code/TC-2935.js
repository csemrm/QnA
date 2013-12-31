function openWin() {
	var w = Ti.UI.createWindow({
		backgroundColor : 'red',
		top : 0,
	});
	Ti.API.info('click');
	var v = Ti.UI.createView({
		width : 300,
		height : 200,
		backgroundColor : 'blue'
	});
	v.addEventListener('click', openWin);
	w.add(v);
	w.open();

	var aButton = Ti.UI.createButton({
		title : 'aButton',
		top : 0,
	});

	aButton.addEventListener('click', function() {
		w.close();
		Ti.API.info('close');
	});

	w.add(aButton);

}

openWin();
