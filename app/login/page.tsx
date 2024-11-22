"use client";
// import HomeNavbar from "@/app/ui/navbar";
// import Footer from "@/app/ui/footer";
// import { FaFacebook } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { ImLinkedin } from "react-icons/im";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { loginFormSchema } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Cookies from "js-cookie";
import { cultureLancerAxios, LoginUser } from "../ui-services/axios";
import { toast } from "react-toastify";
import AppButton from "../ui/AppButton";
import Image from "next/image";

export type ILoginData = z.infer<typeof loginFormSchema>;

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: zodResolver(loginFormSchema),
  });
  const togglePassword = () => setShowPassword(!showPassword);

  const onLogin: SubmitHandler<ILoginData> = async (data) => {
    setIsLoading(true);
    setStatus(""); // Clear previous status

    try {
      const responseData = await LoginUser(data);

      const { role, is_active, token, user_id } = responseData.data;
      cultureLancerAxios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
      localStorage.setItem("token", token);
      Cookies.set("item", token);
      localStorage.setItem("user_id_item", user_id);
      Cookies.set("user_id_item", user_id);
      if (is_active && role === "employer") {
        router.push(`/employer/dashboard/`);
      } else if (is_active && role === "applicant") {
        router.push(`/applicant/dashboard/home/`);
      } else {
        setStatus("Account not active. Please contact support.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
      // setStatus(error.response || "Invalid login credentials");
      // setStatus("Server error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

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
          <Link href="/home" className="text-[#525252]">
            Home
          </Link>
          <Link href="/" className="text-[#525252]">
            FAQ
          </Link>
          <Link href="/signup">
            <AppButton>Signup</AppButton>
          </Link>
        </div>
      </nav>
      <div
        className={`w-full grid grid-cols-2 h-[calc(100vh-70px)] overflow-hidden`}
      >
        <section className="p-20 w-full text-center relative">
          <div className="md:flex flex-col items-center text-center place-content-center md:gap-2 max-w-[30rem] mx-auto">
            {/* login */}
            <div className="bg-white rounded p-7 drop-shadow-lg  cursor-pointer border mb-4 w-full">
              <div>
                <h1 className="text-2xl font-bold md:text-2xl block mt-3">
                  Login
                </h1>
              </div>

              <div className="text-left">
                <form onSubmit={handleSubmit(onLogin)}>
                  <div className="p-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter your Email "
                    />
                    <p className="text-sm text-red-500">
                      {errors.email?.message}
                    </p>
                  </div>

                  <div className="p-2 relative">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      id="password"
                      placeholder="Enter your password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
                  </div>

                  <div className="mb-4">
                    <Link
                      href="/forgot-password"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <AppButton type="submit" isLoading={isLoading}>
                    Login
                  </AppButton>

                  <p className="text-sm text-red-300">{status}</p>
                </form>
              </div>
            </div>

            <hr className="bg-red-500 w-full my-6" />
            <p className="text-center -mt-[45px] mb-4 px-3 bg-white w-fit mx-auto text-[#434343]">
              Or Continue With
            </p>
            {/* login */}

            <div className="flex mt-6 gap-3">
              <button className="oveflow-hidden w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center border-[1px] border-[#000000]">
                <Image
                  src="/assets/google.svg"
                  alt="google"
                  width={20}
                  height={20}
                  className="w-9"
                />
              </button>
              <button className="oveflow-hidden w-10 h-10 rounded-full bg-[#000000] flex items-center justify-center border-[1px] border-[#000000]">
                <Image
                  src="/assets/apple.svg"
                  alt="google"
                  width={20}
                  height={20}
                  className="w-3"
                />
              </button>
              <button className="oveflow-hidden w-10 h-10 rounded-full bg-[#0066FF] flex items-center justify-center border-[1px] border-[#0066FF]">
                <Image
                  src="/assets/facebook.svg"
                  alt="google"
                  width={20}
                  height={20}
                  className="w-3"
                />
              </button>
            </div>
          </div>
          <Link href="/signup/options">
            <h1 className="mt-3 cursor-pointer">
              Don`t have an account?{" "}
              <span className="text-[#C71F2A]"> Sign Up</span>
            </h1>
          </Link>

          <div className="absolute bottom-4 left-0 w-full flex justify-center text-[14px] gap-4">
            <Link href="">
              <h3>Privacy Policy</h3>
            </Link>
            <Link href="">
              <h3>Terms of service</h3>
            </Link>
            <Link href="">
              <h3>Help center</h3>
            </Link>
          </div>
        </section>
        <section className="flex items-center justify-center bg-gradient-to-b from-[#C71F2A] via-[#b86767] to-[#C71F2A] h-screen">
          <Image
            src="/assets/box.png"
            alt="login"
            className="w-[400px]"
            width={100}
            height={100}
          />
        </section>
      </div>
    </div>
  );
}
