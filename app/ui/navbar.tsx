"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MyContext } from "../context";
import LoggedInUserData from "./loggedInUserData";

function HomeNavbar() {
  const pathname = usePathname();
  const { user } = useContext(MyContext);
  // Define the list of navigation links
  const linkPaths = [
    { path: "/", title: "Home" },
    {
      path: "/signup/options",
      title: "Sign up",
      hideOn: ["/signup/options", "/signup/employer", "/signup/applicant"],
    },
  ];

  // Function to render links conditionally
  const renderLink = ({
    path,
    title,
    hideOn,
  }: {
    path: string;
    title: string;
    hideOn?: string[];
  }) => {
    if (hideOn && hideOn.includes(pathname)) {
      return null;
    }
    return (
      <li className="mr-5" key={path}>
        <Link
          href={path}
          className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100"
        >
          {title}
        </Link>
      </li>
    );
  };

  // Check if the user is on the reset-password page, if so, hide the navigation links
  if (pathname === "/reset-password") {
    return (
      <nav className="px-20 items-center w-full flex justify-between font-semibold">
        <Link href="/">
          <div className="items-center justify-center gap-2">
            <Image
              src="/assets/full-logo.svg"
              width={40}
              height={40}
              alt="logo"
              className="w-[150px]"
            />
          </div>
        </Link>
      </nav>
    );
  }

  if (pathname === "/forgot-password") {
    return (
      <nav className="px-20 items-center w-full flex justify-between font-semibold">
        <Link href="/">
          <div className="items-center justify-center gap-2">
            <Image
              src="/assets/full-logo.svg"
              width={40}
              height={40}
              alt="logo"
              className="w-[150px]"
            />
          </div>
        </Link>
      </nav>
    ); // Do not render the navbar if the pathname is '/forgot-password'
  }

  if (pathname === "/otp-verification") {
    return (
      <nav className="px-20 items-center w-full flex justify-between font-semibold">
        <Link href="/">
          <div className="items-center justify-center gap-2">
            <Image
              src="/assets/full-logo.svg"
              width={40}
              height={40}
              alt="logo"
              className="w-[150px]"
            />
          </div>
        </Link>
      </nav>
    ); // Do not render the navbar if the pathname is '/forgot-password'
  }

  return (
    <nav className="px-20 items-center w-full flex justify-between h-[70px]">
      <Link href="/">
        <div className="items-center justify-center gap-2">
          <Image
            src="/assets/full-logo.svg"
            width={40}
            height={40}
            alt="logo"
            className="w-[150px]"
          />
        </div>
      </Link>
      <div className="items-center">
        {user ? <LoggedInUserData /> : <ul className="list-none m-0 sm:flex hidden cursor-pointer">
          {linkPaths.map(renderLink)}

          {pathname === "/signup/employer" && (
            <li className="mr-5">
              <Link
                href="/assessment"
                className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100"
              >
                Join as A Job Seeker
              </Link>
            </li>
          )}

          {pathname === "/signup/applicant" && (
            <li className="mr-5">
              <Link
                href="/signup/employer"
                className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100"
              >
                Join as An Employer
              </Link>
            </li>
          )}

          {pathname !== "/signup/employer" &&
            pathname !== "/signup/applicant" &&
            pathname !== "/login" && (
              <li className="mr-5">
                <Link
                  href="/login"
                  className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100"
                >
                  Login
                </Link>
              </li>
            )}
        </ul>}
      </div>
    </nav>
  );
}

export default HomeNavbar;
