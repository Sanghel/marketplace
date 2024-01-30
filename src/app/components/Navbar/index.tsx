'use client'

import React, { useEffect, useState } from 'react'
import { AppBar, Box, Button, Container, Stack } from '@mui/material'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();
  const [ _, slug ] = pathname.split('/')

  return (
    <Container sx={styles.navbarContainer}>
      <AppBar position='static' sx={styles.navbar}>
        <Stack
          direction="row"
          alignItems="center"
          width="100%"
          spacing={4}
          gap={10}
          sx={{ paddingLeft: 2}}
        >
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            {links.map((link,idx) => (
              <Button
                key={idx}
                href={link.path}
                sx={(link.slug === slug )? styles.active : styles.inactive}
              >
                {link.title}
              </Button>
            ))}
          </Box>
        </Stack>
      </AppBar>
    </Container>
  )
}

const links = [
  {
    title: 'Home',
    path: '/',
    slug: ''
  },
  {
    title: 'Zapatos',
    path: '/shoes',
    slug: 'shoes'
  },
  {
    title: 'Electrónicos',
    path: '/electronics',
    slug: 'electronics'
  },
  {
    title: 'Muebles',
    path: '/furniture',
    slug: 'furniture'
  },
]

const styles = {
  navbarContainer: {
    padding: '0!important',
    backgroundColor: 'white',
    boxShadow: '0px 5px 6px #00000029',

  },
  navbar: {
    width: '100%',
    maxWidth: '1500px',
    margin: '0 auto',
    height: '3rem',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    // paddingLeft: '2.3rem',
    color: '#013E9B',
    // boxShadow: '0px 5px 6px #00000029',
    boxShadow: 'none!important',
  },
  inactive: {
    my: 2,
    color: 'black',
    display: 'block',
    textTransform: 'none',
    textAlign: 'center',
  },
  active: {
    fontWeight: 'bold',
    my: 2,
    color: '#013E9B',
    scale: '1.1',
    textTransform: 'none',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(to right, transparent 50%, #FFD300 50%)',
    backgroundSize: '25% 2px',
    backgroundPosition: '37.5% 75%',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block'
  }
}