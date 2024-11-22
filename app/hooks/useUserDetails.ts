import { useQuery } from "@tanstack/react-query";
import { cultureLancerAxios } from "../ui-services/axios";
import { useEffect } from "react";

export const useUserDetals = () => {
  const queryKey = "useUserDetals";

  const GetUser = async () => {
    const userID = localStorage.getItem("user_id_item");
    try {
      const response = await cultureLancerAxios.get(`/account/${userID}/`);
      return response.data;
    } catch (error) {
      return {};
    }
  };

  useEffect(() => {
    GetUser();
  }, []);

  const query = useQuery({ queryKey: [queryKey], queryFn: GetUser });

  // Mutations
  //   const mutation = useMutation({
  //     mutationFn: postTodo,
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       QueryClient.invalidateQueries({ queryKey: [queryKey] });
  //     },
  //   });

  return query;
};
