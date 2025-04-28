import useSWRMutation from "swr/mutation";
import TaskService from "../services/TaskService";
import { mutate } from "swr";

export const useCreateTask = () => {
  const { trigger, data, isMutating } = useSWRMutation(
    ["tasks/create"],
    (url, { arg }: { arg: object }) => TaskService.createTask(arg),
    { onSuccess: () => mutate(["tasks/get"]) }
  );

  return {
    createTask: trigger,
    createdTask: data,
    isCreating: isMutating,
  };
};
