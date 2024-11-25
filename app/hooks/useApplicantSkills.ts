import { useQuery } from "@tanstack/react-query";
import { cultureLancerAxios } from "../ui-services/axios";

export const useApplicantSkills = () => {
  const queryKey = "applicantSkills";

  const GetApplicantSkills = async () => {
    try {
      const response = await cultureLancerAxios.get(`/applicant-skills/`);
      return response.data;
    } catch (error) {
      return []
    }
  };

  const query = useQuery({
    queryKey: [queryKey],
    queryFn: GetApplicantSkills,
  });
  return query;
};
