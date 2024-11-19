"use client"
import Link from 'next/link'
import { IoMdAdd } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
// import * as z from 'zod';
import Image from 'next/image'
import axios from "axios";
import { useRouter } from 'next/navigation'
import useSWR from 'swr';
import { useParams } from "next/navigation";

import Cookies from "js-cookie";

export  function ApplicantUserProfile(){
  

    return (
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">

                {/* profile icon */}
                <ProfileDetailsContainer/>
                    
                {/* profile icon */}


        <div className='profile-details md:flex mt-10 w-full justify-between'>

            <div className='space-y-6 md:w-[68%] md:flex flex-col'>
                {/* applicant experience */}

                <ExperienceContainer/>

               {/* applicant experience */}


               {/* applicant education */}
  
                <EducationContainer/>


                {/*  applicant skill */}

                <SkillContainer/>
  



             {/* aproject Container */}

             <ProjectsContainer/>



            </div>
{/*  complete section*/}



{/* certification and testimonial session */}


        <div className='space-y-5 md:w-[30%] md:flex flex-col '>
                    {/* certificate */}
                    <CertificateContainer/>
               
                {/* certificate */}



                {/* testimonial */}

                <div className='bg-white drop-shadow-lg w-full p-3 rounded'>
                    <h1 className='text-2xl font-bold md:text-2xl block text-black'>Testimonials</h1>

                    <div className='py-3 px-4 bg-[#efefef] rounded my-5'>

                    <p className='py-1 px-2 text-black'>John is a execptional ui designer with a keen eye for details</p>

                    {/* testinonials profile  */}

                    <div className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3">
                    <div className='bg-[#cccbc8] rounded-full w-14 h-14'></div>
                        <div className="text-left">
                            <h1>John Doe</h1>
                            <h2>software Engineer</h2>
                        </div>
                    </div>
                      {/* testinonials profile  */}
                    
                    </div>

                    <div className='px-3'>
                    <Link href="/hire"> <button className="border rounded py-1 px-2">Request testimonial</button></Link>
                    </div>
                </div>




            </div>




        </div>
    </section>
    
    )

}

/// ExperienceContainer

function ExperienceContainer(){
    const {id} = useParams<{id:string}>();

    type ExperienceI = {
        id:string,
        title:string,
        company_name:string,
        location_type:string,
        description:string,
        start_date:string,
        end_date:string,

    }
    const fetcher = (url: string) =>
        fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("item")}`,
          },
        }).then((r) => r.json());
    const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/applicant-work-experience/`, fetcher)
  
    if(isLoading){
        return <div className='bg-slate-50 drop-shadow-lg rounded-md animate-pulse py-1 px-4'>
            <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
            <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        </div>
    }
    if(error){
        return <div>fail to fetch data</div>
    }
    console.log(data)
    return (
    <>
      {/* applicant experience */}
      <div className='bg-white drop-shadow-lg w-full p-3 rounded'>
                    {/* add experience header */}
                  
                     <div className='w-full flex flex-row'>

                        <div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>
                        <h1 className='text-2xl font-bold'>Experience</h1>
                        </div>
                        
                        <div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full cursor-pointer'>
                        <Link href={`/applicant/settings/experience-education/${id}`}>
                        <IoMdAdd className='text-3xl' />
                        </Link>
                        </div>
                    </div>

{/* addd experience */}

 
{/* experience timeline */}
<div>
    
<ol className="relative border-s border-gray-200 dark:border-gray-700">  
    {data && data.map((exp:ExperienceI)=>(               
    <li key={exp.id} className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.company_name}</h3>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</p>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{exp.start_date} - {exp.end_date}</p>
       
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{exp.description}</p>
    </li>
    ))} 
  
</ol>

</div>

 {/*  experiencetimeline */}
                    
    </div>
    </>)
}



///  EducationContainer

function EducationContainer(){
    const {id} = useParams<{id:string}>();

    type EducationI = {
        id:string,
        institution_name:string,
        degree:string,
        field_of_study:string,
        start_date:string,
        end_date:string,
        gpa:number,
       

    }
    const fetcher = (url: string) =>
        fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("item")}`,
          },
        }).then((r) => r.json());
    const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/applicant-education/`, fetcher)
  
    if(isLoading){
        return <div className='bg-slate-50 drop-shadow-lg rounded-md animate-pulse py-1 px-4'>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    </div>
    }
    if(error){
        return <div>fail to fetch data</div>
    }
    console.log(data)
    return (
    <>
      {/* applicant experience */}
      <div className='bg-white drop-shadow-lg w-full p-3 rounded'>
                    {/* add experience header */}
                  
                     <div className='w-full flex flex-row'>

                        <div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>
                        <h1 className='text-2xl font-bold'>Education</h1>
                        </div>
                        
                        <div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full cursor-pointer'>
                        <Link href={`/applicant/settings/experience-education/${id}`}>
                        <IoMdAdd className='text-3xl' />
                        </Link>
                        </div>
                    </div>

{/* addd experience */}

 
{/* experience timeline */}
<div>
    
<ol className="relative border-s border-gray-200 dark:border-gray-700">  
    {data && data?.map((edu:EducationI)=>(               
    <li key={edu.id} className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.institution_name}</h3>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">{edu.field_of_study}</p>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{edu.start_date} - {edu.end_date}</p>
       
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{edu.gpa}</p>
    </li>
    ))} 
  
</ol>

</div>

 {/*  experiencetimeline */}
                    
    </div>
    </>)
}


/// certificate container
function CertificateContainer(){
    const {id} = useParams<{id:string}>();
    type CertificateI = {
        id:string,
        title:string,
        date_recieved:string,
        issuing_organization:string

    }
    const fetcher = (url: string) =>
        fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("item")}`,
          },
        }).then((r) => r.json());
    const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/applicant-award-certifications/`, fetcher)
  
    if(isLoading){
        return <div className='bg-slate-50 drop-shadow-lg rounded-md animate-pulse py-1 px-4'>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    </div>
    }
    if(error){
        return <div>fail to fetch data</div>
    }
    console.log(data)

    return (
        <>
         <div className='bg-white drop-shadow-lg w-full p-3 rounded flex-none'>
                    <h1 className='text-2xl font-bold md:text-2xl block text-black'>Certification</h1>

                    {data && data?.map((certi:CertificateI)=>(
                    <div key={certi.id} className='py-3 px-4'>
                    {/* certificate container  */}
                     
                    <div  className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3 border-t-2">
                        
                    <div className='bg-[#cccbc8] rounded-full w-12 h-12 leading-10 py-2 px-2'>
                    <IoCheckmarkCircleOutline className='text-3xl'/>
                    </div>
                        <div className="text-left">
                            <h1>{certi.title}</h1>
                            <h1>{certi.issuing_organization}</h1>
                            <h2>{certi.date_recieved}</h2>
                        </div>
                    </div>
                   
                      {/* certificate container  */}

                    </div>
                    ))}



                    <div className='px-3'>
                    <Link href={`/applicant/settings/awards-certifications/${id}`}> <button className="border rounded py-1 px-2">Add Certificate</button></Link>
                    </div>

                </div>
        
        </>
    )
}


//  skill container 

function SkillContainer(){
    const {id} = useParams<{id:string}>();

    type SkillI = {
        id:string,
        level:string,
        skill:string,
    }
    const fetcher = (url: string) =>
        fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("item")}`,
          },
        }).then((r) => r.json());
    const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/applicant-skills/`, fetcher)
  
    if(isLoading){
        return <div className='bg-slate-50 drop-shadow-lg rounded-md animate-pulse py-1 px-4'>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    </div>
    }
    if(error){
        return <div>fail to fetch data</div>
    }
    console.log(data)
    return (
    <>
     {/* Applicant skill */}
  <div className='bg-white drop-shadow-lg w-full rounded p-3 py-5'>
                    {/* add project header */}

                    <div className='w-full flex flex-row'>

                        <div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>
                        <h1 className='text-2xl font-bold'>Skills</h1>
                        </div>
                        <div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full cursor-pointer'>
                        <Link href={`/applicant/settings/experience-education/${id}`}>
                        <IoMdAdd className='text-3xl' />
                        </Link>
                        </div>
                        </div>


                     {/* add project header */}



                    {/* skills */}
                   
                    <div className='w-full overflow-hidden [&>*]:font-bold [&>*]:py-2 [&>*]:px-[0.35rem] md:[&>*]:py-2 md:[&>*]:px-[0.35rem] [&>*]:my-1 [&>*]:mx-1 md:[&>*]:my-1 md:[&>*]:mx-1  '>
                    {data && data?.map((skills:SkillI)=>(
                        <button key={skills.id} className='bg-[lightgray] rounded-full'> {skills.skill}-{skills.level}</button>
                    ))}
                        
                        </div>
                       
                                  
                         {/* skills */}



                </div>
               {/* applicant skill*/}
    </>)
}


//  projects

function ProjectsContainer(){
    const {id} = useParams<{id:string}>();

    type projectI = {
        id:string,
        project_title:string,
        description:string,
        project_image:string,
        role:string,
        technologies_used:string,
        project_links_github:string,
        project_links_live_demo:string
        start_date:string,
        end_date:string



    }
    const fetcher = (url: string) =>
        fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("item")}`,
          },
        }).then((r) => r.json());
    const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/applicant-project/`, fetcher)
    console.log("projects:",data)
  
    if(isLoading){
        return <div className='bg-slate-50 drop-shadow-lg rounded-md animate-pulse py-1 px-4'>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
        <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    </div>
    }
    if(error){
        return <div>fail to fetch data</div>
    }
    console.log(data)
    return (
    <>
   
                {/* Applicant projects */}
                <div className='bg-white drop-shadow-lg w-full rounded p-3 py-5'>
                    {/* add project header */}

                    <div className='w-full flex flex-row'>

                        <div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>
                        <h1 className='text-2xl font-bold'>Portfolio</h1>
                        </div>
                        <div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full cursor-pointer'>
                        <Link href={`/applicant/settings/projects/${id}`}>
                        <IoMdAdd className='text-3xl' />
                        </Link>
                        </div>
                        </div>


                     {/* add project header */}




                    <div className='space-y-3 md:grid grid-cols-3 gap-3 md:space-y-0'>


                        {/* projects */}

                      {data && data.map((projects:projectI)=>( 

                   
                    <div key={projects.id} className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer ">
                   
                            {projects.project_image ? (
                            <Image 
                            src={projects.project_image} 
                            alt="Project Image" 
                            width={100} 
                            height={40} 
                            className="w-full h-28 rounded-t-lg"
                            />
                            ) : (
                            <div  className='w-full h-28 py-6 text-center'>No image available</div>
                            )}
                     
                       {/* <div className='w-full py-2 px-3 text-center animate-pulse bg-slate-300'>
                        <div className='bg-slate-50 drop-shadow-lg py-2 my-2 w-full'></div>
                        <div className='bg-slate-50 drop-shadow-lg py-2 my-2 w-[80%]'></div>
                        <div className='bg-slate-50 drop-shadow-lg py-2 my-2 w-[60%]'></div>
                       </div> */}
                          
                        <div className='py-2 px-3 [&>*]:break-words [&>*]:text-sm border-t-2'>
                            <div className='text-center'> 
                                <p className='break-words truncate'> {projects.description}</p>
                            </div>
                       
                        <div className='my-4'>
                            <button className='py-2 px-2 mx-2 border rounded-lg hover:bg-slate-200 [&>*]:text-sm drop-shadow-lg'><a href={projects.project_links_github}>View github</a></button>
                            <button className='py-2 px-2 mx-2 border rounded-lg hover:bg-slate-200 [&>*]:text-sm drop-shadow-lg'><a href={projects.project_links_live_demo}>View live Demo</a></button>
                      
                        </div>

                        </div> 
                                  
                    </div>
                    ))} 


                         {/* projects */}

                       

                    </div>

                </div>
               {/* applicant projects*/}
    </>)
}



// profile image and details container


function ProfileDetailsContainer(){
const router = useRouter();
const {id} = useParams();

// get appliant profile
const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => r.json());
const { data,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/applicant-profile-details/${id}/`, fetcher)



if(isLoading){
    return <div className='bg-slate-50 drop-shadow-lg rounded-md animate-pulse py-1 px-4'>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
</div>
}
if(error){
    return <div>fail to fetch data</div>
}

console.log("new profile:",data.profile_image)



// handle profile upload
const handleUpload = async (e:React.ChangeEvent<HTMLInputElement>) =>{
   try{
    if(e.target.files){
        // const file = e.target.files[0];
      const formData = new FormData()
      Object.values(e.target.files).forEach((file) => {
        formData.append("profile_image", file);
      });

        
        const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/profile-applicant/${data?.id}/`,  formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                  "Authorization":`Bearer ${Cookies.get("item")}`
            },
        });
        if(response.status ==200){
            const {profile_image} = response.data
            console.log(profile_image)
            // Setprofilepicture(profile_image)
            console.log("upload successfully")
            window.location.reload()
        }

    }
} catch(error){
    console.log("error",error)
}finally{
    router.push(`/applicant/dashboard/profile/${data?.id}`)
}
    
  
}



    return (<>
      <div className="rounded bg-white drop-shadow-lg p-5 w-full"> 

<div className='w-full flex flex-row'>
                
<div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>

   {/* profile */}
   <div className="">
          
        <div className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3 relative">
            {/* change icon pen */}
            <div className='bg-[#f6f4f4] rounded-full w-10 h-10 drop-shadow-lg absolute py-3 px-[0.6rem] top-[5rem] md:bottom-3 left-20 cursor-pointer'>
                <label htmlFor="profile_image">
             <LuPencil className='text-xl cursor-pointer' />
             </label>
            
            </div>
           
              {/* change icon pen */}

            <div className='border rounded-full w-28 h-28'>
                    <Image
                    src={`${process.env.NEXT_PUBLIC_API_PROFILE_URL}${data?.profile_image}` || "/default_profile.jpeg"} 
                    alt="profile pic"
                    width={100}
                    height={40}
                    className='rounded-full w-28 h-28'
                    priority 
                    
                    />
             
            </div>
                <div className="pt-3">
                    <h1 className='font-bold text-2xl'>{data?.title}</h1>
                    <p className='font-semibold text-xl'>{data?.first_name} {data?.last_name}</p>
                    <p className='font-semibold text-base'>{data?.country} {data?.state}</p>

                </div>
            </div>

        </div>

  {/* profile */}


</div>


<div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full cursor-pointer'>
<Link href={`/applicant/settings/profile-details/${id}`}><button className="py-2 px-4 font-bold bg-[lightgray] rounded text-black h-12">Edit Profile</button></Link>
</div>
</div>



    {/* about me */}
    <h1 className='text-2xl font-bold md:text-2xl block text-black'>About Me</h1>
    <div className=''>

    <p>{data && data.bio}</p>

{/* profile upload form */}
<input type='file' id='profile_image' name='profile_image' style={{opacity:0}} onChange={handleUpload}/>
{/* profile upload form */}
    </div>
      {/* about me */}



</div>


    </>)
}



