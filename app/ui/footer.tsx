import React from 'react'

function Footer() {
 
    return (
      
        <footer className="p-20 w-full justify-around bg-[#232121]">

        <div className="space-y-4 sm:space-y-4 md:space-y-0 md:grid grid-cols-4 rounded p-5 w-full gap-10"> 
            
                <div className="p-2">
                    <h1 className='font-bold text-white'>CultureLancer</h1>
                    <ul className='list-none cursor-pointer m-0  text-[#d1d0cd] mt-2 [&>*]:pt-2'>
                    <li>Matching talent with culture since 2025</li>
    
                    </ul>
                </div>

                <div className="p-2">
                    <h1 className='font-bold text-white'>For Job Seekers</h1>
                    <ul className='list-none cursor-pointer m-0  text-[#d1d0cd] mt-2 [&>*]:pt-2'>
                    <li>Take Assessment</li>
                    <li>Browse Jobs</li>
                    <li>Career Resource</li>
                    </ul>
                    
                </div>

                <div className="p-2">
                    <h1 className='font-bold text-white'>For Employers</h1>
                    <ul className='list-none cursor-pointer m-0 text-[#d1d0cd] mt-2 [&>*]:pt-2'>
                    <li>Post a Job</li>
                    <li>Talent Search</li>
                    <li>Pricing</li>
                    </ul>
                </div>
                <div className="p-2">
                    <h1 className='font-bold text-white'>Connect</h1>
                    <ul className='list-none cursor-pointer m-0 text-[#d1d0cd] mt-2 [&>*]:pt-2 '>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    </ul>
                </div>
        
            
        </div>
        <div className="text-center w-full">
            <hr className='border-gray-500'></hr>
            <p className="text-base md:text-lg text-[#d1d0cd] mt-2">&copy; 2025 Culturelancer. All rights Reseverd. </p>
        </div>
    </footer>
    )
  }
  
  export default Footer