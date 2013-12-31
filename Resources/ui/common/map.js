//Args Example
/*

var args = {
titulo_mapa:'Ágora de la Ciudad de Xalapa',
subtitulo_mapa: 'Bajos del Parque Juárez s/n. Centro',
latitude : 19.526586455103,
longitude : -96.923961639404,
};

*/

//Test Case
function Window(args) {
	var opciones = args || {};
	 
	var mapWrapper = Titanium.UI.createWindow();

	 
	return mapWrapper;
};

module.exports = Window; 