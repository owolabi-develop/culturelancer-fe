"use client"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import * as z from 'zod';
import { socialProfile } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

type Inputs = z.infer<typeof socialProfile >

export default function SocialProfile(){
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({resolver:zodResolver(socialProfile)});
  const onSubmit: SubmitHandler<Inputs> = data => {console.log(data)};

    return (
        <section className="w-full ">
            <div className="md:grid grid-cols-1 py-5 px-5">
                {/* progress bar */}

                <div className="md:w-full bg-gray-200 rounded-full h-2.5 my-3">
                            <div className={`bg-[gray] h-2.5 rounded-full w-[85%]`}></div>
                        </div>
                        {/* progress bar */}

                <p className="font-semibold text-[gray]">Profle Completion: 85%</p>

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
                        <button className="bg-[#727272] py-2 px-3 md:px-5 md:py-3 rounded text-white mb-5 md:mb-0">Save & Update</button>
                    </div>

                </div>


                </form>
                {/* forn container */}
                
            </div>

        </section>
    )
}