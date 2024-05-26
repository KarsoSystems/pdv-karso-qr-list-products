import React, { ReactNode } from "react";
import { StButtons } from "./StylesButtons";
import { ButtonProps } from "@mui/material";

interface IPropsButtonWithIcon extends ButtonProps {
  icon: ReactNode;
}

const ButtonWithIcon = (props: IPropsButtonWithIcon) => {
  return (
    <StButtons.StButtonWithIcon variant="contained" {...props}>
      <StButtons.SquareIcon>{props.icon}</StButtons.SquareIcon>
      {props.children}
    </StButtons.StButtonWithIcon>
  );
};

export default ButtonWithIcon;
