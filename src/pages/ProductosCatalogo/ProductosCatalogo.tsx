import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
// import IMG from "../../img/lista_1.png";

const ProductosCatalogo = () => {
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src="https://raw.githubusercontent.com/KarsoSystems/pdv-karso-qr-list-products/main/public/static/logo.png"
              width="150px"
              style={{
                padding: "10px",
              }}
            />

            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            ></Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <img
          src="https://raw.githubusercontent.com/KarsoSystems/pdv-karso-qr-list-products/main/public/static/lista_1.png"
          style={{
            width: "100%",
            margin: "10px 0px",
          }}
        />
        <img
          src="https://raw.githubusercontent.com/KarsoSystems/pdv-karso-qr-list-products/main/public/static/lista_2.png"
          style={{
            width: "100%",
            margin: "10px 0px",
          }}
        />
      </Container>
    </>
  );
};

export default ProductosCatalogo;
