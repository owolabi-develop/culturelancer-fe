"use client"
import { useParams } from "next/navigation";
import useSWR  from 'swr';
import Cookies from "js-cookie";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";
import Link from "next/link";



export default function EmployerCandidateProfile(){
    const {id} = useParams<{id:string}>();

    interface SkillI {
        id:string,
        skill:string[]
        level:string
        
    }

    interface AllSkillI {
        id:string,
        skill:string
        level:string
        
    }

    interface ExperienceI {
        id:string
        title:string,
        company_name:string,
        present:boolean,
        description:string,
        start_date:string,
        end_date:string,
        location_type:string
    }

    interface CertificateI {
        id:string,
        issuing_organization:string,
        title:string,
        date_recieved:string

    }

    interface ProjectI {
        id:string,
        project_title:string,
        description:string,
        role:string,
        project_image:string,
        project_links_live_demo:string

    }

    const fetcher = (url: string) =>
        fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("item")}`,
          },
        }).then((r) => r.json());
    const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/employer-candidate-profile-details/${id}/`, fetcher)
    console.log("candidate details",data)
  
    if(isLoading){
        return <div className='bg-slate-50 drop-shadow-lg rounded-md animate-pulse'>
        {/* <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div> */}

        {/* candidate loading state */}

        
        {/* profile icon */}
<div className="rounded bg-white drop-shadow-lg px-16 w-full"> 

<div className='w-full flex flex-row my-2'>
                
<div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>

   {/* profile */}
   <div className="">
          
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div> 
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>

    </div>

  {/* profile */}


</div>


<div className='w-1/2 sm:w-10 p-2 justify-end md:w-[20%] cursor-pointer'>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div> 
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
</div>
</div>
</div>
{/* profile icon */}


        
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">
            {/* about applicant */}
            <h1 className="font-extrabold text-xl my-5">About</h1>
        <div className="w-full">
            <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div> 
            <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
         </div>
            {/* about applicant */}


            {/* experience */}

            <h1 className="font-extrabold text-xl my-5">Experience</h1>
               {/* exp */}
            <div className="w-full">
              
            <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div> 
            <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>

            </div>
             {/* exp */}

            {/* experience */}


            <h1 className="font-extrabold text-xl my-5">Skill & Expertise</h1>

          {/* Skill & Expertise  */}

          <div className="w-full md:grid md:grid-cols-4 gap-3">

          <div className="bg-white drop-shadow-lg rounded py-2 px-2 my-8">
          <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div> 
            <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div>
              

          </div>

          
         
          <div className="bg-white drop-shadow-lg rounded py-2 px-2 my-8">
          <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div> 
            <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div>
               

          </div>
          
        
          <div className="bg-white drop-shadow-lg rounded py-2 px-2 my-8">
          <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div> 
            <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div>
              

          </div>


          <div className="bg-white drop-shadow-lg rounded py-2 px-2 my-8">
          <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div> 
            <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-1'></div>
          </div>
              
    </div>

    {/* Skill & Expertise */}




    {/* Certificate & awards */}
    
<h1 className="font-extrabold text-xl my-5">Certificate & Awards</h1>



<div className="w-full md:grid md:grid-cols-3 gap-3">


<div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">

<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div> 
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    
</div>



<div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">

<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div> 
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>    

</div>


<div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">

    
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div> 
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>

</div>


    
</div>

 {/* certificate & awards */}




     {/* Portfolio */}
    
<h1 className="font-extrabold text-xl my-5">Portfolio</h1>



<div className="w-full md:grid md:grid-cols-3 gap-3">

<div className="bg-white drop-shadow-lg rounded my-8">
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div> 
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    
</div>



    
</div>

 {/* Portfolio */}

           


 <h1 className="font-extrabold text-xl my-5">Testimonial & Reviews</h1>


{/*Testimonial & Reviews*/}


<div className="w-full md:grid md:grid-cols-3 gap-3">
  
  <div className='bg-white drop-shadow-lg w-full rounded my-4'>
      
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div> 
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
<div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>

  </div>
  
{/*Testimonial & Reviews*/}

  
  </div>
 
  </section>


        {/* candidate loading state */}


    </div>
    }
    if(error){
        return <div>fail to fetch data</div>
    }

    


    return (
        <>

        {/* profile icon */}
<div className="rounded bg-white drop-shadow-lg px-16 w-full"> 

<div className='w-full flex flex-row my-2'>
                
<div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>

   {/* profile */}
   <div className="">
          
        <div className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3 relative">
    
            <div className='bg-[#cccbc8] rounded-full w-24 h-24'>
            <Image
                    src={`${process.env.NEXT_PUBLIC_API_PROFILE_URL}${data?.profile_image}` || "/default_profile.jpeg"} 
                    alt="profile pic"
                    width={100}
                    height={40}
                    className='rounded-full w-24 h-24'
                    priority 
                    
                    />
            </div>

                <div className="">
                    <h1 className='font-bold text-2xl'>{data?.first_name} {data?.last_name}</h1>
                    <p className='font-semibold text-xl'>{data?.title}</p>
                    <p className='font-semibold text-base'>{data?.country} {data?.state}</p>
                    <p className='font-bold text-sm'>Open to Opportunities</p>

                </div>
            </div>

        </div>

  {/* profile */}


</div>


<div className='w-1/2 sm:w-10 p-2 justify-end md:w-[20%] cursor-pointer'>
    {/* progress bar */}
    <ProgressBar 
        completed={data?.completion_percent} maxCompleted={100}
            animateOnRender={true} 
            transitionDuration='3s'
            height='13px'
            bgColor='#354656'
            
            />
    <p className='my-2'>Profile {data?.completion_percent}% complete</p>
        {/* progress bar */}

        <div className='[&>*]:py-1 [&>*]:px-1 [&>*]:mx-2 [&>*]:bg-gray-400 [&>*]:rounded-full my-3 [&>*]:text-sm'>
                                 {data?.skill.slice(0, 2)?.map((options:SkillI)=>(<span key={options.id}>{options.skill}</span> ))}
                                
                                <span>React</span>
                                <span>Figma</span>
        </div>
</div>
</div>

</div>
{/* profile icon */}


        
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">
            {/* about applicant */}
            <h1 className="font-extrabold text-xl my-5">About</h1>
            <div className="w-full">
                
                <p className="break-all">
                    {data?.bio}
                </p>

                <div className="my-4">
                    <button className="bg-[gray] py-3 px-4 rounded">Message Candidate</button>
                    <button className="border py-3 px-4 rounded mx-2">Invite to Apply</button>
                    
                </div>

            </div>

            {/* about applicant */}


            {/* experience */}

            <h1 className="font-extrabold text-xl my-5">Experience</h1>

            <div className="w-full">
                {/* exp */}
                {data?.work_experience ? (<>
                {data?.work_experience?.map((exp:ExperienceI)=>(
                <div key={exp?.id} className='bg-white drop-shadow-lg w-full rounded my-4'>

                <div className='w-full border-b-2 py-4 px-4'>
                <h1>{exp?.title}</h1>
                <p>{exp?.company_name} | {exp.start_date} - {exp.present === true ? "Present":""}</p>
                </div>
                <div className="px-10 py-4">
                    <p className="break-all w-[70%]">
                        {exp?.description}

                    </p>

                </div>

                </div>
                ))}
               </>):(<p className="my-10 mx-10 text-2xl text-gray-500">No Experience</p>)}
                 {/* exp */}



            </div>

            {/* experience */}


            <h1 className="font-extrabold text-xl my-5">Skill & Expertise</h1>

          {/* Skill & Expertise  */}

          <div className="w-full md:grid md:grid-cols-4 gap-3">
            {data?.skill ? (<>
           {data?.skill.slice(0,4)?.map((skills:AllSkillI)=>(
          <div key={skills?.id} className="bg-white drop-shadow-lg rounded py-4 px-4 my-8">
                {/* progress bar */}
              <div className="flex justify-between">
              <p className='my-2'>{skills.skill}</p>
              <p className='my-2'>{skills.level}</p>
              </div>
        {/* progress bar */}

          </div>
          ))}</>):(<p className="my-10 mx-10 text-2xl text-gray-500">No Skills</p>)}

        

              
    </div>

    {/* Skill & Expertise */}




    {/* Certificate & awards */}
    
<h1 className="font-extrabold text-xl my-5">Certificate & Awards</h1>



<div className="w-full md:grid md:grid-cols-3 gap-3">
   {data?.award_certifications ? (<>
    {data?.award_certifications?.map((certi:CertificateI)=>(

<div key={certi?.id} className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">

    <h1 className="font-semibold text-xl">{certi?.title}</h1>
    <div className="my-5">
    <p>{certi?.issuing_organization}</p>
    Recieved: {certi?.date_recieved}
    </div>
   

    <button className="py-2 border px-10 rounded">View Certificate</button>
    
</div>

))}
</>):(<p className="my-10 mx-10 text-2xl text-gray-500">No Certifications</p>)}
    
</div>

 {/* certificate & awards */}




     {/* Portfolio */}
    
<h1 className="font-extrabold text-xl my-5">Portfolio</h1>



<div className="w-full md:grid md:grid-cols-3 gap-3">
 { data?.projects ? (<>
   {data?.projects?.map((proj:ProjectI)=>(

<div key={proj?.id} className="bg-white drop-shadow-lg rounded my-8">
    <div className="rounded-t-lg text-center">
            {proj?.project_image ? (
            <Image
            src={`${process.env.NEXT_PUBLIC_API_PROFILE_URL}${proj?.project_image}`}
            alt="profile pic"
            width={100}
            height={20}
            className="w-full h-48"
            priority
            />
            ) : (
            <p className="my-10 mx-10 text-2xl text-gray-500">No Project Image</p>
            )}
    </div>

    <div className="px-5 py-4">
        <h1 className="my-3 font-bold">{proj?.project_title}</h1>

        <p> {proj?.description}</p>

        <button className="py-1 rounded border px-4 my-3"><Link href={proj?.project_links_live_demo}>View Project</Link></button>
    </div>

    

</div>

))}
</>):(<p className="my-10 mx-10 text-2xl text-gray-500">No Portfolio </p>)}
    
</div>

 {/* Portfolio */}

           


 <h1 className="font-extrabold text-xl my-5">Testimonial & Reviews</h1>


{/*Testimonial & Reviews*/}


<div className="w-full md:grid md:grid-cols-3 gap-3">
  
  <div className='bg-white drop-shadow-lg w-full rounded my-4'>
      <div className='w-full flex py-3 px-3 my-5'>
          <div className=' rounded-full w-16 h-16 bg-slate-200 mr-2'></div>
          <div>
              <h1 className='leading-7 font-bold'>John Doe</h1>
              <p className='font-semibold'>Product Manager</p>
          </div>
      </div>
      
      
  </div>
  </div>





 
  </section>
  </>

    ) 
}