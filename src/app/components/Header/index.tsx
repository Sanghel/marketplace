'use client'

import React from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Container, IconButton, Stack, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Navbar from '../Navbar';
import Image from 'next/image';
import logo from '../../public/assets/logoSVG.svg'


export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={styles.header} maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          padding={3}
        >
          {/* <Typography variant="h4" component="h1">Macropay</Typography> */}
          <Image src={logo} alt='Logo Macropay' width={180}></Image>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <Button variant="contained" color="secondary" sx={{ textTransform: 'none', py: '0.8rem' }}>Crea tu Cuenta</Button>
            <Button variant="text" color="secondary"  sx={{ textTransform: 'none', py: '0.8rem' }}>Iniciar Sesion</Button>
            <IconButton aria-label="shoppingCar" sx={{ backgroundColor: 'white' }}>
              <ShoppingCartOutlinedIcon color="primary" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
      <Navbar />
    </ThemeProvider>
  )
}


const theme = createTheme({
  palette: {
    primary: { main: '#013E9B' },
    secondary: { main: '#FFD300'},
  },
});

const styles = {
  header: {
    width: '100%',
    background: 'transparent linear-gradient(180deg, #004AC1 0%, #0744A8 100%) 0% 0% no-repeat padding-box',
    color: '#FFD300',
    height: '6rem',
    display: 'flex',
    alignItems: 'center',
    mx: 0,
  },
}