import HomeNavbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import Link from "next/link";
import { MdMarkEmailRead } from "react-icons/md";

export default function OtpVerification() {
  return (
    <div className={`w-full mx-auto`}>
      <HomeNavbar />

      <section className="p-20 w-full text-center">
        <div className="space-y-2 md:flex flex-col items-center text-center place-content-center w-full md:gap-2 md:space-y-0  mb-24">
          {/* otp */}

          <div className="bg-white rounded py-2 px-7 md:w-[35rem] drop-shadow-lg  cursor-pointer border">
            <div className="">
              <div className="text-center flex justify-center my-5">
                <MdMarkEmailRead className="text-[100px]" />
              </div>
              <div className="my-5 text-center">
                <h1 className="text-xl font-semibold">Check Your Email</h1>
                <p>We have sent a code to me @gmail.com</p>
              </div>
              <form action={`#`}>
                <div className="flex gap-4 max-w-lg mx-auto justify-center font-[sans-serif]">
                  <input
                    type="text"
                    name="code1"
                    className="w-16 h-16 flex items-center text-center font-extrabold   text-black text-xl border-2 border-gray-300 focus:border-[#007bff] outline-none rounded"
                    maxLength={1}
                  />
                  <input
                    type="text"
                    name="code2"
                    className="w-16 h-16 flex items-center text-center  font-extrabold  text-black text-xl border-2 border-gray-300 focus:border-[#007bff] outline-none rounded"
                    maxLength={1}
                  />
                  <input
                    type="text"
                    name="code3"
                    className="w-16 h-16 flex items-center text-center  font-extrabold  text-black text-xl border-2 border-gray-300 focus:border-[#007bff] outline-none rounded"
                    maxLength={1}
                  />
                  <input
                    type="text"
                    name="code4"
                    className="w-16 h-16 flex items-center text-center   font-extrabold text-black text-xl border-2 border-gray-300 focus:border-[#007bff] outline-none rounded"
                    maxLength={1}
                  />
                </div>
                <div className="text-center my-2">
                  <h1>
                    Didnt get the code?{" "}
                    <Link href="" className=" underline ">
                      Click here
                    </Link>{" "}
                  </h1>
                </div>

                <div className="mb-4"></div>
                <button
                  type="submit"
                  className=" text-white  rounded-lg text-sm px-5 py-2.5 text-center bg-gray-600 mb-4"
                >
                  Verify
                </button>
              </form>
            </div>
          </div>

          {/* otp */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
