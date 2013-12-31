
var date1 = new Date(2013, 09, 30);
// set your date

var time = date1.getTime();

Ti.API.info('time' + time);

d2 = new Date();
d2.setDate(d2.getDate() + 30);
// add or subsruct you number of day

if (time > d2.getTime()) {
	Ti.API.info('time' + time + 'd2 ' + d2.getTime() + 'bigger');
} else {
	Ti.API.info('time' + time + 'd2 ' + d2.getTime() + 'smaller');
}