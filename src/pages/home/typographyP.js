import * as React from 'react';
import { Card, Typography} from '@mui/material';


export default function TypographyP({text}) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 400 }}>
      <Typography level="h1">Koogle!!!</Typography>
      <Typography level="h1" fontSize="xl" sx={{ mb: 0.5 }}>
        Yosemite National Park
      </Typography>
      <Typography level="body1">
      {text}
      </Typography>
    </Card>
  );
}
