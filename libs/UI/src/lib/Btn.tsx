import { PropsWithChildren } from 'react';
import { Button, ButtonProps } from '@mui/material';

/**
 * @MainButton Boton principal, con React MUI
 */
const Btn = ({ children, ...props }: PropsWithChildren<ButtonProps>) => {
  return <Button {...props}>{children}</Button>;
};

export default Btn;
