
import {Box} from "@mui/material";

export default function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          fontSize: '0.875rem',
          fontWeight: '200',
          ...sx,
        }}
        {...other}
      />
    );
  }