import { Box, styled } from '@mui/material';
import ImgBack from '../assets/img/degradado.png';

const StylesFondoDegradado = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${ImgBack})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -1,
}));

const Background = () => <StylesFondoDegradado />;

export default Background;
