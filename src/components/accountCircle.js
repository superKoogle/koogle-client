import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import {AccountCircle} from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from "../context/authContext";
import { indigo } from "@mui/material/colors";
import { Grid, Typography } from "@mui/material";


export default function AccountCircleIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const {logout, currentUser} = React.useContext(AuthContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin=()=>{
    window.open("http://localhost:3000/login").focus();
  }

  return (
    <Grid container spacing={3} sx={{right:'20px'}}>
    <Grid item>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        sx={{fontSize:40, marginTop:"8px", color:'#fffef4'}}
      >
        <AccountCircle />
      </IconButton>
      {currentUser && <Typography sx={{color:'#fffef4'}}>{currentUser.user_name}</Typography>}
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: 10,
          horizontal: 10
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {!currentUser && <MenuItem onClick={handleLogin}>sign in</MenuItem>}
        {!currentUser && <MenuItem onClick={handleLogin}>sign up</MenuItem>}
        {currentUser && <MenuItem onClick={logout}>logout</MenuItem>}
      </Menu>
      </Grid>
    </Grid>
  );
}
