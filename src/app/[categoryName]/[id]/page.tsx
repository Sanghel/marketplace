'use client'

import React from 'react'
import { useParams } from 'next/navigation';
import { Container } from '@mui/material';
import { useMacropayContext } from '@/app/context';

export default function ProductDetail() {
  const { id } = useParams()
  const { products } = useMacropayContext()

  return (
    <Container>

    </Container>
  )
}
