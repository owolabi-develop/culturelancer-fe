"use client"
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

import * as z from 'zod';
import { profileFaq } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

type Inputs = z.infer<typeof profileFaq >

export default function ProfileFaq(){
    const { register, handleSubmit,formState: { errors } } = useForm<Inputs>({resolver:zodResolver( profileFaq)});
  const onSubmit: SubmitHandler<Inputs> = data => {console.log(data)};

    return (
        <section className="w-full ">

            <div className="md:grid grid-cols-1 py-5 px-5">
        
                <h1 className="my-3 font-extrabold text-2xl"> Profile FAQ</h1>

                {/* form container */}
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full rounded px-5 py-5">
                   

                    {/* forms input */}
                    

                    {/*  */}
                    <div className="mb-6">
                  
                        <div>
                        <label htmlFor="faq" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add a new FAQ</label>
                        <textarea id="faq" {...register('faq')} rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 drop-shadow-lg " placeholder="Enter your questions and answer here ..."></textarea>
                        <p className="text-sm text-red-500">{errors.faq?.message}</p>
                        </div>

                    <p className="text-sm my-2">Add common question and answer that highlight your experties or unique skills</p>



                        <div className="my-5">

                        <button type="submit" className="bg-[#7e7d7d] rounded py-3 px-5 text-white">Add Award</button>
                        </div>
                      
                      
                    </div> 
                    
                    {/* form input */}

                </div>
                
                </form>
                {/* forn container */}


                



                 {/* Faqs   */}
                 <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 [&>*]:my-4">
                <p className="text-xl font-semibold my-2">What is your primary area of experties</p>

                <p className="text-sm my-2">My primary area of experties is web developement, with a focus on front-end technologies such as React and Vue.js</p>

                <div className="flex w-full my-4">
                 <div className="border rounded py-1 px-1">
                 <MdEdit  className="text-2xl cursor-pointer" />
                 </div>

                <div className="border rounded py-1 px-1 mx-2">
                <RiDeleteBin6Line className="text-2xl cursor-pointer" />
                </div>
               
                </div>

    
                </div>


                {/* Your Awards & Certifications */}


 
            </div>

        </section>
    )
}