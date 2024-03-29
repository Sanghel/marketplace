'use client'

import React from 'react'
import Image from 'next/image';
import { Container, Grid, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../../public/assets/logoSVG.svg'
import sonrisa from '../../public/assets/sonrisa.svg'
import yellowWave from '../../public/assets/yellowWave.svg'
import blueWave from '../../public/assets/blueWave.svg'

export default function Footer() {
  return (
    <>
      <Container maxWidth="xl" sx={styles.footerContainer}>
        <Image
          sizes='100vw'
          alt={yellowWave}
          src={yellowWave}
          style={styles.yellowWave}
        />
        <Image
          sizes='100vw'
          alt={yellowWave}
          src={blueWave}
          style={styles.blueWave}
        />
        {/* <svg xmlns="http://www.w3.org/2000/svg" style={styles.blueWave} viewBox="0 0 1440 320"><path fill="#013E9B" fillOpacity="1" d="M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,176C672,181,768,171,864,138.7C960,107,1056,53,1152,32C1248,11,1344,21,1392,26.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" style={styles.yellowWave} viewBox="0 0 1440 320"><path fill="#FFD300" fillOpacity="1" d="M0,64L48,58.7C96,53,192,43,288,42.7C384,43,480,53,576,69.3C672,85,768,107,864,144C960,181,1056,235,1152,261.3C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
        <Grid container spacing={2} padding={4} alignItems="center" justifyContent="center" sx={styles.contentContainer}>
          <Grid item xs={8} md={6} sx={{ zIndex: 100, '@media (max-width: 768px)': { display: 'flex', flexDirection: 'column', alignItems: 'center' } }}>
            <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>OFERTAS Y PROMOCIONES</Typography>
            <Typography variant="h4" color="#2B3445" sx={{ fontWeight: 'bold', '@media (max-width: 768px)': { textAlign: 'center' } }}>
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
                      <SendIcon color="primary" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Grid container spacing={2} paddingBlock={4} alignItems="center" justifyContent="space-between">
              <Grid item xs={12} sm={4}>
                <Container maxWidth="xl" sx={styles.logoContainer}>
                  <Image src={logo} alt='Logo Macropay' width={110}></Image>
                </Container>
              </Grid>
              <Grid item xs={6} sm={4} sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Typography variant="body2" color="#2B3445" sx={{ fontSize: '0.7rem' }}>Envios y devoluciones</Typography>
                <Typography variant="body2" color="#2B3445" sx={{ fontSize: '0.7rem' }}>Preguntas Frecuentes</Typography>
              </Grid>
              <Grid item xs={6} sm={4} sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Typography variant="body2" color="#2B3445" sx={{ fontSize: '0.7rem' }}>Aviso de privacidad</Typography>
                <Typography variant="body2" color="#2B3445" sx={{ fontSize: '0.7rem' }}>Terminos y Condiciones</Typography>
              </Grid>
            </Grid>

          </Grid>
          <Grid item xs={0} md={3} sx={styles.containerCarita}>
            <Image
              src={sonrisa}
              alt='logotipo Macropay'
              height={150}
              width={150}
            />
          </Grid>
          <Grid item xs={4} md={3} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 50, '@media (max-width: 768px)': { textAlign: 'center' } }}>
            <Typography variant="h4" color="#2B3445" sx={{ fontWeight: 'bold' }}>
              Conversemos!
            </Typography>
            <Typography variant="body2" color="#2B3445" sx={{}}>
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
    </>
  )
}

const styles = {
  footerContainer: {
    marginTop: '20rem',
    width: '100%',
    minHeight: '20rem',
    position: 'relative',
    backgroundColor: '#FFD300',
    // '@media (max-width: 768px)': {
    //   svg: {
    //     display: 'none'
    //   }
    // }
  },
  contentContainer: {
    height: '100%',
    maxWidth: '1500px',
    margin: '0 auto',
    '@media (max-width: 768px)': {
      padding: 2,
      display: 'flex',
      flexDirection: 'column',
    }
  },
  logoContainer: {
    margin: '0 auto',
    padding: '0px!important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '120px',
    height: '50px',
    backgroundColor: '#013E9B',
    borderRadius: '8px',
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
  },
  containerCarita: {
    zIndex: 50,
    '@media (max-width: 900px)': {
      display: 'none'
    }
  },
  yellowWave: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 'calc(100% - 4rem)',
    right: 0,
    padding: '0px!important',
    objectFit: 'cover',
  },
  blueWave: {
    width: '80%',
    height: '100%',
    position: 'absolute',
    bottom: 'calc(100% - 3rem)',
    right: 0,
    padding: '0px!important',
    objectFit: 'cover',
    zIndex: -1
  },
  // yellowWave: {
  //   maxWidth: '100%',
  //   height: 'auto',
  //   position: 'absolute',
  //   bottom: 'calc(100% - 9rem)',
  //   left: 0,
  //   zIndex: 10,
    
  // },
  // blueWave: {
  //   maxWidth: '100%',
  //   height: 'auto',
  //   position: 'absolute',
  //   bottom: 'calc(100% - 8rem)',
  //   right: 0,
  //   zIndex: 1,
  // }
}
