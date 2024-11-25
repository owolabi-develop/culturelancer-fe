"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import LoggedInUserData from "../../loggedInUserData";
import { MyContext } from "@/app/context";

function DashboardNavbar() {
  const { user } = useContext(MyContext);

  const menu = !user
    ? []
    : user?.role === "employer"
    ? [
        {
          title: "Dashboard",
          link: `/employer/dashboard/`,
        },
        {
          title: "Post Job",
          link: `/employer/dashboard/post-job/`,
        },
        {
          title: "My Jobs",
          link: `/employer/dashboard/jobs/`,
        },
        {
          title: "Candidate",
          link: `/employer/dashboard/candidates/`,
        },
        {
          title: "Membership",
          link: `/employer/dashboard/membership/`,
        },
      ]
    : [
        {
          title: "Dashboard",
          link: `/applicant/dashboard/home`,
        },
        {
          title: "Jobs",
          link: `/applicant/dashboard/jobs`,
        },
        {
          title: "Assesement Results",
          link: `/applicant/dashboard/assessment-result`,
        },
      ];

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
            {menu.map((item, index) => (
              <li key={index} className="">
                <Link
                  href={item.link}
                  className="text-sm px-6 py-3 text-slate-700 font-medium hover:text-primary"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <LoggedInUserData />
      </nav>
    </div>
  );
}

export default DashboardNavbar;
