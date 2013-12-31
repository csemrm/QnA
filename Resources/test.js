function test() {
	// create view
	var viewContainer = Ti.UI.createView({
		backgroundColor : 'pink',
		width : 'auto',
		height : 'auto',
		layout : 'vertical'

	});

	// create imageviews

	var imageView1 = Ti.UI.createView({
		backgroundImage : 'http://rack.2.mshcdn.com/media/ZgkyMDEyLzEyLzAzL2U0L3NlZWhvd3lvdXJnLjlyMS5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/8fec6ce4/e71/see-how-your-google-results-measure-up-with-google-grader-video--6b8bbb4b41.jpg',
		width : '70',
		height : '70',
		top : 75

	});
	var imageView2 = Ti.UI.createView({
		backgroundImage : 'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-prn2/q71/s720x720/1464712_555903507835512_1935095682_n.jpg',
		width : '70',
		height : '70'

	});
	var imageView3 = Ti.UI.createView({
		backgroundImage : 'http://rack.2.mshcdn.com/media/ZgkyMDEyLzEyLzAzL2U0L3NlZWhvd3lvdXJnLjlyMS5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/8fec6ce4/e71/see-how-your-google-results-measure-up-with-google-grader-video--6b8bbb4b41.jpg',
		width : '70',
		height : '70'

	});
	var imageView4 = Ti.UI.createView({
		backgroundImage : 'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-prn2/q71/s720x720/1464712_555903507835512_1935095682_n.jpg',
		width : '70',
		height : '70'

	});
	var imageView5 = Ti.UI.createView({
		backgroundImage : 'http://rack.2.mshcdn.com/media/ZgkyMDEyLzEyLzAzL2U0L3NlZWhvd3lvdXJnLjlyMS5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/8fec6ce4/e71/see-how-your-google-results-measure-up-with-google-grader-video--6b8bbb4b41.jpg',
		width : '70',
		height : '70'

	});

	// Add to parent

	viewContainer.add(imageView1);
	viewContainer.add(imageView2);
	viewContainer.add(imageView3);
	viewContainer.add(imageView4);
	viewContainer.add(imageView5);
	return viewContainer;

};
module.exports = test;
