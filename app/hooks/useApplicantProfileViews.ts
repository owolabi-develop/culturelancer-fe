import { useQuery } from "@tanstack/react-query";
import { cultureLancerAxios } from "../ui-services/axios";

export const useApplicantProfileViews = () => {
  const queryKey = "applicantProfileViews";

  const GetApplicantProfileViews = async () => {
    const userID = localStorage.getItem("user_id_item");
    try {
      const response = await cultureLancerAxios.get(
        `/get-applicant-profile-views/${userID}/`
      );
      return response.data;
    } catch (error) {
      return {error};
    }
  };

  const query = useQuery({
    queryKey: [queryKey],
    queryFn: GetApplicantProfileViews,
  });
  return query;
};
