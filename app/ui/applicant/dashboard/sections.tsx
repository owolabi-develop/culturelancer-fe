import Link from 'next/link'

export  function SkillTraits(){

    return (
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">

        <div className="rounded bg-[#cccbc8]  p-10 w-full"> 
            <h1 className='text-2xl font-bold md:text-2xl block text-black'>Your Top Skill and Traits</h1>
            <div className='p-3'>
                <h1>Communication</h1>
                <h1>Problem Solving</h1>
                <h1>Adaptability</h1>

            </div>
            <Link href="/hire"> <button className=" bg-black text-white rounded py-3 px-5">Learn More</button></Link>
        </div>


        <div className='profile-details md:flex mt-10 w-full justify-between'>

            <div className='space-y-6 md:w-[68%] md:flex flex-col'>

                <div className='bg-white drop-shadow-lg w-full p-3 rounded'>
                    <h1 className='text-2xl font-bold md:text-2xl block text-black'>Profile Completion</h1>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-3">
                    <div className={`bg-[gray] h-2.5 rounded-full w-[80%]`}></div>
                    </div>
                    <Link href="/hire"> <button className=" bg-black text-white rounded py-3 px-5">Update Resume with AI</button></Link>
                </div>

{/* charts */}
                <div className='bg-white drop-shadow-lg w-full p-3 rounded'>
                    <h1 className='text-2xl font-bold md:text-2xl block text-black'>Analytics</h1>
                    <p className='font-bold text-black py-2'>Profile View (Last 7 Days)</p>
                    <div className='w-full bg-[lightgray] text-center py-20'><p> interactive Line Chart</p></div>

                    <p className='font-bold text-black py-2'>Client Rating Summary</p>
                    <div className='w-full bg-[lightgray] text-center py-20'><p> interactive Bar Chart</p></div>
                </div>
{/* charts */}


{/* applied job */}
                <div className='bg-white drop-shadow-lg w-full p-3 rounded'>
                    <h1 className='text-2xl font-bold md:text-2xl block text-black'>Applied Jobs</h1>
                    <div className='p-2'>
                    <p className='font-bold text-black py-2'>Web Developer</p>
                    <p className=''>Client: TechCorp</p>
                    <p className=''>Status: in Review</p>
                    <p className=''>Earning: $0</p>
                    </div>
                    <hr />
                    <div className='p-2'>
                    <p className='font-bold text-black py-2'>Web Developer</p>
                    <p className=''>Client: TechCorp</p>
                    <p className=''>Status: in Review</p>
                    <p className=''>Earning: $0</p>
                    </div>

                </div>
{/* applied job */}


                {/* recomend jobs */}
                <div className='bg-white drop-shadow-lg w-full rounded p-5 py-10'>
                    <h1 className='text-2xl font-bold md:text-2xl block text-black mb-5'>Recommeded Jobs</h1>

                    <div className='space-y-6 sm:space-y-6 xl:space-x-4 jobs w-full md:flex  md:space-x-0 md:space-y-0 justify-evenly'>
                        <div className='rounded border p-5 drop-shadow-lg bg-white'>
                        <p className='font-bold text-black py-2 '> Senior Frontend Developer</p>
                        <p className='mt-2'>Budget: $8000 - 10000</p>
                        <p className='mt-2'>Looking for an experience developer to lead our frontend team...</p>
                        <Link href=""> <button className=" bg-black text-white rounded py-2 px-3 mt-4">View Job</button></Link>
                        </div>

                        <div className='rounded border p-5 drop-shadow-lg bg-white'>
                        <p className='font-bold text-black py-2 '> Senior Frontend Developer</p>
                        <p className='mt-2'>Budget: $8000 - 10000</p>
                        <p className='mt-2'>Looking for an experience developer to lead our frontend team...</p>
                        <Link href=""> <button className=" bg-black text-white rounded py-2 px-3 mt-4">View Job</button></Link>
                        </div>

                    </div>

                </div>
               {/* recomend jobs */}


            </div>
{/*  complete section*/}



{/* pending session */}


        <div className='space-y-5 md:w-[30%] md:flex flex-col '>

                <div className='bg-white drop-shadow-lg w-full p-3 rounded flex-none'>
                    <h1 className='text-2xl font-bold md:text-2xl block text-black'>Pending Actions</h1>

                    <p className='my-3'> Complete Skill Assesment</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className={`bg-[gray] h-2.5 rounded-full w-[60%]`}></div>
                </div>

                    <p className='my-3'>Update Profile</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className={`bg-[gray] h-2.5 rounded-full w-[80%]`}></div>
                    </div>
                </div>

                <div className='bg-white drop-shadow-lg w-full p-3 rounded'>
                    <h1 className='text-2xl font-bold md:text-2xl block text-black'>Skill Exam Reminder</h1>
                    <div className='py-2'>
                    <p className='font-bold text-black py-2'>Javascript Proficiency</p>
                    <Link href="/hire"> <button className=" bg-black text-white rounded py-1 px-2">Take Exam</button></Link>
                    </div>

                    <div className='py-2'>
                    <p  className='font-bold text-black py-2'>React FrameWork</p>
                    <Link href="/hire"> <button className=" bg-black text-white rounded py-1 px-2">Take Exam</button></Link>
                    </div>
                </div>




            </div>




        </div>
    </section>
    
    )

}



