"use client"
import React from 'react'


function HomeNavbar() {

  return (
    <nav className='px-20 items-center w-full flex justify-between font-semibold border-b-[1px]'>
    <div className='grid grid-cols-2 p-4 items-center justify-center gap-2'>

      <div className='bg-[#cccbc8] rounded-full w-11 h-11'></div>
      <div className='logo-text w-11 h-11'><h1 className=' leading-10 font-bold'>CultureLancer</h1></div>
   
    </div>
    <div className='items-center '>
      <ul className='list-none m-0 sm:flex hidden cursor-pointer '>
      <li className='mr-5'> 
        <a href="" className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100 ">
        Home
        </a>
        </li>
      <li className='mr-5'>
        
        <a href="" className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100 ">
        About
        </a>
        </li>
      <li className='mr-5'>
      <a href="" className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100 ">
      Contact
        </a>
       
        </li>

        <li className='mr-5'>
        
        <a href=""  className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100 ">
        Sign up
        </a>
        </li>

      <li className='mr-5'>
        
        <a href=""  className="rounded-lg px-4 py-3 text-slate-700 font-medium hover:bg-[black] hover:text-slate-100"
        >
        Login
        </a>
        </li>
        
       
      </ul>
    </div>
    
    </nav>
  )
}

export default HomeNavbar