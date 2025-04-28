import useSWRMutation from "swr/mutation";
import TaskService from "../services/TaskService";
import { TaskId } from "@/types";
import { mutate } from "swr";
import { useSearchParams } from "next/navigation";

export const useDeleteTask = () => {
  const searchParams = useSearchParams();
  const param = searchParams.get("completed");

  const url = param ? `tasks/?completed=${param}` : `tasks/`;

  // const url = `tasks/`;

  const { trigger, data, isMutating } = useSWRMutation(
    ["tasks/delete"],
    (url, { arg }: { arg: TaskId }) => TaskService.deleteTask(arg.id),
    {
      onSuccess: () => mutate([url]),
    }
  );

  return {
    deleteTask: trigger,
    deletedTask: data,
    isDeleting: isMutating,
  };
};
