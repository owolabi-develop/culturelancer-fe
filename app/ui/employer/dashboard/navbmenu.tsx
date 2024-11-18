"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
// import { usePathname } from 'next/navigation'
import { VscBell } from "react-icons/vsc";
import { FaRegMessage } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { HiMiniPower } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function DashboardNavbar({ profileName, user_id }: { profileName: string; user_id: string }) {
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
    console.log("open");
  };

  return (
    <div className="relative">
      <nav className="px-20 items-center w-full flex justify-between font-semibold">
        <div className="grid grid-cols-2 p-4 items-center justify-center gap-5">
          <div className="bg-[#cccbc8] rounded-full w-11 h-11"></div>
          <div className="logo-text w-11 h-11">
            <h1 className="leading-10 font-bold">CultureLancer</h1>
          </div>
        </div>

        <div className="md:flex basis-[85%]">
          <div className="navtext basis-[70%] order-1 p-2">
            {/* nav text */}
            <ul className="list-none m-0 sm:flex hidden cursor-pointer">
              <li className="mr-5">
                <Link href={`/employer/dashboard/${user_id}`} className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100">
                  Dashboard
                </Link>
              </li>

              <li className="mr-5">
                <Link
                  href={`/employer/dashboard/post-job/${user_id}`}
                  className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100"
                >
                  Post Job
                </Link>
              </li>

              <li className="mr-5">
                <Link
                  href={`/employer/dashboard/jobs/${user_id}`}
                  className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100"
                >
                  My Jobs
                </Link>
              </li>

              <li className="mr-5">
                <Link
                  href={`/employer/dashboard/candidates/${user_id}`}
                  className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100"
                >
                  Candidate
                </Link>
              </li>

              <li className="mr-5">
                <Link
                  href={`/employer/dashboard/membership/${user_id}`}
                  className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100"
                >
                  Membership
                </Link>
              </li>
            </ul>
          </div>
          {/* nav text */}

          {/* nav icon */}

          <div className=" hidden sm:hidden navIcon order-2 basis-[30%] text-right md:flex items-center justify-end">
            <div className="m-b-icon-holder flex mr-10 cursor-pointer">
              <div className="msg relative">
                <div className="bellNoti absolute bg-[red] w-5 h-5 rounded-full text-center text-sm text-white bottom-[1.2rem] right-2">
                  <p>1</p>
                </div>
                <FaRegMessage className="text-3xl mr-5" />
              </div>

              <div className="bell relative">
                <div className="bellNoti absolute bg-[red] w-5 h-5 rounded-full text-center text-sm text-white bottom-[1.2rem] right-2">1</div>
                <VscBell className="text-3xl" />
              </div>
            </div>

            <div className="profil-icon flex space-x-3 cursor-pointer">
              <div className="bg-[#cccbc8] rounded-full w-11 h-11"></div>
              <Link href={`/employer/dashboard/profile/${user_id}`}>
                <div className="logo-text">
                  <p className="leading-10 text-xs">{profileName}</p>
                </div>
              </Link>
              <div className="logo-text p-2">
                <FaChevronDown className="text-2xl" onClick={handleDisplay} />
              </div>
            </div>
          </div>
          {/* nav icon */}
        </div>
      </nav>

      {/* dropdown */}
      {isOpen && (
        <div className={`bg-white drop-shadow-lg px-4 w-[12rem] absolute right-[6rem] rounded-b-lg  md:block z-10`}>
          <ul className="list-none cursor-pointer mt-10 inline [&>*]:p-3">
            <li>
              <Link href="/employer/settings/profile-details-skills" className="text-slate-700 hover:bg-[black]">
                <div className="flex text-center space-x-2">
                  <CiSettings className="text-3xl" />
                  <span>Setting</span>
                </div>
              </Link>
            </li>
            <li>
              {/* <Link href="/logout" className="text-slate-700"> */}
              <div className="flex text-center space-x-2" onClick={handleLogout}>
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
