var parentView = Ti.UI.createWindow({
	backgroundColor : 'gray'
});

var label = Ti.UI.createLabel({
	textAlign : 'left',
	width : 300,
	height : Ti.UI.SIZE,
	ellipsize : true,
	top : '45dp',
	color : 'black',
	text : 'I used to be an adventurer \n like you until I took an arrow to the knee',
	font : {
		fontSize : '12dp',
		fontWeight : 'normal',
		fontFamily : 'Arial'
	},
	wordWrap : false,
});

parentView.add(label);
parentView.open(); 