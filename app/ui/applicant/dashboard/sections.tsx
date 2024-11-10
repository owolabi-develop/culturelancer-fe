"use client"
import Link from 'next/link'

import { useProfileDetails, useJobrecommendation } from '@/app/libs/utils';
import ProgressBar from "@ramonak/react-progress-bar";
import ApplicantProfileViewChart from '../../chart/applicantprofilechart';
import ClientRatingSummaryChart from '../../chart/applicantprofilelineChart';


type recommededJobSchema = {
    id:string,
    title:string,
    description:string,
    experience:number,
    company:string,
    apply_url:string,
    posted:string,
    company_logo:string,
    location:string[],
    job_type:string[],
    minimum_budget:number,
    maximum_budget:number,
    skills:string[],
    experience_levels:string[]
    status:string


}
export  function SkillTraits(){
    const {completionPercent, percentLoading,percentError} = useProfileDetails();
    const { jobsrecommendation,JobisLoading} = useJobrecommendation()

    // get aplicant Recommeded Jobs
const job_recommedation = jobsrecommendation?.job_recommedation;

const completion_percent = completionPercent && completionPercent[0] ? completionPercent[0].completion_percent : 0;




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
                    {percentLoading ?? (
                        <ProgressBar 
                        completed={0} maxCompleted={100}
                         animateOnRender={true} 
                         transitionDuration='3s'
                         height='15px'
                         bgColor='#354656'
                         
                          />
                    )}
                    {percentError ?? (<p>Fail to fetch profile percent</p>) }
                    <ProgressBar 
                        completed={completion_percent ?? 0} maxCompleted={100}
                         animateOnRender={true} 
                         transitionDuration='3s'
                         height='15px'
                         bgColor='#354656'
                         
                          />
                          <div className='my-4'>
                    <Link href="/hire"> <button className=" bg-black text-white rounded py-3 px-5">Update Resume with AI</button></Link>
                    </div>
                </div>

{/* charts */}
                <div className='bg-white drop-shadow-lg w-full p-3 rounded'>
                    <h1 className='text-2xl font-bold md:text-2xl block text-black'>Analytics</h1>
                    <p className='font-bold text-black py-2'>Profile View (Last 7 Days)</p>
                    <div className='w-full '>

                       <ApplicantProfileViewChart/>
                        
                        </div>

                    <p className='font-bold text-black py-2'>Client Rating Summary</p>
                    <div className='w-full'>
                        <ClientRatingSummaryChart/>
                    </div>
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
                    {JobisLoading? (
                      <div className='w-full py-2 px-3 text-center animate-pulse bg-slate-300'>
                      <div className='bg-slate-50 drop-shadow-lg py-2 my-2 w-full'></div>
                      <div className='bg-slate-50 drop-shadow-lg py-2 my-2 w-[80%]'></div>
                      <div className='bg-slate-50 drop-shadow-lg py-2 my-2 w-[60%]'></div>
                     </div>
                    ):(
                    
                    <div className='space-y-6 sm:space-y-6 xl:space-x-4 jobs w-full md:flex  md:space-x-0 md:space-y-0 '>
                    {job_recommedation.map((jobs:recommededJobSchema)=>(
                        <div key={jobs.id} className='rounded border p-5 drop-shadow-lg bg-white'>
                        <p className='font-bold text-black py-2 '>{jobs.title}</p>
                        <p className='mt-2'>Budget: ${jobs.minimum_budget} -  ${jobs.maximum_budget}</p>
                        <p className='mt-2'>{jobs.description}</p>
                        <p className='mt-2'>Date Posted: {jobs.posted}</p>

                        <span className='py-2 px-3 bg-green-400 rounded-md text-white font-semibold'>{jobs.status}</span>
                        <Link href={`${process.env.NEXT_PUBLIC_API_JOB_URL}${jobs.apply_url}`}> <button className=" bg-black text-white rounded py-2 px-3 mt-4">View Job</button></Link>
                        </div>
                        ))}

                    </div>
                    )}

                </div>
               {/* recomend jobs */}


            </div>
{/*  complete section*/}



{/* pending session */}


        <div className='space-y-5 md:w-[30%] md:flex flex-col '>

                <div className='bg-white drop-shadow-lg w-full p-3 rounded flex-none'>
                    <h1 className='text-2xl font-bold md:text-2xl block text-black'>Pending Actions</h1>

                  
                    <div>
                    <p className='my-3'> Complete Skill Assesment</p>
                    <ProgressBar
                        completed={40} 
                        maxCompleted={100}
                        animateOnRender={true}
                        transitionDuration="3s"
                        height="12px"
                        bgColor='#354656'
                    
                        />
                    </div>
               
                    <p className='my-3'>Update Profile</p>
                        <ProgressBar
                        completed={Number(completionPercent) || 0} 
                        maxCompleted={100}
                        animateOnRender={true}
                        transitionDuration="3s"
                        height="12px"
                        bgColor='#354656'
                    
                        />
                       
                    
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



