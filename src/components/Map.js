import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from '@react-google-maps/api';



function Map({ location, height, width, zoomy , showDirection, userLocation, m}) {
  const [zoom, setZoom] = React.useState(18);
  const [route, setRoute] = React.useState();

  console.log(showDirection);
  const getDirection = async () => {
    const res = await fetch("http://localhost:3500/api/maps/direction", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ source_lat: userLocation.lat, source_lng: userLocation.lng, dest_lat: location.lat, dest_lng: location.lng })
    })
    if(res.ok){
      const dir = await res.json();
      setRoute(dir);
    }
  }

  React.useEffect(()=>{
    getDirection();
   },[location])

  const containerStyle = {
    margin: 'auto',
    marginTop: m || 0,
    width: width,
    height: height
  };

  const [map, setMap] = React.useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBDDTWz13N0ciKyZ15H7eZueA8yoPAl7mI"
  })

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(zoomy ? zoomy : zoom)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {showDirection && route && <DirectionsRenderer directions={route}/>}
      { /* Child components, such as markers, info windows, etc. */}
      <>
        <Marker
          key={1}
          position={location}
        ></Marker>
      </>
    </GoogleMap>
  ) : <></>
}

export default React.memo(Map)