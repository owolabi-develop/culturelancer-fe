"use client";
import React from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import Image from "next/image";

function SettingsNavbar() {
  return (
    <nav className="px-8 items-center w-full flex justify-between font-semibold h-[70px]">
      <Link href="/">
        <Image
          src="/assets/full-logo.svg"
          width={40}
          height={40}
          alt="logo"
          className="w-[150px]"
        />
      </Link>

      <div className="md:flex basis-[85%]">
        <div className="navtext basis-[70%] order-1 p-2"></div>
        {/* nav text */}

        {/* go to dash board */}

        <div className=" hidden sm:hidden navIcon order-2 basis-[30%] text-right md:flex items-center justify-end">
          <div className="profil-icon flex space-x-3 cursor-pointer">
            <ul className="list-none cursor-pointer inline">
              <li className="mr-5">
                <Link
                  href={`/applicant/dashboard/home`}
                  className="rounded-lg px-6 py-3 text-slate-700 font-medium hover:text-primary"
                >
                  Go to DashBoard
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* go to dashboard */}
      </div>
    </nav>
  );
}

export default SettingsNavbar;
