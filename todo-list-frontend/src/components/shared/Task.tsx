"use client";
import React from "react";
import { Box, Card, CardActions, CardContent, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Button } from "../ui";
import { CheckBoxEvent, TaskProps } from "@/types";
import { useCompleteTask } from "@/hooks/useCompleteTask";
import { useDeleteTask } from "@/hooks/useDeleteTask";
import moment from "moment";

import CloseIcon from "@mui/icons-material/Close";

export const Task: React.FC<TaskProps> = ({
  id,
  title,
  completed,
  createdAt,
}) => {
  const { completeTask } = useCompleteTask();
  const { deleteTask } = useDeleteTask();

  const handleDeleteTask = async () => {
    try {
      await deleteTask({ id });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompleteTask = async (event: CheckBoxEvent) => {
    try {
      await completeTask({ id, completed: event.target.checked });
    } catch (error) {
      console.log(error);
    }
  };

  const momentTime = (updatedAt: string) => {
    return moment(updatedAt).format("YYYY-MM-DD в HH:mm");
  };

  return (
    <div>
      <Card variant="outlined">
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: "10px 16px 0",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox checked={completed} onChange={handleCompleteTask} />
            }
            label={completed ? "Выполнено" : "Не выполнено"}
          />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button onClick={handleDeleteTask}>
              <CloseIcon />
            </Button>
          </Box>
        </CardActions>
        <CardContent>
          <Typography
            variant="body2"
            sx={{
              fontSize: "18px",
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            {title}
          </Typography>
        </CardContent>
        <CardContent sx={{ "&:last-child": { pb: "10px" } }}>
          <Typography variant="caption">
            Создана: {momentTime(createdAt)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
