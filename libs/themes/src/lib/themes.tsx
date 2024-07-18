// import styles from './themes.module.css';
import '../styles/styles.css';
import { KarsoTheme } from './CustomTheme';
import { ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';

export function Themes({ children }: PropsWithChildren) {
  return <ThemeProvider theme={KarsoTheme}>{children}</ThemeProvider>;
}

export default Themes;
