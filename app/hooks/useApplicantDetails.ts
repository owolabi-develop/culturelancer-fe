import { useQuery } from "@tanstack/react-query";
import { cultureLancerAxios } from "../ui-services/axios";

export const useApplicantDetals = () => {
  const queryKey = "applicantDetails";

  const GetApplicantInfo = async () => {
    try {
      const response = await cultureLancerAxios.get(`/get-ap-profile-details/`);
      console.log("GetApplicantInfo response", response);
      return response.data;
    } catch (error) {
      return {};
    }
  };

  const query = useQuery({ queryKey: [queryKey], queryFn: GetApplicantInfo });
  return query;
};
