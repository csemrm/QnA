var win1 = Titanium.UI.createWindow({
	backgroundColor : '#fff'
});
var radioButton = require('lib');
radio = radioButton.createRadioButtonGroup({
	groupId : 1,
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE,
	left : 20,
	layout : 'vertical',
	radioItemsValue : ['Everyone', 'My Country and friends', 'My Friends'],
	radioItemsPadding : 10,
	radioItemsBackgroundSelectedImage : '/images/radio_click.png',
	radioItemsBackgroundImage : '/images/radio_unclick.png',
	radioItemsWidth : Ti.UI.SIZE,
	radioItemsHeight : Ti.UI.SIZE,
	labelColor : '#111',
});

win1.add(radio);
  
var aButton = Ti.UI.createButton({
	title : 'check val',

	bottom : 0
});

 
aButton.addEventListener('click', function() {
	alert('radio.selectedValue   ' + radio.selectedValue + '   selectedIndex :  ' + radio.selectedIndex);
});
 
win1.add(aButton);

win1.open();
