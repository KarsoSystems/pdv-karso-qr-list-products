import React from "react";
import { Box, styled } from "@mui/material";
import ImdDegradado from "../../assets/img/degradado.png";

const StylesFondoDegradado = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${ImdDegradado})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: -1,
}));

const FondoDegradado = () => {
  return <StylesFondoDegradado />;
};

export default FondoDegradado;
