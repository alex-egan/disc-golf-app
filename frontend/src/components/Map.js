import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef, useState } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleC1lZ2FuIiwiYSI6ImNsOTZjYmQ1bzAzODkzdXFha3lrZXNhdHoifQ.fHbQVBZNm62eeEHWXhkaSA';

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-117.1);
    const [lat, setLat] = useState(33.1);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
        for (var x = 0; x < 5; x++) {
            var marker = new mapboxgl.Marker().setLngLat([-117.1 + 2*x, 33.1]);
            marker.addTo(map.current);
        }
    });
    
    return (
      <div ref={mapContainer} className="map-container"></div>
    );
}
  
export default Map;