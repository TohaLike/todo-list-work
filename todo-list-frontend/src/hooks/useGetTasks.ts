import TaskService from "@/services/TaskService";
// import { useSearchParams } from "next/navigation";
import useSWR from "swr";

export const useGetTasks = (param: string) => {
  const url = param !== "allTasks" ? `tasks/?completed=${param}` : `tasks/`;

  const { data, error, isLoading } = useSWR(
    [url],
    () => TaskService.getAllTasks(url),
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    }
  );

  return {
    tasks: data,
    isLoading,
    isError: !!error,
  };
};
