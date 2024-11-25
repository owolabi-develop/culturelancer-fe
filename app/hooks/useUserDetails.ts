import { useQuery } from "@tanstack/react-query";
import { cultureLancerAxios } from "../ui-services/axios";
import { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../context";

export const useUserDetals = () => {
  const queryKey = "useUserDetals";
  const { user, setUser } = useContext(MyContext);

  const GetUser = async () => {
    const userID = localStorage.getItem("user_id_item");
    try {
      const response = await cultureLancerAxios.get(
        `/${
          user?.role === "employer"
            ? "create-employer-account"
            : "create-applicant-account"
        }/${user?.user_id || userID}/`
      );
      setUser({
        ...user,
        ...response.data,
      });
      return response.data;
    } catch (error) {
      return null;
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
