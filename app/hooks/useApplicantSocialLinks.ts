import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { cultureLancerAxios } from "../ui-services/axios";
import { queryClient } from "../ui/QueryLayout";

export const useApplicantSocialLinks = () => {
  const queryKey = "useApplicantSocialLinks";

  const FetchSocialProfile = async () => {
    try {
      const response = await cultureLancerAxios.get(
        `/applicant-social-profile/`
      );
      return response.data;
    } catch (error) {
      return [];
    }
  };

  const updateProfile = async (data: any) => {
    try {
      const response = await cultureLancerAxios(
        `${
          data.profile_id
            ? `/applicant-social-profile/${data.profile_id}/`
            : `/applicant-social-profile/`
        }`,
        {
          method: data.profile_id ? "PUT" : "POST",
          data: data.data,
        }
      );
      return response.data;
    } catch (error) {
      return {};
    }
  };

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });

  const query = useQuery({ queryKey: [queryKey], queryFn: FetchSocialProfile });
  return { ...query, mutation };
};
