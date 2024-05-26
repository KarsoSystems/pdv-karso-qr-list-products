import { Box, styled } from "@mui/material";

const LoginContainer = styled(Box)(() => ({
  width: "100%",
  maxWidth: "450px",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
}));

export const StCenterImg = {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
};
export const StImgLogo = {
  width: "150px",
  height: "150px",
};

export const StLogin = {
  LoginContainer,
};
