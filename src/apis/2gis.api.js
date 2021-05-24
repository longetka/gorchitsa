import DG from '2gis-maps';

var map;
var coordinates = [52.5370802,85.2206601];

DG.then(function() {
	map = DG.map('map', {
		center: coordinates,
		zoom: 17
	});

	DG
		.marker(coordinates)
		.addTo(map)
		.bindPopup('ул. Советская, 27/3, ТЦ Бута, вход через SPA бутон')
});

export default DG;