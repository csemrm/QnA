/**
 * @author King
 */
(function(){
	var win = Ti.UI.currentWindow,
		cacheList = Ti.App.Properties.getList('videoCacheDatas'),
		horn = [],
		hornAvId = Ti.App.Properties.getInt('videoCurrentHornAvId'),
		offset = 0;
	
		
	//refresh button
	var refreshButton = Ti.UI.createButton({
		title : '刷新'
	});
	refreshButton.addEventListener('click', function(e){
		//labelStatus.text = '刷新中...';
		//imageArrow.hide();
		//actInd.show();
		//tableView.setContentInsets({top:55}, {animated:true});
		//refresh(tableView, resetPullHeader);
		refresh();
	});
	win.rightNavButton = refreshButton;
	
	//TableView refresh	
	var tableHeader = Ti.UI.createView({
		backgroundColor:'#e2e7ed',
		width:320, 
		height:50
	});

	var imageArrow = Ti.UI.createImageView({
		image:'/images/comm/whiteArrow.png',
		left:20, 
		bottom:5,
		width:23, 
		height:50
	});
	tableHeader.add(imageArrow);
	
	var labelStatus = Ti.UI.createLabel({
		color:'#576c89',
		font:{fontSize:13, fontWeight:'bold'},
		text:'下拉可以刷新...',
		textAlign:'center',
		left:55, 
		bottom:30,
		width:200
	});
	tableHeader.add(labelStatus);
	
	var labelLastUpdated = Ti.UI.createLabel({
		color:'#576c89',
		font:{fontSize:12},
		text:'更新於: ' + Ti.App.Properties.getString('videoLastRefreshTime'),
		textAlign:'center',
		left:55, 
		bottom:15,
		width:200
	});
	tableHeader.add(labelLastUpdated);
	
	var actInd = Ti.UI.createActivityIndicator({
		left:20, 
		bottom:13,
		width:30, 
		height:30
	});
	tableHeader.add(actInd);
	
	// Create a TableView.
	var tableView = Ti.UI.createTableView({
		headerPullView : tableHeader
	});
	win.add(tableView);
	
	var pulling = false;
	var reloading = false;
	
	tableView.addEventListener('scroll',function(e){
		offset = e.contentOffset.y;
		if (pulling && !reloading && offset > -55 && offset < 0){
			pulling = false;
			var unrotate = Ti.UI.create2DMatrix();
			imageArrow.animate({transform:unrotate, duration:180});
			labelStatus.text = '下拉可以刷新...';
		} else if (!pulling && !reloading && offset < -55){
			pulling = true;
			var rotate = Ti.UI.create2DMatrix().rotate(180);
			imageArrow.animate({transform:rotate, duration:180});
			labelStatus.text = '鬆開刷新...';
		}
	});
	
	function resetPullHeader(table){
		reloading = false;
		labelLastUpdated.text = '更新於: ' + Ti.App.Properties.getString('videoLastRefreshTime');
		actInd.hide();
		imageArrow.transform=Ti.UI.create2DMatrix();
		imageArrow.show();
		labelStatus.text = '下拉可以刷新...';
		table.setContentInsets({top:0}, {animated:true});
	}
	
	tableView.addEventListener('dragEnd',function(e){
		if (pulling && !reloading && offset <= -55){
			pulling = false;
			reloading = true;
			labelStatus.text = '刷新中...';
			imageArrow.hide();
			actInd.show();
			e.source.setContentInsets({top:55}, {animated:true});
			refresh(e.source, resetPullHeader);
		}
	});

	//refresh();
	if(cacheList == null){
		refresh();
	}else{
		createList(cacheList);
	}

	function createList(datas){
		var dataList = [];
		for(var i = 0 , len = datas.length; i < len; i ++){
			var content = datas[i],
				avName = content.avname,
				row = Ti.UI.createTableViewRow({
					avId : content.avid,
					width : '100%',
					height : '13%',
					layout : 'absolute',
					//className : 'videoBook',
					hasChild : true
				}),
				videoTitle = Ti.UI.createLabel({
					top : '10%',
					height : '50%',
					width : '90%',
					color : '#2b2b2b',
					//color : '#000',
					font : {
						fontSize : 15
					},
					text : avName.length > 15 ? avName.substring(0, 15) + '...' : avName
				}),
				videoTime = Ti.UI.createLabel({
					top : '65%',
					height : '25%',
					width : '90%',
					font : {
						fontSize : 12
					},
					color : '7b7b7b',
					//color : '#ccc',
					text : content.avaddtime.replace(/-/g, '/') + '  上傳'
				}),
				hornImage = Ti.UI.createImageView({
					width : '7%',
					left : '90%',
					height : 'auto',
					image : '/images/comm/horn.png',
					visible : hornAvId == content.avid ? true : false
				});
			row.add(videoTitle);
			row.add(videoTime);
			row.add(hornImage);
			horn.push([hornImage, content.avid]);
			dataList.push(row);
		}
		tableView.setData(dataList);
	}
	
	function refresh(tag, fun){
		var xhr = Ti.Network.createHTTPClient(),
			url = 'http://23.21.239.200:8080/AppsDoor/avListJSONP.action?id=1',
			testUrl = '';
		xhr.open('GET', url);
		xhr.onload = function(){
			var data = this.responseText.replace('try{null(', '').replace(');}catch(e){}', '');
			var videoDatas = eval(data);
			createList(videoDatas);
			Ti.App.Properties.setList('videoCacheDatas', videoDatas);
			getDuration();
			Ti.App.Properties.setString('videoLastRefreshTime', getFormattedDate());
			if(tag != null && fun != null){
				fun(tag);
			}
		};
		xhr.send();
	}
	
	//get video duration
	function getDuration(){
		var xhr = Ti.Network.createHTTPClient(),
			url = 'http://download.appsdoor.net/koob/duration/av_duration.txt';
		xhr.open('GET', url);
		xhr.onload = function(){
			var videoDurations = eval(this.responseText);
			Ti.App.Properties.setList('videoDurations', videoDurations);
		};
		xhr.send();
	}
	
	function setVisibleHorn(id, avId, isTrue){
		if(horn[id][1] == avId){
			horn[id][0].setVisible(isTrue);
		}else{
			for(var i = 0, len = horn.length; i < len; i ++){
				if(horn[i][1] == avId){
					horn[i][0].setVisible(isTrue);
					break;
				}
			}
		}
	}
	
	// create table view event listener
	tableView.addEventListener('click', function(e){
		var rowData = e.rowData,
			index = e.index,
			avId = rowData.avId;
		var win = Ti.UI.createWindow({
			id : index,
			avId : avId,
			url : '/ui/common/videoBookPlay.js',
			barImage : '/images/comm/title.png',
			barColor : '#5ec9dc',
			backgroundColor : '#fff',
			backButtonTitle : '返回',
			isFromFirst : false
		});
		hornAvId = Ti.App.Properties.getInt('videoCurrentHornAvId');
		var lastHornId = Ti.App.Properties.getInt('videoCurrentHornId');
		lastHornId = lastHornId != null ? lastHornId : 0;
		setVisibleHorn(lastHornId, hornAvId, false);
		setVisibleHorn(index, avId, true);
		Ti.App.Properties.setInt('videoLastHornId', lastHornId);
		Ti.App.Properties.setInt('videoLastHornAvId', hornAvId);
		Ti.App.Properties.setInt('videoCurrentHornId', index);
		Ti.App.Properties.setInt('videoCurrentHornAvId', avId);
		Ti.UI.currentTab.open(win, {animated:true});
	});
	
	function getFormattedDate(){
		var date = new Date();
		return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
	}
	
})();
