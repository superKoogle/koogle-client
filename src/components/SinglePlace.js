import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import LaunchIcon from '@mui/icons-material/Launch';
import Button from '@mui/material/Button';
import CustomizedButton from './Button'
import { CardMedia , Card, Box} from '@mui/material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function SinglePlace({ name, address, hours, img, type, id, setSelected }) {

    const handleClick = (e)=>{
      console.log(e.target);
     setSelected(id);
    }


  return (
    <Card
      sx={{
        height: 150,
        width:'100%',
        margin: '20px auto',
        maxWidth: 500,
        display:'flex',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
        <CardMedia
        component="img"
        sx={{width:148}}
        image={`http://localhost:3500/images/${img}`}
        alt={name}
      />
       <Box sx={{ display: 'flex', flexDirection: 'row' ,alignItems: 'space-between', justifyItems:'flex-end'}}>
         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pl: 1, pb: 1  }}>
              <Typography gutterBottom variant="subtitle1" component="div">
                {name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {address}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {hours}
              </Typography>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                {type}
              </Typography>
         </Box>
          <Button sx={{ marginLeft: "auto" , marginRight:0}} onClick={(e)=>{handleClick(e)}} variant='contained'>
            View&nbsp; &nbsp; <LaunchIcon></LaunchIcon>
          </Button>
          </Box>
    </Card>
  );
}

