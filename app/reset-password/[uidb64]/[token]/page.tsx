"use client";
import HomeNavbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import * as z from "zod";
import { passwordReset } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";

type Inputs = z.infer<typeof passwordReset>;

export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { uidb64, token } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(passwordReset),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // Send request to the API route
      setIsLoading(true);
      const response = await fetch(`/api/reset-password/${uidb64}/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ new_password: data.password1 }),
      });

      if (response.ok) {
        // Password reset was successful
        router.push("/login");
      } else {
        // Handle error response
        const errorData = await response.json();
        alert(errorData.error || "Password reset failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="w-full mx-auto">
      <HomeNavbar />
      <section className="p-20 w-full text-center">
        <div className="space-y-2 md:flex flex-col items-center text-center place-content-center w-full md:gap-2 md:space-y-0  mb-24">
          <div className="bg-white rounded py-2 px-7 md:w-[35rem] drop-shadow-lg cursor-pointer border">
            <div>
              <h1 className="text-2xl font-bold md:text-2xl block mt-3">
                Reset Password
              </h1>
            </div>
            <div className="text-left">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    id="password"
                    placeholder="Enter your password"
                    className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />
                  <p className="text-sm text-red-500">
                    {errors.password?.message}
                  </p>
                </div>

                <div className="p-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    {...register("password1")}
                    id="password1"
                    placeholder="Confirm Password"
                    className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />
                  <p className="text-sm text-red-500">
                    {errors.password1?.message}
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full text-white  rounded-lg text-sm px-5 py-2.5 text-center bg-gray-600 mb-4"
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
                      </svg>{" "}
                    </>
                  ) : (
                    "Reset Password"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
