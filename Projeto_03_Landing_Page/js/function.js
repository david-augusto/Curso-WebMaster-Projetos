window.onload = function(){

    var map;

    function inicialize(){
        var mapProp = {
            center: new google.maps.LatLng(-9.395942,-40.490764),
            scrollweel: false,
            zoom: 12,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat, long, icon, content,click){
        var latLng = {'lat':lat,'lng':long};

        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon
    });

    var infoWindow = new google.maps.InfoWindow({
        content:content,
        maxWidth:200,
        pixelOffset: new google.maps.Size(0,20)
    });

    if(click == true){
        google.maps.event.addListener(marker,'click',function(){
            infoWindow.open(map,marker);
        });

    } else{
        infoWindow.open(map, marker);
    }
}

    inicialize();

    var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;">Meu endereço!</p>'
    addMarker(-9.396238,-40.490946,'',conteudo, true);

    setTimeout(function(){
        map.panTo({'lat':-23.550520,'lng':-46.633309});
    },4000);

}