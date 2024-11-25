"use client";
import { FaRegCalendarMinus } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import Link from "next/link";
import useSWR, { useSWRConfig } from "swr";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { cultureLancerAxios } from "@/app/ui-services/axios";
import dayjs from "dayjs";
import Image from "next/image";

export interface IJob {
  posted_date: string;
  id: string;
  job_title: string;
  location_type: string[];
  payments_terms: string;
  minimum_budget: string;
  maximum_budget: string;
  job_type: string[];
  job_category: string;
  years_of_experience: number;
  description: string;
  applications: [];
  job_ready: boolean;
  skills: string[];
  experience_levels: string[];
  status: string;
}

export function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const closedJobnotify = () => {
    toast.info("Job closed");
  };

  const apiUrl = searchTerm ? `job/?search=${searchTerm}/` : "/job/";

  const closejob = async (id: string) => {
    try {
      const data = { status: "closed" };
      const response = await cultureLancerAxios.patch(`/job/${id}/`, data);
      closedJobnotify();
      // mutate(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/${apiUrl}`);
      // mutate(
      //   `${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/get-employer-job-status/`
      // );
    } catch (error) {
      console.error("Error closed job:", error);
    }
  };

  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await cultureLancerAxios.get(apiUrl);
        setData(response.data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetcher();
  }, [searchTerm]);

  return (
    <section className="md:grid grid-cols-1 p-20 w-full justify-around">
      <div className="">
        <h1 className="text-3xl font-semibold w-full">
          Manage Posted Projects
        </h1>
        <p className="mb-6 text-[#525252] text-sm mt-2">Dashboard {">"} Posted Project</p>

        {/* search input */}
        <div className="mb-4">
          <form>
            <div>
              <div className="flex">
                <input
                  type="search"
                  id="CurrentMayor"
                  name="Quote"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-[90%] focus:border-gray-50"
                  required
                  placeholder="Search jobs by title, Location, Experience, Skills"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div>
                  <select
                    name="filter"
                    id="sorted"
                    className="bg-gray-50  border-gray-300 text-gray-900 text-sm rounded-lg py-3 mx-2"
                  >
                    <option value="Latest">Filter</option>
                    <option value="Latest">Latest</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* search input */}
      </div>

      {/* overall job performance  */}

      <div className="w-full bg-white drop-shadow p-4 rounded-lg">
        <h1 className="mb-4 text-[#171717]"> Overall Performance</h1>

        <div className="w-full md:grid md:grid-cols-4 gap-3 ">
          {/* total application */}
          <GetTotalApplication />
          {/* total application */}

          <GetJobStatus />

          <div className="bg-[#F9F9F9] rounded py-5 px-5 my-2">
            <h1 className="font-medium text-[#737373] text-sm">
              Avg Candidate Match
            </h1>
            <h1 className="font-bold text-xl">78%</h1>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="bg-slate-50 drop-shadow rounded-md animate-pulse py-1 px-4 my-5">
          <div className="w-full bg-slate-300 py-1 rounded-full my-3"></div>
          <div className="w-full bg-slate-300 py-1 rounded-full my-3"></div>
          <div className="w-full bg-slate-300 py-1 rounded-full my-3"></div>
          <div className="w-full bg-slate-300 py-1 rounded-full my-3"></div>
          <div className="w-full bg-slate-300 py-1 rounded-full my-3"></div>
        </div>
      ) : (
        <>
          {/* sample jobs */}
          {data && data.length > 0 ? (
            <>
              {data?.map((jobs: IJob) => (
                <div
                  key={jobs.id}
                  className="w-full  bg-white drop-shadow rounded-lg my-3"
                >
                  {/* top header */}
                  <div className="md:grid grid-cols-2  w-full p-4 pt-3 bg-white">
                    <div className="w-[88%]">
                      <h1 className="font-medium text-[#525252] capitalize text-[20px]">
                        {jobs?.job_title}
                      </h1>
                      {/* dates posted and location */}
                      <div className="flex text-[14px] text-[#525252] my-2 items-center">
                        <Image
                          src="/assets/calendar.svg"
                          width={20}
                          height={20}
                          alt="calendar"
                          className="mr-2 w-[16px]"
                        />
                        <p className="">
                          {dayjs(jobs?.posted_date).format("DD MMM, YYYY")}
                        </p>
                        <div className="flex items-center ml-4">
                          <Image
                            src="/assets/pin.svg"
                            width={20}
                            height={20}
                            alt="calendar"
                            className="mr-2 w-[16px]"
                          />
                          <p>
                            {jobs?.location_type.map((loca) => (
                              <>{loca} </>
                            ))}
                          </p>
                        </div>
                      </div>
                      {/* dates posted and location */}

                      {/* control btn */}

                      <div className="flex items-center space-x-2 text-sm mt-4">
                        <button className="border py-1 px-3 rounded">
                          <Link
                            href={`/employer/dashboard/job-details/${jobs.id}`}
                          >
                            View Job
                          </Link>
                        </button>
                        <button className="border py-1 px-3 rounded hover:cursor-pointer">
                          <Link
                            href={`/employer/dashboard/job-details/${jobs.id}`}
                          >
                            View Applications
                          </Link>
                        </button>
                        {jobs.status === "active" && (
                          <>
                            <button
                              className="bg-[#F5F5F5] rounded py-1 px-3 hover:bg-slate-200"
                              onClick={async () => closejob(jobs.id)}
                            >
                              Close Job
                            </button>
                          </>
                        )}
                      </div>
                      {/* control btn */}
                    </div>

                    {/* left control */}
                    <div className="md:text-right my-2 md:my-0">
                      <>
                        <span
                          className={`font-medium bg-[#F5F5F5] rounded-full py-1 px-2 text-[#262626] text-xs`}
                        >
                          {jobs.status}
                        </span>
                      </>

                      <div className="flex items-center md:justify-end my-4 text-sm text-[#737373]">
                        <Image
                          src="/assets/info.svg"
                          width={20}
                          height={20}
                          alt="calendar"
                          className="mr-1 w-[16px]"
                        />
                        <p>
                          {jobs?.applications?.length} candidate
                          {jobs?.applications?.length > 1 && "s"} applied
                        </p>
                      </div>
                    </div>

                    {/* left control */}
                  </div>
                  <div className="w-full bg-[#F9F9F9] p-4">
                    <p className="text-sm text-[#737373] mb-6">
                      Top Candidate Matches
                    </p>

                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <Image
                          src="/assets/avatar-1.svg"
                          width={50}
                          height={50}
                          alt="user avatar"
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="ml-2">
                          <p className="text-medium text-[#171717] text-sm">
                            Alice Johnson
                          </p>
                          <p className="text-sm text-[#737373]">
                            5 years experience | New York, NY
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-end items-center text-sm space-x-2">
                        <div>95% Match</div>
                        <button className="rounded-sm px-2 py-1 border border-[#D4D4D4] text-[#404040] bg-white">
                          View Profile
                        </button>
                        <button className="rounded-sm px-2 py-1 border border-[#F5F5F5] text-[#404040] bg-[#F5F5F5]">
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="w-full my-5">
                <div>
                  <h1>
                    {" "}
                    Showing {data.length} of {data.length} entries
                  </h1>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full text-center py-5">
              <p className="text-gray-500 font-semibold">No jobs found</p>
            </div>
          )}

          {/* sample jobs */}
        </>
      )}
    </section>
  );
}

// close and active jobs

function GetJobStatus() {
  const [jobStatus, setJobStatus] = useState<Record<string, any> | null>(null);
  const error = false;
  const isLoading = false;

  useEffect(() => {
    const fetcher = async () => {
      const response = await cultureLancerAxios.get(
        `/get-employer-job-status/`
      );
      setJobStatus(response.data);
    };
    fetcher();
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="bg-slate-50 drop-shadow rounded-md animate-pulse py-1 px-4 my-5">
          <div className="w-full bg-slate-300 py-1 rounded-full my-2"></div>
          <div className="w-full bg-slate-300 py-1 rounded-full my-2"></div>
          <div className="w-full bg-slate-300 py-1 rounded-full my-2"></div>
          <div className="w-full bg-slate-300 py-1 rounded-full my-2"></div>
        </div>

        <div className="bg-slate-50 drop-shadow rounded-md animate-pulse py-1 px-4 my-5">
          <div className="w-full bg-slate-300 py-1 rounded-full my-2"></div>
          <div className="w-full bg-slate-300 py-1 rounded-full my-2"></div>
          <div className="w-full bg-slate-300 py-1 rounded-full my-2"></div>
          <div className="w-full bg-slate-300 py-1 rounded-full my-2"></div>
        </div>
      </>
    );
  }
  if (error) {
    return <div>fail to fetch data</div>;
  }

  return (
    <>
      <div className="bg-[#F9F9F9] rounded py-5 px-5 my-2">
        <h1 className="font-medium text-[#737373] text-sm">Active Jobs</h1>
        <h1 className="font-bold text-xl">{jobStatus?.active || 0}</h1>
      </div>

      <div className="bg-[#F9F9F9] rounded py-5 px-5 my-2">
        <h1 className="font-medium text-[#737373] text-sm">Closed Jobs</h1>
        <h1 className="font-bold text-xl">{jobStatus?.closed || 0}</h1>
      </div>
    </>
  );
}

function GetTotalApplication() {
  const [data, setGetTotalApplication] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await cultureLancerAxios.get(`/job/`);
        setGetTotalApplication(response.data);
      } catch (error: any) {
        setError(error.response.data.detail || "Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };
    fetcher();
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="bg-slate-50 drop-shadow rounded-md animate-pulse py-1 px-4 my-5">
          <div className="w-full bg-slate-300 py-1 rounded-full my-2"></div>
          <div className="w-full bg-slate-300 py-1 rounded-full my-2"></div>
          <div className="w-full bg-slate-300 py-1 rounded-full my-2"></div>
          <div className="w-full bg-slate-300 py-1 rounded-full my-2"></div>
        </div>
      </>
    );
  }

  if (error) {
    return <div>fail to fetch data</div>;
  }

  return (
    <>
      <div className="bg-[#F9F9F9] rounded py-5 px-5 my-2">
        <h1 className="font-medium text-[#737373] text-sm">
          Total Applications
        </h1>
        <h1 className="font-bold text-xl">
          {data &&
            data?.reduce(
              (sum: number, job: { applications?: string[] }) =>
                sum + (job.applications?.length || 0),
              0
            )}
        </h1>
      </div>
    </>
  );
}
