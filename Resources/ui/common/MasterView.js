function DetailView() {
    var self = Ti.UI.createView({
 
    });
   
    var topbar = Ti.UI.createView({
        top:0,
        left:0,
        width:"100%",
        height:"60px",
     //   backgroundColor: prColor
    });
    self.add(topbar);
 
    var lblTopbar = Ti.UI.createLabel({
        top: 25,
        text:"New Members",
        color: "#fff"
    });
    topbar.add(lblTopbar);
 
    var btnCheckIn = Titanium.UI.createButton({
    title: 'To Check In',
    color: "#fff",
    top: 25,
    right: 10,
    style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });
    topbar.add(btnCheckIn);
 
    self.addEventListener('itemSelected', function(e) {
        if (e.data = "NM") {
            lblTopbar.text = e.name;
            }
        else if (e.data = "AM") {
            lblTopbar.text = e.name;
            }
        else if (e.data = "PN") {
            lblTopbar.text = e.name;
            }
        else if (e.data = "MD") {
            lblTopbar.text = e.name;
            }
        else if (e.data = "Cat") {
            lblTopbar.text = e.name;
            }
        else if (e.data = "Set") {
            lblTopbar.text = e.name;
            }
    });
 return self;
};
 
module.exports = DetailView;