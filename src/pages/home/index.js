import React, { useState } from 'react'
import Location from '.'

const Home = () => {
const [location, setLocation]=useState();

return (
  <>
  <div>Koogle</div>
    <Location setLocation={setLocation}/>
    {/*<Results location={location}/>*/}
  </>
    
  )
}

export default Home

