/**
 * @author King
 */
(function(){
	var MenuView = require('ui/common/menuView');
	var menuView = new MenuView();
	//create master view container
	var masterContainerWindow = Ti.UI.createWindow({
		backgroundImage : '/images/home/bg.png',
		navBarHidden : true,
	    modal : true
	});
	masterContainerWindow.add(menuView);
	
	//create six detail view container
	var soundContainerWindow = Ti.UI.createWindow({
		backgroundColor : '#fff',
		title:'聲音書',
		navBarHidden : false,
		url : '/ui/module/soundBook.js',
		barImage : '/images/comm/title.png',
		barColor : '#5ec9dc',
		backButtonTitle : '返回'
	});
	
	var videoContainerWindow = Ti.UI.createWindow({
		backgroundColor : '#fff',
		title:'影音書評',
		navBarHidden : false,
		url : '/ui/module/videoBook.js',
		barImage : '/images/comm/title.png',
		barColor : '#5ec9dc',
		backButtonTitle : '返回'
	});
	
	var ebookContainerWindow = Ti.UI.createWindow({
		backgroundColor : '#fff',
		title:'電子書',
		navBarHidden : false,
		url : '/ui/module/ebook.js',
		barImage : '/images/comm/title.png',
		barColor : '#5ec9dc',
		backButtonTitle : '返回'
	});
	
	var activityContainerWindow = Ti.UI.createWindow({
		backgroundColor : '#fff',
		title:'活動',
		navBarHidden : false,
		url : '/ui/module/activity.js',
		barImage : '/images/comm/title.png',
		barColor : '#5ec9dc',
		backButtonTitle : '返回'
	});
	
	var hostContainerWindow = Ti.UI.createWindow({
		backgroundColor : '#fff',
		title:'賽可樂姬',
		navBarHidden : false,
		url : '/ui/module/host.js',
		barImage : '/images/comm/title.png',
		barColor : '#5ec9dc',
		backButtonTitle : '返回'
	});
	
	var setContainerWindow = Ti.UI.createWindow({
		backgroundColor : '#fff',
		title : '設置',
		navBarHidden : false,
		url : '/ui/module/set.js',
		barImage : '/images/comm/title.png',
		barColor : '#5ec9dc',
		backButtonTitle : '返回'
	});
	
	//add behavior for master view
	menuView.addEventListener('menuSelected', function(e) {
		var id = e.menuId;
		switch(id){
			case 'menu0':
				if(Ti.App.Properties.getString('currentPlay') == 'sound'){
					var playWin = Ti.UI.createWindow({
						id : Ti.App.Properties.getInt('soundCurrentHornId'),
						url : '/ui/common/soundBookPlay.js',
						barImage : '/images/comm/title.png',
						barColor : '#5ec9dc',
						backgroundColor : '#fff',
						navBarHidden : false,
						backButtonTitle : '返回',
						isFromFirst : true
					});
					Titanium.UI.currentTab.open(playWin, {animated:true});
				}else if(Ti.App.Properties.getString('currentPlay') == 'video'){
					var playWin = Ti.UI.createWindow({
						id : Ti.App.Properties.getInt('videoCurrentHornId'),
						avId : Ti.App.Properties.getInt('videoCurrentHornAvId'),
						url : '/ui/common/videoBookPlay.js',
						barImage : '/images/comm/title.png',
						backgroundColor : '#fff',
						barColor : '#5ec9dc',
						navBarHidden : false,
						backButtonTitle : '返回',
						isFromFirst : true
					});
					Titanium.UI.currentTab.open(playWin, {animated:true});
				}
				break;
			case 'menu1':
				Titanium.UI.currentTab.open(soundContainerWindow, {animated:true});
				break;
			case 'menu2':
				Titanium.UI.currentTab.open(videoContainerWindow, {animated:true});
				break;
			case 'menu3':
				var currentSociality = Ti.App.Properties.getString('currentSociality');
				if(currentSociality == null){
					var win = Ti.UI.createWindow({
						backgroundColor:'#fff',
						title:'社交網絡',
						url : '/ui/module/sociality.js',
						barImage : '/images/comm/title.png',
						barColor : '#5ec9dc'
					}),
					leftButton = Ti.UI.createButton({
						title:'關閉',
						style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
					});
					win.setLeftNavButton(leftButton);
					leftButton.addEventListener('click',function(){
						win.close();
					});
					win.open({modal:true});
					win.addEventListener('close', function(){
						var currentSociality = Ti.App.Properties.getString('currentSociality');
						if(currentSociality == null){
							return;
						}
						var socialityContainerWindow = Ti.UI.createWindow({
							backgroundColor : '#fff',
							title: currentSociality == 'facebook' ? '賽可樂姬' : '新浪微博',
							navBarHidden : false,
							url : '/ui/module/' + currentSociality + '.js',
							barImage : '/images/comm/title.png',
							barColor : '#5ec9dc',
							backButtonTitle : '返回'
						});
						Ti.UI.currentTab.open(socialityContainerWindow, {animated : true});	
					});
				}else{
					var socialityContainerWindow = Ti.UI.createWindow({
						backgroundColor : '#fff',
						title: currentSociality == 'facebook' ? '賽可樂姬' : '新浪微博',
						navBarHidden : false,
						url : '/ui/module/' + currentSociality + '.js',
						barImage : '/images/comm/title.png',
						barColor : '#5ec9dc',
						backButtonTitle : '返回'
					});
					Ti.UI.currentTab.open(socialityContainerWindow, {animated : true});	
				}
				
				break;
			case 'menu4':
				Titanium.UI.currentTab.open(ebookContainerWindow, {animated:true});
				break;
			case 'menu5':
				Titanium.UI.currentTab.open(activityContainerWindow, {animated:true});
				break;
			case 'menu6':
				Titanium.UI.currentTab.open(hostContainerWindow, {animated:true});
				break;
			case 'menu7':
				Titanium.UI.currentTab.open(setContainerWindow, {animated:true});
				break;
			default:
				break;
		}
	});
	Ti.UI.currentWindow.add(masterContainerWindow);
	
	//
	//sound Player
	//
	var soundPlayer = Ti.Media.createAudioPlayer({
		allowBackground : true
	});
	
	Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;
	
	//set sound url
	Ti.App.addEventListener('setAudioUrl', function(e){
		soundPlayer.stop();
		videoPlayer.stop();
		Ti.App.Properties.setBool('isFirstVideoPlay', true);
		soundPlayer.setUrl(e.url);
		soundPlayer.start();
		Ti.App.fireEvent('isCurrentPlay', {});
	});
	
	//sound play
	Ti.App.addEventListener('soundPlay', function(e){
		if(soundPlayer.paused){
			soundPlayer.pause();
			Ti.App.Properties.setBool('soundIsPlay', true);	
		}
	});
	
	//sound pause
	Ti.App.addEventListener('soundPause', function(e){
		if(soundPlayer.playing){
			soundPlayer.pause();
			Ti.App.Properties.setBool('soundIsPlay', false);
		}
	});
	
	//send progress
	soundPlayer.addEventListener('progress', function(e){
		Ti.App.fireEvent('soundProgress', {currentTime : e.progress});
	});
	
	//check playState change
	soundPlayer.addEventListener('change', function(e){
		Ti.App.fireEvent('soundChange', {state : e.state, description : e.description});
		if(e.state > 7 || e.state < 6){
			Ti.App.Properties.setString('currentPlay', 'sound');
		}else{
			Ti.App.Properties.setString('currentPlay', 'noSound');
			Ti.App.Properties.setBool('soundIsPlay', false);
		}
	});
	
	//whether first sound play or not
	if(soundPlayer.getUrl()){
		Ti.App.Properties.setBool('isFirstSoundPlay', false);
	} else{
		Ti.App.Properties.setBool('isFirstSoundPlay', true);
	}
	
	//
	//video Player
	//
	var videoPlayer = Ti.Media.createAudioPlayer({
		allowBackground : true
	});
	
	Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;
	
	//set video url
	Ti.App.addEventListener('setVideoUrl', function(e){
		videoPlayer.stop();
		soundPlayer.stop();
		Ti.App.Properties.setBool('isFirstSoundPlay', true);
		videoPlayer.setUrl(e.url);
		videoPlayer.start();
		Ti.App.fireEvent('isCurrentPlay', {});
	});
	
	//video play
	Ti.App.addEventListener('videoPlay', function(e){
		if(videoPlayer.paused){
			videoPlayer.pause();
			Ti.App.Properties.setBool('videoIsPlay', true);	
		}
	});
	
	//video pause
	Ti.App.addEventListener('videoPause', function(e){
		if(videoPlayer.playing){
			videoPlayer.pause();
			Ti.App.Properties.setBool('videoIsPlay', false);
		}
	});
	
	//send progress
	videoPlayer.addEventListener('progress', function(e){
		Ti.App.fireEvent('videoProgress', {currentTime : e.progress});
	});
	
	//check playState change
	videoPlayer.addEventListener('change', function(e){
		Ti.App.fireEvent('videoChange', {state : e.state, description : e.description});
		if(e.state > 7 || e.state < 6){
			Ti.App.Properties.setString('currentPlay', 'video');
		}else{
			Ti.App.Properties.setString('currentPlay', 'noVideo');
			Ti.App.Properties.setBool('videoIsPlay', false);
		}
	});
	
	//whether first video play or not
	if(videoPlayer.getUrl()){
		Ti.App.Properties.setBool('isFirstVideoPlay', false);
	} else{
		Ti.App.Properties.setBool('isFirstVideoPlay', true);
	}
	
	//play control
	Ti.App.Properties.setBool('soundIsPlay', true);
	Ti.App.Properties.setBool('videoIsPlay', true);
})();
