"use client"
import { RiDeleteBin6Line } from "react-icons/ri";
import * as z from 'zod';
import { AwardCertificationSchema } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

type Inputs = z.infer<typeof AwardCertificationSchema>


export default function AwardCertification(){
    const { register, handleSubmit,formState: { errors } } = useForm<Inputs>({resolver:zodResolver(AwardCertificationSchema)});
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
    };

    return (
        <section className="w-full ">
            <div className="md:grid grid-cols-1 py-5 px-5">
                {/* progress bar */}

                <div className="md:w-full bg-gray-200 rounded-full h-2.5 my-3">
                            <div className={`bg-[gray] h-2.5 rounded-full w-[55%]`}></div>
                        </div>
                        {/* progress bar */}

                <p className="font-semibold text-[gray]">Profle Completion: 55%</p>

                <h1 className="my-3 font-extrabold text-2xl"> Award & Certifications</h1>


                {/* form container */}
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">
                    <p className="text-xl font-semibold my-2">Add New</p>

                    {/* forms input */}
                    

                    {/*  */}
                    <div className="mb-6">
                        <div>
                        <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" {...register('title')} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                        <p className="text-sm text-red-500">{errors.title?.message}</p>

                        </div>


                        <div>
                        <label htmlFor="IssuingOrganization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Issuing Organization</label>
                        <input type="text" {...register('inssuing_organization')} id="Issuing Organization" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                        <p className="text-sm text-red-500">{errors.inssuing_organization?.message}</p>

                        </div>


                        <div>
                        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date Recieved</label>
                        <input type="date" {...register('date_recieved')} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />

                        </div>

                        <div className="my-5">

                        <button type="submit" className="w-full bg-[#7e7d7d] rounded py-3 text-white">Add Award</button>
                        </div>
                      
                      
                    </div> 
                    
                    {/* form input */}

                </div>
                
                </form>
                {/* forn container */}


                



                 {/* Your Awards & Certifications   */}
                 <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 [&>*]:my-4">
                <p className="text-xl font-semibold my-2">Your Awards & Certifications</p>

                 {/* awards */}

                <div className="bg-[lightgray] w-full rounded py-3 px-3">

                    <div className="">

                    <h1 className="font-bold text-base">Best Employee Of the</h1>
                    
                    <div className="flex">

                    <div> 
                    <p className="text-sm">TechCorp Inc.</p>
                    <p className="text-sm">Recieved: Date</p>
                    </div>

                    <div className="w-full flex flex-col items-end">
                    <div className="border rounded py-1 px-1 mx-2">
                <RiDeleteBin6Line className="text-2xl cursor-pointer" />
                </div>
                   </div>
                   </div>

                    </div>
                  
                </div>
                {/* awards */}

    
                </div>


                {/* Your Awards & Certifications */}


 
            </div>

        </section>
    )
}