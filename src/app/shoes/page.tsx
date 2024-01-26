'use client'

import Image from "next/image";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Container, IconButton, Stack, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Shoes() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={styles.containerBody}>
      </Container>
      {/* <main className="w-full min-h-screen flex flex-col bg-white"></main> */}
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
  containerBody: {
    height: 'auto',
    display: 'flex',
    gap: '2rem',
  }
}