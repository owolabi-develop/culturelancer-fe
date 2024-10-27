"use client"
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import * as z from 'zod';
import { profileVideo } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

type Inputs = z.infer<typeof profileVideo>


export default function ProfileVideo(){
    const { register, handleSubmit,formState: { errors } } = useForm<Inputs>({resolver:zodResolver(profileVideo)});
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <section className="w-full ">
            <div className="md:grid grid-cols-1 py-5 px-5">
                {/* progress bar */}

                <div className="md:w-full bg-gray-200 rounded-full h-2.5 my-3">
                            <div className={`bg-[gray] h-2.5 rounded-full w-[65%]`}></div>
                        </div>
                        {/* progress bar */}

                <p className="font-semibold text-[gray]">Profle Completion: 65%</p>

                <h1 className="my-3 font-extrabold text-2xl"> Profile Videos</h1>


                {/* form container */}
                <form onSubmit={handleSubmit(onSubmit)}>
    

                 {/* profile videos  */}
                 <div className="w-full px-5 py-5 my-2 [&>*]:my-4">
               

                <div>
                    <label htmlFor="Quote" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Your Videos</label>
                    <div className="flex">
                    <input type="url" id="videoUrl" {...register('videoUrl')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-[80%]"placeholder="Paste video URL here" />
                    <button className="bg-[#727272] py-1 px-3 md:px-5 md:py-3 rounded text-white mb-5 md:mb-0 mx-2">Add Video URL</button>
                    </div>
                </div>
                <p className='text-sm text-red-500'>{errors.videoUrl?.message}</p>
                <p className="text-sm">Paste the URL of a video that highlights your skills or showcase your work</p>


                </div>


                {/*profile videos  */}


                </form>
                {/* forn container */}



                {/* vidoes */}



                
                 {/* profile videos  */}
                 <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 flex">
               

                <div className="bg-[lightgray] py-20 px-20">
                 <h1>Video Thumbnail</h1>
                </div>


                <div className="px-3">
                    <h1 className="font-semibold">Video Title</h1>
                    <p>https://www.example.com/video1</p>

                <div className="flex w-full my-4">
                 <div className="border rounded py-1 px-1">
                 <MdEdit  className="text-2xl cursor-pointer" />
                 </div>

                <div className="border rounded py-1 px-1 mx-2">
                <RiDeleteBin6Line className="text-2xl cursor-pointer" />
                </div>
               
                </div>

                </div>
             


                </div>


                {/*profile videos  */}



                {/* videos */}
                
            </div>

        </section>
    )
}