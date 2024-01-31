'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { Container, IconButton } from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import banner1 from '../../public/assets/banner1.jpeg'

export default function BannerSalider() {
  const images = [banner1]

  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Container sx={styles.sliderContainer}>
      <div style={{ display: 'grid', placeItems: 'center',  backgroundColor: '#FFF',  height: '60px', width: '60px', borderRadius: '50%', zIndex: 100, position: 'absolute', top: '42%', left: '0px'}}>
        <IconButton onClick={prevImage}>
          <ArrowBackOutlinedIcon sx={{ fontSize: '2.5rem' }} />
        </IconButton>
      </div>
      <div style={{ width: '100%', display: 'flex', transition: 'transform 0.5s', transform: `translateX(-${currentImage * 100}%)` }}>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', objectFit: 'cover' }}/>
        ))}
      </div>
      <div style={{ display: 'grid', placeItems: 'center',  backgroundColor: '#FFF',  height: '60px', width: '60px', borderRadius: '50%', zIndex: 100, position: 'absolute', top: '42%', right: '0px'}}>
        <IconButton onClick={nextImage}>
          <ArrowForwardOutlinedIcon sx={{ fontSize: '2.5rem' }} />
        </IconButton>
      </div>
    </Container>
  )
}

const styles = {
  sliderContainer: {
    margin: '2rem auto',
    position: 'relative',
    width: '90%',
    height: '350px',
    overflow: 'hidden'
  }
}
