import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef, useState } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleC1lZ2FuIiwiYSI6ImNsOTZjYmQ1bzAzODkzdXFha3lrZXNhdHoifQ.fHbQVBZNm62eeEHWXhkaSA';

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });
    
    return (
      <div ref={mapContainer} className="map-container"></div>
    );
}
  
export default Map;