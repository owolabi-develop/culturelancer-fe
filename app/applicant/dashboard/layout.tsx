"use client";
import DashboardNavbar from "@/app/ui/applicant/dashboard/navmenu";
import Footer from "@/app/ui/footer";
import { useUserDetals } from "@/app/hooks/useUserDetails";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: userDetails } = useUserDetals();

  // Fetch profile data
  // useEffect(() => {
  //   const fetchProfileData = async () => {
  //     try {
  //       const response = await fetch("/api/userdetail");
  //       if (response.ok) {
  //         const { first_name, last_name } = await response.json();
  //         setapplicantdetails(`${first_name} ${last_name}`);
  //       } else {
  //       }
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  //   fetchProfileData();
  // }, []);

  return (
    <div>
      <DashboardNavbar
        applicantprofileName={`${userDetails?.first_name || ""} ${
          userDetails?.last_name || ""
        }`}
      />

      <div className={`w-full mx-auto`}>{children}</div>
      <Footer />
    </div>
  );
}
