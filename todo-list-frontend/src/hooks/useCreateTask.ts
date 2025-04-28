import useSWRMutation from "swr/mutation";
import TaskService from "../services/TaskService";
import { mutate } from "swr";
import { useSearchParams } from "next/navigation";

export const useCreateTask = () => {
  const searchParams = useSearchParams();
  const param = searchParams.get("completed");

  const url = param ? `tasks/?completed=${param}` : `tasks/`;

  const { trigger, data, isMutating } = useSWRMutation(
    ["tasks/create"],
    (url, { arg }: { arg: object }) => TaskService.createTask(arg),
    { onSuccess: () => mutate([url]) }
  );

  return {
    createTask: trigger,
    createdTask: data,
    isCreating: isMutating,
  };
};
