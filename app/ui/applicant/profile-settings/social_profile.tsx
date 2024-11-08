"use client"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import * as z from 'zod';
import { socialProfile } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState,useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { fetchProfileDetails } from '@/app/libs/utils';
import ProgressBar from "@ramonak/react-progress-bar";

type Inputs = z.infer<typeof socialProfile >

export default function SocialProfile(){
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { register, handleSubmit,reset, formState: { errors } } = useForm<Inputs>({resolver:zodResolver(socialProfile)});
    const [completionPercent,setCompletionPercent] = useState<number>()
    
    //  retrive  profle completion percent

    useEffect(() => {
        const handleprofiledetails = async () => {
        const completion = await fetchProfileDetails();
        if (completion !== null) {
                setCompletionPercent(completion);
            }
       
    }
    handleprofiledetails();
    },[])
    // handle toast bar
    const notify = () => {
        toast.success("Social Profiles Added!");
    }
    // handle form submition
  const onSubmit: SubmitHandler<Inputs> =  async data => {
    console.log(data)
    try{
        setIsLoading(true)
    const response =  await fetch(`/api/applicant-settings/social-profile/`,{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
});
 
if (response.ok){
    console.log("Social profiles added")
    reset()
    setIsLoading(false)
    notify()

}
    }catch (error){
        console.log("server Error: ",error)
    }
};

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

                <h1 className="my-3 font-extrabold text-2xl"> Social Profile</h1>


                {/* form container */}
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">
                    <p className="text-sm font-semibold my-5">Connect your social profiles to showcase your online presence</p>

                    {/* forms input */}
                  
                    {/*  */}
                    <div className="mb-6">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch justify-between">
                    <FaFacebook  className="text-4xl" />
                        <input type="url" id="facebook" {...register('facebook')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[95%] p-2.5"/>
                    </div>
                    <p className="text-sm text-red-500">{errors.facebook?.message}</p>

                    <div className="relative mb-4 flex w-full flex-wrap items-stretch justify-between">
                    <FaTwitter className="text-4xl" />
                        <input type="url" id="tiitter" {...register('twitter_x')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[95%] p-2.5"/>
                    </div>
                    <p className="text-sm text-red-500">{errors.twitter_x?.message}</p>

                    <div className="relative mb-4 flex w-full flex-wrap items-stretch justify-between">
                    <FaLinkedin className="text-4xl" />
                        <input type="url" id="linkedin" {...register('linkedIn')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[95%] p-2.5"/>
                    </div>
                    <p className="text-sm text-red-500">{errors.linkedIn?.message}</p>
                       
                    </div> 
                    
                    {/* form input */}

                    
                    <div className="">
                        <button className="bg-[#727272] py-2 px-3 md:px-5 md:py-3 rounded text-white mb-5 md:mb-0" disabled={isLoading}>
                            
                                                 
                    {isLoading? 
                    (<>
                    <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    </>)
                    :'Save & Update'}
                        </button>
                    </div>

                </div>


                </form>
                {/* forn container */}
                
            </div>

        </section>
    )
}