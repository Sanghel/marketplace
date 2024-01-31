'use client'

import React from 'react'
import Image from 'next/image';
import { Button, Container, Stack, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ColorButton } from '../ColorButton';
import Navbar from '../Navbar';
import logo from '../../public/assets/logoSVG.svg'


export default function Header() {
  return (
    <>
      <Container sx={styles.header}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          padding={3}
          sx={{ maxWidth: '1500px', margin: '0 auto', position: 'relative'}}
        >
          {/* <Typography variant="h4" component="h1">Macropay</Typography> */}
          <Image src={logo} alt='Logo Macropay' width={180}></Image>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ display: { xs: 'none', md: 'flex' }, marginRight: '160px', position: 'relative' }}
          >
            <ColorButton variant="contained" color="secondary" sx={{ textTransform: 'none', py: '0.8rem' }}>Crea tu Cuenta</ColorButton>
            <Button variant="text" color="secondary"  sx={{ textTransform: 'none', py: '0.8rem' }}>Iniciar Sesion</Button>
            <div style={{ backgroundColor: '#EBEFF4', height: '35px', width: '35px', display: 'grid', placeItems: 'center', borderRadius: '50%' }}>
              <ShoppingCartOutlinedIcon color="primary" />
            </div>
          </Stack>
          <Container sx={styles.floatDiv}>
            <Typography variant='h5' sx={styles.floatDiv.text1}>
              COMPRA A
            </Typography>
            <Typography variant='h4' sx={styles.floatDiv.text2}>
              CRÉDITO
            </Typography>
          </Container>
        </Stack>
      </Container>
      <Navbar />
    </>
  )
}

const styles = {
  header: {
    width: '100%',
    background: 'transparent linear-gradient(180deg, #004AC1 0%, #0744A8 100%) 0% 0% no-repeat padding-box',
    color: '#FFD300',
    height: '6rem',
    display: 'flex',
    alignItems: 'center',
    padding: '0!important',
  },
  floatDiv: {
    width: '250px',
    height: '250px',
    backgroundColor: '#FFD300',
    position: 'absolute',
    top: 0,
    right: 0,
    clipPath: 'ellipse(130px 130px at 85% 15%)',
    zIndex:1000,
    '@media (max-width: 768px)': {
      display: 'none'
    },
    text1: {
      transform: 'rotate(45deg)',
      color: '#fff',
      margin: '25px 0 0 50px',
      paddingLeft: '65px',
      width: '200px'
    },
    text2: {
      transform: 'rotate(45deg)',
      color: '#fff',
      margin: '0 0 0px 75px',
      padding: '0 0 0 0px'
    },
  }
}