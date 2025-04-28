import React from "react";
import { TextField } from "@mui/material";
import { InputProps } from "@/types";

export const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  errorMessage,
  ...props
}) => {
  return (
    <div>
      <TextField
        multiline
        minRows={1}
        maxRows={4}
        placeholder={placeholder}
        variant="outlined"
        InputProps={{
          style: { height: "auto" },
        }}
        {...props}
        name={name}
        error={!!errorMessage}
        fullWidth
        sx={{
          flex: 1,
          "& input": { padding: "8px" },
          "& .MuiInputBase-root": {
            alignItems: "flex-start",
          },
        }}
      />
    </div>
  );
};
