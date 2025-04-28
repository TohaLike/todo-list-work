import React from "react";
import { Input } from "../ui";
import { useCreateTask } from "@/hooks/useCreateTask";
import { useForm, FormProvider } from "react-hook-form";
import { createTaskSchema } from "@/validations/createTaskSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button } from "@mui/material";

export const CreateTask: React.FC = () => {
  const { createTask } = useCreateTask();

  const form = useForm({
    resolver: zodResolver(createTaskSchema),
    defaultValues: { title: "" },
  });

  const onSubmit = async (data: object) => {
    try {
      await createTask(data);
      form.setValue("title", "");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "flex-start",
              gap: "10px",
              m: "20px 0",
              borderRadius: "4px"
            }}
          >
            <Input
              placeholder="Название задачи"
              {...form.register("title")}
              errorMessage={form.formState.errors.title?.message}
              helperText={form.formState.errors["title"]?.message}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                height: "56px",
                textTransform: "none",
              }}
            >
              Добавить
            </Button>
          </Box>
        </form>
      </FormProvider>
    </div>
  );
};
