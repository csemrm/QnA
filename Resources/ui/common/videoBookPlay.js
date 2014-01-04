/**
 * @author King
 */
(function(){
	var win = Ti.UI.currentWindow,
		cacheList = Ti.App.Properties.getList('videoCacheDatas'),
		lastHornId = Ti.App.Properties.getInt('videoLastHornId'),
		lastHornAvId = Ti.App.Properties.getInt('videoLastHornAvId'),
		currentHornId = Ti.App.Properties.getInt('videoCurrentHornId'),
		currentHornAvId = Ti.App.Properties.getInt('videoCurrentHornAvId'),
		videoDurations = Ti.App.Properties.getList('videoDurations'),
		isPlay = Ti.App.Properties.getBool('videoIsPlay'),
		duration = 0,
		index = win.id,
		avId = win.avId,
		timer = null,
		currentVideo = null;
	function getCurrentVideo(id, avId){
		if(cacheList[id].avid == avId){
			currentVideo = cacheList[id];
		}else{
			for(var i = 0, len = cacheList.length; i < len; i ++){
				if(cacheList[i].avid == avId){
					currentVideo = cacheList[id];
					break;
				}
			}
		}
	}
	getCurrentVideo(index, avId);
	
	function getDuration(id){
		var temp = videoDurations[id];
		if(currentVideo.avurl.lastIndexOf(temp[0]) != -1){
			duration = (temp[1] * 60 + temp[2]) * 1000;
		}else{
			for(var i = 0, len = videoDurations.length; i < len; i ++){
				var temps = videoDurations[i];
				if(currentVideo.avurl.lastIndexOf(temps[0]) != -1){
					duration = (temps[1] * 60 + temps[2]) * 1000;
					break;
				}
			}
		}
	}
	getDuration(index);
	
	win.setTitle(currentVideo.avname);	
	var self = Ti.UI.createView({
		width : '100%',
		height : '100%',
		backgroundColor : '#fff'
	});
	win.add(self);
	
	
	//theme pictirue
	var imageUrl = currentVideo.avurl.replace('.mp3', '.jpg');
	var themePic = Ti.UI.createImageView({
		left : '15%',
		top : '2%',
		width : '70%',
		height : '77%',
		image : imageUrl
	});

	themePic.addEventListener('click', function(e){
		if(timer != null){
			clearTimeout(timer);
		}
		chapIntro.setVisible(true);
		themePic.setVisible(false);
	});
	self.add(themePic);
	
	//chapter intro
	var chapIntro = Ti.UI.createScrollView({
		left : '15%',
		top : '2%',
		width : '70%',
		height : '77%',
		contentWidth:'auto',
		contentHeight:'auto',
		showVerticalScrollIndicator:true,
		backgroundColor : '#fff',
		visible : false
	});
	var intro = Ti.UI.createLabel({
		text : currentVideo.avcontent.replace(/&nbsp;/g, ' ').replace(/<\/br>/g, '\n')
	});
	chapIntro.add(intro);
	chapIntro.addEventListener('click', function(e){
		themePic.setVisible(true);
		chapIntro.setVisible(false);
	});
	self.add(chapIntro);
	
	//定时切换到章节文字介绍
	timer = setTimeout(function(){
		chapIntro.setVisible(true);
		themePic.setVisible(false);
		timer = null;
	}, 5000);

	//play controls
	var playControl = Ti.UI.createView({
		bottom : 0,
		width : '100%',
		height : '20%',
		backgroundImage : '/images/play/bg.png'
	});
	self.add(playControl);
	
	//play button
	var playButton = Ti.UI.createButton({
		left : '7.5%',
		top : '32%',
		width : '8%',
		height : '40%',
		backgroundImage : lastHornAvId != avId ? '/images/play/stop.png' : (isPlay || isPlay == null ? '/images/play/stop.png' : '/images/play/play.png')
	});
	playControl.add(playButton);
	
	//set playControls
	playButton.addEventListener('click', function(e){
		if (playButton.getBackgroundImage() == '/images/play/stop.png') {
			playButton.setBackgroundImage('/images/play/play.png');
			Ti.App.fireEvent('videoPause', {});
		}
		else {
			playButton.setBackgroundImage('/images/play/stop.png');
			Ti.App.fireEvent('videoPlay', {});
		}
	});
	
	//play slider
	var playSlider = Ti.UI.createSlider({
		left : '21%',
		top : '37%',
		width : '73.125%',
		height : '5%',
		touchEnabled : false,
		min : 0,
		max : duration
	});
	playControl.add(playSlider);
	
	//loading...
	var actInd = Titanium.UI.createActivityIndicator({
		bottom : 60, 
		height : 'auto',
		width : 'auto',
		style : Titanium.UI.iPhone.ActivityIndicatorStyle.DARK,
		font : {fontFamily:'Helvetica Neue', fontSize:15,fontWeight:'bold'},
		message : 'Loading...',
		color : '#2b2b2b'
	});
	self.add(actInd);
	
	//set videoPlayer's  url
	if(lastHornAvId != currentHornAvId && !win.isFromFirst){
		Ti.App.fireEvent('setVideoUrl', {url : currentVideo.avurl});
		Ti.App.Properties.setBool('isFirstVideoPlay', false);
	}else{
		if(Ti.App.Properties.getBool('isFirstVideoPlay')){
			Ti.App.fireEvent('setVideoUrl', {url : currentVideo.avurl});
			Ti.App.Properties.setBool('isFirstVideoPlay', false);
		}
	}
	
	//set playSlider value
	Ti.App.addEventListener('videoProgress', function(e){
		playSlider.value = Math.round(e.currentTime);
	});
	
	//set videoPlayer change state
	Ti.App.addEventListener('videoChange', function(e){
		var state = e.state;
		if(state == 4 || state > 5){
			actInd.hide();
		}else{
			actInd.show();
		}
	});
	
})();
