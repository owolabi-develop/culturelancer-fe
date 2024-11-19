"use client";
import { FaRegCalendarMinus } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import Link from "next/link";
import useSWR,{ useSWRConfig } from 'swr';
import { useState } from 'react';
import Cookies from "js-cookie";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export interface IJob {
  posted_date:string,
  id:string,
  job_title: string;
  location_type: string[];
  payments_terms: string;
  minimum_budget: string;
  maximum_budget: string;
  job_type: string[];
  job_category: string;
  years_of_experience: number;
  description: string;
  applications:[],
  job_ready: boolean;
  skills: string[];
  experience_levels: string[];
  status: string;
}

export function Jobs() {
    
  const [searchTerm, setSearchTerm] = useState('');
 

  return (
    <section className="md:grid grid-cols-1 p-20 w-full justify-around">
       <ToastContainer/>
      <div className=" [&>*]:my-4">
        <h1 className="text-4xl font-bold w-full">Manage Posted Projected</h1>
        <p>Dashboard / Posted Project</p>
        <p className="text-sm">
          Review the best candidate who match your job postings. Sort,filter, and take action to shortlist or message candidates
        </p>

        {/* search input */}
        <div className="">
          <form>
            <div>
              <div className="flex">
                <input
                  type="search"
                  id="CurrentMayor"
                  name="Quote"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-[90%] focus:border-gray-50"
                  required
                  placeholder="Search jobs by title, Location, Experience, Skills"
                  onChange={e=> setSearchTerm(e.target.value)}
                />
                <div>
                  <select name="filter" id="sorted" className="bg-gray-50  border-gray-300 text-gray-900 text-sm rounded-lg py-3 mx-2">
                    <option value="Latest">
                      Filter
                    </option>
                    <option value="Latest">
                      Latest
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* search input */}
      </div>

      {/* overall job performance  */}
      
     

      <div className="w-full bg-white drop-shadow-lg px-4 rounded-lg">
        <h1 className="my-1"> Overall Performance</h1>
     
        <div className="w-full md:grid md:grid-cols-4 gap-3 ">
         {/* total application */}
      <GetTotalApplication/>
       {/* total application */}
        
          <GetJobStatus/>

          <div className="bg-gray-100 rounded py-5 px-5 my-2">
            <h1 className="font-bold text-sm">Avg Candidate Match</h1>
            <h1 className="font-bold text-xl">78%</h1>
          </div>
        </div>
      </div>

      {/* overall job performance  */}

      < PerFormJobSearch searchTerm={searchTerm}/>

       

      <div className="w-full my-5">
        <div>
          <h1> Showing 1 of 1 entries</h1>
        </div>

        <div className="flex"></div>
      </div>
    </section>
  );
}


// persom job search
function PerFormJobSearch({searchTerm}:{searchTerm:string}){
  const { mutate } = useSWRConfig()

  const closedJobnotify = () => {
    toast.info("Job closed");
}

  const apiUrl = searchTerm
  ? `job/?search=${searchTerm}`
  : 'job/';


  //  get employer jobs
  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
         "Authorization":`Bearer ${Cookies.get("item")}`

      },
    }).then((r) => r.json());
const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/${apiUrl}`, fetcher)
console.log("result:",data)


if(isLoading){
    return <div className='bg-slate-50 drop-shadow-lg rounded-md animate-pulse py-1 px-4 my-5'>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
</div>
}
if(error){
    return <div>fail to fetch data</div>
}



//  handle close jobs

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
        mutate(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/${apiUrl}`)
        mutate(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/get-employer-job-status/`)
       
   
      } else {
          console.error("Failed to closed job:", data.error);
      }
  } catch (error) {
      console.error("Error closed job:", error);
  }
}

// handle close job

return (
  <>
      {/* sample jobs */}
      {data && data.length > 0 ? data?.map((jobs:IJob)=>(
     
      <div key={jobs.id} className="w-full  bg-white drop-shadow-lg rounded-lg my-3">
            {/* top header */}
            <div className="md:grid grid-cols-2  w-full p-4 pt-3">
              <div className="w-[88%]">
                <h1 className="font-bold">{jobs?.job_title}</h1>
                {/* dates posted and location */}
                <div className="flex [&>*]:mr-1 my-2 items-center">
                  <FaRegCalendarMinus className="text-xl" /> <p>{jobs?.posted_date}</p>
                 
                    <div className="flex items-center">
                      <IoLocationSharp className="text-xl ml-3" /> <p>{jobs?.location_type.map((loca)=>(<>{loca} {" "}</>))}</p>
                    </div>
                
                </div>
                {/* dates posted and location */}

                {/* control btn */}

                <div className="[&>*]:my-2 [&>*]:mr-2 md:[&>*]:my-0">
                  <button className="border py-1 px-3 rounded">
                  <Link href={`/employer/dashboard/job-details/${jobs.id}`}>View Job</Link>
                  </button>
                  <button className="border py-1 px-3 rounded hover:cursor-pointer">
                    <Link href={`/employer/dashboard/job-details/${jobs.id}`}>View Applications</Link>
                  </button>
                  {jobs.status === "active" && (<>
                    <button className="bg-slate-100 rounded py-1 px-3 hover:bg-slate-200" onClick={ async ()=> closejob(jobs.id) }>
                    Close Job
                  </button>
                  </>)}
                 
                </div>
                {/* control btn */}
              </div>

              {/* left control */}
              <div className="md:text-right my-2 md:my-0">
                {jobs.status === "active" ? (<>
                  <span className="font-bold bg-green-400 rounded-full py-1 px-1 text-white">{jobs.status}</span>
                </>):(<>
                  <span className="font-bold bg-red-500 rounded-full py-1 px-1 text-white">{jobs.status}</span>
                
                </>)}
                

                <div className="flex md:justify-end my-4">
                  <BsExclamationCircle className="text-xl mr-2" />
                  <p>{jobs?.applications.length} candidate applied</p>
                </div>
              </div>

              {/* left control */}
              
            </div>
            {/* top header */}

            {/* bottom container */}
{/* 
            <div className="w-full bg-slate-50 rounded-b-lg py-3 mt-5 px-2">
              <h1>Top Candidates Matches</h1>

              <div className="md:grid grid-cols-2 mt-3 ">
                <div className="w-full md:w-[80%] flex">
                  <div className="bg-gray-200 rounded-full w-14 h-14 mr-2"></div>

                  <div>
                    <h1 className="font-bold">James Bond</h1>
                    <p>8 year Experience | New York, NY</p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-end">
                    <p className="font-bold mr-3 leading-9">95% Match</p>
                    <button className="bg-white border rounded py-1 px-2 mr-3 ">View Profile</button>
                    <button className="bg-gray-200 rounded py-1 px-2">message</button>
                  </div>
                </div>
              </div>

            </div> */}
          </div>
          )):(
            <div className="w-full text-center py-5">
            <p className="text-gray-500 font-semibold">No jobs found</p>
          </div>
          )}

      {/* sample jobs */}
  
  </>
)

}


// close and active jobs

function GetJobStatus(){
    //  get employer jobs status
    const { mutate } = useSWRConfig()

    const fetcher = (url: string) =>
      fetch(url, {
        headers: {
          "Content-Type": "application/json",
           "Authorization":`Bearer ${Cookies.get("item")}`
        },
      }).then((r) => r.json());
  const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/get-employer-job-status/`, fetcher)
  console.log("status:",data)
  mutate(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/get-employer-job-status/`)
  
  if(isLoading){
      return <>
   <div className="bg-slate-50 drop-shadow-lg rounded-md animate-pulse py-1 px-4 my-5">
      <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
      <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
      <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
      <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
      
       </div>

    <div className="bg-slate-50 drop-shadow-lg rounded-md animate-pulse py-1 px-4 my-5">
       <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
      <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
      <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
      <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
     </div>
 </>
  }
  if(error){
      return <div>fail to fetch data</div>
  }

  return (
    <>
      <div className="bg-gray-100 rounded py-5 px-5 my-2">
            <h1 className="font-bold text-sm">Active Jobs</h1>
            <h1 className="font-bold text-xl">{data?.active}</h1>
          </div>

          <div className="bg-gray-100 rounded py-5 px-5 my-2">
            <h1 className="font-bold text-sm">Closed Jobs</h1>
            <h1 className="font-bold text-xl">{data?.closed}</h1>
        </div>
    </>
  )

}




//  get total applications
function GetTotalApplication(){
  //  get employer jobs status
  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
         "Authorization":`Bearer ${Cookies.get("item")}`

      },
    }).then((r) => r.json());
const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/job/`, fetcher)
console.log("status:",data)

if(isLoading){
    return <>
 <div className="bg-slate-50 drop-shadow-lg rounded-md animate-pulse py-1 px-4 my-5">
    <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
     </div>
</>
}
if(error){
    return <div>fail to fetch data</div>
}

return (
  <>
     <div className="bg-gray-100 rounded py-5 px-5 my-2">
            <h1 className="font-bold text-sm">Total Applications</h1>
            <h1 className="font-bold text-xl">{data && data?.reduce((sum:number, job:{ applications?: string[] }) => sum + (job.applications?.length || 0), 0)}</h1>
    </div>

  </>
)

}






