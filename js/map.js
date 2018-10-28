window.addEventListener("load",initialize);

function initialize(){
	
	// define map options
	
	var mapOpt = {
    center:new google.maps.LatLng(48,8),
    zoom:3,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
	
	var map = new google.maps.Map(document.getElementById("map-container"),mapOpt);
	google.maps.event.addDomListener(window, 'load', initialize);
	
	
	// store icon images
	
	var edu = "png/icon_education.png";
	//var fun = "png/icon_vacation.png";
	
	// load the GeoJSON-layers	
	
	var edu = new google.maps.Data({map:map});
	edu.loadGeoJson("json/edu.json", {}, function(data){
		edu.setStyle({icon: edu})});
	
	//var fun = new google.maps.Data({map:map});
	//fun.loadGeoJson("json/fun.json", {}, function(data){
	//	fun.setStyle({icon: fun})});

	// add interactivity
	
	/*var infoWindow = new google.maps.InfoWindow();
	
	google.maps.event.addListener(map, "click", function(evt) {
    infoWindow.close(evt);
	});
	
	//education (name, image)	
	google.maps.event.addListener(edu,"click", function(evt){
		var infoedu = '<div id="infohotels">' + 
			'<h2><font face="Arial" size="3" color="#08306b">' + evt.feature.getProperty("name") + '</font></h2>' +
			'<img width=480 height=360 src="' + evt.feature.getProperty("img") + '"></div>';
		infoWindow.setContent(infoedu);
		infoWindow.setPosition(evt.latLng);
		infoWindow.open(map);	
	})
	
	/*fun locations (name, image)	
	google.maps.event.addListener(fun,"click", function(evt){
		var infofun = '<div id="infohotels">' + 
			'<h2><font face="Arial" size="3" color="#08306b">' + evt.feature.getProperty("name") + '</font></h2>' +
			'<img width=480 height=360 src="' + evt.feature.getProperty("img") + '"></div>';
		infoWindow.setContent(infofun);
		infoWindow.setPosition(evt.latLng);
		infoWindow.open(map);	
		
	})
	*/
	
		
}