"use client";

import { CiLocationOn } from "react-icons/ci";
import { BsSuitcaseLg } from "react-icons/bs";
import { FaRegCalendarMinus } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { useFetchJobEmployerQuery, useFetchJobsEmployerTotalApplicantsQuery } from "@/app/_redux/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function JobDetails() {
  const params = useParams();

  const [isUpdatingJobStatus, setisUpdatingJobStatus] = useState<boolean>(false);

  const notifyJobUpdateSuccess = () => {
    console.log("dvdsvdvdvsdvdsdvd");

    toast("Job status updated successfully");
    setisUpdatingJobStatus(false);
  };

  const notifyJobUpdateError = () => {
    toast("Error updating job status");
    setisUpdatingJobStatus(false);
  };

  const { id } = params;
  const { data, isFetching, isError } = useFetchJobEmployerQuery(id as string);
  // const { data: applicants, isFetching: isFetchingApplicants, isError: isErrorApplicants } = useFetchJobsEmployerTotalApplicantsQuery(id as string);

  const HandleJobStatusUpdate = async (id: string) => {
    setisUpdatingJobStatus(true);
    try {
      const response = await fetch(`/api/employer/update-job-status/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: "closed" }),
      });
      if (response.ok) {
        notifyJobUpdateSuccess();
      }
    } catch (error) {
      console.log("error", error);
      notifyJobUpdateError();
    }
  };

  return (
    <>
      <ToastContainer />
      {isError && (
        <div className="flex justify-center items-center w-full p-10  my-20">
          <h1 className="font-bold text-xl">An error occured</h1>
        </div>
      )}

      {isFetching && (
        <div className="flex w-full justify-center items-center min-h-[500px]">
          {" "}
          <div className="spinner"></div>
        </div>
      )}
      {/* header */}

      {data && (
        <>
          <div className="w-full border border-b-2">
            <section className="p-10 px-24 w-full md:grid grid-cols-2">
              <div>
                <h1 className="text-3xl font-extrabold">{data?.title}</h1>

                <div className="flex my-2 text-gray-300">
                  <CiLocationOn className="text-xl" />
                  <p className="mr-2">{data?.location_type[0]}</p>
                  <HiOutlineCurrencyDollar className="text-xl" />{" "}
                  <p className="ml-1 mr-2">
                    {data?.minimum_budget}- {data?.maximum_budget}{" "}
                  </p>
                  <BsSuitcaseLg className="text-2xl" />
                  <p className="ml-1 mr-2">{data?.job_type[0]}</p>
                  <IoIosCheckmarkCircleOutline className="text-xl" /> <p className="ml-1 mr-2">{data?.experience_levels[0]}</p>
                  <FaRegCalendarMinus className="text-xl" /> <p className="ml-1 mr-2">Posted on: {data?.posted_date}</p>
                </div>
              </div>

              <div className="text-right">
                <span className="bg-gray-100 rounded-full py-1 px-1 font-semibold text-sm">{data?.status}</span>
              </div>
            </section>
          </div>
          {/* header */}

          <section className="md:grid grid-cols-1 p-20 w-full justify-around">
            {/* job details */}

            <div className="w-full md:flex">
              <div className="w-full md:w-[60%] px-5">
                {/* job descriptions */}
                <div className="bg-white drop-shadow-lg rounded w-full [&>*]:my-2 mt-4 py-2 px-3">
                  <h1 className="font-bold">Job Descriptions</h1>
                  <p>{data?.description}</p>
                  {/* <p>Responsibilities:</p>
                  <p className="">
                    Design and implement scalable software solutions Collaborate with cross-functional teams to define and develop new features
                  </p> */}

                  {/* <button className="bg-gray-200 py-2 px-4 rounded">Improve with AI</button> */}
                </div>
                {/* job descriptions */}

                {/* top candidate  candidate */}

                {/* <div className="bg-white drop-shadow-lg rounded w-full [&>*]:my-2 mt-4 py-2 px-3"> */}
                {/* <h1 className="font-bold">Top Candidate Matches</h1> */}

                {/* candidate profile */}
                {/* <div className="w-full bg-slate-50 rounded md:flex py-2 px-4 [&>*]:mx-1">
                    <div className="rounded-full bg-gray-300 w-16 h-16 "></div>
                    <div className="">
                      <h1>John Doe</h1>
                      <p>95% Match 7 years exp. San Francisco, CA</p>
                      <div className="[&>*]:bg-gray-200 [&>*]:py-1 [&>*]:rounded-full [&>*]:mx-2 [&>*]:px-2 my-2 flex">
                        <span>Javascript</span>
                        <span>React</span>
                        <span>Node.js</span>
                      </div>
                    </div>

                    <div className="[&>*]:my-3 [&>*]:mx-1">
                      <button className="border py-1 px-2 rounded">View Profile</button>
                      <button className="border py-1 px-2 rounded">Message</button>
                      <button className="bg-gray-200 py-1 px-2 rounded">Shortlist</button>
                    </div>
                  </div> */}
                {/* candidate profile */}
                {/* </div> */}

                {/* top candidate  candidate */}
              </div>

              {/* job performace */}

              <div className="w-full md:w-[40%] px-5 md:grid grid-cols-1 ">
                {/* summary */}

                <div className="bg-white drop-shadow-lg rounded w-full py-4 px-4 [&>*]:my-3 mt-4">
                  <h1 className="text-xl font-bold">Job Performace</h1>

                  {/* <div className="w-full">
                    <p className="text-sm">Total Views</p>
                    <h1 className="text-xl font-bold">0</h1>
                  </div> */}

                  <div className="w-full">
                    <p className="text-sm">Total Applications</p>
                    <h1 className="text-xl font-bold">{data?.applications.length}</h1>
                  </div>

                  {/* <div className="w-full">
                    <p className="text-sm">Interview Request Sent</p>
                    <h1 className="text-xl font-bold">0</h1>
                  </div>

                  <div className="w-full">
                    <p className="text-sm">Hire Made</p>
                    <h1 className="text-xl font-bold">0</h1>
                  </div> */}
                </div>

                {/* job actions */}

                <div className="bg-white drop-shadow-lg rounded w-full py-4 px-3 [&>*]:my-2 mt-4">
                  <h1 className="text-xl font-bold">Job Actions</h1>

                  <div className="w-full [&>*]:w-full [&>*]:my-3 ">
                    <button className="bg-gray-200 py-2 px-4 rounded">Edit Job</button>
                    <button disabled={data.status === "closed"} className="border py-2 px-4 rounded" onClick={() => HandleJobStatusUpdate(data.id)}>
                      Close Job
                    </button>
                    <button className="border py-2 px-4 rounded" onClick={() => notifyJobUpdateSuccess()}>
                      Delete Job ddd
                    </button>
                  </div>
                </div>
                {/* job actions */}

                {/* summary */}
              </div>
              {/* job performace */}
            </div>

            {/* job details */}
          </section>
        </>
      )}
    </>
  );
}
