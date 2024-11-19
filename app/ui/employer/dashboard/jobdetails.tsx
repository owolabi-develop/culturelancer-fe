"use client";

import { CiLocationOn } from "react-icons/ci";
import { BsSuitcaseLg } from "react-icons/bs";
import { FaRegCalendarMinus } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { useParams } from "next/navigation";
import useSWR,{ useSWRConfig } from 'swr';
import Cookies from "js-cookie";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation'
import Link from "next/link";

 


export default function JobDetails() {
  const {id} = useParams<{id:string}>();
  console.log("jodid",id)

  return ( <>
  
      <ToastContainer />
     
      {/* header */}
      <GetJobDetails id={id}/>
             
        </>
      
)
}


function GetJobDetails({id}:{id:string}){
  const { mutate } = useSWRConfig()
  const router = useRouter()
  
  const closedJobnotify = () => {
    toast.info("Job closed");
}


  //  delete job
  const deletejob = async (id: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/job/${id}/`, {
            method: 'DELETE',
            headers: {
              "Content-Type": "application/json",
             "Authorization":`Bearer ${Cookies.get("item")}`
            },
        });

        if (response.status == 204) {
          router.push(`/employer/dashboard/jobs/${Cookies.get("user_id_item")}`)
          console.log("job deleted")
         
          
        } else {
            console.error("Failed to delete job:", data.error);
        }
    } catch (error) {
        console.error("Error deleting job:", error);
    }
  }


  const closejob = async (id: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/job/${id}/`, {
            method: 'PATCH',
            headers: {
              "Content-Type": "application/json",
             "Authorization":`Bearer ${Cookies.get("item")}`
            },
            body: JSON.stringify({status:"closed"}),
        });

        if (response.ok) {
          closedJobnotify() 
          mutate(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/job/${id}/`)
         
     
        } else {
            console.error("Failed to closed job:", data.error);
        }
    } catch (error) {
        console.error("Error closed job:", error);
    }
  }

  // handle close job


  //  get employer jobs
  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
         "Authorization":`Bearer ${Cookies.get("item")}`

      },
    }).then((r) => r.json());
const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/job/${id}/`, fetcher)
console.log("result:",data)

if(isLoading){
    return <div className='bg-slate-50 drop-shadow-lg rounded-md animate-pulse py-1 px-4 my-5'>
  

    {/* loading state */}  
<div className="w-full">

<section className="p-1 px-4 w-full "> 
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
 
</section>
</div>
{/* header */}


<section className="md:grid grid-cols-1 p-20 w-full justify-around"> 
{/* job details */}

<div className="w-full md:flex">
 <div className="w-full md:w-[60%] px-5"> 
   <div className="bg-white drop-shadow-lg rounded w-full [&>*]:my-2 mt-4 py-2 px-3">
   <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
   </div>
   {/* job descriptions */}
   

   {/* top candidate  candidate */}

   <div className="bg-white drop-shadow-lg rounded w-full [&>*]:my-2 mt-4 py-2 px-3"> 
    <h1 className="font-bold">Top Candidate Matches</h1>

   {/* candidate profile */}
   <div className="w-full bg-slate-50 rounded md:flex py-2 px-4 [&>*]:mx-1">
       <div className="rounded-full bg-gray-300 w-16 h-16 "></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
     </div>
   {/* candidate profile */}
   </div>

   {/* top candidate  candidate */}
 </div>

 {/* job performace */}

 <div className="w-full md:w-[40%] px-5 md:grid grid-cols-1 ">
   {/* summary */}

   <div className="bg-white drop-shadow-lg rounded w-full py-4 px-4 [&>*]:my-3 mt-4">
   <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
   </div>
   {/* job performace */}


   {/* job actions */}

   <div className="bg-white drop-shadow-lg rounded w-full py-4 px-3 [&>*]:my-2 mt-4">
   <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
   </div>
   {/* job actions */}

   {/* summary */}
 </div>
 {/* job performace */}
</div>

{/* job details */}
</section>


    {/* loading state */}
   
    
</div>
}
if(error){
    return <div>fail to fetch data</div>
}

return (
  <>

<div className="w-full border border-b-2">

<section className="p-10 px-24 w-full"> 
  <div> 
    <h1 className="text-3xl font-extrabold">{data && data?.job_title}</h1>

   <div className="flex my-2 text-gray-400 w-full">
     <CiLocationOn className="text-xl  text-black" />
     <p className="mr-2">{data && data?.location_type?.map((loca:string)=>(<>{loca} {" "}</>))}</p>
     <HiOutlineCurrencyDollar className="text-xl text-black" />{" "}
     <p className="ml-2 mr-2 text-sm">
      {data && data.minimum_budget} - {data && data.maximum_budget}
     </p>
     <BsSuitcaseLg className="text-xl  text-black" />
     <p className="ml-2 mr-2">{data && data?.job_type?.map((loca:string)=>(<>{loca} {" "}</>))}</p>
     <IoIosCheckmarkCircleOutline className="text-xl  text-black" /> <p className="ml-2 mr-2">
     {data && data?.experience_levels.map((loca:string)=>(<>{loca} {" "}</>))}
     </p>
     <FaRegCalendarMinus className="text-xl text-black" /> <p className="ml-2 mr-2">Posted on: {data && data?.posted_date} </p>
   </div>
 </div> 

 <div className="text-right">
   <span className="bg-gray-100 rounded-full py-1 px-1 font-semibold text-sm"></span>
 </div>
</section>
</div>
{/* header */}


<section className="md:grid grid-cols-1 p-20 w-full justify-around"> 
{/* job details */}

<div className="w-full md:flex">
 <div className="w-full md:w-[60%] px-5"> 
   <div className="bg-white drop-shadow-lg rounded w-full [&>*]:my-2 mt-4 py-2 px-3">
     <h1 className="font-bold">Job Descriptions</h1>
      <p></p> 
     <p>Responsibilities:</p>
     <p className=" break-words">
      {data && data?.description}
     
     </p> 

     <button className="bg-gray-200 py-2 px-4 rounded">Improve with AI</button>
   </div>
   {/* job descriptions */}

   {/* top candidate  candidate */}

   <div className="bg-white drop-shadow-lg rounded w-full [&>*]:my-2 mt-4 py-2 px-3"> 
    <h1 className="font-bold">Top Candidate Matches</h1>

   {/* candidate profile */}
   <div className="w-full bg-slate-50 rounded md:flex py-2 px-4 [&>*]:mx-1">
       <div className="rounded-full bg-gray-300 w-16 h-16 "></div>
       <div className="">
         <h1>John Doe</h1>
         <p>95% Match 7 years exp. San Francisco, CA</p>
         <div className="[&>*]:bg-gray-200 [&>*]:py-1 [&>*]:rounded-full [&>*]:mx-2 [&>*]:px-2 my-2 flex">
           <span>Javascript</span>
           <span>React</span>
           <span>Node.js</span>
         </div>
       </div>

       <div className="[&>*]:my-3 [&>*]:mx-1">
         <button className="border py-1 px-2 rounded">View Profile</button>
         <button className="border py-1 px-2 rounded">Message</button>
         <button className="bg-gray-200 py-1 px-2 rounded">Shortlist</button>
       </div>
     </div>
   {/* candidate profile */}
   </div>

   {/* top candidate  candidate */}
 </div>

 {/* job performace */}

 <div className="w-full md:w-[40%] px-5 md:grid grid-cols-1 ">
   {/* summary */}

   <div className="bg-white drop-shadow-lg rounded w-full py-4 px-4 [&>*]:my-3 mt-4">
     <h1 className="text-xl font-bold">Job Performace</h1>

     <div className="w-full">
       <p className="text-sm">Total Views</p>
       <h1 className="text-xl font-bold">0</h1>
     </div>

     <div className="w-full">
       <p className="text-sm">Total Applications</p>
       <h1 className="text-xl font-bold">{data?.applications.length}</h1>
     </div>

     <div className="w-full">
       <p className="text-sm">Interview Request Sent</p>
       <h1 className="text-xl font-bold">0</h1>
     </div>

     <div className="w-full">
       <p className="text-sm">Hire Made</p>
       <h1 className="text-xl font-bold">0</h1>
     </div>
   </div>

   {/* job actions */}

   <div className="bg-white drop-shadow-lg rounded w-full py-4 px-3 [&>*]:my-2 mt-4">
     <h1 className="text-xl font-bold">Job Actions</h1>

     <div className="w-full [&>*]:w-full [&>*]:my-3 ">
       <button className="bg-gray-200 py-2 px-4 rounded">
        <Link href={`/employer/dashboard/edit-job/${data?.id}`}>Edit Job</Link> 
        </button>
       {data?.status === "closed" ?(<></>):(<>
        <button className="border py-2 px-4 rounded" onClick={async ()=> closejob(data?.id)}>
         Close Job
       </button>
       </>)}
      
       <button className="border py-2 px-4 rounded bg-red-500 text-white hover:bg-red-600" onClick={ async () => deletejob(data?.id)}>
         Delete Job
       </button>
     </div>
   </div>
   {/* job actions */}

   {/* summary */}
 </div>
 {/* job performace */}
</div>

{/* job details */}
</section>
   
  
  </>
)

}
