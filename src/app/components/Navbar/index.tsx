'use client'

import React, { useEffect, useState } from 'react'
import { AppBar, Box, Button, Stack } from '@mui/material'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();
  const currentPath = Array.isArray(pathname) ? pathname[0] : pathname;

  return (
    <AppBar position='static' sx={styles.navbar}>
      <Stack
        direction="row"
        alignItems="center"
        width="100%"
        spacing={4}
        gap={10}
      >
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
          {links.map((link,idx) => (
            <Button
              key={idx}
              href={link.path}
              sx={currentPath.includes(link.path) ? styles.active : styles.inactive}
              // sx={link.title === activeLink ? styles.active : styles.inactive}
              // sx={link.path === pathname ? styles.active : styles.inactive}
            >
              {link.title}
            </Button>
          ))}
        </Box>
        {/* {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.to}
          >
            {link.title}
          </Link>
        ))} */}
      </Stack>
    </AppBar>
  )
}

const links = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Ropa',
    path: '/dashboard/clothes'
  },
  {
    title: 'Electronicos',
    path: '/dashboard/electronics'
  },
  {
    title: 'Muebles',
    path: '/dashboard/furniture'
  },
  {
    title: 'Zapatos',
    path: '/dashboard/shoes'
  },
  {
    title: 'Miscelaneos',
    path: '/dashboard/miscellaneous'
  },
]

const styles = {
  navbar: {
    width: '100%',
    height: '3rem',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: '2.3rem',
    color: '#013E9B',
    boxShadow: '0px 5px 6px #00000029'
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
    display: 'block',
    my: 2,
    color: '#013E9B',
    scale: '1.1',
    textTransform: 'none',
    textDecoration: 'underline',
    textDecorationColor: '#FFD300',
    textAlign: 'center',
  }
}