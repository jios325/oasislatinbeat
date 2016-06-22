   var myCenter = new google.maps.LatLng(21.162746, -86.853439);

    function initialize() {
           var mapProp = {
            center:myCenter,
            zoom:16,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp); 
        var marker = new google.maps.Marker({
            position: myCenter,
            map:map,
            title:"Ecowhite Smart Laundry"
        });
         var contentString = '<div id="content">'+
     	'<h1>Ecowhite Smart Laundry</h1>'+
     	'<img style="margin:o auto;"src="images/logo-ecowhite.png" alt="" />'
      	'</div>';

	  var infowindow = new google.maps.InfoWindow({
	    content: contentString
	  });
		marker.setMap(map)
		  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
		;}
        google.maps.event.addDomListener(window, 'load', initialize)