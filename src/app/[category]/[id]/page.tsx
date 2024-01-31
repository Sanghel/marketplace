'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { Box, Button, Container, Divider, Grid, ImageList, ImageListItem, Rating, Stack, Typography, Card, CardContent, CardActions } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AddCardIcon from '@mui/icons-material/AddCard';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CheckIcon from '@mui/icons-material/Check';
import { useMacropayContext } from '@/app/context';
import { newPrice, discount } from '@/app/utils/pricesAndDiscounts';
import TabPanel from '@/app/components/TabPanel';
import ProductCard from '@/app/components/ProductCard';
import { ColorButton } from '@/app/components/ColorButton';
import sonrisa from '../../public/assets/sonrisa.svg'

export default function ProductDetail() {
  const [productDetail, setProductDetail] = useState<Product>()
  const [similarProducts, setSimilarProducst] = useState<Product[]>()
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
    const otherProducts = products.filter(product => product.category.name === product.category.name)
    setSimilarProducst(otherProducts)
  }, [])

  return (
    <>
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
        <Container sx={{ display: 'flex', gap: '0.5rem', margin: '0!important', position: 'relative' }}>
          <Box sx={styles.imagesBox}>
            <ImageList variant="masonry" cols={1} gap={5}>
              {!!productDetail?.images && productDetail?.images.map((image, idx) => (
                <ImageListItem key={idx}>
                  <Container
                    component="img"
                    key={idx}
                    alt={image}
                    src={image}
                    sx={{ width: '100px', height: '100px', padding: '0px!important' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          <Container
            component="img"
            alt={productDetail?.images[0]}
            src={productDetail?.images[0]}
            sx={styles.mainImage}
          />
          {(!!productDetail?.price && productDetail?.price > 30) && (
            <Container sx={styles.discount}>
              <Typography variant="h3" color="white" component="div" sx={{ margin: 0, fontWeight: 'normal', fontSize: '30px' }}>{discount(productDetail.price)}%</Typography>
            </Container>
          )}
          <Container>
            <Container component="div" sx={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem!important' }}>
              <Container component="div" sx={{ padding: '0px!important', width: '60%' }}>
                <Typography color="black" variant="h5">
                  {productDetail?.title}
                </Typography>
                <Rating name="read-only" value={productDetail?.stars} readOnly />
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
            <Container maxWidth="md" sx={{ width: '370px', height: '120px', position: 'relative', margin: '1rem 0 0 auto', padding: '0px!important' }}>
              <Box sx={styles.boxSteps}>
                <div>
                  <div style={styles.numberStep}>1</div>
                  <Typography variant="body2" color="gray" fontSize={8} sx={{ fontWeight: 'bold' }}>
                    Aplica a tu crédito!
                  </Typography>
                </div>
                <Divider orientation="vertical" sx={{ position: 'relative' }}>
                  <ArrowForwardIosIcon color='info' sx={{ position: 'absolute', fontSize: '0.8rem',  fontWeight: '', left: '6px', top: '38%', opacity: 0.7  }} />
                </Divider>
                <div>
                  <div style={styles.numberStep}>2</div>
                  <Typography variant="body2" color="gray" fontSize={8} sx={{ fontWeight: 'bold' }}>
                    Verifica tu compra
                  </Typography>
                </div>
                <Divider orientation="vertical" sx={{ position: 'relative' }}>
                  <ArrowForwardIosIcon color='info' sx={{ position: 'absolute', fontSize: '0.8rem',  fontWeight: '', left: '6px', top: '38%', opacity: 0.7  }} />
                </Divider>
                <div>
                  <div style={styles.numberStep}>3</div>
                  <Typography variant="body2" color="gray" fontSize={8} sx={{ fontWeight: 'bold' }}>
                    Disfruta tu producto
                  </Typography>
                </div>
              </Box>
              <ColorButton variant="contained" sx={styles.button}>
                Lo quiero a Crêdito
                <ArrowCircleRightIcon fontSize='medium' color='primary' />
              </ColorButton>
            </Container>
          </Container>
        </Container>
        <Typography fontSize={20} color="black" variant="h6" textAlign="left" paddingInline={3.5} marginTop={4}>
          Información Detallada del Producto
        </Typography>
        <Grid container maxWidth="xl" paddingInline={3.5} marginBlock={2}>
          <Grid item alignItems="center" md={6} xs={12}>
            <Box sx={{ width: '100%', maxWidth: '570px', height: '100%', overflow: 'hidden', margin: '0 auto' }}>
              <ImageList variant="masonry" cols={2} gap={5}>
                {!!productDetail?.images && productDetail?.images.map((image, idx) => (
                  <ImageListItem key={idx} sx={{  }}>
                    <Container
                      component="img"
                      key={idx}
                      alt={image}
                      src={image}
                      sx={{ width: '280px', height: '280px', padding: '0px!important', objectFit: 'cover' }}
                    />
                  </ImageListItem>
                ))}
                {(!!productDetail?.images && productDetail?.images.length < 3) && productDetail?.images.map((image, idx) => (
                  <ImageListItem key={idx} sx={{  }}>
                    <Container
                      component="img"
                      key={idx}
                      alt={image}
                      src={image}
                      sx={{ width: '280px', height: '280px', padding: '0px!important', objectFit: 'cover' }}
                    />
                  </ImageListItem>
                ))}
                <ImageListItem sx={{ }}>
                  <Container
                    component="img"
                    alt={productDetail?.images[0]}
                    src={productDetail?.images[0]}
                    sx={{ width: '280px', height: '280px', padding: '0px!important', objectFit: 'cover' }}
                  />
                </ImageListItem>
              </ImageList>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <TabPanel rating={productDetail?.stars} />
            <Grid container>
              <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '2rem' }}>
                <Typography variant='h5' color="primary" sx={{ fontSize: '1rem', fontStyle: 'italic' }}>
                  Lleva este producto <br />
                  a Crédito!
                </Typography>
                <Typography variant='subtitle1' color="secondary" sx={{ fontSize: '1rem', fontWeight: 'normal', marginBlock: '1rem' }}>
                  ¿Qué necesitas?
                </Typography>
                {list.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <CheckIcon fontSize='small' sx={{ color: '#A2D456' }} />
                    <Typography variant='body2' color="black">{item}</Typography>
                  </div>
                ))}
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ paddingBlock: '0.5rem', borderRadius: '13px', maxWidth: '300px', height: '300px' }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center' }}>
                    <Image
                      src={sonrisa}
                      alt='logotipo Macropay'
                      height={50}
                      width={50}
                      style={{ margin: '0 auto' }}
                    />
                    <Typography variant='h6' color='black' sx={{ fontWeight: 'bold' }}>
                      ¿Te falta una lanita?
                    </Typography>
                    <Typography variant='body2' color='black' sx={{ fontWeight: 'thin' }}>
                      ENGANCHE $520,00 <br />
                      PAGO SEMANAL $125,00
                    </Typography>
                    <ColorButton>Aplica Ahora</ColorButton>
                    <Typography variant='body2' color='gray' sx={{ fontWeight: 'thin', opacity: 0.75, fontSize: '0.55rem' }}>
                      *Hasta $2,000 de manera fácil, rápida y confiable
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Typography fontSize={20} color="black" variant="h6" textAlign="center" paddingInline={3.5} marginTop={4}>
          Productos Relacionados
        </Typography>
        <Container maxWidth="xl" sx={styles.otherProductsContainer}>
          {similarProducts?.map((product, idx) => (
            <Container key={idx} sx={{
              paddingBottom: '1rem',
              height: '100%',
              width: '300px',
              paddingInline: '0rem!important'
            }}>
              <ProductCard product={product} />
            </Container>
          ))}
        </Container>
      </Container>
    </>
  )
}

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
  imagesBox: {
    width: 185,
    height: 300,
    overflowY: 'scroll',
    '@media (max-width: 950px)': {
      display: 'none'
    }
  },
  discount: {
    height: 70,
    width: 70,
    borderRadius: '50%',
    backgroundColor: '#E6406D',
    position: 'absolute',
    left: 140,
    bottom: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 950px)' :{
      left: 40,
      bottom: 50
    },
    '@media (max-width: 780px)' :{
      display: 'none'
    },
  },
  infoContainer: {
    backgroundColor: '#d3d8e0',
    margin: '5px 0 5px auto',
    width: '60%',
    maxWidth: '215px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    paddingInline: '0.5rem!important',
    svg: {
      width: '25px',
      height: '25px',
      color: '#2B3445'
    }
  },
  boxSteps: {
    maxWidth: '370px',
    padding: '0.5rem 1rem',
    height: '80px',
    backgroundColor: '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '9px'
  },
  numberStep: {
    backgroundColor: '#4B566B',
    height: '20px',
    width: '20px',
    borderRadius: '50%',
    marginBottom: '0.5rem',
    color: '#fff',
    display: 'grid',
    placeItems: 'center',
    fontSize: '0.5rem'
  },
  button: {
    minWidth: '170px',
    maxWidth: '200px',
    // width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '0.8rem',
    padding: '0.5rem',
    position: 'absolute',
    right: '20px',
    bottom: '12px'
  },
  otherProductsContainer: {
    marginTop: '2rem',
    width: 'auto',
    minheight: '440px',
    display: 'flex',
    gap: '1rem',
    overflowX: 'scroll',
    overflowY: 'hidden'
  },
  mainImage: {
    width: '300px',
    height: '300px',
    padding:
    '0px!important',
    objectFit: 'cover',
    '@media (max-width: 780px)': {
      display: 'none'
    }
  }
}

const list = [
  'Tu cuenta de Facebook',
  'Tu INE Vigente',
  'Correo Electrónico',
]
