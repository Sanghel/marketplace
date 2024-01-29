'use client'

import * as React from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, createStyles, Grid, IconButton, Rating } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import ModalProduct from '../ModalProduct';
import { useRouter } from 'next/navigation';
import { discount, pricePerMonth, pricePerWeek, newPrice } from '@/app/utils/pricesAndDiscounts';

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

  return (
    <>
      {isModalOpen && <ModalProduct isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} product={product} pricePerWeek={pricePerWeek} />}
      <Card
        sx={styles.card}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <CardMedia
          component="img"
          alt={product.title}
          height="300"
          image={!!product.images[0] ? product.images[0] : 'https://pbs.twimg.com/profile_images/1708898362588577792/VfxT-nvi_400x400.jpg'}
          // image={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]}
          sx={styles.cardImage}
          onClick={() => redirectProductDetail(product.category.name, product.id)}
        />
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
            <Grid item xs={7} sx={styles.cardGridItem}>
              <Typography gutterBottom variant="h6" component="span" sx={styles.title} onClick={() => redirectProductDetail( product.category.name, product.id)}>
                {product.title}
              </Typography>
              {/* <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                STARS
              </Typography> */}
              <Rating name="read-only" value={product.stars} readOnly />
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
    </>
  );
}

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
  cardImage: {
    objectFit: 'contain',
    padding: 2,
    transition: 'all 0.3s',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    boxShadow: '0px -6px 10px #0000000D'
  },
  cardGridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '0.7rem',
    fontWeight: 'bold',
    textWrap: 'balance',
    textAlign: 'left',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  }
}

export default ProductCard