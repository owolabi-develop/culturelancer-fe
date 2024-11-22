"use client";
import HomeNavbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createAccount } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Image from "next/image";
import AppButton from "@/app/ui/AppButton";

type Inputs = z.infer<typeof createAccount>;

export default function ApplicantSignUp() {
  // loading as error state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(createAccount) });
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  //  submit from to server
  const processForm: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      setIsLoading(true);
      const response = await fetch("/api/register/applicant", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response.json());
        router.push("/account-created-successfull");
      }
      if (response.status === 406) {
        console.log(await response.json());
      }
      if (!response.ok) {
        setError("Account already exists with this email");
      }
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.error("account creation fail", error);
      setIsLoading(false);
    }
  };
  //  submit from to server

  return (
    <div>
      <nav className="flex justify-between items-center h-[70px] px-8 shadow-md shadow-[#b9b9b975]">
        <Image
          src="/assets/full-logo.svg"
          width={40}
          height={40}
          alt="logo"
          className="w-[150px]"
        />

        <div className="flex items-center space-x-6">
          <Link href="/signup/employer" className="text-primary">
            Join as an employer ?
          </Link>
        </div>
      </nav>
      <div
        className={`w-full grid grid-cols-2 h-[calc(100vh-70px)] overflow-hidden`}
      >
        <section className="flex items-center justify-center bg-[#F3EDE1] h-screen relative">
          <Image
            src="/assets/mill.png"
            alt="login"
            className="w-[80%] -right-3"
            width={100}
            height={100}
          />
        </section>
        <section className="p-20 w-full text-center">
          <h1 className="text-3xl font-bold md:text-3xl block mb-8">
            Sign up to find work you love
          </h1>

          <div className="space-y-2 md:flex flex-col items-center text-center place-content-center w-full md:gap-2 md:space-y-0">
            <AppButton className="flex itce justify-center">
              <FaApple className="text-xl text-[#ffffff]" />
              <span className="ml-2">Continue with Apple</span>
            </AppButton>
            <button className="bg-white rounded py-2 px-7 drop-shadow-lg text-center cursor-pointer border flex place-content-center items-center space-x-2 h-10 w-full">
              <span>Continue with Owolabi Akintan</span>
            </button>

            {/* divider */}
            <div className="py-2 px-7 md:w-[35rem]  text-center  flex place-content-center items-center space-x-2 h-10 w-full">
              <hr className="flex-grow h-0.5 border-t-0border-t-0 bg-neutral-100 dark:bg-white/10  w-full" />
              <div className="rounded-full w-11 h-11 p-2">
                <h1 className="text-center">or</h1>
              </div>
              <hr className="flex-grow h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10  w-full" />
            </div>
            {/* divider */}

            {/* login */}

            <div className="bg-white rounded py-2 w-full cursor-pointer">
              <div className="text-left">
                <form onSubmit={handleSubmit(processForm)}>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      First name
                    </label>
                    <input
                      type="text"
                      {...register("first_name")}
                      id="firstName"
                      className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="First Name"
                    />
                    <p className="text-sm text-red-500">
                      {errors.first_name?.message}
                    </p>
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Last name
                    </label>
                    <input
                      type="text"
                      {...register("last_name")}
                      id="lastName"
                      placeholder="Enter your Last Name"
                      className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    />
                    <p className="text-sm text-red-500">
                      {errors.last_name?.message}
                    </p>
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      id="email"
                      className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter your Email "
                    />
                    <p className="text-sm text-red-500">
                      {errors.email?.message}
                    </p>
                  </div>

                  <div className="mb-4 relative">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      id="password"
                      placeholder="Enter your password"
                      className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    />
                    <span
                      className="absolute bottom-5 right-9"
                      onClick={togglePassword}
                    >
                      {showPassword ? (
                        <FaRegEye className="text-2xl" />
                      ) : (
                        <FaRegEyeSlash className="text-2xl" />
                      )}
                    </span>
                    <p className="text-sm text-red-500">
                      {errors.password?.message}
                    </p>
                    <input
                      type="text"
                      hidden={true}
                      {...register("role")}
                      value={"applicant"}
                    />
                  </div>

                  <div className="mb-4">
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <AppButton type="submit" isLoading={isLoading}>
                    Create Account
                  </AppButton>
                </form>
              </div>
            </div>
            <p className="my-3 text-red-400 text-base">{error}</p>

            {/* signup */}
          </div>
          <h1 className="mt-3 cursor-pointer">
            Already have an account? <Link href="/login">Log in</Link>
          </h1>
        </section>
      </div>
    </div>
  );
}
