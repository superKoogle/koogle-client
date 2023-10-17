import * as React from 'react';
import { Stack, Typography} from '@mui/material';


export default function TypographyP({text}) {
  return (
    <Stack variant="contained" spacing={3} sx={{width : '60%', m: 'auto'}}>
      <Typography level="h1">Koogle!!</Typography>
      <Typography level="h2">
      {text}
      </Typography>
    </Stack>
  );
}
