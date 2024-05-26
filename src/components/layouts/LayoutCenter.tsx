import React from "react";
import { StLayout } from "./StylesLayout";
import { Container } from "@mui/material";

const LayoutCenter = ({ children }: React.PropsWithChildren) => {
  return (
    <Container maxWidth="md">
      <StLayout.CenterContainer>{children}</StLayout.CenterContainer>
    </Container>
  );
};

export default LayoutCenter;
