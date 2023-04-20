import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function HostCard({hostReq}) {

  return (
    <Card sx={{ minWidth: 275 , padding:'6px', margin:'10px'}}>
      <CardContent sx={{margin:'3px', padding:'6px'}}>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
          {hostReq?.host_type}
        </Typography>
        <Typography variant="h6" component="div">
        {hostReq?.host_start_date.slice(0,10)} - {hostReq?.host_end_date.slice(0,10)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Age: {hostReq?.host_min_age} &nbsp;&nbsp;&nbsp;number of guests: {hostReq?.host_max_guests}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{margin:'3px'}}>Delete me</Button>
      </CardActions>
    </Card>
  );
}
