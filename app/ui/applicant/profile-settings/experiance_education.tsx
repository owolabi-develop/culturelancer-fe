
import { EducationModal } from "../../modals";
import {  ExperienceModal } from "../../modals";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function ExperienceEducation(){
  
    return (
        <section className="w-full ">
            <ToastContainer/>
            <div className="md:grid grid-cols-1 py-5 px-5">
                {/* progress bar */}

                <div className="md:w-full bg-gray-200 rounded-full h-2.5 my-3">
                            <div className={`bg-[gray] h-2.5 rounded-full w-[30%]`}></div>
                        </div>
                        {/* progress bar */}
                <p className="font-semibold text-[gray]">Profle Completion: 35%</p>


             {/* education */}
                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">
                    <p className="text-xl font-semibold my-2">Add YourEducation</p>

                    
                   
                    <div className="">
                        <EducationModal notifytest="Education Added!"/>
                    </div>



                </div>

                
             {/* education */}



               {/* education */}
               <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 ">
                    <p className="text-xl font-semibold my-2">Add Your Experience</p>

                    
                    <div className="">
                        <ExperienceModal notifytest="Experience Added!"/>
                    </div>


                    {/* model education */}


                    {/* modal education */}


                </div>

                
             {/* education */}


    
                
            </div>

        </section>
    )
}