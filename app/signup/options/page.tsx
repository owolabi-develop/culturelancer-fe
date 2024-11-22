import HomeNavbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import Link from "next/link";
import Image from "next/image";
import AppButton from "@/app/ui/AppButton";

export default function SignUpOptions() {
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
            About
          </Link>
          <Link href="/" className="text-[#525252]">
            Contact
          </Link>
          <Link href="/login">
            <AppButton>Login</AppButton>
          </Link>
        </div>
      </nav>
      <div
        className={`w-full mx-auto bg-[length:500px_500px] bg-no-repeat bg-right-bottom h-[calc(100vh-140px)]`}
        style={{
          backgroundImage: "url('/assets/lion.png')",
        }}
      >
        <section className="p-20 w-full text-center">
          <div className="text-center w-full ">
            <h1 className="text-xl font-bold md:text-4xl block mb-4 w-[400px] mx-auto">
              Join as a <span className="text-primary"> Client</span> or{" "}
              <span className="text-primary">Job Seeker</span>
            </h1>

            <div className="sm:space-x-3 space-x-0 space-y-4 md:flex flex-wrap place-content-center mid:space-x-0 md:space-y-0">
              <div className="bg-[#FAFAFA] rounded py-7 px-7 md:w-72 drop-shadow-lg text-center cursor-pointer border">
                <Link href="/signup/employer">
                  <Image
                    alt="employer"
                    src="/assets/employer.svg"
                    width={100}
                    height={100}
                    className="w-10 mx-auto"
                  />
                  <div className="solutions-content text-black mt-6">
                    <h1 className="font-semibold">Employer</h1>
                    <p className="pl-3">Find top talent for your project</p>
                  </div>
                </Link>
              </div>

              <div className="bg-[#FAFAFA] rounded py-7 px-7 md:w-72 drop-shadow-lg text-center cursor-pointer border">
                <Link href="/assessment">
                  <Image
                    alt="employer"
                    src="/assets/briefcase.svg"
                    width={100}
                    height={100}
                    className="w-10 mx-auto"
                  />
                  <div className="solutions-content text-black mt-6">
                    <h1 className="font-semibold">Job Seeker</h1>
                    <p className="pl-3">Applied for the best jobs</p>
                  </div>
                </Link>
              </div>
            </div>

            <h1 className="mt-6 cursor-pointer">
              Already have an account? <Link href="/login">Log In</Link>{" "}
            </h1>
          </div>
        </section>
      </div>

      <footer className="bg-[#000000] flex justify-between items-center h-[70px] px-8 text-[14px]">
        <p className="text-primary">
          © 2025 CultureLancer. All rights reserved.
        </p>

        <div className="flex items-center text-white space-x-4">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Contact Support</p>
        </div>
      </footer>
    </div>
  );
}
