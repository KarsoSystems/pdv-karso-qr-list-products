import React from "react";
import LoginForm from "../components/LoginComponents/LoginForm";
import LayoutCenter from "../components/layouts/LayoutCenter";
import { StLogin } from "../components/LoginComponents/StylesLogin";
import { Navigate } from "react-router-dom";
import { RoutesList } from "../utils/routes";

const Login = () => {
  const userLogin = localStorage.getItem("sesion");
  const parseUser = userLogin ? JSON.parse(userLogin) : {};

  if (Object.keys(parseUser).length) {
    return <Navigate to={RoutesList.routeToDashboard} />;
  }

  return (
    <LayoutCenter>
      <StLogin.LoginContainer>
        <LoginForm />
      </StLogin.LoginContainer>
    </LayoutCenter>
  );
};

export default Login;
