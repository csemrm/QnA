var parentView = Ti.UI.createWindow({
	backgroundColor : 'gray'
});

var label = Ti.UI.createLabel({
	textAlign : 'left',
	width : '100dp',
	height : '15dp',
	ellipsize : true,
	top : '45dp',
	color : 'black',
	text : 'The quick brown fox jumped over the lazy dog. /n The quick brown fox jumped over the lazy dog again.',
	wordWrap : false,
	font : {
		fontSize : '12dp',
		fontWeight : 'normal',
		fontFamily : 'Arial'
	}
});

parentView.add(label);
parentView.open(); 