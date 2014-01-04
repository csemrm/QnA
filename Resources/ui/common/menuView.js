/**
 * @author King
 */
function MenuView() {
	var self = Ti.UI.createView({}),
		menuButtonBar = Ti.UI.createButtonBar({
			left : '14%',
			top : '33%',
			width : '55%',
			height : '57%'
		}),
		playingButton = Ti.UI.createButton({
			id : 'menu0',
			left :'70%',
			top : '8%',
			width : '25%',
			height : '7%',
			backgroundImage : '/images/home/no_play.png',
			enabled : false
		}),
		setButton = Ti.UI.createButton({
			id : 'menu7',
			left : '85%',
			top : '83%',
			width : 25,
			height : 25,
			backgroundImage : '/images/home/set.png'
		});
	
	//now is playing or no	
	playingButton.addEventListener('click', function(e){
		self.fireEvent('menuSelected', {
			menuId : e.source.id
		});
	});
	self.add(playingButton);
	
	//change Play state
	Ti.App.addEventListener('isCurrentPlay', function(e){
		playingButton.setBackgroundImage('/images/home/plaing.png');
		playingButton.setEnabled(true);
	});
	
	//about our info
	setButton.addEventListener('click', function(e){
		self.fireEvent('menuSelected', {
			menuId : e.source.id
		});
	});
	self.add(setButton);
	
	for(var i = 1; i < 7; i ++){
		var tempButton = Ti.UI.createButton({
			id : 'menu' + i,
			left : i < 4 ? '0%' : '55%',
			top : 35 * ((i - 1) % 3) + '%',
			width : 80,
			height : 80,
			backgroundImage : '/images/home/menu' + i + '.png'
		});
		menuButtonBar.add(tempButton);
	}
	
	menuButtonBar.addEventListener('click', function(e){
		self.fireEvent('menuSelected', {
	    	menuId : e.source.id
		});
	});

	self.add(menuButtonBar);
	
	return self;
};

module.exports = MenuView;