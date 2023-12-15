//déclaration des couches openlayers
var lyr_osm = new ol.layer.Tile({
    title: 'OSM',
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
});

var layersList = [lyr_osm];

var mapView = new ol.View({
    projection: 'EPSG:3857',
    center: new ol.geom.Point([-8239393.9994, 40.7090]).transform('EPSG:4326', 'EPSG:3857').getCoordinates(),
    zoom: 7
});

var map = new ol.Map({
    target: 'map',
    layers: layersList,
    view: mapView
});
var MousePosition = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326'
});
map.addControl(MousePosition)

map.on('pointermove', function (event) {
    var coord3857 = event.coordinate;
    var coord4326 = ol.proj.transform(coord3857, 'EPSG:3857', 'EPSG:4326');
    $('#mouse3857').text(ol.coordinate.toStringXY(coord3857, 2));
    $('#mouse4326').text(ol.coordinate.toStringXY(coord4326, 5));
});


var location_array = [];

// Create a vector layer to add features
var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({ color: 'red' }),
            stroke: new ol.style.Stroke({ color: 'white', width: 2 }),
        }),
    }),
});


// Create a draw interaction for points
var draw = new ol.interaction.Draw({
    source: vectorLayer.getSource(),
    type: 'Point',
});

// Add the draw interaction to the map, but deactivate it initially
map.addInteraction(draw);
draw.setActive(false);

// Listen for the 'drawend' event to handle the drawn point
draw.on('drawend', function (event) {
    var coord = event.feature.getGeometry().getCoordinates();
    location_array = coord;
    document.getElementById('lon').value = location_array[0];
    document.getElementById('lat').value = location_array[1];

    // Deactivate the draw interaction
    draw.setActive(false);
});

// ...

// Listen for single click to activate the draw interaction
map.on('singleclick', function (evt) {
    onSingleClick(evt);
});

// Modify onSingleClick function
var onSingleClick = function (evt) {
    var coord = evt.coordinate;
    console.log(coord);
    location_array = coord;

    // Clear existing features
    vectorLayer.getSource().clear();

    var feature = new ol.Feature(new ol.geom.Point(coord));
    vectorLayer.getSource().addFeature(feature);

    // Activate the draw interaction
    draw.setActive(true);
};

    // Add the point feature to the vector layer
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Geolocation

 function prediction() {
    gender_elements = document.getElementsByName("Gender")
    for (i = 0; i < gender_elements.length; i++) {
        if (gender_elements[i].checked) {
            gender = gender_elements[i].value;
        }
    }
    race_elements = document.getElementsByName("Race")
    for (i = 0; i < race_elements.length; i++) {
        if (race_elements[i].checked) {
            race = race_elements[i].value;
        }
    }
    
    age = document.getElementById("age").value
    date = document.getElementById("date").value
    dateParts = date.split(" ")[0].split("-");
    console.log( dateParts)
    year = parseInt(dateParts[0]);
    month = parseInt(dateParts[1]);
    day = parseInt(dateParts[2]);
    hour = document.getElementById("hour").value
    place_elements = document.getElementsByName("Place")
    for (i = 0; i < place_elements.length; i++) {
        if (place_elements[i].checked) {
            place = place_elements[i].value;
        }
    }
    if (location_array.length == 0) {
        alert("Please indicate your position")
    }
    else {
        //new lines

        ////
        result = fetch('http://127.0.0.1:8000/prediction', {
            method: 'POST',
            body: JSON.stringify({
                gender: gender,
                race: race,
                age: age,
                day: day,
                month: month,
                year: year,
                hour: hour,
                place: place,
                lat: location_array[0],
                lon: location_array[1]
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        result.then(response => response.json())
            .then(data => { 
                document.getElementById("resulttt").value = data["result"];
                console.log(data); 
            })
    }
}