"use client"
import { RiDeleteBin6Line } from "react-icons/ri";
import * as z from 'zod';
import useSWR from 'swr';
import { AwardCertificationSchema } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState,useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { fetchawardCertificate} from '@/app/libs/utils';
import ProgressBar from "@ramonak/react-progress-bar";
import { useParams } from "next/navigation";

type Inputs = z.infer<typeof AwardCertificationSchema>

type certificate = {
    id:string,
    title:string,
    issuing_organization:string,
    date_recieved: string


} 

export default function AwardCertification(){
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { register,reset,handleSubmit,formState: { errors } } = useForm<Inputs>({resolver:zodResolver(AwardCertificationSchema)});
    const [certificateDetails,setCertificateDetails] = useState<certificate[]>([])

     //  retrive  profle completion percent
   



    // fetch all certificate data
    useEffect(() => {
        const handlecertificatedetails = async () => {
        const data = await fetchawardCertificate();
        if (data !== null) {
            setCertificateDetails(data)
               console.log("certificate data",data)
            }
       
    }
    handlecertificatedetails();
    },[])

 // delete certificate 

 const notifydelete = () => {
    toast.success("Certification Deleted");
}

 const deleteCertificate = async (id: string) => {
    try {
        const response = await fetch(`/api/award-certificate/delete-certificate?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        if (response.ok) {
            setCertificateDetails((prevCertificates) =>
                prevCertificates.filter(certificate => certificate.id !== id)
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

 

    // handle toast bar
    const notify = () => {
        toast.success("Certification Added!");
    }
    // handle form submition
  const onSubmit: SubmitHandler<Inputs> =  async data => {
    console.log(data)
    try{
        setIsLoading(true)
    const response =  await fetch(`/api/applicant-settings/award-certification/`,{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
});
 
if (response.ok){
   const data = await response.json()
   console.log("certification award added",data)
   setCertificateDetails((prevCertificates) => [...prevCertificates, data]);
   
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
                        <input type="text" {...register('title')} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                        <p className="text-sm text-red-500">{errors.title?.message}</p>

                        </div>


                        <div>
                        <label htmlFor="IssuingOrganization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Issuing Organization</label>
                        <input type="text" {...register('issuing_organization')} id="Issuing Organization" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                        <p className="text-sm text-red-500">{errors.issuing_organization?.message}</p>

                        </div>


                        <div>
                        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date Recieved</label>
                        <input type="date" {...register('date_recieved')} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />

                        </div>

                        <div className="my-5">

                        <button type="submit" className="w-full bg-[#7e7d7d] rounded py-3 text-white" disabled={isLoading}>
                            
                        {isLoading? 
              (<>
  <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
              </>)
              :'Add award'}
                            </button>
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

                 {certificateDetails.map((certi)=>(

                <div key={certi.id} className="bg-[lightgray] w-full rounded py-3 px-3">

                    <div className="">

                    <h1 className="font-bold text-base">{certi.title}</h1>
                    
                    <div className="flex">

                    <div> 
                    <p className="text-sm">{certi.issuing_organization}</p>
                    <p className="text-sm">{certi.date_recieved}</p>
                    </div>

                    <div className="w-full flex flex-col items-end">
                    <div className="border rounded py-1 px-1 mx-2">
                <RiDeleteBin6Line className="text-2xl cursor-pointer"  onClick={ async () => deleteCertificate(certi.id)}/>
                </div>
                   </div>
                   </div>

                    </div>
                  
                </div>
                ))}
                {/* awards */}



    
                </div>


                {/* Your Awards & Certifications */}


 
            </div>

        </section>
    )
}






/// profile percent

function ProfilePercent(){
    const { id:profileId } = useParams();

    // get appliant profile
const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => r.json());
const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/applicant-profile-details/${profileId }/`, fetcher)
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
