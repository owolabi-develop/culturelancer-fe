import { useQuery } from "@tanstack/react-query";
import { cultureLancerAxios } from "../ui-services/axios";

export const useApplicantWorkExperience = () => {
  const queryKey = "applicantWorkExperience";

  const GetApplicantWorkExperience = async () => {
    try {
      const response = await cultureLancerAxios.get(
        `/applicant-work-experience/`
      );
      return response.data;
    } catch (error) {
      return {};
    }
  };

  const query = useQuery({
    queryKey: [queryKey],
    queryFn: GetApplicantWorkExperience,
  });
  return query;
};
