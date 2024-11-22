"use client";
import { RiDeleteBin6Line } from "react-icons/ri";
import * as z from "zod";
import dayjs from "dayjs";
import { AwardCertificationSchema } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { fetchawardCertificate } from "@/app/libs/utils";
import ProgressBar from "@ramonak/react-progress-bar";
import { useParams } from "next/navigation";
import { useApplicantProfileDetails } from "@/app/hooks/useApplicantProfileDetails";
import { useAwards } from "@/app/hooks/useAwards";
import { cultureLancerAxios } from "@/app/ui-services/axios";
import Image from "next/image";
import { ProfilePercent } from "../../progressBar";

type Inputs = z.infer<typeof AwardCertificationSchema>;

type certificate = {
  id: string;
  title: string;
  issuing_organization: string;
  date_recieved: string;
};

export default function AwardCertification() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(AwardCertificationSchema) });
  const {
    data: certificateDetails,
    refetch: refetchCertificates,
    isLoading: certificateLoading,
  } = useAwards();

  console.log("certificateDetails", certificateDetails);

  // const [certificateDetails, setCertificateDetails] = useState<certificate[]>(
  //   []
  // );

  // delete certificate

  const notifydelete = () => {
    toast.success("Certification Deleted");
  };

  const deleteCertificate = async (id: string) => {
    try {
      const response = await cultureLancerAxios.delete(
        `/applicant-award-certifications/${id}`
      );

      refetchCertificates();
      notifydelete();
    } catch (error) {
      console.error("Error deleting certificate:", error);
    }
  };

  // handle toast bar
  const notify = () => {
    toast.success("Certification Added!");
  };
  // handle form submition
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      setIsLoading(true);
      const response = await cultureLancerAxios.post(
        `/applicant-award-certifications/`,
        data
      );
      refetchCertificates();
      reset();
      setIsLoading(false);
      notify();
    } catch (error) {
      console.log("server Error: ", error);
    }
  };
  return (
    <section className="w-full ">
      <div className="md:grid grid-cols-1 py-5 px-5">
        <ProfilePercent />

        <h1 className="my-6 font-bold text-2xl"> Award & Certifications</h1>

        {/* form container */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">
            <p className="text-xl font-[500] my-2">
              Add New Award/Certification
            </p>

            {/* forms input */}

            {/*  */}
            <div className="mb-6">
              <div className="mb-4">
                <label
                  htmlFor="Title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  {...register("title")}
                  id="title"
                  className="bg-white border border-[#D4D4D4] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                />
                <p className="text-sm text-red-500">{errors.title?.message}</p>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="IssuingOrganization"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Issuing Organization
                </label>
                <input
                  type="text"
                  {...register("issuing_organization")}
                  id="Issuing Organization"
                  className="bg-white border border-[#D4D4D4] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                />
                <p className="text-sm text-red-500">
                  {errors.issuing_organization?.message}
                </p>
              </div>

              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date Recieved
                </label>
                <input
                  type="date"
                  {...register("date_recieved")}
                  id="title"
                  className="bg-white border border-[#D4D4D4] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                />
              </div>

              <div className="my-5">
                <button
                  type="submit"
                  className="w-full bg-[#C71F2A] rounded py-3 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-5 h-5 me-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                    </>
                  ) : (
                    "Add award"
                  )}
                </button>
              </div>
            </div>

            {/* form input */}
          </div>
        </form>
        {/* forn container */}

        {/* Your Awards & Certifications   */}
        <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 [&>*]:my-4">
          <p className="text-xl font-[500] my-2">
            Your Awards & Certifications
          </p>

          {/* awards */}

          {!certificateLoading &&
            certificateDetails.map((certi: any) => (
              <div
                key={certi.id}
                className="bg-[#e5e7eb65] w-full rounded py-3 px-3"
              >
                <div className="">
                  <h1 className="font-medium text-[18px]">{certi.title}</h1>

                  <div className="flex">
                    <div className="w-[320px] text-[#525252]">
                      <p className="text-sm capitalize">
                        {certi.issuing_organization}
                      </p>
                      <p className="text-sm text-[#737373]">
                        Received:{" "}
                        {dayjs(certi.date_recieved).format("MMMM D, YYYY")}
                      </p>
                    </div>

                    <div className="w-full flex flex-col items-end">
                      <Image
                        src="/assets/trash.svg"
                        alt="trash icon"
                        className="w-6 cursor-pointer"
                        onClick={async () => deleteCertificate(certi.id)}
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {/* awards */}
        </div>

        {/* Your Awards & Certifications */}
      </div>
    </section>
  );
}
