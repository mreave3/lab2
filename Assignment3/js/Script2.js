var map = L.map('map').setView([40, -95], 4);

var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);
	
var Townships = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/mapoverlays_political/MapServer/WMSServer", {
    layers: '9',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
}).addTo(map);

var Counties = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/mapoverlays_political/MapServer/WMSServer", {
    layers: '8',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
	opacity: 0.50
}).addTo(map);

var States = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/mapoverlays_political/MapServer/WMSServer", {
    layers: '7',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
	opacity: 0.25
}).addTo(map);

var baseLayers = {
    "Political": map
};

var overlays = {
    "Townships": Townships,
    "Counties": Counties,
	"States": States
};

L.control.layers(baseLayers, overlays).addTo(map);