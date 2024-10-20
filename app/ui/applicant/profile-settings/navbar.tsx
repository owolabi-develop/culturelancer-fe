"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import { VscBell } from "react-icons/vsc";
import { FaRegMessage } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { HiMiniPower } from "react-icons/hi2";

function SettingsNavbar() {
  const pathname = usePathname();
  const [openNav,setIOpenNav] = useState(false)

  const [isOpen, setIsOpen] = useState(false);

  const handleDisplay = () => {
    setIsOpen(prev => !prev);
    console.log("open")
  };

  return (
    <nav className=' px-20 items-center w-full flex justify-between font-semibold'>
      <div className='grid grid-cols-2 p-4 items-center justify-center gap-5'>
        <div className='bg-[#cccbc8] rounded-full w-11 h-11'></div>
        <div className='logo-text w-11 h-11'><h1 className='leading-10 font-bold'>CultureLancer</h1></div>
      </div>

      <div className='md:flex basis-[85%]'>
        <div className="navtext basis-[70%] order-1 p-2"></div>
        {/* nav text */}


        {/* go to dash board */}

        <div className=' hidden sm:hidden navIcon order-2 basis-[30%] text-right md:flex items-center justify-end'>

        
            <div className='profil-icon flex space-x-3 cursor-pointer'>
            <ul className='list-none cursor-pointer inline'>

            <li className='mr-5'>
            <Link href="/applicant/dashboard" className='rounded-lg px-6 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100'>
            Go to DashBoard
            </Link>
            </li>
            </ul>
          
            </div>
        
        </div>
{/* go to dashboard */}

      </div>
    </nav>
  
  
  );
}

export default SettingsNavbar;
