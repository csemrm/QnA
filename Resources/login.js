function LoginUser(nav) {'use strict';

	var mainWin = Ti.UI.createWindow({
		backgroundColor : '#ededed',
		width : 'auto',
		height : 'auto',
		title : 'Welcome',
		leftNavButton : Ti.UI.createButton({
			title : 'Register',
			color : '#fff',
			font : {
				fontSize : 17,
				fontFamily : "Helvetica Neue"
			}
		}),
		rightNavButton : Ti.UI.createButton({
			title : 'Sign In',
			color : '#fff',
			font : {
				fontSize : 17,
				fontFamily : "Helvetica Neue"
			},
			enabled : false
		}),
		navTintColor : '#fff',
		barColor : '#1179a0',
		extendEdges : [Ti.UI.EXTEND_EDGE_TOP],
		includeOpaqueBars : false
	});

	var forgot = Titanium.UI.createLabel({
		text : 'Forgot password?',
		textAlign : 'center',
		color : '#8899a6',
		font : {
			fontSize : 15,
			fontFamily : "HelveticaNeue-Light"
		}
	});

	var table = Ti.UI.createTableView({
		width : 320,
		separatorColor : '#ddd',
		style : Ti.UI.iPhone.TableViewStyle.GROUPED,
		backgroundColor : 'transparent',
		editable : false,
		//scrollable:false,
		footerView : forgot
	});

	var row1 = Ti.UI.createTableViewRow({
		backgroundColor : '#fff',
		selectionStyle : Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	});

	var row2 = Ti.UI.createTableViewRow({
		backgroundColor : '#fff',
		selectionStyle : Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	});

	var userField = Ti.UI.createTextField({
		hintText : "Username or email",
		top : 1,
		width : 320,
		height : 42,
		paddingLeft : 15,
		color : '#8899a6',
		font : {
			fontSize : 15,
			fontFamily : "HelveticaNeue-Light"
		},
		autocorrect : false,
		autocapitalization : Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
		returnKeyType : Ti.UI.RETURNKEY_NEXT
	});

	var passField = Ti.UI.createTextField({
		hintText : "Password",
		passwordMask : true,
		top : 1,
		width : 320,
		height : 42,
		paddingLeft : 15,
		color : '#8899a6',
		font : {
			fontSize : 15,
			fontFamily : "HelveticaNeue-Light"
		},
		returnKeyType : Ti.UI.RETURNKEY_GO,
		enableReturnKey : true
	});

	// Events

	mainWin.addEventListener('focus', function() {
		userField.focus();
	});

	// Add

	row1.add(userField);
	row2.add(passField);

	table.appendRow(row1);
	table.appendRow(row2);

	mainWin.add(table);

	// Open window

	return mainWin;
}

exports.LoginUser = LoginUser; 