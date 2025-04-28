import { TextFieldProps } from "@mui/material";
import React from "react";

export interface TaskProps {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export interface InputProps extends Omit<TextFieldProps, "name"> {
  placeholder: string;
  name: string;
  errorMessage?: string;
}

export interface TaskId {
  id: string;
}

export interface CompleteTask {
  id: string;
  completed: boolean;
}

export type CheckBoxEvent = React.ChangeEvent<HTMLInputElement>;

