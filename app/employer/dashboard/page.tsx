"use client"
import { WelcomeHeader } from "@/app/ui/employer/dashboard/dashboard";
import React, { useEffect, useState } from 'react';

export  default function DashboardsDetails() {
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
      <>
       
      <WelcomeHeader headerTest={employerdetails}/>
     
  
      </>
      
    
    );
  }
  