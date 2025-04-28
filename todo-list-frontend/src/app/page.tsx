"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@/components/ui";
import { Box, CircularProgress, MenuItem, TextField } from "@mui/material";
import { CreateTask, Task } from "@/components/shared";
import { useGetTasks } from "@/hooks/useGetTasks";
import { TaskProps } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

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

export default function Home() {
  const { tasks, isLoading } = useGetTasks();

  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedType, setSelectedType] = useState<string>("allTasks");

  useEffect(() => {
    const currentType = searchParams.get("completed") || "allTasks";
    setSelectedType(currentType);
  }, [searchParams]);

  const handleChangeList = (event: React.ChangeEvent<{ value: string }>) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("completed", event.target.value);

    if (event.target.value === "allTasks") params.delete("completed");

    router.push(`?${params.toString()}`);
  };

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
    <div>
      <main>
        <Container>
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
            {!tasks.length ? (
              <div>Задач нет</div>
            ) : (
              tasks?.map((e: TaskProps) => <Task key={e.id} {...e} />)
            )}
          </Box>
        </Container>
      </main>
    </div>
  );
}
