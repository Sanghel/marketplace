import * as React from 'react';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Modal, Card, CardMedia, Divider, Grid, createTheme, ThemeProvider, CardContent, Stack, Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import { ColorButton } from '../ColorButton';
import { newPrice } from '@/app/utils/pricesAndDiscounts';
import banner2 from '../../public/assets/banner2.png'

interface ModalProduct {
  product: Product
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  pricePerWeek: (number: number) => string
}

const ModalProduct: React.FC<ModalProduct> = ({ product, setIsModalOpen, isModalOpen, pricePerWeek }) => {
  const router = useRouter()
  const handleClose = () => setIsModalOpen(false)
  const firstPointPosition = product.description.indexOf('.')
  const newDescription = firstPointPosition !== -1 ? product.description.substring(0, firstPointPosition + 1) : product.description

  const redirectProductDetail = (categoryName: string, id: number) => {
    const newCategoryName = categoryName.toLowerCase()
    router.push(`/${newCategoryName}/${id}`)
  }

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.boxContainer}>
          <Image
            height={330}
            width={600}
            src={banner2}
            alt='Compra Online con Macropay'
          />
          <Card sx={{ display: 'flex', padding: '0.5rem', boxShadow: 'none', alignItems: "center" }}>
            <CardMedia
              component="img"
              sx={{ width: 160, height: 160 }}
              image={product.images[0]}
              alt="Live from space album cover"
              width="20%"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', borderRadius: 0, width: '80%' }}>
              <CardContent>
                <Typography variant="body1" color="primary" textAlign="right" sx={{ width: '100%' }}>
                  ${newPrice(product.price)} x 1
                </Typography>
                <Typography component="div" variant="h6" sx={{ textWrap: 'balance' }}>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="gray" component="div">
                  {newDescription}
                </Typography>
              </CardContent>
            </Box>
          </Card>
          <Divider />
          <Box sx={style.boxText}>
            <Typography variant="body1" color="gray" component="div">
              1 item en tu carrito
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap={3}
            >
              <Typography variant="body1" color="gray" component="div">
                Subtotal
              </Typography>
              <Typography variant="body1" color="primary" textAlign="right" >
                ${newPrice(product.price)}
              </Typography>
            </Stack>
          </Box>
          <Divider />
          <Box sx={style.boxBottom}>
            <div style={style.whiteCircle}>
              <div style={style.yellowCircle}>
                <CheckIcon color='primary' sx={{ width: '50px', height: '50px'}} />
              </div>
            </div>
            <Typography component="div" variant="h6">
              Te vas a llevar este producto por solo
            </Typography>
            <Typography component="div" variant="h4" sx={{ fontWeight: 'bold' }}>
              ${pricePerWeek(product.price)} p/semana!
            </Typography>
            <ColorButton variant="contained" sx={{ marginBlock: '1rem', width: '280px', height: '55px' }} onClick={() => redirectProductDetail(product.category.name, product.id)}>Compra a Crédito</ColorButton>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap={2}
              sx={{ width: '280px' }}
            >
              <div style={{ height: '0.8px', backgroundColor: '#7D879C', width: '80px', opacity: 0.5 }} />
              <Typography variant="body2" color="gray" component="div" sx={{ fontStyle: 'italic' }}>
                o puedes
              </Typography>
              <div style={{ height: '0.8px', backgroundColor: '#7D879C', width: '80px', opacity: 0.5 }} />
            </Stack>
            <Typography variant="body2" color="primary" component="div" sx={{marginBlock: '1rem'}}>
              Comprar a contado
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

const style = {
  boxContainer: {
    width: '80%',
    maxWidth: 600,
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    zIndex: 1000
  },
  boxText: {
    paddingInline: '2rem',
    paddingBlock: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  boxBottom: {
    paddingBlock: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2B3445'
  },
  whiteCircle: {
    backgroundColor: 'white',
    width: '90px',
    height: '90px',
    display: 'grid',
    placeItems: 'center',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '50%',
    marginBlock: '0.5rem'
  },
  yellowCircle: {
    width: '75px',
    height: '75px',
    display: 'grid',
    placeItems: 'center',
    border: '1px solid #FFD300',
    borderRadius: '50%',
  }
}

export default ModalProduct