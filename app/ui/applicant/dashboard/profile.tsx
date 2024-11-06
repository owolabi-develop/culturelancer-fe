"use client"
import Link from 'next/link'
import { IoMdAdd } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { useState,useEffect } from 'react';
import * as z from 'zod';
import Image from 'next/image'
import axios from "axios";
// import { http_endpoints } from "@/app/libs/definations";
import { useRouter } from 'next/navigation'

import { AwardCertificationSchema,
exprienceSchame,educationSchame,skills,projectShema,
} from "@/app/libs/shemas";
type Exp = z.infer<typeof exprienceSchame>
type Edu = z.infer<typeof educationSchame>
type Skil = z.infer<typeof skills>
type projt = z.infer<typeof projectShema>
type certi = z.infer<typeof AwardCertificationSchema>




export  function ApplicantUserProfile(){
    const [Skills, setSkills] = useState<Skil[]>([])
    const [education ,setEducation] = useState<Edu[]>([])
    const [experience ,setSetExperience] = useState<Exp[]>([])
    const [certificate, setCertificate] = useState<certi[]>([])
    // const [testimonials, setTestimonials] = useState([])
    const [project,setProject] = useState<projt[]>([])
    const [firstname,Setfirstname] = useState<string>()
    const [lastname,Setlastname] = useState<string>()
    const [title,Settitle] = useState<string>()
    const [bio,Setbio] = useState<string>()
    const [profilepicture,Setprofilepicture] = useState<string>("")
    const [Id,SetId] = useState<string>()
    const [state,Setstate] = useState<string>()
    const [country,SetCountry] = useState<string>()

    // const [completionPercent,SetcompletionPersent] = useState<string>()
    const router = useRouter();



///  load all profile details
useEffect(() => {
    const handleprofiledetails = async () => {

    try{
        const Profileresponse = await fetch(`/api/get-ap-profile-details`,{
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        })
        if(Profileresponse.ok){
            const data = await Profileresponse.json()
    
          
            const {bio,title,id,work_experience,educations,profile_image,state,country,
                skill,projects,award_certifications,first_name,last_name,
            } = data[0]
            Setstate(state)
            SetCountry(country)

            Setbio(bio)
            SetId(id)
            Settitle(title)
            Setprofilepicture(profile_image)
            // SetcompletionPersent(completion_percent)
            Setfirstname(first_name)
            Setlastname(last_name)
            setEducation(educations)
            setSkills(skill)
            setCertificate(award_certifications)
            setSetExperience(work_experience)
            setProject(projects)
            console.log(work_experience)
        }



    } catch (error){
        console.log("errors:",error)
    }
}
handleprofiledetails();
},[profilepicture])

// handle profile upload
const handleUpload = async (e:React.ChangeEvent<HTMLInputElement>) =>{
   try{
    if(e.target.files){
        // const file = e.target.files[0];
      const formData = new FormData()
      Object.values(e.target.files).forEach((file) => {
        formData.append("profile_image", file);
      });

        // send to server 
    const response_token = await fetch(`/api/get-token`, {
            method: "GET",
      })
      if(response_token.ok){
        // send file to server
        const token = await response_token.json()
        console.log("upload tolen",token)
        
        const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/profile-applicant/${Id}/`,  formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                  "Authorization":`Bearer ${token}`
            },
        });
        if(response.status ==200){
            const {profile_image} = response.data
            console.log(profile_image)
            Setprofilepicture(profile_image)
            console.log("upload successfully")
            window.location.reload()
        }




      }

    }
} catch(error){
    console.log("error",error)
}finally{
    router.push("/applicant/dashboard/profile")
}
    
  
}
    return (
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">

{/* profile icon */}
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
                        {profilepicture ?(
                             <Image
                             src={profilepicture}
                             alt="profile pic"
                             width={100}
                             height={40}
                             className='rounded-full w-28 h-28'
                             
                             />
                        ):(
                            <Image
                            src="/default_profile.jpeg"
                            alt="profile pic"
                            width={100}
                            height={40}
                            className='rounded-full w-28 h-28'
                            
                            />
                        )}
                   
                    </div>
                        <div className="pt-3">
                            <h1 className='font-bold text-2xl'>{firstname} {lastname}</h1>
                            <p className='font-semibold text-xl'>{title}</p>
                            <p className='font-semibold text-base'>{country} {state}</p>

                        </div>
                    </div>

                </div>

          {/* profile */}


        </div>


        <div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full cursor-pointer'>
        <Link href={`/applicant/settings/profile-details/${Id}`}><button className="py-2 px-4 font-bold bg-[lightgray] rounded text-black h-12">Edit Profile</button></Link>
        </div>
        </div>



            {/* about me */}
            <h1 className='text-2xl font-bold md:text-2xl block text-black'>About Me</h1>
            <div className=''>
        
            <p>{bio?(bio):(<>.........</>)}</p>
    
{/* profile upload form */}
    <input type='file' id='profile_image' name='profile_image' style={{opacity:0}} onChange={handleUpload}/>
{/* profile upload form */}
            </div>
              {/* about me */}



        </div>
{/* profile icon */}


        <div className='profile-details md:flex mt-10 w-full justify-between'>

            <div className='space-y-6 md:w-[68%] md:flex flex-col'>

               {/* applicant experience */}
               <div className='bg-white drop-shadow-lg w-full p-3 rounded'>
                    {/* add experience header */}
                  
                     <div className='w-full flex flex-row'>
                        <div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>
                        <h1 className='text-2xl font-bold'>Experience</h1>
                        </div>
                        <div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full cursor-pointer'>
                        <Link href='/applicant/settings/experience-education'>
                        <IoMdAdd className='text-3xl' />
                        </Link>
                        </div>
                    </div>

{/* addd experience */}

{/* experience timeline */}

    <ol className="relative border-s-2 border-[gray]">  
            {/* timeline */}
          {experience.map((exp) => (
        <li key={exp.title} className="mb-10 ms-4">
            <div className="absolute w-[0.90rem] h-[0.90rem] bg-white  rounded-full -start-2 border-[3px] border-[gray]"></div> 
     <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
        <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{exp.company_name}</p>
        <time className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{exp.end_date}</time>
        <p className="mb-4 text-base font-semibold text-gray-500 dark:text-gray-400 my-2 break-words">{exp.description}</p>
    </div>
        </li>
        ))}  


    </ol>

 {/*  experiencetimeline */}
                    
    </div>
{/* applicant experience */}


{/* applicant education */}
                <div className='bg-white drop-shadow-lg w-full p-3 rounded'>
                    {/* add education header */}
                  
                     <div className='w-full flex flex-row'>
                        <div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>
                        <h1 className='text-2xl font-bold'>Education</h1>
                        </div>
                        <div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full cursor-pointer'>
                        <Link href='/applicant/settings/experience-education'>
                        <IoMdAdd className='text-3xl' />
                        </Link>
                        </div>
                    </div>

                    {/* addd education */}



            {/* education timeline */}

            <ol className="relative border-s-2 border-[gray]">  
                    {/* timeline */}
                    {education.map((educations)=>(
                <li key={educations.degree} className="mb-10 ms-4">
                    <div className="absolute w-[0.90rem] h-[0.90rem] bg-white  rounded-full -start-2 border-[3px] border-[gray]"></div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{educations.field_of_study}</h3>
                    <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{educations.institution_name}</p>
                    <time className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{educations.end_date}</time>
                    <p className="mb-4 text-base font-semibold text-gray-500 dark:text-gray-400 my-2">{educations.degree}</p>
                </li>
                ))}


            </ol>

        {/*  education */}

                    
                </div>
{/* applicant education */}



  {/* Applicant skill */}
  <div className='bg-white drop-shadow-lg w-full rounded p-3 py-5'>
                    {/* add project header */}

                    <div className='w-full flex flex-row'>

                        <div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>
                        <h1 className='text-2xl font-bold'>Skills</h1>
                        </div>
                        <div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full cursor-pointer'>
                        <Link href='/applicant/settings/experience-education'>
                        <IoMdAdd className='text-3xl' />
                        </Link>
                        </div>
                        </div>


                     {/* add project header */}



                    {/* skills */}
                    <div className='w-full overflow-hidden [&>*]:font-bold [&>*]:py-2 [&>*]:px-[0.35rem] md:[&>*]:py-2 md:[&>*]:px-[0.35rem] [&>*]:my-1 [&>*]:mx-1 md:[&>*]:my-1 md:[&>*]:mx-1  '>
                        {Skills.map((skill) =>(
                        <button key={skill.level} className='bg-[lightgray] rounded-full'>{skill.skill} - {skill.level}</button>
                    ))}
                        
                        </div>
                                  
                         {/* skills */}



                </div>
               {/* applicant skill*/}





                {/* Applicant projects */}
                <div className='bg-white drop-shadow-lg w-full rounded p-3 py-5'>
                    {/* add project header */}

                    <div className='w-full flex flex-row'>

                        <div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>
                        <h1 className='text-2xl font-bold'>Portfolio</h1>
                        </div>
                        <div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full cursor-pointer'>
                        <Link href='/applicant/settings/projects'>
                        <IoMdAdd className='text-3xl' />
                        </Link>
                        </div>
                        </div>


                     {/* add project header */}




                    <div className='space-y-3 md:grid grid-cols-3 gap-3 md:space-y-0'>
                        {/* projects */}

                     {project.map((projects) => (
                    <div key={projects.role} className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer ">
                     {projects.project_image ? (
                         <Image
                         src={projects.project_image}
                         alt={projects.project_title}
                         width={100}
                         height={40}
                         className='w-full rounded-t-lg h-40'
                         
                         />
                     ):(
                        <Image
                        src=""
                        alt="No project Image"
                        width={100}
                        height={40}
                        className='w-full rounded-t-lg h-40'
                        
                        />
                     )}     
                        <div className='py-2 px-3 [&>*]:break-words [&>*]:text-sm bg-slate-300'>
                        <p className='break-words'>Title: {projects.project_title}</p>
                        <p className='break-words truncate'>description: {projects.description}</p>
                        <p className='break-word'>Github: {projects.project_links_github} </p>
                        <p className='break-words'>Live demo: {projects.project_links_live_demo}</p>
                        </div> 
                                  
                    </div>
                    ))}

                       




                        


                         {/* projects */}

                       

                    </div>

                </div>
               {/* applicant projects*/}


            </div>
{/*  complete section*/}



{/* certification and testimonial session */}


        <div className='space-y-5 md:w-[30%] md:flex flex-col '>
                    {/* certificate */}
                <div className='bg-white drop-shadow-lg w-full p-3 rounded flex-none'>
                    <h1 className='text-2xl font-bold md:text-2xl block text-black'>Certification</h1>
                    <div className='py-3 px-4'>

                    {/* certificate container  */}
                     {certificate.map((certifi) => (
                    <div key={certifi.title} className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3 border-t-2">
                    <div className='bg-[#cccbc8] rounded-full w-12 h-12 leading-10 py-2 px-2'>
                    <IoCheckmarkCircleOutline className='text-3xl'/>
                    </div>
                        <div className="text-left">
                            <h1>{certifi.title}</h1>
                            <h1>{certifi.issuing_organization}</h1>
                            <h2>{certifi.date_recieved}</h2>
                        </div>
                    </div>
                    ))}
                      {/* certificate container  */}


                    
                    </div>

                    <div className='px-3'>
                    <Link href="/applicant/settings/awards-certifications"> <button className="border rounded py-1 px-2">Add Certificate</button></Link>
                    </div>

                </div>
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



