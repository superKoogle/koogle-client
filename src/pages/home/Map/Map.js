import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  margin: 'auto',
  width: '400px',
  height: '400px'
};

function MyComponent({location}) {
    const [center, setCenter] = React.useState()
    const [zoom, setZoom] = React.useState(18);

    const findLocation=async()=>{
        console.log(location);
        const response = await fetch('http://localhost:3500/api/maps/geocode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ address: location })
        })
        console.log(response);
        if (response?.ok) {
            const center = await response.json();
            console.log(center)
            setCenter(center);
        }
    }
    React.useEffect(()=>{if(!center)findLocation();}, [])
    const [map, setMap] = React.useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBDDTWz13N0ciKyZ15H7eZueA8yoPAl7mI"
  })

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)