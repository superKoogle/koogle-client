import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';

function valueText(value) {
  return `${value} km`;
}

export default function CustomizedSlider({action}) {
  const [range, setRange] = React.useState(33);
  return (
    <Box sx={{ width: '70%', textAlign:'center' , marginLeft:'15%', marginTop:'3%'}}>
      <Typography gutterBottom>distance range:</Typography>
      <Typography gutterBottom>{valueText(range)}</Typography>
      <Box sx={{ m: 'auto'}} />
      <Slider
      min={1}
      max = {100}
      onChange={(e, val)=>{setRange(val); action(val*1000);}}
        onChangeCommitted={(e, val)=>{action(val*1000)}}
       valueLabelDisplay="auto"
        aria-label="Distance"
        defaultValue={20}
        getAriaValueText={valueText}
        color="secondary"
        sx={{color: indigo[600],
        height: 8,
        '& .MuiSlider-track': {
          border: 'none',
        },
        '& .MuiSlider-thumb': {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
          },
          '&:before': {
            display: 'none',
          },
        },
        '& .MuiSlider-valueLabel': {
          lineHeight: 1.2,
          fontSize: 12,
          background: 'unset',
          padding: 0,
          width: 32,
          height: 32,
          borderRadius: '50% 50% 50% 0',
          backgroundColor: indigo[600],
          transformOrigin: 'bottom left',
          transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
          '&:before': { display: 'none' },
          '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
          },
          '& > *': {
            transform: 'rotate(45deg)',
          },
        },}}
      />
    </Box>
  );
}
