import Link from "next/link";
import { useParams } from "next/navigation";
import useSWR  from 'swr';
import Cookies from "js-cookie";
import Image from "next/image";
export function WelcomeHeader() {

  const {id} = useParams<{id:string}>();
  

  return (
    <section className="md:grid grid-cols-1 p-20 w-full justify-around">
      <div className="text-center m-auto [&>*]:my-4">
       {/* employer first and lastName */}

       <GetEmployerName/>

       {/* employer first and lastName */}

        {/* search input */}
        <div className="text-center">
            <div>
              <div className="flex justify-center">
    
                <button className="bg-[#727272]  rounded text-white mx-2 px-5 py-2 text-center flex items-center">
                <Link href={`/employer/dashboard/post-job/${id}`}>
                  Post a Job
                </Link>
                </button>
               
                <button className="bg-[#727272]  rounded text-white mx-2 px-5 py-2 text-center">Browser Talent</button>
              </div>
            </div>
        </div>
        {/* search input */}
      </div>

      {/* total jobs and applicant */}

      <div className="w-full md:grid md:grid-cols-3 gap-3">
        
        {/* total posted job */}

        <Totalpostedjobs/>

        {/* total posted jobs */}



        <Recomendedetalent/>


        <GetTotalApplication/>


      </div>

      {/* total jobs and applicant  */}

      {/* activities */}

      <div className="w-full md:flex">
        {/* recent activatie */}
        <div className="w-full md:w-[70%] px-5">
          <h1 className="text-2xl font-bold">Recent Activity</h1>

          {/* activate table */}
          <div className="bg-white drop-shadow-lg rounded w-full [&>*]:my-2 mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-left border-slate-100 [&>*]:py-3 [&>*]:px-5 rounded-full">
                  <th>Candidate</th>
                  <th>Job</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="text-left [&>*]:border-t-2 border-slate-100 [&>*]:py-3 [&>*]:px-5 rounded-full cursor-pointer hover:bg-slate-200 ">
                  <td className="flex w-full">
                    <div className="bg-gray-200 rounded-full w-10 h-10 mr-2"></div>
                    <div className="">
                      <p className="leading-10">Owolabi Akintan</p>
                    </div>
                  </td>
                  <td>Senior Developer</td>
                  <td>
                    <span className="py-1 px-1 bg-slate-100 rounded">Shortlisted</span>
                  </td>
                </tr>

                <tr className="text-left [&>*]:border-t-2 border-slate-100 [&>*]:py-3 [&>*]:px-5 rounded-full cursor-pointer hover:bg-slate-200 ">
                  <td className="flex w-full">
                    <div className="bg-gray-200 rounded-full w-10 h-10 mr-2"></div>
                    <div className="">
                      <p className="leading-10">Jane Smith</p>
                    </div>
                  </td>
                  <td>UX Designer</td>
                  <td>
                    <span className="py-1 px-1 bg-slate-100 rounded">Reviewed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* activate table */}

          {/* best candidate recommendations */}
          <h1 className="text-2xl font-bold my-8">Best Candidate Recommendations</h1>

           <CandidateRecommendations/>

          {/* best candidate recommendations */}
        </div>
        {/* recent activatie */}

        {/* job posting summary */}

        <div className="w-full md:w-[30%] px-5">
          <h1 className="text-2xl font-bold">Recent Job post Summary</h1>

          {/* summary */}

          <Jobpostsummary/>

          {/* summary */}

        </div>
        {/* job posting summary */}
      </div>

      {/* actitvites */}

      {/*  job performace chart */}

      <div className="w-full md:grid md:grid-cols-2 gap-3">
        <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
          <h1 className="font-bold text-xl my-2">Jobs Performace Over Time</h1>
          <div className="bg-slate-50 w-full rounded py-36 text-center">
            <h1>Line chart Job Views, Applications</h1>
          </div>
        </div>

        <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
          <h1 className="font-bold text-xl my-2">Candidate Applications</h1>
          <div className="bg-slate-50 w-full rounded py-36 text-center">
            <h1>Bar chart Applicant per Job</h1>
          </div>
        </div>
      </div>

      {/*  job performace chart */}
    </section>
  );
}




//  get total posted job
function Totalpostedjobs(){
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
 <div className="bg-slate-50 drop-shadow-lg rounded animate-pulse py-5 px-5 my-8">
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
     <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
          <h1 className="font-bold text-xl">Jobs Posted</h1>
          <h1 className="font-bold text-2xl">{data && data?.length}</h1>
        </div>
  </>
)

}


//  get total Recomendede talent

//  get total posted job
function Recomendedetalent(){
  const {id} = useParams<{id:string}>();
  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
         "Authorization":`Bearer ${Cookies.get("item")}`

      },
    }).then((r) => r.json());
const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/top-employer-candidates/${id}/`, fetcher)
console.log("status:",data)

if(isLoading){
    return <>
 <div className="bg-slate-50 drop-shadow-lg rounded animate-pulse py-5 px-5 my-8">
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
   <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
          <h1 className="font-bold text-xl">Best Recommended Telant</h1>
          <h1 className="font-bold text-2xl">{data && data?.length}</h1>
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
 <div className="bg-slate-50 drop-shadow-lg rounded animate-pulse py-5 px-5 my-8">
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
   
<div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
<h1 className="font-bold text-xl">Total Candidate Applied</h1>
<h1 className="font-bold text-xl">{data && data?.reduce((sum:number, job:{ applications?: string[] }) => sum + (job.applications?.length || 0), 0)}</h1>
</div>

  </>
)

}




//  get recent job post summary
function Jobpostsummary(){
  interface IJob {
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
  const {id} = useParams<{id:string}>();
  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
         "Authorization":`Bearer ${Cookies.get("item")}`

      },
    }).then((r) => r.json());
const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/employer-latest-post-job/${id}/`, fetcher)
console.log("recent job summary:",data)

if(isLoading){
    return <>
 <div className="bg-slate-50 drop-shadow-lg rounded animate-pulse py-5 px-5 my-8">
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
   {data && data.length > 0 ? data?.map((jobs:IJob)=>(
<div key={jobs?.id} className="bg-white drop-shadow-lg rounded w-full py-4 px-3 [&>*]:my-2 mt-4">
<h1 className="text-xl font-bold">{jobs.job_title}</h1>
<p>Posted: {jobs?.posted_date}</p>
<p>Candidate Applied: {jobs?.applications.length}</p>
<p> Status: {jobs.status}</p>
<div className="w-full md:w-[55%] flex justify-between">
<button className="bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
<Link href={`/employer/dashboard/edit-job/${jobs?.id}`}>Edit</Link></button>
<button className="bg-gray-200 py-2 px-4 rounded  hover:bg-gray-300">View Applications</button>
</div>
</div>
)):(
  <div className="w-full text-center py-5">
  <p className="text-gray-500 font-semibold">No Posted job</p>
</div>
)}

  </>
)

}



//  get profile first and last Name
function GetEmployerName(){
  const {id} = useParams<{id:string}>();
  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
         "Authorization":`Bearer ${Cookies.get("item")}`

      },
    }).then((r) => r.json());
const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/account/${id}/`, fetcher)
console.log("status:",data)

if(isLoading){
    return <>
 <div className="bg-slate-50 animate-pulse py-2 px-2 my-8 w-full">
    <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
   </div>
</>
}
if(error){
    return <div>fail to fetch data</div>
}

return (
  <>
   
   <h1 className="text-4xl font-bold w-full">Welcome, {data && data?.first_name?.toUpperCase()} {" "} {data && data?.last_name?.toUpperCase()}</h1>
   <p className="text-xl">Manage your job postings, review applications and connect with top Freelancers</p>

  </>
)

}



// employer Best Candidate Recommendations


function CandidateRecommendations(){
  interface ISkill {
    skill: string;
  }
  interface IRecomdation  {
    id:string,
    bio:string,
    profile_image:string,
    first_name:string,
    last_name:string,
    gender:string
    country:string,
    state:string,
    work_experience:string[],
    award_certifications:string[],
    tagline:string,
    title:string,
    educations:string[],
    skill: ISkill[],
    testimonies:string[],
    completion_percent:number

  }

  

  const {id} = useParams<{id:string}>();
  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
         "Authorization":`Bearer ${Cookies.get("item")}`

      },
    }).then((r) => r.json());
const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/top-employer-candidates/${id}/`, fetcher)
console.log("candidate recomendations:",data)

if(isLoading){
    return <>
 <div className="bg-slate-50 animate-pulse py-2 px-2 my-8 w-full md:grid grid-cols-2 gap-3 ">

  <div>
  <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
   <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
   <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
   <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
   <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
   <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
  </div>
   
   <div> 
    <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
   <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
   <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
   <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
   <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
   <div className='w-full bg-slate-300 py-1 rounded-full my-2'></div>
   </div>  

   </div>
</>
}
if(error){
    return <div>fail to fetch data</div>
}

return (
  <>
   <div className="space-y-3 w-full my-4 md:grid grid-cols-2 gap-3 md:space-y-0">

           {data && data.length > 0 ? data?.map((candidates:IRecomdation)=>(
            <div key={candidates?.id} className=" bg-white drop-shadow-lg py-3 px-4 [&>*]:my-3 rounded-md">
              <div className="flex">

                <div className="bg-slate-200 mr-3 rounded-full w-16 h-16 ">
                
                  <Image 
                  src={`${process.env.NEXT_PUBLIC_API_PROFILE_URL}${candidates?.profile_image}` || "/default_profile.jpeg"} 
                  alt={candidates?.first_name} 
                  width={40} 
                  height={40} 
                  className="rounded-full w-16 h-16" 
                  />
              
                </div>

                <div>
                  <h1 className="font-bold">{candidates?.first_name} {" "} {candidates?.last_name}</h1>
                  <p> Senior Developer</p>
                </div>
              </div>

              <p className="">
                Skills: {candidates?.skill?.map((options:ISkill)=>(<>{options.skill} {" "}</>))}
              </p>
              {/* <p>Experience: 5 years</p> */}

              <div className="w-full md:flex">
                <div className="w-full md:w-[55%]">
                  <h1 className="text-2xl font-bold">{candidates?.completion_percent}% Match</h1>
                </div>

                <div className="w-full flex justify-between">
                  <button className="bg-gray-200 py-2 px-4 rounded">
                    <Link href={`/employer/dashboard/candidate-profile/${candidates?.id}`}>View Profile</Link>
                  </button>
                  <button className="bg-black py-2 px-4 rounded text-white">Message</button>
                </div>
              </div>
            </div>
           )) :(
            <div className="w-full text-center py-5">
            <p className="text-gray-500 font-semibold">No Best Candidate Recommendations yet </p>
          </div>
           )}
            {/* candidate */}    
          </div>

  
  </>
)

}