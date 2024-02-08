import * as React from 'react';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const PrettoSlider = styled(Slider)({
  color: '#004AC1',
  height: 20,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 60,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    display: 'flex',
    justifyContent: 'space-around',
    '&::before': {
      display: 'none',
    },
    borderRadius: '20px'
  },
  },
);


interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  return (
    <SliderThumb {...props}>
      <ArrowBackIosRoundedIcon color='primary' sx={{ fontSize: "0.8rem" }} />
      {props.children}
      <Typography variant='body2' color="black" sx={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
        {props.children?.props['aria-valuenow']}%
      </Typography>
      <ArrowForwardIosRoundedIcon color='primary' sx={{ fontSize: "0.8rem" }} />
    </SliderThumb>
  );
}

export default function CustomizedSlider(props: { percent: number, setPercent: React.Dispatch<SetStateAction<number>>} ) {
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    props.setPercent(newValue as number);
  };
  
  return (
    <Box sx={{ width: '80%' }}>
      <PrettoSlider
        slots={{ thumb: AirbnbThumbComponent }}
        aria-label="pretto slider"
        defaultValue={20}
        onChange={handleSliderChange}
      />
    </Box>
  );
}
