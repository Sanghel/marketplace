'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { ColorButton } from './components/ColorButton';
import Header from "./components/Header";
import Footer from "./components/Footer";
import shoes from '../app/public/assets/shoes.jpeg'
import electronics from '../app/public/assets/electronics.jpeg'
import furniture from '../app/public/assets/furniture.jpeg'

export default function Home() {
  const router = useRouter()

  return (
    <ThemeProvider theme={theme} >
      <Header />
        <Typography gutterBottom variant="h4" color="primary" component="div" sx={{ marginTop: '2rem', textAlign: 'center' }}>
          Conoce Nuestros Productos
        </Typography>
      <Container sx={styles.container}>
        {list.map((listItem, idx) => (
          <Card sx={{ maxWidth: 300, height: 300, backgroundColor: '#EBEFF4', display: 'flex', flexDirection: 'column', alignItems: 'center' }} key={idx}>
            <Image
              height={100}
              width={200}
              src={listItem.image}
              alt={listItem.title}
              style={{ objectFit: 'cover', objectPosition: 'center', maxHeight: 180 }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5" color="primary" sx={{ margin: 0, padding: 0 }}>
                {listItem.title}
              </Typography>
            </CardContent>
            <CardActions>
              <ColorButton
                size="medium"
                sx={{ fontWeight: 'bold' }}
                onClick={() => router.push(listItem.path)}
              >
                Ver más
              </ColorButton>
            </CardActions>
          </Card>
        ))}
      </Container>
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
  container: {
    minHeight: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    '@media (max-width: 500px)': {
      flexDirection: 'column'
    }
  }
}

const list = [
  {
    title: 'Zapatos',
    path: '/shoes',
    image: shoes
  },
  {
    title: 'Electrónicos',
    path: '/electronics',
    image: electronics
  },
  {
    title: 'Muebles',
    path: '/furniture',
    image: furniture
  },
]
