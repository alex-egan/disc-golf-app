import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef, useState } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleC1lZ2FuIiwiYSI6ImNsOTZjYmQ1bzAzODkzdXFha3lrZXNhdHoifQ.fHbQVBZNm62eeEHWXhkaSA';

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [courses, setCourses] = useState();
    const [lng, setLng] = useState(-117.1);
    const [lat, setLat] = useState(33.1);
    const [zoom, setZoom] = useState(9);

    function Marker(course) {
        return (
            `<div className="marker">
                <h3>${course.name}</h3>
                <div>${course.location.address}</div>
                <div>${course.description}</div>
                <button onClick="window.location.replace('/courses/${course._id}')">Go To Course</button>
            </div>`
        );
      }

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        fetch("http://localhost:5000/courses")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                data.forEach(course => {
                    console.log(course);
                    let long = course.location.longitude.$numberDecimal;
                    let lat = course.location.latitude.$numberDecimal;
                    console.log(long + " " + lat)
                    var marker = new mapboxgl.Marker()
                        .setLngLat([long, lat])
                        .setPopup(
                        new mapboxgl.Popup({ offset: 25 }) // add popups
                          .setHTML(
                            `${Marker(course)}`
                          )
                        );
                    marker.addTo(map.current); 
                });
            })
            .catch(err => console.log(err));
    });
    
    return (
      <div ref={mapContainer} className="map-container"></div>
    );
}
  
export default Map;