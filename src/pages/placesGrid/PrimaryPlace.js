import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WrongDataDialog from './wrongData.js/WrongDataReport';
import Map from '../../components/Map';

export default function PrimaryPlace({ place, userLocation }) {
  
  console.log(place);

  return (
    <Card sx={{ maxWidth: 345 }} height={300}>
      <CardMedia
        sx={{ height: 140 }}
        component="img"
        height="194"
        image="/pics/default.jpg"
        title="default"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {place?.place_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {place?.type}<br />{place?.place_address}<br />{place?.place_hours}<br />
        </Typography>
      </CardContent>
      <div style={{ height: "500px" }}>
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