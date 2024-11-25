"use client";
import Footer from "@/app/ui/footer";
import DashboardNavbar from "@/app/ui/applicant/dashboard/navmenu";
import React from "react";
import { useUserDetals } from "@/app/hooks/useUserDetails";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: userDetails } = useUserDetals();

  return (
    <div>
      <DashboardNavbar />
      {/* <DashboardNavbar
        profileName={`${userDetails?.first_name || ""} ${
          userDetails?.last_name || ""
        }`}
        user_id={userDetails?.id || ""}
      /> */}

      <div className={`w-full mx-auto`}>{children}</div>
      <Footer />
    </div>
  );
}
