import { http_endpoints } from "../libs/definations";
import { RootState } from "./store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IJob } from "../_types/jobs.type";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: http_endpoints,
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: ["Job"],
  endpoints: (builder) => ({
    createJob: builder.mutation<any, any>({
      query: (body) => ({
        url: `/careerportal/job/`,
        method: "POST",
        body: { ...body },
      }),
      invalidatesTags: (result, __) => [{ type: "Job", id: result?.id }],
    }),
    fetchJobEmployer: builder.query<any, string>({
      query: (id) => ({
        url: `/careerportal/job/${id}/`,
        method: "GET",
      }),
    }),
    fetchJobsEmployer: builder.query<any, void>({
      query: () => ({
        url: `/careerportal/job/`,
        method: "GET",
      }),
    }),
    fetchJobsEmployerTotalApplicants: builder.query<any, string>({
      query: (id) => ({
        url: `/careerportal/jobapplication/${id}`,
        method: "GET",
      }),
    }),
    EmployerGetAllApplicants: builder.query<any, string>({
      query: (id) => ({
        url: `/careerportal/jobapplication/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateJobMutation, useFetchJobEmployerQuery, useFetchJobsEmployerQuery, useFetchJobsEmployerTotalApplicantsQuery } = apiSlice;
