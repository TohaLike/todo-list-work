"use client";
import React, { Suspense, use, useEffect, useState } from "react";
import { Box, CircularProgress, MenuItem, TextField } from "@mui/material";
import { CreateTask, Task } from "@/components/shared";
import { useGetTasks } from "@/hooks/useGetTasks";
import { TaskProps } from "@/types";
import { useRouter } from "next/navigation";

const currencies = [
  {
    value: "allTasks",
    label: "Все задачи",
  },
  {
    value: "false",
    label: "Активные задачи",
  },
  {
    value: "true",
    label: "Выполненные задачи",
  },
];

export const TasksPage = () => {
  const [selectedType, setSelectedType] = useState<string>("allTasks");

  const router = useRouter();
  const { tasks, isLoading } = useGetTasks(selectedType);

  const handleChangeList = (event: React.ChangeEvent<{ value: string }>) => {
    const params = new URLSearchParams(window.location.search);
    params.set("completed", event.target.value);
    if (event.target.value === "allTasks") params.delete("completed");
    router.push(`?${params.toString()}`);
    setSelectedType(event.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSelectedType(params.get("completed") || "allTasks");
  }, []);


  if (isLoading)
    return (
      <div>
        <Box
          sx={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
          }}
        >
          <CircularProgress size={60} />
        </Box>
      </div>
    );

  return (
    <>
      <Suspense>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <TextField
            select
            value={selectedType}
            fullWidth
            onChange={handleChangeList}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <CreateTask />

        <Box
          sx={{
            display: "grid",
            gap: "10px",
          }}
        >
          {!tasks?.length ? (
            <div>Задач нет</div>
          ) : (
            tasks?.map((e: TaskProps) => <Task key={e.id} {...e} />)
          )}
        </Box>
      </Suspense>
    </>
  );
};
