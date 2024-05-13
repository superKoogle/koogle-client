
import React, { useEffect, useState } from 'react';
//import Location from '.'
import Location from './Location';
import Results from './Results'
import Map from '../../components/Map'
import CustomizedSlider from '../../components/CustomizedSlider';
import { Box, Grid } from '@mui/material';
import TypographyP from './typographyP';

const Home = () => {
  const [location, setLocation] = useState();
  const [range, setRange] = useState(33000);
  const [results, setResults] = useState([]);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  async function showPosition(position) {
    console.log(position);
    console.log("location", { lat: position.coords.latitude, lng: position.coords.longitude });
    setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
  }

  useEffect(() => { getLocation() }, [])
  var WelcomeText = "Welcome to the Koogle! Here you can get to know your surroundings in a convenient and fast way.\nby entering your location, kosher places near you will be displayed such as: restaurants, supermarkets, synagogues and more"
  return (
    <Box sx={{ padding: 6 }}>
      <TypographyP text={WelcomeText} />
      <Location setLocation={setLocation} location={location} />
      <Box sx={{textAlign: 'center', width: '100%', marginBottom: 5 }}>
        <CustomizedSlider action={setRange} />
      </Box>
      {location && <Grid container spacing={5}>
        <Grid item xs={6} sx={{}}>
          <Map location={location} width={'600px'} height={'400px'} m={12} markers={results.filter(place => place.distance <= range).map(p => { return { lat: p.place_lat, lng: p.place_lng } })} />
        </Grid>
        <Grid item xs={6}>
          <Results location={location} range={range} results={results} setResults={setResults} />
        </Grid>
      </Grid>}
    </Box>
  )
}

export default Home


