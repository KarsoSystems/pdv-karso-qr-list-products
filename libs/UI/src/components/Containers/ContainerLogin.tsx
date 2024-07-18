import { Box, Container } from '@mui/material';
import { StContainerLogin } from './StylesContainerLogin';
import { PropsWithChildren } from 'react';

/**
 * @ContainerLogin Container para el forulario de login y registro.
 */
const ContainerLogin = ({ children }: PropsWithChildren) => {
  return (
    <Container maxWidth="xl">
      <StContainerLogin>
        <Box className="input_box">{children}</Box>
      </StContainerLogin>
    </Container>
  );
};

export default ContainerLogin;
