import Link from 'next/link'
import { IoMdAdd } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";

export  function ApplicantUserProfile(){

    return (
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">

{/* profile icon */}
        <div className="rounded bg-white drop-shadow-lg p-5 w-full"> 

        <div className='w-full flex flex-row'>
                        
        <div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>

           {/* profile */}
           <div className="">
                  
                <div className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3 relative">
                    {/* change icon pen */}
                    <div className='bg-[#f6f4f4] rounded-full w-10 h-10 drop-shadow-lg absolute py-3 px-[0.6rem] top-[5rem] md:bottom-3 left-20'>
                    <LuPencil className='text-xl' />
                    </div>
                      {/* change icon pen */}

                    <div className='bg-[#cccbc8] rounded-full w-28 h-28'></div>
                        <div className="b">
                            <h1 className='font-bold text-2xl'>John Doe</h1>
                            <p className='font-semibold text-xl'>Seniorsoftware Engineer</p>
                            <p className='font-semibold text-base'>San Francisco, CA</p>

                        <div className="w-[17rem] xl:w-[40rem] md:w-[20rem] bg-gray-200 rounded-full h-2.5 ">
                            <div className={`bg-[gray] h-2.5 rounded-full w-[70%]`}></div>
                        </div>
                        <p>Add Work Experience to reach 80%</p>

                        </div>
                    </div>

                </div>

          {/* profile */}


        </div>


        <div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full cursor-pointer'>
        <button className="py-2 px-4 font-bold bg-[lightgray] rounded text-black h-12">Edit Profile</button>
        </div>
        </div>



            {/* about me */}
            <h1 className='text-2xl font-bold md:text-2xl block text-black'>About Me</h1>
            <div className=''>
                <p>Passionate UX designer with 5+ year of experience in createing intuitive and engaging digital experience. Specialized in user reach, wireframing, and protopyping..</p>

                <p className='underline'>Read More</p>
            </div>
              {/* about me */}



        </div>
{/* profile icon */}


        <div className='profile-details md:flex mt-10 w-full justify-between'>

            <div className='space-y-6 md:w-[68%] md:flex flex-col'>

               {/* applicant experience */}
               <div className='bg-white drop-shadow-lg w-full p-3 rounded'>
                    {/* add experience header */}
                  
                     <div className='w-full flex flex-row'>
                        <div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>
                        <h1 className='text-2xl font-bold'>Experience</h1>
                        </div>
                        <div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full cursor-pointer'><IoMdAdd className='text-3xl' /></div>
                    </div>

                    {/* addd experience */}

{/* experience timeline */}

    <ol className="relative border-s-2 border-[gray]">  
            {/* timeline */}
        <li className="mb-10 ms-4">
            <div className="absolute w-[0.90rem] h-[0.90rem] bg-white  rounded-full -start-2 border-[3px] border-[gray]"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Senior UX Designer</h3>
            <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">TechCorp Inc.</p>
            <time className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">February 2022</time>
            <p className="mb-4 text-base font-semibold text-gray-500 dark:text-gray-400 my-2">Led the redesing of the company's flagship product, resulting in 40% increase in user engagement</p>
        </li>

        <li className="mb-10 ms-4">
            <div className="absolute w-[0.90rem] h-[0.90rem] bg-white  rounded-full -start-2 border-[3px] border-[gray]"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Senior UX Designer</h3>
            <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">TechCorp Inc.</p>
            <time className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">February 2022</time>
            <p className="mb-4 text-base font-semibold text-gray-500 dark:text-gray-400 my-2">Led the redesing of the company's flagship product, resulting in 40% increase in user engagement</p>
        </li>


    </ol>

 {/*  experiencetimeline */}
                    
    </div>
{/* applicant experience */}

{/* applicant education */}
                <div className='bg-white drop-shadow-lg w-full p-3 rounded'>
                    {/* add education header */}
                  
                     <div className='w-full flex flex-row'>
                        <div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>
                        <h1 className='text-2xl font-bold'>Education</h1>
                        </div>
                        <div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full cursor-pointer'><IoMdAdd className='text-3xl' /></div>
                    </div>

                    {/* addd education */}



            {/* education timeline */}

            <ol className="relative border-s-2 border-[gray]">  
                    {/* timeline */}
                <li className="mb-10 ms-4">
                    <div className="absolute w-[0.90rem] h-[0.90rem] bg-white  rounded-full -start-2 border-[3px] border-[gray]"></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Master of Designer</h3>
                    <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Design Institute</p>
                    <time className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">February 2022</time>
                    <p className="mb-4 text-base font-semibold text-gray-500 dark:text-gray-400 my-2">Led the redesing of the company's flagship product, resulting in 40% increase in user engagement</p>
                </li>

                <li className="mb-10 ms-4">
                    <div className="absolute w-[0.90rem] h-[0.90rem] bg-white  rounded-full -start-2 border-[3px] border-[gray]"></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Arts in Grapic Design</h3>
                    <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Design Institute</p>
                    <time className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">February 2022</time>
                    <p className="mb-4 text-base font-semibold text-gray-500 dark:text-gray-400 my-2">Led the redesing of the company's flagship product, resulting in 40% increase in user engagement</p>
                </li>


            </ol>

        {/*  education */}

                    
                </div>
{/* applicant education */}



  {/* Applicant skill */}
  <div className='bg-white drop-shadow-lg w-full rounded p-3 py-5'>
                    {/* add project header */}

                    <div className='w-full flex flex-row'>

                        <div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>
                        <h1 className='text-2xl font-bold'>Skills</h1>
                        </div>
                        <div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full cursor-pointer'><IoMdAdd className='text-3xl' /></div>
                        </div>


                     {/* add project header */}



                    {/* skills */}
                    <div className='w-full overflow-hidden [&>*]:font-bold [&>*]:py-2 [&>*]:px-[0.35rem] md:[&>*]:py-2 md:[&>*]:px-[0.35rem] [&>*]:my-1 [&>*]:mx-1 md:[&>*]:my-1 md:[&>*]:mx-1  '>
                        
                        <button className='bg-[lightgray] rounded-full'>UI Design</button>
                        <button className='bg-[lightgray] rounded-full'>Adobe XD</button>
                        <button className='bg-[lightgray] rounded-full'>Figma</button>
                        <button className='bg-[lightgray] rounded-full'>wireFraming</button>
                        <button className='bg-[lightgray] rounded-full'>Sketch</button>
                        <button className='bg-[lightgray] rounded-full'>User Testing</button>
                        <button className='bg-[lightgray] rounded-full'>UI Research</button>
                        <button className='bg-[lightgray] rounded-full'>Prototyping</button>

                        </div>
                                  
                         {/* skills */}



                </div>
               {/* applicant skill*/}





                {/* Applicant projects */}
                <div className='bg-white drop-shadow-lg w-full rounded p-3 py-5'>
                    {/* add project header */}

                    <div className='w-full flex flex-row'>

                        <div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>
                        <h1 className='text-2xl font-bold'>Portfolio</h1>
                        </div>
                        <div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full cursor-pointer'><IoMdAdd className='text-3xl' /></div>
                        </div>


                     {/* add project header */}




                    <div className='space-y-6 sm:space-y-6  jobs w-full md:flex xl:flex xl:space-x-5 overflow-hidden md:space-x-0 md:space-y-0'>
                        {/* projects */}
                        <div className='rounded px-20 py-20 drop-shadow-lg bg-[lightgray] w-full'>

                        <p className='mt-2'>Project 1</p>
                        </div>

                        <div className='rounded px-20 py-20 drop-shadow-lg bg-[lightgray] w-full'>

                        <p className='mt-2'>Project 1</p>
                        </div>


                        <div className='rounded px-20 py-20 drop-shadow-lg bg-[lightgray] w-full'>

                        <p className='mt-2'>Project 1</p>
                        </div>




                        


                         {/* projects */}

                       

                    </div>

                </div>
               {/* applicant projects*/}


            </div>
{/*  complete section*/}



{/* certification and testimonial session */}


        <div className='space-y-5 md:w-[30%] md:flex flex-col '>
                    {/* certificate */}
                <div className='bg-white drop-shadow-lg w-full p-3 rounded flex-none'>
                    <h1 className='text-2xl font-bold md:text-2xl block text-black'>Certification</h1>
                    <div className='py-3 px-4'>

                    {/* certificate container  */}

                    <div className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3">
                    <div className='bg-[#cccbc8] rounded-full w-12 h-12 leading-10 py-2 px-2'>
                    <IoCheckmarkCircleOutline className='text-3xl'/>
                    </div>
                        <div className="text-left">
                            <h1>Google UX Design Professional Certificate</h1>
                            <h2>Google 2025</h2>
                        </div>
                    </div>
                      {/* certificate container  */}
                    
                    </div>

                    <div className='px-3'>
                    <Link href="/hire"> <button className="border rounded py-1 px-2">Add Certificate</button></Link>
                    </div>

                </div>
                {/* certificate */}

                {/* testimonial */}

                <div className='bg-white drop-shadow-lg w-full p-3 rounded'>
                    <h1 className='text-2xl font-bold md:text-2xl block text-black'>Testimonials</h1>

                    <div className='py-3 px-4 bg-[#efefef] rounded my-5'>

                    <p className='py-1 px-2 text-black'>John is a execptional ui designer with a keen eye for details</p>

                    {/* testinonials profile  */}

                    <div className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3">
                    <div className='bg-[#cccbc8] rounded-full w-14 h-14'></div>
                        <div className="text-left">
                            <h1>John Doe</h1>
                            <h2>software Engineer</h2>
                        </div>
                    </div>
                      {/* testinonials profile  */}
                    
                    </div>

                    <div className='px-3'>
                    <Link href="/hire"> <button className="border rounded py-1 px-2">Request testimonial</button></Link>
                    </div>
                </div>




            </div>




        </div>
    </section>
    
    )

}



