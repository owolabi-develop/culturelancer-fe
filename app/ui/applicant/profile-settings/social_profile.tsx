"use client";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import * as z from "zod";
import { socialProfile } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import { useParams } from "next/navigation";

import ProgressBar from "@ramonak/react-progress-bar";
import { useApplicantProfileDetails } from "@/app/hooks/useApplicantProfileDetails";
import { ProfilePercent } from "../../progressBar";
import AppButton from "../../AppButton";
import { cultureLancerAxios } from "@/app/ui-services/axios";
import { useApplicantSocialLinks } from "@/app/hooks/useApplicantSocialLinks";
import Image from "next/image";

type Inputs = z.infer<typeof socialProfile>;

export default function SocialProfile() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(socialProfile) });
  const { data: myLinks, mutation, isLoading } = useApplicantSocialLinks();

  // handle toast bar
  const notify = () => {
    toast.success(`Social Profiles ${!myLinks.length ? "Added" : "Updated"}!`);
  };
  // handle form submition
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await mutation.mutate({
      data,
      profile_id: myLinks[0]?.id,
    });
  };

  useEffect(() => {
    setValue("facebook", myLinks?.[0]?.facebook);
    setValue("twitter_x", myLinks?.[0]?.twitter_x);
    setValue("linkedin", myLinks?.[0]?.linkedin);
  }, [myLinks]);

  useEffect(() => {
    if (mutation.isSuccess) {
      notify();
    }
  }, [mutation.status]);

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
                <Image
                  src="/assets/facebook-2.svg"
                  alt="twitter"
                  width={30}
                  height={30}
                />
                <input
                  type="url"
                  id="facebook"
                  defaultValue={myLinks?.[0]?.facebook}
                  {...register("facebook")}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg w-[95%] p-2.5"
                />
              </div>
              <p className="text-sm text-red-500">{errors.facebook?.message}</p>

              <div className="relative mb-4 flex w-full flex-wrap items-stretch justify-between">
                <Image
                  src="/assets/x.svg"
                  alt="twitter"
                  width={30}
                  height={30}
                />
                <input
                  type="url"
                  id="tiitter"
                  defaultValue={myLinks?.[0]?.twitter_x}
                  {...register("twitter_x")}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg w-[95%] p-2.5"
                />
              </div>
              <p className="text-sm text-red-500">
                {errors.twitter_x?.message}
              </p>

              <div className="relative mb-4 flex w-full flex-wrap items-stretch justify-between">
                <Image
                  src="/assets/linkedin.svg"
                  alt="twitter"
                  width={30}
                  height={30}
                />
                <input
                  type="url"
                  id="linkedin"
                  defaultValue={myLinks?.[0]?.linkedin}
                  {...register("linkedin")}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg w-[95%] p-2.5"
                />
              </div>
              <p className="text-sm text-red-500">{errors.linkedin?.message}</p>
            </div>

            {/* form input */}

            <div className="">
              <AppButton
              className="!w-[200px]"
                type="submit"
                isLoading={mutation.status === "pending"}
              >
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
