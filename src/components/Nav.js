import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { NavLink, useNavigate } from 'react-router-dom'
import AccountCircleIcon from "./accountCircle";
import { Grid, Typography } from '@mui/material';

export default function NavTabs() {
  const [value, setValue] = React.useState(0);


  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // function LinkTab(props) {
  //   const navigate = useNavigate();
  //   return (
  //     <Tab
  //       component="a"
  //       onClick={(event) => {
  //         event.preventDefault();
  //         navigate(props.href);
  //       }}
  //       {...props}
  //     />
  //   );
  // }

  return (
    <>


      {/* {<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>} */}

      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Grid container>
          <Grid item xs={2}>
            <Typography>Koogle</Typography>
          </Grid>
          {/* <Grid item xs={8}> */}
            {/* <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" centered> */}
              <NavLink to="/" >Koogle</NavLink>
              <NavLink to="/login" >Sign In</NavLink>
              <NavLink to="/host">Host</NavLink>
              {/* <NavLink label="add place" to="/addPlace" /> */}
            {/* </Tabs> */}
          {/* </Grid> */}
          <Grid item xs={2}>
            <AccountCircleIcon />
          </Grid>
        </Grid>
      </Box>



    </>
  );
}
