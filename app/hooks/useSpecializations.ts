import { useQuery } from "@tanstack/react-query";
import { cultureLancerAxios } from "../ui-services/axios";

export const useSpecializations = () => {
  const queryKey = "useSpecializations";

  const FetchSpecializations = async () => {
    try {
      const response = await cultureLancerAxios.get(
        "/applicant-specialization/"
      );
      return response.data;
    } catch (error) {
      return {};
    }
  };

  const query = useQuery({
    queryKey: [queryKey],
    queryFn: FetchSpecializations,
  });
  return query;
};
