class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    Object.values(benches).forEach(bench => {
      if(!Object.keys(this.markers).includes(bench.id)){
        this.createMarkerFromBench(bench);
      }
    });
  }

  createMarkerFromBench(bench) {

    const position = new google.maps.LatLng(bench.lat,bench.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      benchId: bench.id,
    });
    
    this.markers[marker.benchId] = marker;
  }
}

export default MarkerManager;