import { useQuery } from "@tanstack/react-query";
import { cultureLancerAxios } from "../ui-services/axios";

export const useApplicantProjects = () => {
  const queryKey = "applicantProjects";

  const GetApplicantProjects = async () => {
    try {
      const response = await cultureLancerAxios.get(`/applicant-project/`);
      return response.data;
    } catch (error) {
      return {};
    }
  };

  const query = useQuery({
    queryKey: [queryKey],
    queryFn: GetApplicantProjects,
  });
  return query;
};
