import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { NavLink, useNavigate } from 'react-router-dom'
import AccountCircleIcon from "./accountCircle";
import { Grid, Typography } from '@mui/material';
import Koogle from './Koogle';

export default function NavTabs() {
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>


      {/* {<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>} */}

      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Grid container>
          <Grid item xs={3}>
            <Koogle></Koogle>
          </Grid>
          <Grid item xs={7}>
           {/* <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" centered>
              <Tab label="koogle" value={0} to="/" component={NavLink}><NavLink to="/" ></NavLink></Tab>
              <Tab label="Sign In" value={1} to="/login" component={NavLink}><NavLink to="/login"></NavLink></Tab>
              <Tab label="Host" value={2} to="/host" component={NavLink}><NavLink to="/host"></NavLink></Tab>
               <NavLink label="add place" to="/addPlace" /> 
           </Tabs>*/}
           
             <NavLink to="/" >koogle</NavLink>
             <NavLink to="/login">login</NavLink>
             <NavLink to="/host">host</NavLink>
              {/* <NavLink label="add place" to="/addPlace" /> */}
           
          </Grid>
          <Grid item xs={2}>
            <AccountCircleIcon />
          </Grid>
        </Grid>
      </Box>



    </>
  );
}
