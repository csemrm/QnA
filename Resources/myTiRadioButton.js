exports.createRadioButtonGroup = function(arg) {
	var selectedIndex = [];
	var selectedValue = [];
	var self = Ti.UI.createView({
		width : arg.width,
		height : arg.height,
		groupId : arg.groupId,
		layout : arg.layout,
		top : 10,
		left : arg.left,
		selectedIndex : [],
		selectedValue : [],
	});

	Ti.API.info('arg.radioItemsValue' + arg.radioItemsValue);
	for (var i = 0, count = arg.radioItemsValue.length; i < count; i++) {

		Ti.API.info('arg.radioItemsValue[i]' + arg.radioItemsValue[i]);
		var radioItem = Ti.UI.createView({
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
			top : 0,
			left : 0,
			id : i,
			layout : 'horizontal',
		});
		var radioItemImage = Ti.UI.createImageView({
			width : arg.radioItemsWidth,
			height : arg.radioItemsHeight,
			image : arg.radioItemsBackgroundImage,

			left : 0,
			id : i
		});
		radioItem.add(radioItemImage);
		var radioItemLabel = Ti.UI.createLabel({
			width : Ti.UI.SIZE,
			text : arg.radioItemsValue[i],

			color : arg.labelColor.length > 0 ? arg.labelColor : '#000',
			left : 10,
			id : i
		});
		radioItem.add(radioItemLabel);

		radioItem.addEventListener('click', function(e) {
			var _parent = this.getParent();

			for (var i = 0, count = _parent.children.length; i < count; i++) {
				Ti.API.info('i' + i + 'e.source.id' + e.source.id + '  arg.radioItemsValue[i] :' + arg.radioItemsValue[i]);

				if (i == e.source.id) {
					_parent.children[i].children[0].setImage(arg.radioItemsBackgroundSelectedImage);

					selectedIndex[0] = i;
					selectedValue[0] = arg.radioItemsValue[i];

					_parent.selectedIndex = selectedIndex;
					_parent.selectedValue = selectedValue;
					continue;
				} else {
					_parent.children[i].children[0].setImage(arg.radioItemsBackgroundImage);
				}
			}
			Ti.API.info('  _parent.selectedValue :' + _parent.selectedValue.toString());
		});

		self.add(radioItem);
	}

	return self;
};

exports.createCheckBoxButtonGroup = function(arg) {
	var selectedIndex = [];
	var selectedValue = [];
	var self = Ti.UI.createView({
		width : arg.width,
		height : arg.height,
		groupId : arg.groupId,
		layout : arg.layout,
		top : 10,
		left : arg.left,
		selectedIndex : [],
		selectedValue : [],
	});
	for (var i = 0, count = arg.radioItemsValue.length; i < count; i++) {

		var radioItem = Ti.UI.createView({
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
			top : 0,
			left : 2,
			id : i,
			status : false,
			layout : 'horizontal',
		});
		var radioItemImage = Ti.UI.createImageView({
			width : arg.radioItemsWidth,
			height : arg.radioItemsHeight,
			image : arg.radioItemsBackgroundImage,

			left : 0,
			id : i,
			status : false,
		});
		radioItem.add(radioItemImage);
		var radioItemLabel = Ti.UI.createLabel({
			width : Ti.UI.SIZE,
			text : arg.radioItemsValue[i],

			color : arg.labelColor.length > 0 ? arg.labelColor : '#000',
			left : 2,
			id : i,
			status : false,
		});
		radioItem.add(radioItemLabel);

		radioItem.addEventListener('singletap', function(e) {
			var _parent = this.getParent(), i = e.source.id;

			e.source.status = e.source.status == true ? false : true;
			if (e.source.status == true) {
				_parent.children[i].children[0].setImage(arg.radioItemsBackgroundSelectedImage);
				selectedIndex[selectedIndex.length] = i;
				selectedValue[selectedValue.length] = arg.radioItemsValue[i];
			} else {
				var array_index = selectedIndex.indexOf(i);
				selectedIndex.splice(array_index, 1);
				selectedValue.splice(array_index, 1);
				_parent.children[i].children[0].setImage(arg.radioItemsBackgroundImage);
			}
			_parent.selectedValue = selectedValue;
			_parent.selectedIndex = selectedIndex;
			Ti.API.info('  _parent.selectedValue :' + _parent.selectedValue.toString());

		});

		self.add(radioItem);
	}

	return self;
};