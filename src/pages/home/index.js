
import React, { useState } from 'react';
//import Location from '.'
import Location from './Location';
import Results from './Results'
import Map from '../../components/Map'
import CustomizedSlider from '../../components/CustomizedSlider';
import { Box, Grid } from '@mui/material';

const Home = () => {
  const [location, setLocation] = useState();
  const [range, setRange] = useState(20000);
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Location setLocation={setLocation} />
        <Box sx={{ textAlign: 'center', width: '100%' }}>
          <CustomizedSlider action={setRange}/>
        </Box>
      </Box>
      {location && <Grid container spacing={5}>
        <Grid item xs={4} sx={{}}>
          <Map location={location} width={'400px'} height={'400px'} m={12} />
        </Grid>
        <Grid item xs={8}>
          <Results location={location} range={range} />
        </Grid>
      </Grid>}
    </>
  )
}

export default Home