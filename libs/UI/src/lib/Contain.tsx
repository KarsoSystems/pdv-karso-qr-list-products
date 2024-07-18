import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import ContainerLogin from '../components/Containers/ContainerLogin';

/**
 * @Contain Container Principal para aplicacion maxWidth LG.
 */
const Contain = ({ children }: PropsWithChildren<null>) => {
  return <Container maxWidth="lg">{children}</Container>;
};

Contain.ContainerLogin = ContainerLogin;

export default Contain;
