import React, { useState } from 'react';
//import Location from '.'
import Location from './Location';

const Home = () => {
  const [location, setLocation] = useState();

  return (
    <>
      <Location setLocation={setLocation} />
      <span>{location}</span>
      {/*<Results location={location}/>*/}
    </>

  )
}

export default Home

