import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { Contain, Input, Btn } from '@karso-administrador/UI';
import axios from 'axios';
import LogoKarso from '../assets/img/logo_karso.png';

const StImgLogo = {
  width: '150px',
  height: '150px',
};

const StCenterImg = {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
};

const LoginComponent = () => {
  const [loginParams, setLoginParams] = useState<{ email: string; password: string }>({ email: '', password: '' });

  const logIn = () => {
    try {
      console.log(loginParams);
      axios
        .post(`${process.env.NX_API_DOMAIN}/develop/api/auth/login`, {
          // email: 'pacha@mama.com',
          // password: '1234abcd',
          ...loginParams,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };

  const getLoginParams = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginParams({ ...loginParams, [e.target.name]: e.target.value });
  };

  return (
    <Contain.ContainerLogin>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ ...StCenterImg }}>
          <img src={LogoKarso} alt="logo Karso" style={{ ...StImgLogo, objectFit: 'contain' }} />
          <Typography variant="subtitle2" textAlign="justify">
            Para iniciar sesión en este sitio, debes ingresar el usuario y contraseña que te fueron asignados, si no cuentas con
            uno, debes solicitarlos al área de sistemas.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" mb={1}>
            Usuario (inicia sesión con tu correo)
          </Typography>
          <Input name="email" value={loginParams.email} onChange={getLoginParams} fullWidth placeholder="Escribe tu usuario" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" mb={1}>
            Contraseña
          </Typography>
          <Input.InputPass
            name="password"
            value={loginParams.password}
            onChange={getLoginParams}
            fullWidth
            placeholder="Escribe tu contraseña"
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Btn variant="contained" onClick={logIn}>
            Iniciar sesión
          </Btn>
        </Grid>
      </Grid>
    </Contain.ContainerLogin>
  );
};

export default LoginComponent;
