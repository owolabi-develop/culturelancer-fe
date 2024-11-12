"use client"
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import * as z from 'zod';
import { profileVideo } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState} from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ProgressBar from "@ramonak/react-progress-bar";


type Inputs = z.infer<typeof profileVideo>


export default function ProfileVideo(){
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { register,reset, handleSubmit,formState: { errors } } = useForm<Inputs>({resolver:zodResolver(profileVideo)});
    const notify = () => {
        toast.success("Profile Video  Added!");
    }


   
    
    // handle form submition
  const onSubmit: SubmitHandler<Inputs> =  async data => {
    console.log(data)
    try{
        setIsLoading(true)
    const response =  await fetch(`/api/applicant-settings/profile-video/`,{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
});
 
if (response.ok){
    console.log("Profile Video  Added!")
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
                        completed={0} maxCompleted={100}
                         animateOnRender={true} 
                         transitionDuration='3s'
                         height='12px'
                         labelAlignment='outside'
                         bgColor='#354656'

                          />
                        {/* progress bar */}

                <p className="font-semibold text-[gray]">Profle Completion: %</p>

                <h1 className="my-3 font-extrabold text-2xl"> Profile Videos</h1>


                {/* form container */}
                <form onSubmit={handleSubmit(onSubmit)}>
    

                 {/* profile videos  */}
                 <div className="w-full px-5 py-5 my-2 [&>*]:my-4">
               

                <div>
                    <label htmlFor="Quote" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Your Videos</label>
                    <div className="flex">
                    <input type="url" id="videoUrl" {...register('videoUrl')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-[80%]"placeholder="Paste video URL here" />
                    <button className="bg-[#727272] py-1 px-3 md:px-5 md:py-3 rounded text-white mb-5 md:mb-0 mx-2" disabled={isLoading}>
                                                                   
                    {isLoading? 
                    (<>
                    <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    </>)
                    :'Add Video URL'}
                       
                        </button>
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