import React from "react";
import { Container as MuiContainer } from "@mui/material";

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <MuiContainer
      sx={{
        maxWidth: "1200px",
        width: "100%",
        "@media (min-width: 600px)": { "&.MuiContainer-root": { p: 2 } },
      }}
      maxWidth={false}
    >
      {children}
    </MuiContainer>
  );
};
