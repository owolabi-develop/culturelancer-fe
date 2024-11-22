"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
// import { usePathname } from 'next/navigation'
import { VscBell } from "react-icons/vsc";
import { FaRegMessage } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { HiMiniPower } from "react-icons/hi2";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";
import { useApplicantDetals } from "@/app/hooks/useApplicantDetails";

function DashboardNavbar({
  applicantprofileName,
}: {
  applicantprofileName: string;
}) {
  const { data: applicantDetails } = useApplicantDetals();

  const [profilepicture, Setprofilepicture] = useState<string>("");

  // handle logout

  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        Cookies.remove("item");
        Cookies.remove("user_id");
        router.push("/login");
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleDisplay = () => {
    setIsOpen((prev) => !prev);
  };

  ///  load all profile details
  // useEffect(() => {
  //   const handleprofiledetails = async () => {
  //     try {
  //       const Profileresponse = await fetch(`/api/get-ap-profile-details`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       if (Profileresponse.ok) {
  //         const data = await Profileresponse.json();

  //         const { profile_image } = data[0];
  //         console.log("upimage", profile_image);
  //         Setprofilepicture(profile_image);
  //       }
  //     } catch (error) {
  //       console.log("errors:", error);
  //     }
  //   };
  //   handleprofiledetails();
  // });

  return (
    <div className="relative h-[70px]">
      <nav className="h-full px-20 items-center w-full flex justify-between">
        <div className="w-[300px] ">
          <Link href={`/`}>
            <Image
              src="/assets/full-logo.svg"
              width={40}
              height={40}
              alt="logo"
              className="w-[200px]"
            />
          </Link>
        </div>

        <div className="navtext order-1 p-2 md:flex h-full items-center">
          {/* nav text */}
          <ul className="list-none m-0 sm:flex hidden cursor-pointer">
            <li className="mr-5">
              <Link
                href={`/applicant/dashboard/home`}
                className="rounded-lg px-4 py-3 text-[#525252] hover:text-[#CB2224] font-medium "
              >
                Dashboard
              </Link>
            </li>

            <li className="mr-5">
              <Link
                href={`/applicant/dashboard/jobs`}
                className="rounded-lg px-4 py-3 text-[#525252] hover:text-[#CB2224] font-medium"
              >
                Jobs
              </Link>
            </li>

            <li className="mr-5">
              <Link
                href={`/applicant/dashboard/assessment-result`}
                className="rounded-lg px-4 py-3 text-[#525252] hover:text-[#CB2224] font-medium "
              >
                Assesement Results
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-[300px]  hidden sm:hidden navIcon order-2 basis-[30%] text-right md:flex items-center justify-end">
          <div className="m-b-icon-holder flex mr-4 cursor-pointer">
            <div className="msg relative mt-2">
              <div className="bellNoti absolute bg-[red] w-4 h-4 rounded-full text-center text-xs text-white -top-[10px] right-2">
                <p>2</p>
              </div>
              <Image
                src="/assets/message.svg"
                width={40}
                height={40}
                className="w-5 mr-5"
                alt="message"
              />
            </div>

            <div className="bell relative mt-2">
              <div className="bellNoti absolute bg-[red] w-4 h-4 rounded-full text-center text-xs text-white -top-[10px] right-3">
                1
              </div>
              <Image
                src="/assets/bell.svg"
                width={40}
                height={40}
                className="w-5 mr-5"
                alt="message"
              />
            </div>
          </div>

          <div className="profil-icon flex items-center cursor-pointer">
            <div className="border rounded-full mr-4 w-[32px] h-[32px] flex items-center justify-center">
              {profilepicture ? (
                <Image
                  src={profilepicture}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full w-[32px] h-[32px]"
                />
              ) : (
                <Image
                  src="/default_profile.jpeg"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full w-[32px] h-[32px]"
                />
              )}
            </div>
            <Link href={`/applicant/dashboard/profile`}>
              <div className="">
                <p className="text-xs">{applicantprofileName}</p>
              </div>
            </Link>
            <div className="logo-text p-2">
              <FaChevronDown
                className="text-[12px] text-[#525252]"
                onClick={handleDisplay}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* dropdown */}
      {isOpen && (
        <div
          className={`bg-white drop-shadow-lg px-4 w-[12rem] absolute right-[6rem] rounded-b-lg  md:block z-10`}
        >
          <ul className="list-none cursor-pointer mt-10 inline [&>*]:p-3">
            <li>
              <Link
                href={`/applicant/settings/profile-details`}
                className="text-slate-700 hover:bg-[black]"
              >
                <div className="flex text-center space-x-2">
                  <CiSettings className="text-3xl" />
                  <span>Setting</span>
                </div>
              </Link>
            </li>
            <li>
              {/* <Link href="/logout" className="text-slate-700"> */}
              <div
                className="flex text-center space-x-2"
                onClick={handleLogout}
              >
                <HiMiniPower className="text-3xl" />
                <span>Logout</span>
              </div>
              {/* </Link> */}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DashboardNavbar;
