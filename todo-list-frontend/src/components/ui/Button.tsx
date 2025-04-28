import React from "react";
import { ButtonProps, Button as MuiButton } from "@mui/material";

export const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <div>
      <MuiButton
        type={type}
        variant="outlined"
        onClick={onClick}
        sx={{
          textTransform: "none",
          
        }}
      >
        {children}
      </MuiButton>
    </div>
  );
};
