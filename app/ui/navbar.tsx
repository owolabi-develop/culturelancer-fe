'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function HomeNavbar() {
  const pathname = usePathname();

  // Define the list of navigation links
  const linkPaths = [
    { path: "/", title: "Home" },
    { path: "/signup/options", title: "Sign up", hideOn: ['/signup/options', '/signup/employer', '/signup/applicant'] },
  ];

  // Function to render links conditionally
  const renderLink = ({ path, title, hideOn }: { path: string; title: string; hideOn?: string[] }) => {
    if (hideOn && hideOn.includes(pathname)) {
      return null;
    }
    return (
      <li className="mr-5" key={path}>
        <Link href={path} className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100">
          {title}
        </Link>
      </li>
    );
  };

  // Check if the user is on the reset-password page, if so, hide the navigation links
  if (pathname === '/reset-password') {
    return(
      <nav className="px-20 items-center w-full flex justify-between font-semibold">
      <Link href="/">
        <div className="grid grid-cols-2 p-4 items-center justify-center gap-2">
          <div className="bg-[#cccbc8] rounded-full w-11 h-11"></div>
          <div className="logo-text w-11 h-11">
            <h1 className="leading-10 font-bold">CultureLancer</h1>
          </div>
        </div>
      </Link>  
    </nav>
    );
  }

  if (pathname === '/forgot-password') {
    return (
      <nav className="px-20 items-center w-full flex justify-between font-semibold">
      <Link href="/">
        <div className="grid grid-cols-2 p-4 items-center justify-center gap-2">
          <div className="bg-[#cccbc8] rounded-full w-11 h-11"></div>
          <div className="logo-text w-11 h-11">
            <h1 className="leading-10 font-bold">CultureLancer</h1>
          </div>
        </div>
      </Link>  
    </nav>
    ); // Do not render the navbar if the pathname is '/forgot-password'
  }


  if (pathname === '/otp-verification') {
    return (
      <nav className="px-20 items-center w-full flex justify-between font-semibold">
      <Link href="/">
        <div className="grid grid-cols-2 p-4 items-center justify-center gap-2">
          <div className="bg-[#cccbc8] rounded-full w-11 h-11"></div>
          <div className="logo-text w-11 h-11">
            <h1 className="leading-10 font-bold">CultureLancer</h1>
          </div>
        </div>
      </Link>  
    </nav>
    ); // Do not render the navbar if the pathname is '/forgot-password'
  }

  return (
    <nav className="px-20 items-center w-full flex justify-between font-semibold">
      <Link href="/">
        <div className="grid grid-cols-2 p-4 items-center justify-center gap-2">
          <div className="bg-[#cccbc8] rounded-full w-11 h-11"></div>
          <div className="logo-text w-11 h-11">
            <h1 className="leading-10 font-bold">CultureLancer</h1>
          </div>
        </div>
      </Link>
      <div className="items-center">
        <ul className="list-none m-0 sm:flex hidden cursor-pointer">
          {linkPaths.map(renderLink)}

          {pathname === '/signup/employer' && (
            <li className="mr-5">
              <Link href="/assessment" className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100">
                Join as A Job Seeker
              </Link>
            </li>
          )}

          {pathname === '/signup/applicant' && (
            <li className="mr-5">
              <Link href="/signup/employer" className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100">
                Join as An Employer
              </Link>
            </li>
          )}

          {pathname !== '/signup/employer' && pathname !== '/signup/applicant' && pathname !== '/login' && (
            <li className="mr-5">
              <Link href="/login" className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default HomeNavbar;
