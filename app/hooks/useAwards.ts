import { useQuery } from "@tanstack/react-query";
import { cultureLancerAxios } from "../ui-services/axios";

export const useAwards = () => {
  const queryKey = "useAwards";

  const FetchAwards = async () => {
    try {
      const response = await cultureLancerAxios.get(
        `/applicant-award-certifications/`
      );
      return response.data;
    } catch (error) {
      return {};
    }
  };

  const query = useQuery({ queryKey: [queryKey], queryFn: FetchAwards });
  return query;
};
