import * as React from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, createStyles, Grid, IconButton, Stack } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export default function ProductCard() {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const setFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={styles.card}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="300"
          image={isHovered ? "https://m.media-amazon.com/images/I/71PdihSdESL._AC_SX466_.jpg" : "https://m.media-amazon.com/images/I/51SQeaKj7hL._AC_SX466_.jpg"}
          sx={{ objectFit: 'contain', padding: 2, transition: 'all 0.3s'  }}
        />
        <IconButton sx={styles.favoriteIcon} onClick={setFavorite}>
          {isFavorite && <FavoriteIcon color="secondary" />}
          {!isFavorite && <FavoriteBorderOutlinedIcon color="secondary" />}
        </IconButton>
        {!isHovered && (
          <Container sx={styles.discount}>
            <Typography variant="h3" color="white" component="div" sx={{ margin: 0, fontWeight: 'normal', fontSize: '30px' }}>40%</Typography>
          </Container>
        )}
        <CardContent sx={styles.cardContent}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6} alignItems="center">
              <Typography gutterBottom variant="h6" component="span" sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                Lizard
              </Typography>
              <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                REVIEW
              </Typography>
            </Grid>
            <Grid item xs={6} justifySelf="end">
              <Typography color="primary" gutterBottom variant="h5" component="div" sx={{ textAlign: 'right', fontWeight: 'bold', fontSize: '2rem', marginBottom: 0 }}>
                $3,499
              </Typography>
              <Typography gutterBottom variant="body1" component="div" sx={{ textAlign: 'right', fontSize: '1.2rem' , textDecoration: 'line-through', margin: 'auto', color: '#7D879C' }}>
                $1,500
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontSize: '0.7rem', color: '#7D879C' }}>
                $120 p/semana<br />
                o $120 p/mes
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="secondary" size="small" sx={{ float: 'right', fontWeight: 'bold', textTransform: 'none', fontSize: '0.75rem' }}>Lo Quiero!</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: { main: '#004AC1' },
    secondary: { main: '#FFD300'},
  },
});

const styles = {
  card: {
    position: 'relative',
    maxWidth: 250,
    maxHeight: 400,
    transition: 'boxShadow 0.3s',
    borderRadius: 3,
    '&:hover': {
      cursor: 'pointer',
      boxShadow: `0 4px 8px gray`,
    },
  },
  favoriteIcon: {
    position: 'absolute',
    top: 5,
    right: 5
  },
  discount: {
    height: 70,
    width: 70,
    borderRadius: '50%',
    backgroundColor: '#E6406D',
    position: 'absolute',
    left: 10,
    bottom: 170,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s'
  },
  cardContent: {
    boxShadow: '0px -6px 10px #0000000D'
  }
}
