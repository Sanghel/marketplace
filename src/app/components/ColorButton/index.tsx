import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: '#004AC1',
  backgroundColor: '#FFD300!important',
  '&:hover': {
    backgroundColor: '#8b7100',
  },
}));