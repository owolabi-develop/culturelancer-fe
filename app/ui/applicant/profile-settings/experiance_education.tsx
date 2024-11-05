"use client"

import { EducationModal, Skill } from "../../modals";
import {  ExperienceModal } from "../../modals";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import React, { useState,useEffect } from 'react'
import { fetchProfileDetails } from '@/app/libs/utils';
import ProgressBar from "@ramonak/react-progress-bar";

import { ApplicantDndResume } from "./dnd/applicant_resume_dnd";

export default function ExperienceEducation(){
    const [completionPercent,setCompletionPercent] = useState<number>()

    useEffect(() => {
        const handleprofiledetails = async () => {
        const completion = await fetchProfileDetails();
        if (completion !== null) {
                setCompletionPercent(completion);
            }
       
    }
    handleprofiledetails();
    },[completionPercent])
   
    return (
        <section className="w-full ">
            <ToastContainer/>
            <div className="md:grid grid-cols-1 py-5 px-5">
                {/* progress bar */}
                <ProgressBar 
                        completed={completionPercent ?? 0} maxCompleted={100}
                         animateOnRender={true} 
                         transitionDuration='3s'
                         height='12px'
                         labelAlignment='outside'
                         bgColor='#354656'

                          />

                
                        {/* progress bar */}
                <p className="font-semibold text-[gray]">Profle Completion: {completionPercent}%</p>


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