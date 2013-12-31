//************************************************CREATE An ADD Evenet**********************************************************
var fbmod5=require('facebook');
fbmod5.appid = '416805508435668';
fbmod5.permissions = ['create_event'];

var winevent =Ti.UI.currentWindow;
winevent.backgroundColor='#fff';

//--------------------------------------------------------------------------
var LaName  = Ti.UI.createLabel({
	text : 'Name',
	top :5,
	left :5,
	height :35,
	
});

winevent.add(LaName);


var txtName = Ti.UI.createTextField({
	height :35,
	top : 5,
	width : 170,
	right: 5,

	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
winevent.add(txtName);
//-----------------------------------------------------------------------------------------

var LaStartdate  = Ti.UI.createLabel({
	text : 'Start date',
	top :38,
	left :5,
	height :35,
	
});

winevent.add(LaStartdate);


var txtStartdate = Ti.UI.createTextField({
	height :35,
	top : 38,
	width : 170,
	right: 5,
	hintText:'2013-11-01',
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
winevent.add(txtStartdate);
//-------------------------------------------------------------------------------------------

var LaEnddate  = Ti.UI.createLabel({
	text : 'End date',
	top :70,
	left :5,
	height :35,
	
});

winevent.add(LaEnddate);


var txtEnddate = Ti.UI.createTextField({
	height :35,
	top : 70,
	width : 170,
	right: 5,
	hintText:'2013-11-01',
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
winevent.add(txtEnddate);
//------------------------------------------------------------------------------------
var LaDuration   = Ti.UI.createLabel({
	text : 'Description',
	top :100,
	left :5,
	height :35,
	
});

winevent.add(LaDuration);


var txtDes  = Ti.UI.createTextField({
	height :35,
	top : 102,
	width : 170,
	right: 5,
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
winevent.add(txtDes);
//-------------------------------------------------------------------------------------------------
var Lalocation  = Ti.UI.createLabel({
	text : 'Location',
	top :130,
	left :5,
	height :35,
	
});

winevent.add(Lalocation);


var txtlocation  = Ti.UI.createTextField({
	height :35,
	top : 134,
	width : 170,
	right: 5,

	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
winevent.add(txtlocation);


//------------------------------------------------------------------------------------------------

var addevent = Ti.UI.createButton({
	title : 'Create',
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE,
	top : 178,
	//left : myLeft
});


addevent.addEventListener('click', function() {
	//alert('\'aButton\' was clicked!');
	
	EventADD();
});

// Add to the parent view.
winevent.add(addevent);

function EventADD() 
{
	var data;
	var getRes=dateChecking(txtStartdate.getValue(),txtEnddate.getValue());//checking date formate
	
	if(getRes==1) // if all are ok the access this section 	
	{
		var starttime = txtStartdate.getValue();//new Date(txtStartdate).toISOString();
		var endtime = txtEnddate.getValue();//new Date(txtEnddate).toISOString();
		var title = txtName.getValue();
		var descrip = txtDes.getValue();
		var loc=txtlocation.getValue();
		if(txtEnddate.getValue().length!=0)
		{
			 data = {
			    start_time: starttime, // API expects a JSON stringified date
			    end_time: endtime,
			    description: descrip,
			    name: title,
			    location:loc
			};
		}
		else
		{
			data = {
			    start_time: starttime, // API expects a JSON stringified date
			    //end_time: endtime,
			    description: descrip,
			    name: title,
			    location:loc
			};	
		}
		
		fbmod5.requestWithGraphPath('me/events', data, 'POST', function(e) {
		    if (e.success) {
		        alert("Success Create !!!");
		        Ti.App.fireEvent('eventReLoad');
		    } else {
		        if (e.error) {
		            alert(e.error);
		        } else {
		            alert("Unknown result");
		        }
		    }
		});
	
	}
}
//----------------------------------------------------------------------------------------------------

function  dateChecking(starts,ends)
{
	var test=0;
	if(starts==null||starts=='')
	{
		alert('Fill The Start Date Field');
		test=0;
	}
	else
	{
		var res = starts.split("-");
		if(res.length!=3||res[0].length!=4||res[1].length!=2||res[2].length!=2)
		{
			alert('Start Date Format Is : YYYY-MM-DD(2013-11-01)');
			test=0;
		}
		else
		{
			test=1;
		}
	}
	if(ends.length!=0)
	{
		var res1 = ends.split("-");
		if(res1.length!=3||res1[0].length!=4||res1[1].length!=2||res1[2].length!=2)
		{
			alert('End Date Format Is : YYYY-MM-DD(2013-11-01)');
			test=0;
		}
		else
		{
			test=1;
		}
	}
	return test;
}

