import { Box, styled } from '@mui/material';

export const StContainerLogin = styled(Box)(() => ({
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& .input_box': {
    width: '100%',
    maxWidth: '450px',
  },
}));
