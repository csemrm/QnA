var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});
var view1 = Ti.UI.createView({
	backgroundColor : 'red',
	test : 'test1'
});
 
 
var anImageView1 = Ti.UI.createImageView({
	image : '/images/apple.png',
	width : 200,
	height : 200, 
});
  
view1.add(anImageView1);

var view2 = Ti.UI.createView({
	backgroundColor : 'blue',
	test : 'test2'
}); 
var anImageView2 = Ti.UI.createImageView({
	image : '/images/apple.png',
	width : 200,
	height : 200, 
});
  
view2.add(anImageView2);

var view3 = Ti.UI.createView({
	backgroundColor : 'green'
}); 
var anImageView3 = Ti.UI.createImageView({
	image : '/images/apple.png',
	width : 200,
	height : 200, 
});
  
view3.add(anImageView3);


var view4 = Ti.UI.createView({
	backgroundColor : 'black'
}); 

var anImageView4 = Ti.UI.createImageView({
	image : '/images/apple.png',
	width : 200,
	height : 200, 
});
  
view4.add(anImageView4);



var scrollView = Titanium.UI.createScrollableView({
	views : [view1, view2, view3, view4],
	showPagingControl : true,
	pagingControlHeight : 30,
	maxZoomScale : 2.0,
	currentPage : 0
});

var ar = scrollView.getViews();
var t = 0;
setInterval(function(e) {
	if (t >= ar.length) {
		t = 0;
	}
	scrollView.scrollToView(t);
	t++;

}, 1000);

/*setInterval(function(e) {
	 
	if (t <= 0) {
		t = ar.length;
	}
	scrollView.scrollToView(t);
	t--;

}, 1000);

*/
win.add(scrollView);
win.open(); 