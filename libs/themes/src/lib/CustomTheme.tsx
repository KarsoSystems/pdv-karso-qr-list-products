import { createTheme } from '@mui/material';

const colorPrimaryMain = '#FFBA0A';

export const KarsoTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
    primary: {
      main: colorPrimaryMain,
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'League Spartan,sans-serif',
      fontWeight: 700,
      fontSize: '60px',
    },
    h2: {
      fontFamily: 'League Spartan,sans-serif',
      fontWeight: 700,
      fontSize: '50px',
    },
    h3: {
      fontFamily: 'League Spartan,sans-serif',
      fontWeight: 700,
      fontSize: '40px',
    },
    h4: {
      fontFamily: 'League Spartan,sans-serif',
      fontWeight: 800,
      fontSize: '30px',
    },
    h5: {
      fontFamily: 'League Spartan,sans-serif',
      fontWeight: 800,
      fontSize: '20px',
    },
    body1: {
      fontWeight: 500,
      fontSize: '16px',
    },
    body2: {
      fontWeight: 400,
      fontSize: '14px',
    },
    subtitle1: {
      fontWeight: 400,
    },
    subtitle2: {
      fontWeight: 400,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        sx: {
          backgroundColor: '#ffffff16',
        },
      },
      styleOverrides: {
        root: {
          '.MuiInputBase-root': {
            borderRadius: 0,
            height: '45px',
          },
        },
      },
    },
  },
});
