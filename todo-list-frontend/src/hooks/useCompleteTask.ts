import useSWRMutation from "swr/mutation";
import TaskService from "../services/TaskService";
import { CompleteTask } from "@/types";
import { mutate } from "swr";
import { useSearchParams } from "next/navigation";

export const useCompleteTask = () => {
  const searchParams = useSearchParams();
  const param = searchParams.get("completed");

  const url = param ? `tasks/?completed=${param}` : `tasks/`;


  // const url = `tasks/`;

  const { trigger, data, isMutating } = useSWRMutation(
    ["tasks/complete"],
    (url, { arg }: { arg: CompleteTask }) =>
      TaskService.completeTask(arg.id, arg.completed),
    { onSuccess: () => mutate([url]) }
  );

  return {
    completeTask: trigger,
    completedTask: data,
    isComplating: isMutating,
  };
};
