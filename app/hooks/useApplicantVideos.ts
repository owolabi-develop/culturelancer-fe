import { useQuery } from "@tanstack/react-query";
import { cultureLancerAxios } from "../ui-services/axios";

export const useApplicantVideos = () => {
  const queryKey = "useApplicantVideos";

  const FetchApplicantVideos = async () => {
    try {
      const response = await cultureLancerAxios.get(`/applicant-video/`);
      return response.data;
    } catch (error) {
      return {error};
    }
  };

  const query = useQuery({
    queryKey: [queryKey],
    queryFn: FetchApplicantVideos,
  });
  return query;
};
