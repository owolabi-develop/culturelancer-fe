"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import LoggedInUserData from "../../loggedInUserData";
import { MyContext } from "@/app/context";

function DashboardNavbar() {
  const { user } = useContext(MyContext);
  
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

        <LoggedInUserData />
      </nav>
    </div>
  );
}

export default DashboardNavbar;
