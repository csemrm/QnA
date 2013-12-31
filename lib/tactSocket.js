function tactSocket(host,port){
    var tactsocket = Ti.Network.Socket.createTCP({
        host : host,
        port : port,
        connected : function(e) {
            alert('connected socket');
            //alert(tactsocket.isWriteable);           
        },
        error : function(e) {
            alert('Error (' + e.errorCode + '): ' + e.error);
        }
    });
 
    //Listen to the 'app_close' event to close the socket
    Ti.App.addEventListener('app_close',function(){        
        tactsocket.close();
        alert('socket closed');        
    });
 
    return self;
}