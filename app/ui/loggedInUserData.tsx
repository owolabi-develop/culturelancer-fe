import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MyContext } from "../context";
import { useContext } from "react";
import { useMemo, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { CiSettings } from "react-icons/ci";
import { HiMiniPower } from "react-icons/hi2";
import Cookies from "js-cookie";

function LoggedInUserData() {
  const { user } = useContext(MyContext);
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const fullname = useMemo(() => {
    return user?.first_name ? `${user?.first_name} ${user?.last_name}` : "";
  }, [user]);

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

  const handleDisplay = () => {
    setIsOpen((prev) => !prev);
  };

  return (
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

      <div
        className="profil-icon flex items-center cursor-pointer"
        onClick={handleDisplay}
      >
        <div className="border rounded-full mr-4 w-[32px] h-[32px] flex items-center justify-center">
          <Image
            src="/default_profile.jpeg"
            alt=""
            width={40}
            height={40}
            className="rounded-full w-[32px] h-[32px]"
          />
        </div>
        <Link href={`/applicant/dashboard/profile`}>
          <div className="">
            <p className="text-xs">{fullname}</p>
          </div>
        </Link>
        <div className="logo-text p-2">
          <FaChevronDown className="text-[12px] text-[#525252]" />
        </div>
      </div>

      {/* dropdown */}
      {isOpen && (
        <div
          className={`bg-white drop-shadow-lg px-4 w-[12rem] absolute right-[6rem] top-[60px] rounded-lg  md:block z-10`}
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

export default LoggedInUserData;
