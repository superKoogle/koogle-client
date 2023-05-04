import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { indigo, purple } from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(indigo[600]),
    backgroundColor: indigo[600],
    '&:hover': {
      backgroundColor: indigo[900],
    },
  }));

  export default function CustomizedButton({text, onClick, sign}) {
    return (
        <ColorButton variant="contained" onClick={onClick} >{text}{sign && sign}</ColorButton>
    );
  }