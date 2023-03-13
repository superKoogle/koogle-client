import React from 'react'
import { GoogleMap, useJsApiLoader , Marker, DirectionsRenderer} from '@react-google-maps/api';



function Map({location, height, width, zoomy}) {
    const [center, setCenter] = React.useState()
    const [zoom, setZoom] = React.useState(18);

    const containerStyle = {
      margin: 'auto',
      width: width,
      height: height
    };

    const findLocation=async()=>{
        if(typeof location == 'object'){
            setCenter(location);
            return;
        }
        const response = await fetch('http://localhost:3500/api/maps/geocode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ address: location })
        })
        console.log(response);
        if (response?.ok) {
            const newCenter = await response.json();
            console.log(newCenter)
            setCenter(newCenter);
        }
    }
    React.useEffect(()=>{findLocation()}, [location])
    const [map, setMap] = React.useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBDDTWz13N0ciKyZ15H7eZueA8yoPAl7mI"
  })

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(zoomy? zoomy: zoom)
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
        <DirectionsRenderer origin={center} destination={{ lat: 31.801710903916923, lng:35.222700738262645 }} />
        { /* Child components, such as markers, info windows, etc. */ }
        <>
        <Marker
        key={1}
        position={center}
        ></Marker>
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)