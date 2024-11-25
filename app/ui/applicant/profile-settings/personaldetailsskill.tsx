"use client";

import React, {
  useState,
  FormEvent,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useParams } from "next/navigation";
import ProgressBar from "@ramonak/react-progress-bar";
import { useApplicantProfileDetails } from "@/app/hooks/useApplicantProfileDetails";
import { ProfilePercent } from "../../progressBar";
import AppButton from "../../AppButton";
import { cultureLancerAxios } from "@/app/ui-services/axios";
import { MyContext } from "@/app/context";
import { useUserDetals } from "@/app/hooks/useUserDetails";
import useCountries, { IState } from "@/app/hooks/useCountries";

export default function PersonalDetailAndSkills() {
  return (
    <section className="w-full ">
      <div className="md:grid grid-cols-1 py-5 px-5">
        {/* progress bar */}
        <ProfilePercent />
        {/* progress bar */}

        <h1 className="my-3 font-extrabold text-2xl"> Personal Details</h1>

        {/* form */}

        <ProfildetailsContainer />
        {/* form */}
      </div>
    </section>
  );
}

function ProfildetailsContainer() {
  const { countries, getCountryStates } = useCountries();
  const [country, setCountry] = useState<string>("");

  const { data, error, isLoading, refetch } = useApplicantProfileDetails();
  const { data: userInfo } = useUserDetals();
  const [phone, setPhone] = useState("");
  const [isloading, setIsLoading] = useState<boolean>(false);

  const states = useMemo(() => {
    return getCountryStates(country || data?.country) || [];
  }, [country, data?.country]);

  useEffect(() => {
    if (userInfo) {
      setPhone(data?.phone_number || "");
    }
  }, [userInfo]);

  if (isLoading) {
    return (
      <div className="bg-slate-50 drop-shadow-lg rounded-md animate-pulse py-1 px-4">
        <div className="w-full bg-slate-300 py-1 rounded-full my-3"></div>
        <div className="w-full bg-slate-300 py-1 rounded-full my-3"></div>
        <div className="w-full bg-slate-300 py-1 rounded-full my-3"></div>
        <div className="w-full bg-slate-300 py-1 rounded-full my-3"></div>
        <div className="w-full bg-slate-300 py-1 rounded-full my-3"></div>
        <div className="w-full bg-slate-300 py-1 rounded-full my-3"></div>
        <div className="w-full bg-slate-300 py-1 rounded-full my-3"></div>
        <div className="w-full bg-slate-300 py-1 rounded-full my-3"></div>
      </div>
    );
  }
  if (error) {
    return <div>fail to fetch data</div>;
  }

  // handle toast bar
  const notify = () => {
    toast.success("Personal Details updated!");
  };

  // handle form submition
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formObject: Record<string, FormDataEntryValue> = {};
    const formData = new FormData(event.currentTarget);
    formData.append("phone_number", phone);
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    try {
      setIsLoading(true);

      const response = await cultureLancerAxios.patch(
        `/profile-applicant/${data?.id}/`,
        formObject
      );
      console.log("personal added");
      setIsLoading(false);
      notify();
      refetch();
    } catch (error) {
      console.log("server Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* form container */}
      {data && (
        <form onSubmit={handleFormSubmit}>
          <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">
            <p className="text-xl font-semibold my-2">Personal Information</p>

            {/* forms input */}

            <div>
              <label
                htmlFor="Title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                defaultValue={data?.title}
                id="Title"
                name="title"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg w-full "
              />
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-2 my-2">
              <div>
                <label
                  htmlFor="PhoneNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <PhoneInput
                  defaultCountry="us"
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputProps={{
                    required: true,
                    className:
                      "bg-white border border-gray-300 text-gray-900 text-sm rounded-r-lg  block w-full",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="Tagline"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tagline
                </label>
                <input
                  type="text"
                  id="Tagline"
                  defaultValue={data?.tagline}
                  name="tagline"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
                />
                {/* <p className='text-sm text-red-500'>{errors.tagline?.message}</p> */}
              </div>

              <div>
                <label
                  htmlFor="CurrentMajor"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Current Major
                </label>
                <input
                  type="text"
                  id="CurrentMayor"
                  defaultValue={data?.current_major}
                  name="current_major"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="DreamCareer"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Dream Career
                </label>
                <input
                  type="text"
                  id="DreamCareer"
                  defaultValue={data?.dream_career}
                  name="dream_career"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country
                </label>
                <select
                  onChange={(e) => setCountry(e.target.value)}
                  id="country"
                  defaultValue={data?.country}
                  name="country"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full  dark:text-white"
                >
                  <option disabled value="">
                    Select Country
                  </option>
                  {countries.map((country, index) => (
                    <option
                      key={index}
                      className="capitalize"
                      value={country.name}
                    >
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  State
                </label>
                <select
                  id="state"
                  defaultValue={data?.state}
                  name="state"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full  dark:text-white"
                >
                  <option disabled value="">
                    Select State
                  </option>
                  {states?.map((state: IState, index) => (
                    <option
                      key={index}
                      className="capitalize"
                      value={state.name}
                    >
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/*  */}
            <div className="my-6 w-full grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="Activities"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Activities
                </label>
                <input
                  type="text"
                  defaultValue={data?.activities}
                  name="activities"
                  id="Activities"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full "
                />
                {/* <p className='text-sm text-red-500'>{errors.activities?.message}</p> */}
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  defaultValue={data?.address}
                  id="Address"
                  name="address"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full"
                />
              </div>
            </div>

            {/* gender */}
            <div className="my-6">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Gender
              </h3>
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="horizontal-list-radio-license"
                      type="radio"
                      value="male"
                      name="gender"
                      defaultChecked={data?.gender === "male"}
                      className="w-4 h-4  bg-gray-100 border-gray-300 "
                    />
                    <label
                      htmlFor="horizontal-list-radio-license"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Male
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="horizontal-list-radio-id"
                      type="radio"
                      value="female"
                      name="gender"
                      defaultChecked={data?.gender === "female"}
                      className="w-4 h-4 bg-gray-100 border-gray-300 "
                    />
                    <label
                      htmlFor="horizontal-list-radio-id"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Female
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            {/* gender */}
          </div>

          {/*Additional Information  */}
          <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 [&>*]:my-4">
            <p className="text-xl font-semibold my-2">Additional Information</p>

            <div>
              <label
                htmlFor="Quote"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Word to Live ByQuote
              </label>
              <input
                type="text"
                id="quote"
                defaultValue={data?.quote}
                name="quote"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full"
              />
              {/* <p className='text-sm text-red-500'>{errors.quote?.message}</p> */}
            </div>

            <div>
              <label
                htmlFor="Highlights"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                A Fun Fact or Somethng That Highlights Your Personality
              </label>
              <input
                type="text"
                id="Highlights"
                defaultValue={data?.personality}
                name="personality"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
              />
              {/* <p className='text-sm text-red-500'>{errors.personality?.message}</p> */}
            </div>

            <div>
              <label
                htmlFor="HBCU"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                HBCU
              </label>
              <input
                type="text"
                id="HBCU"
                defaultValue={data?.hbcq}
                name="hbcq"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full "
              />
              {/* <p className='text-sm text-red-500'>{errors.hbcq?.message}</p> */}
            </div>

            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Add Description
              </label>
              <textarea
                id="description"
                defaultValue={data?.bio || data?.description}
                name="description"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300"
                placeholder="Tell us more about your self"
              ></textarea>
            </div>
          </div>

          {/*Additional Information  */}

          {/* language and skills */}

          <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 [&>*]:my-4">
            <p className="text-xl font-semibold my-2">language</p>

            <div>
              <label
                htmlFor="Language"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Language You Can Speak
              </label>
              <textarea
                id="language"
                defaultValue={data?.language}
                name="language"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 "
              ></textarea>
            </div>
          </div>

          {/* language and skills */}

          {/* save anf update button */}

          <div className="w-full md:w-[70%] rounded px-5  bg-white drop-shadow-lg mt-10 [&>*]:my-4 m-auto md:flex justify-between ">
            <div className="">
              <p className="text-sm leading-[3rem]">
                Save your changes by clicking the Save & Update button.
              </p>
            </div>

            <div className="">
              <AppButton type="submit" isLoading={isloading}>
                Save & Update
              </AppButton>
            </div>
          </div>

          <div className="md:w-[70%]  px-5 py-3 mt-1 m-auto text-right">
            <p className="text-sm">Dont forget to save your changes!</p>
          </div>

          {/* save and update button */}
        </form>
      )}
      {/* forn container */}
    </>
  );
}
