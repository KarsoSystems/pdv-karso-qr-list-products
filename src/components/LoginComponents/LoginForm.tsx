import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { IDataLogin } from "./login.models";
import { RoutesList } from "../../utils/routes";
import { useNavigate } from "react-router-dom";
import { getUserLogin } from "../../store/slices/loginSlice";
import { useAppDispatch } from "../../store/hooks";
import { StCenterImg, StImgLogo } from "./StylesLogin";
import axios from "axios";
import LogoKarso from "../../assets/img/logo_karso.png";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Grid,
  IconButton,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [load, setLoad] = useState<boolean>(false);
  const [viewPass, setViewPass] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<IDataLogin>({
    user: "",
    password: "",
  });

  /**
   * @getDataLogin Obtiene la informacion de los formularios para hacer login.
   * @param e Se obtiene la informacion del evento.
   */
  const getDataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const startSesion = () => {
    setLoad(true);
    axios
      .post("https://www.karsopublicidad.com/api/test-login", {
        username: loginData.user,
        password: loginData.password,
      })
      .then((res) => {
        const decodedUser = jwtDecode(res.data.result.token);

        localStorage.setItem("sesion", JSON.stringify(decodedUser));
        dispatch(
          getUserLogin({
            user: decodedUser as { username: string; iat: number },
          })
        );
        navigate(
          `/${RoutesList.dashboardRoute}/${RoutesList.dashboardProductsRoute}`
        );
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
        alert("algo salio mal");
        setLoad(false);
      });
  };

  const toggleViewPass = () => setViewPass(!viewPass);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sx={{ ...StCenterImg }}>
        <img src={LogoKarso} style={{ ...StImgLogo, objectFit: "contain" }} />
        <Typography variant="subtitle2" textAlign="justify">
          Para iniciar sesión en este sitio, debes ingresar el usuario y
          contraseña que te fueron asignados, si no cuentas con uno, debes
          solicitarlos al área de sistemas.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" mb={1.5}>
          Usuario
        </Typography>
        <TextField
          fullWidth
          disabled={load}
          name="user"
          value={loginData.user}
          onChange={getDataLogin}
          placeholder="Nombre de usuario"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" mb={1.5}>
          Contraseña
        </Typography>
        <TextField
          fullWidth
          disabled={load}
          name="password"
          value={loginData.password}
          onChange={getDataLogin}
          type={viewPass ? "text" : "password"}
          placeholder="Contraseña"
          InputProps={{
            endAdornment: (
              <IconButton disableRipple onClick={toggleViewPass}>
                {viewPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="flex-end">
        {load ? (
          <Box sx={{ width: "174px" }}>
            <Typography mb={1.5}>Iniciando sesión ...</Typography>
            <LinearProgress />
          </Box>
        ) : (
          <ButtonWithIcon onClick={startSesion} icon={<PersonAddIcon />}>
            Iniciar sesión
          </ButtonWithIcon>
        )}
      </Grid>
    </Grid>
  );
};

export default LoginForm;
