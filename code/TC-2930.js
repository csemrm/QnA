var win = Ti.UI.createWindow({
	backgroundColor : '#fff',
});

var date = new Date(), today = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + 1, 0, 0, 0), someDate = new Date(1876, 1, 1, 11, 46, 0, 0);

console.log("TODAY: " + today);
console.log("SOME DATE: " + someDate);

function checkDate(e) {
	console.log("> TODAY: " + e.today);
	console.log("> SOME DATE: " + e.someDate);
}

Ti.App.addEventListener("forExample", checkDate);
Ti.App.fireEvent("forExample", {
	today : today,
	someDate : someDate
});

win.open();
