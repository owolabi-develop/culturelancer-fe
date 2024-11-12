"use client"

import { EducationModal, Skill } from "../../modals";
import {  ExperienceModal } from "../../modals";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import useSWR from 'swr';
import Cookies from "js-cookie";

import ProgressBar from "@ramonak/react-progress-bar";

import { ApplicantDndResume } from "./dnd/applicant_resume_dnd";

export default function ExperienceEducation(){
   
    return (
        <section className="w-full ">
            <ToastContainer/>
            <div className="md:grid grid-cols-1 py-5 px-5">
                {/* progress bar */}
                <ProfilePercent/>

             {/* education */}
                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">
                    <p className="text-xl font-semibold my-2">Add Your Education</p>

                    
                   
                    <div className="">
                        <EducationModal notifytest="Education Added!"/>
                    </div>



                </div>

                
             {/* education */}



               {/* experience */}
               <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 ">
                    <p className="text-xl font-semibold my-2">Add Your Experience</p>

                    
                    <div className="">
                        <ExperienceModal notifytest="Experience Added!"/>
                    </div>


                </div>

                
             {/* experience */}





             {/* skills */}

             <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">
                    <p className="text-xl font-semibold my-2">Add Your Skill</p>

                    
                   
                    <div className="">
                        <Skill notifytest="Skill Added!"/>
                    </div>



                </div>

             


             {/* skills */}







              {/* resume */}
             

              <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-4">

                    <p className="text-xl font-semibold my-2">Add Your resume</p>
             
                        <ApplicantDndResume notifytest="Resume Uploaded" name="resume" className={`border-dashed border-2 text-center py-8 hover:border-blue-300 cursor-pointer`}/>

          
                </div>
               
          
             {/* resume */}

            
            </div>

        </section>
    )
}



/// profile percent

function ProfilePercent(){

    // get appliant profile
const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("item")}`,
      },
    }).then((r) => r.json());
const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/applicant-profile-details/`, fetcher)
console.log("new profile:",data)

if(isLoading){
    return <div className='bg-slate-50 drop-shadow-lg rounded-md animate-pulse py-1 px-4'>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
</div>
}
if(error){
    return <div>fail to fetch data</div>
}
    

    return (<>
    <ProgressBar 
        completed={data?.completion_percent} maxCompleted={100}
            animateOnRender={true} 
            transitionDuration='3s'
            height='15px'
            bgColor='#354656'
            
            />

    <p className="font-semibold text-[gray]">Profle Completion: {data?.completion_percent}%</p>
                  
    </>)
}
