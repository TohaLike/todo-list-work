import TaskService from "@/services/TaskService";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

export const useGetTasks = () => {
  const searchParams = useSearchParams();
  const param = searchParams.get("completed");

  const url = param ? `tasks/?completed=${param}` : `tasks/`;

  // const url = `tasks/`;


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
