"use client";
import Footer from "@/app/ui/footer";
import DashboardNavbar from "@/app/ui/employer/dashboard/navbmenu";
import React, { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [employerdetails, setEmployerdetails] = useState<string>("");
  const [id, setId] = useState<string>("");

  // Fetch profile data
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch("/api/userdetail");

        console.log();
        
        if (response.ok) {
          const { first_name, last_name, id } = await response.json();
          setEmployerdetails(`${first_name} ${last_name}`);
          setId(id);
        } else {
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div>
      <DashboardNavbar profileName={employerdetails} user_id={id} />

      <div className={`w-full mx-auto`}>{children}</div>
      <Footer />
    </div>
  );
}
