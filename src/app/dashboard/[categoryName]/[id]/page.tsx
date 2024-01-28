'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';
import { Button, Container, Grid, Stack, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AddCardIcon from '@mui/icons-material/AddCard';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import { useMacropayContext } from '@/app/context';
import { newPrice, discount, pricePerWeek } from '@/app/utils/pricesAndDiscounts';

export default function ProductDetail() {
  const [productDetail, setProductDetail] = useState<Product>()
  const router = useRouter()
  const params = useParams()
  const { products } = useMacropayContext()
  const firstPointPosition = productDetail?.description.indexOf('.');
  const newDescription = (firstPointPosition && firstPointPosition !== -1) ? productDetail?.description.substring(0, firstPointPosition + 1) : productDetail?.description;

  const firstLetterToUppercase = (word: string | undefined) => {
    if (!word) return ''
    const wordWithUppercase = word.charAt(0).toUpperCase() + word.slice(1)
    return wordWithUppercase
  }

  useEffect(() => {
    const product = products.filter(product => product.id === Number(params.id))
    setProductDetail(product[0])
  }, [params, productDetail, products])
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          marginBlock={2}
          marginInline={3}
          gap={2}
        >
          <Button
            variant='outlined'
            color="info"
            onClick={() => router.back()}
            sx={{ textTransform: 'none' }}
          >
            Volver a resultados
          </Button>
          <Typography variant="h6" color="primary" sx={{ fontSize: '0.8rem', fontWeight: 'normal' }}>
            {firstLetterToUppercase(productDetail?.category.name)} / <strong>{firstLetterToUppercase(productDetail?.title)}</strong>
          </Typography>
        </Stack>
        <Grid container spacing={1} paddingInline={3.5}>
          <Grid item sm={1.4}>
            <Grid
              container
              columns={1}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              gap={1}
              sx={{ maxHeight: '300px', overflowY: 'scroll', overflowX: 'hidden' }}
            >
              {productDetail?.images.map((image, idx) => (
                <Container
                  component="img"
                  key={idx}
                  alt={image}
                  src={image}
                  sx={{ width: '100px', height: '100px', padding: '0px!important' }}
                />
              ))}
            </Grid>
          </Grid>
          <Grid item sm={3.6} sx={{ position: 'relative' }}>
            <Container
              component="img"
              alt={productDetail?.images[0]}
              src={productDetail?.images[0]}
              sx={{ width: '300px', height: '300px', padding: '0px!important', objectFit: 'cover' }}
            />
            {(!!productDetail?.price && productDetail?.price > 30) && (
              <Container sx={styles.discount}>
                <Typography variant="h3" color="white" component="div" sx={{ margin: 0, fontWeight: 'normal', fontSize: '30px' }}>{discount(productDetail.price)}%</Typography>
              </Container>
            )}
          </Grid>
          <Grid item sm={7}>
            <Container component="div" sx={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem!important' }}>
                <Container component="div" sx={{ padding: '0px!important', width: '60%' }}>
                  <Typography color="black" variant="h5">
                    {productDetail?.title}
                  </Typography>
                </Container>
                <Container component="div" sx={{ padding: '0px!important', width: '40%' }}>
                  <Typography color="primary" gutterBottom variant="h5" component="div" sx={{ textAlign: 'right', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: 0 }}>
                    ${newPrice(productDetail?.price)}
                  </Typography>
                  { (!!productDetail?.price && productDetail?.price >= 30) && (
                    <Typography gutterBottom variant="body1" component="div" sx={{ textAlign: 'right', fontSize: '1rem' , textDecoration: 'line-through', color: '#7D879C' }}>
                      ${productDetail?.price}
                    </Typography>
                  )}
                  <Stack
                    direction="row"
                    justifyContent="end"
                    alignItems="center"
                    sx={styles.iconsContainer}
                    gap={1}
                  >
                    <CreditCardIcon />
                    <AddCardIcon />
                    <CreditScoreIcon />
                  </Stack>
                </Container>
            </Container>
            <Typography variant='body2' color="gray" fontSize={12} sx={{ paddingInline: '0.5rem' }}>
              {newDescription}
            </Typography>
            <Container component="div" sx={styles.infoContainer}>
              <ShieldOutlinedIcon />
              <div>
                <Typography variant="body2" color="gray" fontSize={10} sx={{ fontWeight: 'bold' }}>
                  Compra segura con Macropay Protect
                </Typography>
                <Typography variant="body2" color="gray" fontSize={8} sx={{ fontWeight: 'normal' }}>
                  Devolucion gratis (30dias)/12 meses de garantía de fábrica
                </Typography>
              </div>
            </Container>
          </Grid>
        </Grid>
        <Typography fontSize={16} color="black" variant="h6" textAlign="left" paddingInline={3.5} marginTop={2}>
          Información Detallada del Producto
        </Typography>
        <Grid container maxWidth="xl" paddingInline={3.5} marginBlock={2}>
          <Grid item sm={6}>
            <Grid container spacing={1}>
              {productDetail?.images.map((image, idx) => (
                <Grid item sm={6} key={idx}>
                  <Container
                    component="img"
                    key={idx}
                    alt={image}
                    src={image}
                    sx={{ width: '300px', height: '300px', padding: '0px!important', objectFit: 'cover' }}
                  />
                </Grid>
                ))}
              {(!!productDetail?.images.length && productDetail?.images.length < 3) && (
                <Grid item sm={6}>
                  <Container
                    component="img"
                    alt={productDetail?.images[0]}
                    src={productDetail?.images[0]}
                    sx={{ width: '300px', height: '300px', padding: '0px!important', objectFit: 'cover' }}
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item sm={6}>

          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

const theme = createTheme({
  palette: {
    primary: { main: '#013E9B' },
    secondary: { main: '#FFD300'},
    info: { main: '#707070'}
  },
});

const styles = {
  container: {
    with: '100%',
    minHeight: '100vh',
  },
  iconsContainer: {
    width: '100%',
    margin: 0,
    padding: 0,
    svg: {
      width: '25px',
      height: '25px',
      color: '#2B3445'
    }
  },
  discount: {
    height: 70,
    width: 70,
    borderRadius: '50%',
    backgroundColor: '#E6406D',
    position: 'absolute',
    left: 19,
    bottom: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s'
  },
  infoContainer: {
    backgroundColor: '#d3d8e0',
    margin: '5px 0 5px auto',
    width: '50%',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    paddingInline: '0.5rem!important',
    svg: {
      width: '25px',
      height: '25px',
      color: '#2B3445'
    }
  }
}
