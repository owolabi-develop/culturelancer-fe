"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(true);
  const sideBarItems: {
    name: string;
    icon: any;
    link: string;
  }[] = [
    {
      name: "Personal Details",
      icon: "/assets/user.svg",
      link: `/applicant/settings/profile-details`,
    },
    {
      name: "Experience & Education",
      icon: "/assets/experience.svg",
      link: `/applicant/settings/experience-education`,
    },
    {
      name: "Projects",
      icon: "/assets/projects.svg",
      link: `/applicant/settings/projects`,
    },
    {
      name: "Awards/Certification",
      icon: "/assets/awards.svg",
      link: `/applicant/settings/awards-certifications`,
    },
    {
      name: "Profile Videos",
      icon: "/assets/video.svg",
      link: `/applicant/settings/profile-video`,
    },
    {
      name: "Specialization",
      icon: "/assets/specialization.svg",
      link: `/applicant/settings/specialization`,
    },
    {
      name: "Social Profile",
      icon: "/assets/social-profile.svg",
      link: `/applicant/settings/social-profile`,
    },
    {
      name: "Profile Faq",
      icon: "/assets/faq.svg",
      link: `/applicant/settings/profile-faq`,
    },
  ];

  return (
    <div
      className={`${
        sideBarOpen ? "w-[350px]" : "w-[80px]"
      } py-5 text-center bg-[#141414] text-[#ffffff] transition-all duration-300 h-[calc(100vh-80px)]`}
    >
      <div
        className={`flex mb-6 transition-all duration-300 ${
          sideBarOpen ? "justify-end" : "justify-center"
        } py-4 ${sideBarOpen ? "px-8" : "px-0"}`}
      >
        <Image
          src="/assets/menu.svg"
          alt="menu"
          width={20}
          height={20}
          onClick={() => setSideBarOpen(!sideBarOpen)}
          className="cursor-pointer"
        />
      </div>
      <ul className="list-none">
        {sideBarItems.map((item, i) => (
          <li className="" key={i}>
            <Link
              href={item.link}
              className={`flex flex-nowrap text-nowrap text-[14px] h-[60px] items-center ${
                sideBarOpen ? "px-8" : "px-0 w-full"
              } font-medium hover:bg-[#1b1b1beb] transition-all duration-300
              ${pathname === item.link ? "bg-[#CB2224]" : ""}
              `}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={20}
                height={20}
                className={`${
                  sideBarOpen ? "mr-4" : "mx-auto"
                } transition-all duration-300`}
              />
              {sideBarOpen && item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
