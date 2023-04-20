import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import { Avatar, Typography, AvatarGroup, Stack } from '@mui/material';
import { indigo } from '@mui/material/colors';
import React from 'react';


const Koogle = () => {
  return (
    <>
   
        <AvatarGroup max={6} sx={{marginTop:'10px'}}>
          <Avatar sx={{ bgcolor: indigo[700] }}>k</Avatar>
          <Avatar sx={{ bgcolor: '#fffef4' , color:indigo[700]}}><ShareLocationIcon></ShareLocationIcon></Avatar>
          <Avatar sx={{ bgcolor: '#fffef4', color:indigo[700] }}><ShareLocationIcon></ShareLocationIcon></Avatar>
          <Avatar sx={{ bgcolor: indigo[700] }}>g</Avatar>
          <Avatar sx={{ bgcolor: indigo[700] }}>l</Avatar>
          <Avatar sx={{ bgcolor: indigo[700] }}>e</Avatar>
        </AvatarGroup>
     </>
  )
}

export default Koogle