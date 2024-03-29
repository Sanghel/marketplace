'use client'

import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ColorButton } from '../ColorButton';
import { Card, CardContent, CardMedia, Typography, Container, Grid, IconButton, Rating }from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { discount, pricePerMonth, pricePerWeek, newPrice } from '@/app/utils/pricesAndDiscounts';
import ModalProduct from '../ModalProduct';

interface ProductCard {
  product: Product;
}

const ProductCard: React.FC<ProductCard> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [imageError, setImageError] = useState(false);
  const router = useRouter()

  const handleImageError = () => {
    setImageError(true);
  };

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
          alt={!imageError ? product.title : 'La image no se ha cargado correctamente'}
          height="60%"
          image={!imageError ? product.images[0] : 'https://pbs.twimg.com/profile_images/1708898362588577792/VfxT-nvi_400x400.jpg'}
          // image={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]}
          sx={styles.cardImage}
          onClick={() => redirectProductDetail(product.category.name, product.id)}
          onError={handleImageError}
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
              <ColorButton
                variant="contained"
                size="small"
                sx={{ float: 'right', fontWeight: 'bold', textTransform: 'none', fontSize: '0.75rem' }}
                onClick={() => setIsModalOpen(true)}
              >
                Lo Quiero!
              </ColorButton>
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
    minWidth: '300px',
    with: '100%',
    minHeight: '100%',
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
    bottom: 170,
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