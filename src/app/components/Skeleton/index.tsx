import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';

export default function SkeletonComponent() {
  return (
    <Stack spacing={2} direction="row" sx={{ maxWidth: '1000px', width: '100%', margin: '0 auto', padding: '1rem' }}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="rounded" width={300} height={460} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Skeleton variant="rounded" width={200} height={300} />
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant="rounded" width={200} height={300} />
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant="rounded" width={200} height={300} />
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant="rounded" width={200} height={300} />
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant="rounded" width={200} height={300} />
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant="rounded" width={200} height={300} />
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant="rounded" width={200} height={300} />
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant="rounded" width={200} height={300} />
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant="rounded" width={200} height={300} />
        </Grid>
      </Grid>

      {/* For other variants, adjust the size with `width` and `height` */}
      {/* <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} /> */}
    </Stack>
  );
}