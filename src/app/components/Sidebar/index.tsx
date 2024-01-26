import * as React from 'react';
import { createTheme, ThemeProvider, Divider, Box, FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';

export default function BasicList() {
  return (
    <ThemeProvider theme={theme}>
      <Box padding={0} sx={styles.box}>
        <Typography variant="body1" color="primary" sx={styles.text}>Categorias</Typography>
        <FormGroup sx={{ paddingLeft: '40px' }}>
          <FormControlLabel control={<Checkbox />} label="Label" />
          <FormControlLabel control={<Checkbox />} label="Label" />
          <FormControlLabel control={<Checkbox />} label="Label" />
          <FormControlLabel control={<Checkbox />} label="Label" />
        </FormGroup>
        <Divider />
        <Typography variant="body1" color="primary" sx={styles.text}>Precio</Typography>
        <Divider />
        <Typography variant="body1" color="primary" sx={styles.text}>Reviews</Typography>

      </Box>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: { main: '#013E9B' },
    secondary: { main: '#FFD300'},
  },
});

const styles = {
  box: {
    width: '100%',
    height: '450px',
    bgcolor: 'background.paper',
    boxShadow: '0px 3px 6px #00000029',
  },
  text: {
    paddingLeft: '20px',
    fontWeight: 'bold',
    paddingTop: '20px'
  }
}