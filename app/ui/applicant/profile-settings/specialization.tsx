"use client";
import { RiDeleteBin6Line } from "react-icons/ri";

import * as z from "zod";
import { specializationSchema } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ProgressBar from "@ramonak/react-progress-bar";
import { fetchspecialization } from "@/app/libs/utils";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { useApplicantProfileDetails } from "@/app/hooks/useApplicantProfileDetails";
import { ProfilePercent } from "../../progressBar";
import { cultureLancerAxios } from "@/app/ui-services/axios";
import { useSpecializations } from "@/app/hooks/useSpecializations";
import AppButton from "../../AppButton";

type Inputs = z.infer<typeof specializationSchema>;

type specializationstype = {
  id: string;
  specialization: string;
  proficiency: number;
};
export default function Specializations() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(specializationSchema) });

  const {
    data: specializationDetails,
    refetch,
    isLoading: isLoadingSpecializations,
  } = useSpecializations();
  // const [specializationDetails, setspecializationDetails] = useState<
  //   specializationstype[]
  // >([]);

  // handle toast bar
  const notify = () => {
    toast.success("Specialization Added!");
  };

  const notifydelete = () => {
    toast.success("Specialization Deleted");
  };

  const deletespecializations = async (id: string) => {
    try {
      const response = await cultureLancerAxios.delete(
        `/applicant-specialization/${id}/`
      );
      notifydelete();
      refetch();
    } catch (error) {
      console.error("Error deleting certificate:", error);
    }
  };

  // handle form submition
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      setIsLoading(true);
      const response = await cultureLancerAxios.post(
        `/applicant-specialization/`,
        data
      );
      reset();
      setIsLoading(false);
      notify();
      refetch();
    } catch (error) {
      console.log("server Error: ", error);
    }
  };

  return (
    <section className="w-full ">
      <div className="md:grid grid-cols-1 py-5 px-5">
        {/* progress bar */}

        <ProfilePercent />

        <h1 className="my-3 font-extrabold text-2xl"> Specialization</h1>

        {/* form container */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">
            {/* forms input */}

            <div className="my-2">
              <label
                htmlFor="Specialization"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Specialization
              </label>
              <select
                id="Specialization"
                {...register("specialization")}
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              >
                <option value="Web Developement">Web Developement</option>
                <option value="Graphic Design">Graphic Design</option>
              </select>
              <p className="text-sm text-red-500">
                {errors.specialization?.message}
              </p>
            </div>

            {/*  */}
            <div className="mb-6">
              <label
                htmlFor="proficiency"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Proficiencys(%)
              </label>
              <input
                type="text"
                {...register("proficiency", { valueAsNumber: true })}
                id="proficiency"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter Proficiency level"
              />
              <p className="text-sm text-red-500">
                {errors.proficiency?.message}
              </p>
            </div>

            {/* form input */}

            <div className="md:flex items-center">
              <div className="md:w-[320px]">
                <AppButton isLoading={isLoading}>Add Specialization</AppButton>
              </div>

              <div className="text-right w-full text-[#737373]">
                <h1>
                  Select your area of experties and indicate your proficiency
                  level as a percentage
                </h1>
              </div>
            </div>
          </div>
        </form>
        {/* forn container */}

        {/* Added Specializations */}

        <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5">
          <p className="text-xl font-medium my-2">Added Specializations</p>

          {/* Specializations */}

          {!isLoadingSpecializations &&
            specializationDetails?.map((spec: any, i: number) => (
              <div
                key={spec.id}
                className={`md:flex py-3 ${
                  i < specializationDetails?.length - 1 && "border-b"
                } border-[#E5E5E5]`}
              >
                <div className="w-full">
                  <h1 className="font-medium text-[#171717]">
                    {spec.specialization}
                  </h1>
                  <p className="text-[#737373]">
                    Proficiency: {spec.proficiency}%
                  </p>
                </div>

                {/* control */}

                <div className="md:flex md:w-full md:my-4 md:justify-end">
                  <div className="border rounded mx-2">
                    <RiDeleteBin6Line
                      className="text-2xl cursor-pointer"
                      onClick={async () => deletespecializations(spec.id)}
                    />
                  </div>
                </div>

                {/* control */}
              </div>

              // <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            ))}
          {/* Specializations */}

          <div></div>
        </div>

        {/* Added Specializations*/}
      </div>
    </section>
  );
}
