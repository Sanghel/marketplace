import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Rating } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={styles.panelCharacteristics}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabPanel(props: { rating: number | undefined }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginInline: '1rem' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Otras Especificaciones" {...a11yProps(0)} sx={{ textTransform: 'none' }} />
          <Tab label="Reviews" {...a11yProps(1)} sx={{ textTransform: 'none' }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {otherCharacteristics.map((characteristic, idx) => (
          <div key={idx} style={{ display: 'flex', marginBottom: '0.1rem', gap: '5px'  }}>
            <Typography style={{ width: '40%', fontSize: '0.8rem' }}>{characteristic.title}</Typography>
            <Typography style={{ width: '60%', fontWeight: 'bold', fontSize: '0.8rem' }}>{characteristic.description}</Typography>
          </div>
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {props.rating && (
          <Rating name="read-only" value={props.rating} readOnly />
        )}
      </CustomTabPanel>
    </Box>
  );
}

const styles = {
  panelCharacteristics: {
    color: '#2B3445',
    p: 3,
  }
}

const otherCharacteristics = [
  {
    title: 'Fabricante',
    description: 'Sample'
  },
  {
    title: 'Peso del producto',
    description: '50 gr'
  },
  {
    title: 'Dimensiones',
    description: '11 x 10 x 0.4 pulgadas'
  },
  {
    title: 'País de origen',
    description: 'China'
  },
  {
    title: 'Número del modelo',
    description: '134687'
  },
  {
    title: 'Color',
    description: 'Plata'
  },
  {
    title: 'Material',
    description: 'Silicona plástico'
  },
  {
    title: 'Cantidad de piezas',
    description: '4'
  },
  {
    title: 'Características especiales',
    description: 'Resistente al agua'
  },
  {
    title: 'Componentes incluidos',
    description: 'Audifonos, Cargador y Manual de usuario'
  },
]