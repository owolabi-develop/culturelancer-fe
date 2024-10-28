"use client"
import Footer from "@/app/ui/footer";
import DashboardNavbar from "@/app/ui/employer/dashboard/navbmenu";
import React, { useEffect, useState } from 'react';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  const [employerdetails, setEmployerdetails] = useState<string>('');
 
  // Fetch profile data
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch("/api/userdetail");
        if (response.ok) {
          const {first_name,last_name} = await response.json();
          setEmployerdetails(`${first_name} ${last_name}`)
         
        } else {
        
        }
      } catch (error) {
        console.log("error",error)
      
      }
    };

    fetchProfileData();
  }, []);

  return (
      <div>
      < DashboardNavbar profileName={employerdetails}/>
      
      <div className={`w-full mx-auto`}>{children}</div>
      <Footer/>
    </div>
  );
}