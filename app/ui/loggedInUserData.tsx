import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { MyContext } from "../context";
import { useContext } from "react";
import { useMemo, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { CiSettings } from "react-icons/ci";
import { HiMiniPower } from "react-icons/hi2";
import Cookies from "js-cookie";
import { useApplicantProfileDetails } from "../hooks/useApplicantProfileDetails";
import { cultureLancerAxios } from "../ui-services/axios";

function LoggedInUserData() {
  const { user } = useContext(MyContext);
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const { data } = useApplicantProfileDetails();

  const profileImageUrl = useMemo(() => {
    return data?.profile_image
      ? `${process.env.NEXT_PUBLIC_API_PROFILE_URL}${data?.profile_image}`
      : "/default_profile.jpeg";
  }, [data?.profile_image]);

  const fullname = useMemo(() => {
    return user?.first_name ? `${user?.first_name} ${user?.last_name}` : "";
  }, [user]);

  const handleLogout = async () => {
    try {
      const response = await cultureLancerAxios.post("/logout/");
      localStorage.clear();
      Cookies.remove("item");
      Cookies.remove("user_id");
      router.push("/login");
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };

  const handleDisplay = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const menuElement = document.getElementById("my-menu");
    if (!menuElement || !menuElement.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-[300px]  hidden sm:hidden navIcon order-2 basis-[30%] text-right md:flex items-center justify-end">
      <div className="m-b-icon-holder flex mr-4 cursor-pointer">
        <div className="msg relative mt-2">
          {false && (
            <div className="bellNoti absolute bg-[red] w-4 h-4 rounded-full text-center text-xs text-white -top-[10px] right-2">
              <p>2</p>
            </div>
          )}
          <Image
            src="/assets/message.svg"
            width={40}
            height={40}
            className="w-5 mr-5"
            alt="message"
          />
        </div>

        <div className="bell relative mt-2">
          {false && (
            <div className="bellNoti absolute bg-[red] w-4 h-4 rounded-full text-center text-xs text-white -top-[10px] right-3">
              1
            </div>
          )}
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
          <Image
            src={profileImageUrl}
            alt=""
            width={40}
            height={40}
            className="rounded-full w-[32px] h-[32px]"
          />
        </div>
        <Link
          href={
            user?.role === "employer"
              ? `/employer/dashboard/profile/`
              : `/applicant/dashboard/profile`
          }
        >
          <div className="">
            <p className="text-xs">{fullname}</p>
          </div>
        </Link>
        <div
          className="logo-text p-2 cursor-pointer"
          id="my-menu"
          onClick={handleDisplay}
        >
          <FaChevronDown className="text-[12px] text-[#525252]" />
        </div>
      </div>

      {/* dropdown */}
      {isOpen && (
        <div
          className={`bg-white drop-shadow-lg px-2 w-[12rem] absolute right-[5rem] top-[60px] rounded-lg  md:block z-10 border`}
        >
          <ul className="list-none cursor-pointer mt-10 inline text-[14px]">
            <li className="py-2">
              <Link
                href={`/applicant/settings/profile-details`}
                className="text-slate-700 hover:bg-[black]"
              >
                <div className="flex items-center text-center space-x-2">
                  <CiSettings className="text-[18px]" />
                  <span>Setting</span>
                </div>
              </Link>
            </li>
            <li className="py-2">
              {/* <Link href="/logout" className="text-slate-700"> */}
              <div
                className="flex items-center text-center space-x-2"
                onClick={handleLogout}
              >
                <HiMiniPower className="text-[18px]" />
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

export default LoggedInUserData;
