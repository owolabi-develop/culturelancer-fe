import { useQuery } from "@tanstack/react-query";
import { cultureLancerAxios } from "../ui-services/axios";

export const useApplicantProfileDetails = () => {
  const queryKey = "applicantProfileDetails";

  const GetApplicantInfo = async () => {
    const userID = localStorage.getItem("user_id_item");
    try {
      const response = await cultureLancerAxios.get(
        `/applicant-profile-details/${userID}`
      );
      return response.data;
    } catch (error) {
      return {};
    }
  };

  const query = useQuery({ queryKey: [queryKey], queryFn: GetApplicantInfo });
  return query;
};
