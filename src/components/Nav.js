import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { NavLink, useNavigate } from 'react-router-dom'
import AccountCircleIcon from "./accountCircle";
import { Grid, Typography, Button, Alert } from '@mui/material';
import Koogle from './Koogle';
import { indigo } from '@mui/material/colors';
import { AuthContext } from '../context/authContext';
import InfoAlert from './InfoAlert';


export default function NavTabs() {
  const [notLoggedIn, setNotLoggedIn] = React.useState(false);
  const { currentUser } = React.useContext(AuthContext);

  const buttonStyle = {
    color: 'white',
    marginTop: 3,
    '&:active': {
      background: indigo[800],
    },
    marginLeft: 4,
    "&.Mui-disabled": {
      color: 'disabled'
    }
  }

  return (
    <>
      <Box sx={{ width: '100%', bgcolor: indigo[400], marginBottom: '0px' }}>
        <Grid container>
          <Grid item xs={2}>
            <a href='/'><Koogle/></a>
          </Grid>
          <Grid item xs={8}>
            <Button component={NavLink} to="/" sx={buttonStyle}>Koogle</Button>
            <Button component={NavLink} to="/login" sx={buttonStyle}>Login</Button>
            <Button component={NavLink} to="/addPlace" sx={buttonStyle}>Places</Button>
            <span onPointerEnter={currentUser?null:()=>{setNotLoggedIn(true)}}>
           <Button component={NavLink} to="/host" sx={buttonStyle} disabled={!currentUser}>Hosts</Button>
           </span>
          </Grid>
          <br />
          <Grid item xs={2}>
            <AccountCircleIcon />
          </Grid>
        </Grid>
        <hr style={{ color: indigo[500] }} />
      </Box>
      {notLoggedIn && <InfoAlert message={"Please sign in to use this service."} action={setNotLoggedIn} severity="info"></InfoAlert>}
    </>
  );
}
