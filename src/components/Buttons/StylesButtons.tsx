import { Box, Button, styled } from "@mui/material";

const StButtonWithIcon = styled(Button)(() => ({
  paddingLeft: 0,
}));

const SquareIcon = styled(Box)(() => ({
  width: "35px",
  height: "35px",
  background: "#FFFFFF",
  marginRight: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StButtons = {
  StButtonWithIcon,
  SquareIcon,
};
