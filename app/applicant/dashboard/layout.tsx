"use client"
import DashboardNavbar from "@/app/ui/applicant/dashboard/navmenu";
import Footer from "@/app/ui/footer";
import { useEffect,useState } from "react";
 
export default function Layout({ children }: { children: React.ReactNode }) {

  const [applicantdetails, setapplicantdetails] = useState<string>('');
 
  // Fetch profile data
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch("/api/userdetail");
        if (response.ok) {
          const {first_name,last_name} = await response.json();
          setapplicantdetails(`${first_name} ${last_name}`)
         
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
      < DashboardNavbar applicantprofileName={applicantdetails}/>
      
      <div className={`w-full mx-auto`}>{children}</div>
      <Footer/>
    </div>
  );
}