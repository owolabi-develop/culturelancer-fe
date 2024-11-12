"use client"
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa6";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { TbCalendarMonth } from "react-icons/tb"
import { IoVideocamOutline } from "react-icons/io5";
import { TbAward } from "react-icons/tb";
import { BsPatchQuestion } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
// import { useState,useEffect } from 'react';
// import useSWR from 'swr';
import Cookies from "js-cookie";


export default function SideBar(){

    // const [applicantId,SetapplicantId] = useState<string|number>()
   
    

    return (
        <div className="">
        <div className="w-full h-dvh px-5 py-5 text-center">
            
            <ul className='list-none my-4 [&>*]:my-2'>

            <li className=''>
                <Link href={`/applicant/settings/profile-details/${Cookies.get("user_id_item")}/`} className="flex rounded-lg py-2 px-8 font-medium hover:bg-[#e4e4e4] ">
                <FaRegUser className='text-xl mr-2' />Personal Details
                </Link>
            </li>

            <li className=''>
                <Link href={`/applicant/settings/experience-education/${Cookies.get("user_id_item")}/`} className="flex rounded-lg py-2 px-8 font-medium hover:bg-[#e4e4e4] ">
                <PiSuitcaseSimpleLight  className='text-xl mr-2' />Experience & Education
                </Link>
            </li>

            <li className=''>
                <Link href={`/applicant/settings/projects/${Cookies.get("user_id_item")}/`} className="flex rounded-lg py-2 px-8 font-medium hover:bg-[#e4e4e4] ">
                <TbCalendarMonth className='text-xl mr-2' />Project
                </Link>
            </li>

            
            <li className=''>
                <Link href={`/applicant/settings/awards-certifications/${Cookies.get("user_id_item")}`} className="flex rounded-lg py-2 px-8 font-medium hover:bg-[#e4e4e4] ">
                <TbAward className='text-xl mr-2' />Awards/Certification
                </Link>
            </li>



            
            <li className=''>
                <Link href={`/applicant/settings/profile-video/${Cookies.get("user_id_item")}/`} className="flex rounded-lg py-2 px-8 font-medium hover:bg-[#e4e4e4] ">
                < IoVideocamOutline className='text-xl mr-2' />Profile Videos
                </Link>
            </li>


              
            <li className=''>
                <Link href={`/applicant/settings/specialization/${Cookies.get("user_id_item")}`} className="flex rounded-lg py-2 px-8 font-medium hover:bg-[#e4e4e4] ">
                <  HiOutlineLightBulb className='text-xl mr-2' />Specialization
                </Link>
            </li>

                  
            <li className=''>
                <Link href={`/applicant/settings/social-profile/${Cookies.get("user_id_item")}/`} className="flex rounded-lg py-2 px-8 font-medium hover:bg-[#e4e4e4] ">
                < FaUsers className='text-xl mr-2' />Social Profile
                </Link>
            </li>


                    
            <li className=''>
                <Link href={`/applicant/settings/profile-faq/${Cookies.get("user_id_item")}/`} className="flex rounded-lg py-2 px-8 font-medium hover:bg-[#e4e4e4] ">
                <BsPatchQuestion className='text-xl mr-2' />Profile Faq
                </Link>
            </li>
            
            </ul>
            
      
        </div>

        </div>
    )


}