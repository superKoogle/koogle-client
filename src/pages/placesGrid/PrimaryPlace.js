import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WrongDataDialog from './wrongData.js/WrongDataReport';
import Map from '../../components/Map';

export default function PrimaryPlace({ place, userLocation }) {
  
  return (
    <Card sx={{ maxWidth: 360 }}  >
      <CardMedia
        sx={{ height: 140 }}
        component="img"
        height="194"
        image={place?.place_img ? `http://localhost:3500/images/${place.place_img}` : "/pics/default.jpg"}
        title={place?.place_name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {place?.place_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {place?.type}<br />{place?.place_address}<br />{place?.place_hours}<br />
        </Typography>
      </CardContent>
      <div style={{ height: "350px" , marginTop:"30px"}}>
        {place && 
        <Map height={"210px"} width={"100%"} location={{ lat: place.place_lat, lng: place.place_lng }} zoomy={16} showDirection={true} userLocation={userLocation}></Map>
        }
      </div>
      <CardActions>
        <WrongDataDialog placeId={place?.place_id}></WrongDataDialog>
        
      </CardActions>
    </Card>
  );
}