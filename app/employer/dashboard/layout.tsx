"use client";
import Footer from "@/app/ui/footer";
import DashboardNavbar from "@/app/ui/employer/dashboard/navbmenu";
import React, { useEffect, useState } from "react";
import { useUserDetals } from "@/app/hooks/useUserDetails";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: userDetails } = useUserDetals();
  const [employerdetails, setEmployerdetails] = useState<string>("");
  const [id, setId] = useState<string>("");
  console.log("userDetails", userDetails);

  return (
    <div>
      <DashboardNavbar
        profileName={`${userDetails?.first_name || ""} ${
          userDetails?.last_name || ""
        }`}
        user_id={userDetails?.id || ""}
      />

      <div className={`w-full mx-auto`}>{children}</div>
      <Footer />
    </div>
  );
}
