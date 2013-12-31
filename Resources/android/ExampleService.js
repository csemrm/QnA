var service = Ti.Android.currentService;
var intent = service.getIntent();
var teststring = intent.getStringExtra('message') + ' (instance ' + service.serviceInstanceId + ')';

Ti.API.info('teststring:  ' + teststring); 