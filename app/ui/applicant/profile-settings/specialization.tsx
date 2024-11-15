"use client"
import { RiDeleteBin6Line } from "react-icons/ri";

import * as z from 'zod';
import { specializationSchema } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState,useEffect} from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { fetchspecialization} from '@/app/libs/utils';
import useSWR from 'swr';
import { useParams } from "next/navigation";


type Inputs = z.infer<typeof specializationSchema >

type specializationstype = {
    id:string
    specialization:string,
    proficiency:number
}
export default function Specializations(){
   
   
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { register, reset, handleSubmit,formState: { errors } } = useForm<Inputs>({resolver:zodResolver(specializationSchema)});
    const [specializationDetails,setspecializationDetails] = useState<specializationstype[]>([])

    // handle toast bar
    const notify = () => {
        toast.success("Specialization Added!");
    }

    
    
    useEffect(() => {
        const handlespecialization = async () => {
        const data = await fetchspecialization();
        if (data !== null) {
            setspecializationDetails(data);
            }
       
    }
    handlespecialization();
    },[])


 const notifydelete = () => {
    toast.success("Specialization Deleted");
}

 const deletespecializations = async (id: string) => {
    try {
        const response = await fetch(`/api/specialization/delete-specialization?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        if (response.ok) {
            setspecializationDetails((prevspecializations) =>
                prevspecializations.filter(specialization => specialization.id !== id)
            );
            notifydelete()
            console.log("Certificate deleted:", data);
        } else {
            console.error("Failed to delete certificate:", data.error);
        }
    } catch (error) {
        console.error("Error deleting certificate:", error);
    }
};

    // handle form submition
  const onSubmit: SubmitHandler<Inputs> =  async data => {
    console.log(data)
    try{
        setIsLoading(true)
    const response =  await fetch(`/api/applicant-settings/specialization/`,{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
});
 
if (response.ok){
    console.log("Social profiles added")
    const data = await response.json()
    console.log("certification award added",data)
    setspecializationDetails((setspecialization) => [...setspecialization, data]);
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

              <ProfilePercent/>

                <h1 className="my-3 font-extrabold text-2xl"> Specialization</h1>


                {/* form container */}
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">

                    {/* forms input */}

                    <div className="my-2">
                    <label htmlFor="Specialization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Specialization</label>
                        <select id="Specialization" {...register('specialization')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ">
                        <option value="Web Developement">Web Developement</option>
                        <option value="Graphic Design">Graphic Design</option>
                        </select>
                        <p className="text-sm text-red-500">{errors.specialization?.message}</p>
                    </div>
                  

                    {/*  */}
                    <div className="mb-6">
                        <label htmlFor="proficiency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Proficiencys(%)</label>
                        <input type="text" {...register('proficiency',{valueAsNumber:true})} id="proficiency" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"placeholder="Enter Proficiency level"/>
                        <p className="text-sm text-red-500">{errors.proficiency?.message}</p>
                    </div> 
                    
                    {/* form input */}

                    <div className="md:flex">
                        <div className="md:w-full">
                        <button className="bg-[#727272] py-2 px-3 md:px-5 md:py-3 rounded text-white mb-5 md:mb-0" disabled={isLoading}>
                                                    
                                                        
                            {isLoading? 
                            (<>
                            <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                            </>)
                            :'Add Specialization'}
                            
                            </button>
                        </div>
                       
                        <div className="text-right w-full"><h1>Select your area of experties and indicate your proficiency level as a percentage</h1></div>
                    </div>


                </div>

              


                </form>
                {/* forn container */}


                {/* Added Specializations */}

                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 [&>*]:my-4">
                <p className="text-xl font-semibold my-2">Added Specializations</p>


                {/* Specializations */}

               
               {specializationDetails.map((spec)=>(
                <div key={spec.id} className="md:flex">
                        <div className="w-full">
                       <h1 className="font-semibold">{spec.specialization}</h1>
                       <p>Proficiency: {spec.proficiency}%</p>
                        </div>
                               
                {/* control */}

                <div className="md:flex md:w-full md:my-4 md:justify-end">
                
                <div className="border w-10 rounded md:py-1 md:px-1 mx-2">
                <RiDeleteBin6Line className="text-2xl cursor-pointer"  onClick={ async () => deletespecializations(spec.id) }/>
                </div>
               
                </div>
                          
                 {/* control */}
                     
                </div>
                
                // <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                 
                ))}
                  {/* Specializations */}




                <div>
              
                </div>



                </div>

                  {/* Added Specializations*/}


                
            </div>

        </section>
    )
}




/// profile percent

function ProfilePercent(){
    const {id} = useParams();

    // get appliant profile
const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => r.json());
const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/applicant-profile-details/${id}/`, fetcher)
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
