
import React, { useState } from 'react';
//import Location from '.'
import Location from './Location';
import Results from './Results'
import MyComponent from './Map/Map'

const Home = () => {
  const [location, setLocation] = useState();

  return (
    <>
      <Location setLocation={setLocation} />
      
       {/*<MyMapComponent isMarkerShown />
     <MapWithAMarker></MapWithAMarker>*/}
     {location && <MyComponent location={location}/>}
      {location && <Results location={location}/>}
    </>

  )
}

export default Home