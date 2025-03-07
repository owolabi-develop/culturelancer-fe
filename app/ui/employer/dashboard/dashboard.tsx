import Link from "next/link";
import { useParams } from "next/navigation";
import useSWR from "swr";
import Cookies from "js-cookie";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "@/app/context";
import { cultureLancerAxios } from "@/app/ui-services/axios";
import dayjs from "dayjs";

interface ISkill {
  skill: string;
}
interface IRecomdation {
  id: string;
  bio: string;
  profile_image: string;
  first_name: string;
  last_name: string;
  gender: string;
  country: string;
  state: string;
  work_experience: string[];
  award_certifications: string[];
  tagline: string;
  title: string;
  educations: string[];
  skill: ISkill[];
  testimonies: string[];
  completion_percent: number;
}

export function WelcomeHeader() {
  const { id } = useParams<{ id: string }>();
  const { user } = useContext(MyContext);
  const [candidates, setCandidates] = useState([]);

  const users = [
    {
      name: "John Doe",
      jobTitle: "Software Engineer",
      status: "Shortlisted",
      avatar: "/assets/avatar-1.svg",
    },
    {
      name: "Jane Doe",
      jobTitle: "Designer",
      status: "Reviewed",
      avatar: "/assets/avatar-2.svg",
    },
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await cultureLancerAxios.get(
          `/top-employer-candidates/${user?.id}/`
        );
        console.log("job responses", response.data);

        setCandidates(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (user?.id) {
      getData();
    }
  }, [user?.id]);

  return (
    <section className="md:grid grid-cols-1 p-20 w-full justify-around bg-[#FAFAFA]">
      <div className="text-center m-auto [&>*]:my-4">
        {/* employer first and lastName */}

        <h1 className="text-4xl font-bold w-full">
          Welcome,{" "}
          {user &&
            `${user?.first_name?.toUpperCase()} ${user?.last_name?.toUpperCase()}`}
        </h1>
        <p className="text-[16px] text-[#525252]">
          Manage your job postings, review applications and connect with top
          Freelancers
        </p>

        {/* employer first and lastName */}

        {/* search input */}
        <div className="text-center">
          <div>
            <div className="flex justify-center">
              <button className="bg-[#727272]  rounded text-white mx-2 px-5 py-2 text-center flex items-center">
                <Link href={`/employer/dashboard/post-job/${id}`}>
                  Post a Job
                </Link>
              </button>

              <button className="bg-[#727272]  rounded text-white mx-2 px-5 py-2 text-center">
                Browser Talent
              </button>
            </div>
          </div>
        </div>
        {/* search input */}
      </div>

      {/* total jobs and applicant */}

      <div className="w-full md:grid md:grid-cols-3 gap-3">
        {/* total posted job */}

        <Totalpostedjobs />
        <div className="bg-white drop-shadow rounded py-5 px-5 my-8">
          <h1 className="font-medium text-[16px]">Best Recommended Talent</h1>
          <h1 className="font-bold text-2xl">{candidates?.length}</h1>
        </div>
      </div>

      {/* total jobs and applicant  */}

      {/* activities */}

      <div className="w-full md:flex space-x-4">
        {/* recent activatie */}
        <div className="w-full md:w-[70%]">
          <h1 className="text-2xl font-semibold">Recent Activity</h1>

          {/* activate table */}
          <div className="bg-white drop-shadow rounded w-full mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-left border-slate-100 [&>*]:py-3 [&>*]:px-5 rounded-full">
                  <th>Candidate</th>
                  <th>Job</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className="text-left [&>*]:border-t-2 border-slate-100 [&>*]:py-3 [&>*]:px-5 rounded-full cursor-pointer hover:bg-slate-200 "
                  >
                    <td className="flex w-full">
                      <Image
                        src={user.avatar}
                        width={50}
                        height={50}
                        alt="user avatar"
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="">
                        <p className="leading-10 ml-3">{user.name}</p>
                      </div>
                    </td>
                    <td>{user.jobTitle}</td>
                    <td>
                      <span className="py-1 px-3 bg-slate-100 rounded-[20px]">
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* activate table */}

          {/* best candidate recommendations */}
          <h1 className="text-2xl font-semibold my-8">
            Best Candidate Recommendations
          </h1>

          <div className="space-y-3 w-full my-4 md:grid grid-cols-2 gap-3 md:space-y-0">
            {candidates && candidates.length > 0 ? (
              candidates?.map((candidate: IRecomdation) => (
                <div
                  key={candidate?.id}
                  className=" bg-white drop-shadow py-3 px-4 [&>*]:my-3 rounded-md"
                >
                  <div className="flex">
                    <div className="bg-slate-200 mr-3 rounded-full w-16 h-16 ">
                      <Image
                        src={
                          candidate?.profile_image
                            ? `${process.env.NEXT_PUBLIC_API_PROFILE_URL}${candidate?.profile_image}`
                            : "/default_profile.jpeg"
                        }
                        alt={candidate?.first_name}
                        width={40}
                        height={40}
                        className="rounded-full w-16 h-16"
                      />
                    </div>

                    <div>
                      <h1 className="font-bold">
                        {candidate?.first_name} {candidate?.last_name}
                      </h1>
                      <p> Senior Developer</p>
                    </div>
                  </div>

                  <p className="">
                    Skills:{" "}
                    {candidate?.skill?.map((options: ISkill) => (
                      <>{options.skill} </>
                    ))}
                  </p>
                  {/* <p>Experience: 5 years</p> */}

                  <div className="w-full md:flex">
                    <div className="w-full md:w-[55%]">
                      <h1 className="text-2xl font-semibold">
                        {candidate?.completion_percent}% Match
                      </h1>
                    </div>

                    <div className="w-full flex justify-between">
                      <button className="bg-gray-200 py-2 px-4 rounded">
                        <Link
                          href={`/employer/dashboard/candidate-profile/${candidate?.id}`}
                        >
                          View Profile
                        </Link>
                      </button>
                      <button className="bg-black py-2 px-4 rounded text-white">
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full text-center py-5">
                <p className="text-gray-500 font-semibold">
                  No Best Candidate Recommendations yet{" "}
                </p>
              </div>
            )}
            {/* candidate */}
          </div>
        </div>
        <div className="w-full md:w-[30%]">
          <h1 className="text-2xl font-semibold">Recent Job post Summary</h1>
          <Jobpostsummary />
        </div>
      </div>

      {/* actitvites */}

      {/*  job performace chart */}

      <div className="w-full md:grid md:grid-cols-2 gap-3">
        <div className="bg-white drop-shadow rounded py-5 px-5 my-8">
          <h1 className="font-medium text-[16px] my-2">
            Jobs Performace Over Time
          </h1>
          <div className="bg-slate-50 w-full rounded py-36 text-center">
            <h1>Line chart Job Views, Applications</h1>
          </div>
        </div>

        <div className="bg-white drop-shadow rounded py-5 px-5 my-8">
          <h1 className="font-medium text-[16px] my-2">
            Candidate Applications
          </h1>
          <div className="bg-slate-50 w-full rounded py-36 text-center">
            <h1>Bar chart Applicant per Job</h1>
          </div>
        </div>
      </div>

      {/*  job performace chart */}
    </section>
  );
}

//  get total posted job
function Totalpostedjobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await cultureLancerAxios.get(`/job/`);
        setJobs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="bg-white drop-shadow rounded py-5 px-5 my-8">
        <h1 className="font-medium text-[16px]">Jobs Posted</h1>
        <h1 className="font-bold text-2xl">{jobs?.length}</h1>
      </div>

      <div className="bg-white drop-shadow rounded py-5 px-5 my-8">
        <h1 className="font-medium text-[16px]">Total Candidate Applied</h1>
        <h1 className="font-bold text-2xl">
          {jobs &&
            jobs?.reduce(
              (sum: number, job: { applications?: string[] }) =>
                sum + (job.applications?.length || 0),
              0
            )}
        </h1>
      </div>
    </>
  );
}

//  get recent job post summary
function Jobpostsummary() {
  interface IJob {
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
  const { user } = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const getEmployeeJob = async () => {
      try {
        const response = await cultureLancerAxios.get(
          `/employer-latest-post-job/${user?.id}/`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user?.id) {
      getEmployeeJob();
    }
  }, [user?.id]);

  if (isLoading) {
    return (
      <>
        <div className="bg-slate-50 drop-shadow rounded animate-pulse py-5 px-5 my-8">
          <div className="w-full bg-slate-300 py-1 rounded-full my-2"></div>
          <div className="w-full bg-slate-300 py-1 rounded-full my-2"></div>
          <div className="w-full bg-slate-300 py-1 rounded-full my-2"></div>
          <div className="w-full bg-slate-300 py-1 rounded-full my-2"></div>
        </div>
      </>
    );
  }

  return (
    <>
      {data && data?.length > 0 ? (
        data?.map((jobs: IJob) => (
          <div
            key={jobs?.id}
            className="bg-white drop-shadow rounded w-full py-4 px-3 [&>*]:my-2 mt-4 text-[14px]"
          >
            <h1 className="text-[18px] font-medium">{jobs.job_title}</h1>
            <p className="">
              Posted: {dayjs(jobs?.posted_date).format("DD MMM, YYYY")}
            </p>
            <p>Candidate Applied: {jobs?.applications?.length}</p>
            <p className="text-[#525252] font-medium"> Status: {jobs.status}</p>
            <div className="w-full flex text-[12px]">
              <button className="bg-[#E5E5E5] py-2 px-4 rounded hover:bg-gray-300">
                <Link href={`/employer/dashboard/edit-job/${jobs?.id}`}>
                  Edit
                </Link>
              </button>
              <button className="bg-[#E5E5E5] py-2 px-4 rounded ml-2 hover:bg-gray-300">
                View Applications
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full text-center py-5">
          <p className="text-gray-500 font-semibold">No Posted job</p>
        </div>
      )}
    </>
  );
}
