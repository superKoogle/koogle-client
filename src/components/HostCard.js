import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Close from '@mui/icons-material/Close';
//import {DeleteIcon,CloseIcon} from '@mui/icons-material'
import Typography from '@mui/material/Typography';
import { indigo } from '@mui/material/colors';
import { Grid, IconButton } from '@mui/material';
import { ReactDOM, root } from 'react';
import { AirlineSeatFlatAngled, Style, Visibility } from '@mui/icons-material';
import { rootShouldForwardProp } from '@mui/material/styles/styled';
import CustomizedButton from './Button';


export default function HostCard({hostReq,index,removeMe}) {
  const [flag,setFlag]=React.useState(true);
  // const myfunc=()=>
  // {
  //   console.log("in myfunc");
  //   root.unmount(root.findDOMNode(this));
  //   //ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
  // }

const hideMe=()=>{
  console.log(index)
  console.log("in hide me");
removeMe(index);
}

  return (
    <Card sx={{ minWidth: 275 , padding:'6px', margin:'10px' ,display:!flag?"none":hostReq}}>
      <Grid container>
        <Grid item >
      <CardContent sx={{margin:'3px', padding:'6px'}}>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
          {hostReq?.host_type}
        </Typography>
        <Typography variant="h6" component="div">
        {hostReq?.host_start_date?.slice(0,10)} - {hostReq?.host_end_date?.slice(0,10)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Age: {hostReq?.host_min_age} &nbsp;&nbsp;&nbsp;number of guests: {hostReq?.host_max_guests}
        </Typography>
      </CardContent>
      </Grid>
      <Grid item>
      <CardActions>
      <IconButton  onClick={()=>{setFlag(false); console.log(flag); /*myfunc()*/}} aria-label="closeIt" color={indigo[700]}>
        {/* <CloseIcon /> */}
      </IconButton>
<CustomizedButton text={"hide me"} onClick={()=>hideMe()}></CustomizedButton>
     <IconButton  aria-label="hide me" color={indigo[700]} onClick={()=>hideMe()} >
        { /*<DeleteIcon />*/ }
      </IconButton>

      </CardActions>
      </Grid>
      </Grid>
    </Card>
  );
}