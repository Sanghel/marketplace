'use client'

import React from 'react'
import { AppBar, Box, Button, Stack } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

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
              href={link.to}
              sx={link.to === pathname ? styles.active : styles.inactive}
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
    to: '/'
  },
  {
    title: 'Ropa',
    to: '/clothes'
  },
  {
    title: 'Tecnologia',
    to: '/technology'
  },
  {
    title: 'Zapatos',
    to: '/shoes'
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