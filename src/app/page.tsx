'use client'

import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <ThemeProvider theme={theme} >
      <Header />
      <Footer />
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: { main: '#013E9B' },
    secondary: { main: '#FFD300'},
    info: { main: '#7D879C'}
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // backgroundColor: '#FFD300'
        },
        contained: {
          background: '#FFD300'
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '5000px!important'
        }
      }
    }
  }
});

const styles = {
  containerBody: {
    height: 'auto',
    display: 'flex',
    gap: '2rem',
  },
  gridContainer: {
    position: 'sticky',
    display: 'flex',
    height: '600px',
    justifyCcontent: 'center',
    '@media (max-width: 900px)': {
      display: 'none'
    }
  },
  gridContainerCards: {
    display: 'flex',
    height: '1500px',
    justifyCcontent: 'center',
    overflowY: 'scroll'
  }
}
