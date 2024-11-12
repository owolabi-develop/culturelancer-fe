"use client";
// import { WelcomeHeader } from "@/app/ui/employer/dashboard/dashboard";
// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";

export default function DashboardsDetails() {
  // const [employerdetails, setEmployerdetails] = useState<string>("");

  // const [employer, setEmployer] = useState<string>("");

  // const params = useParams();
  // const { id } = params;

  // const [isLoading, setisLoading] = useState(true);
  // const [isError, setisError] = useState(false);

  // // Fetch profile data
  // useEffect(() => {
  //   const fetchProfileData = async () => {
  //     try {
  //       const response = await fetch("/api/userdetail");

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch profile data");
  //       }

  //       const { first_name, last_name } = await response.json();
  //       setEmployerdetails(`${first_name} ${last_name}`);
  //       setisLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching profile data:", error);
  //       setisError(true);
  //       setisLoading(false);
  //     }
  //   };

  //   const fetchPprofile = async () => {
  //     try {
  //       const response = await fetch(`/api/get-employer-profile-details/${id}/`, {
  //         method: "GET",
  //       });

        
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch employer profile details");
  //       }

  //       const data  = await response.json();
        
  //       setEmployer(data);
  //     } catch (error) {
  //       console.error("Error fetching employer profile details:", error);
  //       // Handle error, e.g., show error message, retry, or log the error
  //     }
  //   };

  //   fetchProfileData();
  //   fetchPprofile();
  // }, [id]);

 
  return (
    <>
      {/* {isLoading && (
        <div className="flex w-full justify-center items-center min-h-[500px]">
          {" "}
          <div className="spinner"></div>
        </div>
      )}
      {isError && (
        <div className="flex justify-center items-center w-full p-10  my-20">
          <h1 className="font-bold text-xl">An error occured</h1>
        </div>
      )}
      {employer && employerdetails && !isLoading && !isError && <WelcomeHeader headerTest={employerdetails} employer={employer} />} */}
    </>
  );
}
