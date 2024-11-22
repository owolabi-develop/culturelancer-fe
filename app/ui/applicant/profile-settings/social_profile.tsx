"use client";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import * as z from "zod";
import { socialProfile } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import { useParams } from "next/navigation";

import ProgressBar from "@ramonak/react-progress-bar";
import { useApplicantProfileDetails } from "@/app/hooks/useApplicantProfileDetails";
import { ProfilePercent } from "../../progressBar";
import AppButton from "../../AppButton";

type Inputs = z.infer<typeof socialProfile>;

export default function SocialProfile() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(socialProfile) });

  // handle toast bar
  const notify = () => {
    toast.success("Social Profiles Added!");
  };
  // handle form submition
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      setIsLoading(true);
      const response = await fetch(`/api/applicant-settings/social-profile/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Social profiles added");
        reset();
        setIsLoading(false);
        notify();
      }
    } catch (error) {
      console.log("server Error: ", error);
    }
  };

  return (
    <section className="w-full ">
      <div className="md:grid grid-cols-1 py-5 px-5">
        {/* progress bar */}
        <ProfilePercent />

        <h1 className="my-3 font-extrabold text-2xl"> Social Profile</h1>

        {/* form container */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">
            <p className="text-sm font-semibold my-5">
              Connect your social profiles to showcase your online presence
            </p>

            {/* forms input */}

            {/*  */}
            <div className="mb-6">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch justify-between">
                <FaFacebook className="text-4xl" />
                <input
                  type="url"
                  id="facebook"
                  {...register("facebook")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[95%] p-2.5"
                />
              </div>
              <p className="text-sm text-red-500">{errors.facebook?.message}</p>

              <div className="relative mb-4 flex w-full flex-wrap items-stretch justify-between">
                <FaTwitter className="text-4xl" />
                <input
                  type="url"
                  id="tiitter"
                  {...register("twitter_x")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[95%] p-2.5"
                />
              </div>
              <p className="text-sm text-red-500">
                {errors.twitter_x?.message}
              </p>

              <div className="relative mb-4 flex w-full flex-wrap items-stretch justify-between">
                <FaLinkedin className="text-4xl" />
                <input
                  type="url"
                  id="linkedin"
                  {...register("linkedIn")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[95%] p-2.5"
                />
              </div>
              <p className="text-sm text-red-500">{errors.linkedIn?.message}</p>
            </div>

            {/* form input */}

            <div className="">
              <AppButton type="submit" isLoading={isLoading}>
                Save & Update
              </AppButton>
            </div>
          </div>
        </form>
        {/* forn container */}
      </div>
    </section>
  );
}
