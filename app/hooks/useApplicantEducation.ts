import { useQuery } from "@tanstack/react-query";
import { cultureLancerAxios } from "../ui-services/axios";

export const useApplicantEducation = () => {
  const queryKey = "applicantEducation";

  const GetApplicantEducation = async () => {
    try {
      const response = await cultureLancerAxios.get(`/applicant-education/`);
      return response.data;
    } catch (error) {
      return [];
    }
  };

  const query = useQuery({
    queryKey: [queryKey],
    queryFn: GetApplicantEducation,
  });
  return query;
};
