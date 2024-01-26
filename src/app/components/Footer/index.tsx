'use client'

import React from 'react'
import Image from 'next/image';
import { Container, Grid, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../../public/assets/logoSVG.svg'

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={styles.footerContainer}>
        <Grid container spacing={2} padding={4} alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
          <Grid item md={6}>
            <Typography variant="body2" color="secondary" sx={{ fontWeight: 'bold' }}>OFERTAS Y PROMOCIONES</Typography>
            <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
              No te pierdas <br />
              nuestras ofertas!
            </Typography>
            <TextField
              id="standard-basic"
              label="Tu direccion de correo electronico"
              variant="standard"
              sx={{ width: '320px' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SendIcon color="secondary" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Grid container spacing={2} paddingBlock={4} alignItems="center" justifyContent="space-between">
              <Grid item md={4}>
                <Container maxWidth="xl" sx={styles.logoContainer}>
                  <Image src={logo} alt='Logo Macropay' width={110}></Image>
                </Container>
              </Grid>
              <Grid item md={4} sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Typography variant="body2" color="primary" sx={{ fontSize: '0.75rem' }}>Envios y devoluciones</Typography>
                <Typography variant="body2" color="primary" sx={{ fontSize: '0.75rem' }}>Preguntas Frecuentes</Typography>
              </Grid>
              <Grid item md={4} sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Typography variant="body2" color="primary" sx={{ fontSize: '0.75rem' }}>Aviso de privacidad</Typography>
                <Typography variant="body2" color="primary" sx={{ fontSize: '0.75rem' }}>Terminos y Condiciones</Typography>
              </Grid>
            </Grid>

          </Grid>
          <Grid item md={3}>carita</Grid>
          <Grid item md={3} sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
              Conversemos!
            </Typography>
            <Typography variant="body2" color="primary" sx={{}}>
              Siguenos en nuestras redes sociales.
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              padding={2}
              sx={styles.iconsContainer}
            >
              <FacebookIcon />
              <InstagramIcon />
              <LinkedInIcon />
              <WhatsAppIcon />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

const theme = createTheme({
  palette: {
    primary: { main: '#2B3445' },
    secondary: { main: '#013E9B'},
  },
});

const styles = {
  footerContainer: {
    marginTop: '10rem',
    width: '100%',
    height: '30rem',
    position: 'relative',
    backgroundColor: '#FFD300',
    // svg: {
    //   height: '10rem',
    //   position: 'absolute',
    //   left: 0,
    //   bottom: 0,
    //   objectFit: 'contain'
    // }
  },
  logoContainer: {
    margin: 0,
    padding: '0px!important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '120px',
    height: '50px',
    backgroundColor: '#013E9B',
    borderRadius: '8px'
  },
  iconsContainer: {
    margin: 0,
    padding: 0,
    maxWidth: '250px',
    svg: {
      width: '40px',
      height: '40px',
      color: '#2B3445'
    }
  }
}