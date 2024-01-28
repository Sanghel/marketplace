'use client'

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
import ModalProduct from '../ModalProduct';
import { useRouter } from 'next/navigation';

interface ProductCard {
  product: Product;
}

const ProductCard: React.FC<ProductCard> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const router = useRouter()

  const redirectProductDetail = (categoryName: string, id: number) => {
    const newCategoryName = categoryName.toLowerCase()
    router.push(`/${newCategoryName}/${id}`)
  }

  const setFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const discount = (price: number) => {
    if (price >= 80) return '30'
    if (price >= 50) return '20'
    if (price >= 30) return '10'
  };

  const newPrice = (price: number) => {
    if (price < 30) return price
    const discountProduct = discount(price)
    const priceWithDiscount = (price * (1 - (Number(discountProduct) / 100))).toFixed(2)
    return priceWithDiscount
  }

  const pricePerMonth = (price: number) => {
    const feeValue = (price / 6).toFixed(2)
    return feeValue
  }

  const pricePerWeek = (price: number) => {
    const feeValue = (price / 24).toFixed(2)
    return feeValue
  }

  return (
    <ThemeProvider theme={theme}>
      {isModalOpen && <ModalProduct isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} product={product} pricePerWeek={pricePerWeek} />}
      <Card
        sx={styles.card}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {product.images && (
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image={product.images[0]}
            // image={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]}
            sx={{ objectFit: 'contain', padding: 2, transition: 'all 0.3s'  }}
            onClick={() => redirectProductDetail(product.category.name, product.id)}
          />
        )}
        <IconButton sx={styles.favoriteIcon} onClick={setFavorite}>
          {isFavorite && <FavoriteIcon color="secondary" />}
          {!isFavorite && <FavoriteBorderOutlinedIcon color="secondary" />}
        </IconButton>
        {(!isHovered && product.price >= 30) && (
          <Container sx={styles.discount}>
            <Typography variant="h3" color="white" component="div" sx={{ margin: 0, fontWeight: 'normal', fontSize: '40px' }}>{discount(product.price)}%</Typography>
          </Container>
        )}
        <CardContent sx={styles.cardContent}>
          <Grid container spacing={0.5} alignItems="center">
            <Grid item xs={7} alignItems="center" sx={styles.cardGridItem}>
              <Typography gutterBottom variant="h6" component="span" sx={{ fontSize: '0.7rem', fontWeight: 'bold', textWrap: 'balance', textAlign: 'left' }} onClick={() => redirectProductDetail( product.category.name, product.id)}>
                {product.title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                STARS
              </Typography>
            </Grid>
            <Grid item xs={5} justifySelf="end" sx={styles.cardGridItem}>
              <Typography color="primary" gutterBottom variant="h5" component="div" sx={{ textAlign: 'right', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: 0 }}>
                ${newPrice(product.price)}
              </Typography>
              {product.price >= 30 && (
                <Typography gutterBottom variant="body1" component="div" sx={{ textAlign: 'right', fontSize: '1rem' , textDecoration: 'line-through', color: '#7D879C' }}>
                  ${product.price}
                </Typography>
              )}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ fontSize: '0.7rem', color: '#7D879C' }}>
                ${pricePerWeek(product.price)} p/sem<br />
                o ${pricePerMonth(product.price)} p/mes
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                sx={{ float: 'right', fontWeight: 'bold', textTransform: 'none', fontSize: '0.75rem' }}
                onClick={() => setIsModalOpen(true)}
              >
                Lo Quiero!
              </Button>
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
    width: 300,
    minHeight: 460,
    transition: 'boxShadow 0.3s',
    borderRadius: 3,
    '&:hover': {
      boxShadow: `0 4px 8px gray`,
    },
  },
  favoriteIcon: {
    position: 'absolute',
    top: 15,
    right: 15
  },
  discount: {
    height: 90,
    width: 90,
    borderRadius: '50%',
    backgroundColor: '#E6406D',
    position: 'absolute',
    left: 25,
    bottom: 190,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s'
  },
  cardContent: {
    boxShadow: '0px -6px 10px #0000000D'
  },
  cardGridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
}

export default ProductCard