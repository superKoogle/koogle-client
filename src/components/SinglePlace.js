import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import LaunchIcon from '@mui/icons-material/Launch';
import Button from '@mui/material/Button';
import CustomizedButton from './Button'

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
    <Paper
      sx={{
        p: 2,
        margin: '20px auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt={name} src="...../public/pics/susan.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={6} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {address}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {hours}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                {type}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
          <CustomizedButton text={"View details  "} onClick={(e)=>{handleClick(e)}} sign={<LaunchIcon></LaunchIcon>}>
            <LaunchIcon></LaunchIcon>
          </CustomizedButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

