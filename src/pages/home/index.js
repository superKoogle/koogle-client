
import React, { useState } from 'react';
//import Location from '.'
import Location from './Location';
import Results from './Results'
import Map from '../../components/Map'

const Home = () => {
  const [location, setLocation] = useState();

  return (
    <>
      <Location setLocation={setLocation} />
      
      {/*<MyMapComponent isMarkerShown />
     <MapWithAMarker></MapWithAMarker>*/}
      {location && <Map location={location} width={'400px'} height={'400px'}/>}
      {location && <Results location={location}/>}
    </>
  )
}

export default Home