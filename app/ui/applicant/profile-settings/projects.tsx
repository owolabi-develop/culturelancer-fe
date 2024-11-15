"use client"

import React, { useState,useEffect,FormEvent,useRef } from 'react'
import { TagsInput } from "react-tag-input-component";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {useDropzone} from 'react-dropzone';
import { IoCloudUploadOutline } from "react-icons/io5";
import ProgressBar from "@ramonak/react-progress-bar";
import { fetchprojects} from '@/app/libs/utils';
import { RiDeleteBin6Line } from "react-icons/ri";
import useSWR from 'swr';
import Cookies from "js-cookie";
import { useParams } from "next/navigation";

type projectsSchema = {
    id:string,
    project_title:string,
    description:string,
} 


export default function Projects(){
    const [selected, setSelected] = useState([""]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dndstyle =`border-dashed border-2 text-center py-8 hover:border-blue-300 cursor-pointer`
      //  retrive  profle completion percent
    const [projects,Setporjects] = useState<projectsSchema[]>([])




    
    // fetch all certificate data
    useEffect(() => {
        const handlecertificatedetails = async () => {
        const data = await fetchprojects();
        if (data !== null) {
            Setporjects(data)
               console.log("project data",data)
            }
       
    }
    handlecertificatedetails();
    },[])

 // delete certificate 

 const notifydelete = () => {
    toast.success("project Deleted");
}

 const deleteProject = async (id: string) => {
    try {
        const response = await fetch(`/api/projects/delete-project?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        if (response.ok) {
            Setporjects((prevProjects) =>
                prevProjects.filter(project => project.id !== id)
            );
            notifydelete()
            console.log("projects deleted:", data);
        } else {
            console.error("Failed to delete project:", data.error);
        }
    } catch (error) {
        console.error("Error deleting projects", error);
    }
};
   

    // dnd
    const hiddenInputRef =  useRef<HTMLInputElement | null>(null);
    
    const {acceptedFiles,fileRejections, getRootProps, getInputProps} = useDropzone(
        {
            onDrop: (incomingFiles) => {
              if (hiddenInputRef.current) {
                const dataTransfer = new DataTransfer();
                incomingFiles.forEach((v) => {
                  dataTransfer.items.add(v);
                });
                hiddenInputRef.current.files = dataTransfer.files;
              }
            },
            maxFiles:1,
            accept: {
                'image/jpeg': [],
                'image/png': []
              },

          }
    );
    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <div key={file.path}>
        
            {errors.map(e => (
              <p className='text-sm text-red-500' key={e.code}>File type must be image format </p>
            ))}
          
        </div>
      ));

    const files = acceptedFiles.map(file =>(
        <p key={file.path} className=''>{file.path} - {file.size} byte</p>
    ))



    // dnd

    const notify = () => {
        toast.success("Project Added!");
    }

    const handleFormSubmit =  async (event: FormEvent<HTMLFormElement>) =>{
        const formObject: Record<string,FormDataEntryValue> = {};
        event.preventDefault()
        setIsLoading(true)
        const formData = new FormData(event.currentTarget)
        const technologiesUsed = JSON.stringify(selected);
        formData.append('technologies_used', technologiesUsed);
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        try{
        
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/applicant-project/`,  formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                  "Authorization":`Bearer ${Cookies.get("item")}`
            },
        });
      
        if (response.status === 201) {
            setIsLoading(false)
            notify()
            setSelected([""]);
            if (event.target) {
                (event.target as HTMLFormElement).reset();
            }
            console.log(response.data)
            
            console.log('Form submitted successfully');
        }
    
        // get token
    }catch (error){
        console.log("server error",error)
    }
    

    }
    
    
    return (
        <section className="w-full ">
              <ToastContainer/>
            <div className="md:grid grid-cols-1 py-5 px-5">
                {/* progress bar */}
               
              <ProfilePercent/>

                <h1 className="my-3 font-extrabold text-2xl"> Projects</h1>


                {/* form container */}
                <form  onSubmit={handleFormSubmit} encType="multipart/form-data">
                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">
                    <p className="text-xl font-semibold my-2">Project Details</p>

                    {/* forms input */}
                    
                    <div className="grid gap-6 mb-6 md:grid-cols-2">

                        <div>
                            <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Title</label>
                            <input type="text" id="Title" name='project_title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" />
                            <p className="text-sm text-red-500"></p>
                        </div>

                        <div>
                            <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                            <input type="text" id="role" name='role' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "/>
                            <p className="text-sm text-red-500"></p>
                        </div>

                        <div>
                            <label htmlFor="StartDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                            <input type="date" id="StartDate" name='start_date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "/>
                            <p className="text-sm text-red-500">{}</p>
                        </div> 

                        <div>
                            <label htmlFor="EndDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                            <input type="date" id="EndDate" name='end_date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"/>
                            <p className="text-sm text-red-500"></p>
                        </div>


                    </div>
                
                    {/* form input */}

                    {/* technology */}



                    <div className="my-5">
                        <p className="text-sm my-2">Technology Used</p>
                        <TagsInput
                            value={selected}
                            onChange={(tags) => {
                                setSelected(tags); 
                            }}
                            placeHolder='E.g Javascript, python'
                            classNames={{
                                tag: "bg-[#2f2f2f] rounded-full px-4 py-1 mr-1 mb-2 inline-flex items-center",
                                input: "border-0 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full",
                            }}
                        />

                    <p className="text-sm text-red-500">{}</p>

                    </div>





                    {/* technology used */}

                <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Description</label>
                <textarea id="description" name="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder=""></textarea>
                </div>
                <p className="text-sm text-red-500"></p>

                </div>


                {/*profile media  */}
                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5">
                <p className="text-xl font-semibold my-2">Projects Media</p>
               

                <div className="grid gap-6 mb-6 md:grid-cols-1">

                    {/* project photo */}
                    
                <div>
                <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Photo</h1>

                <input type ="file" name="project_image" required style ={{opacity: 0}} ref={hiddenInputRef}/>
                <div {...getRootProps({ className:dndstyle})}>
                <input {...getInputProps()} />
                <div className='flex justify-center'>
                <IoCloudUploadOutline className='text-4xl'/>
                </div>

                <p>Click to Upload or Drag and drop</p>
                {files}
                {fileRejectionItems}

                </div>
                
                </div>
                  {/* profile photo */}


                </div>
                </div>


                {/*project media  */}




                 {/*project links  */}
                 <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 [&>*]:my-4">
                <p className="text-xl font-semibold my-2">Project Links</p>

                <div>
                    <label htmlFor="Github" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github</label>
                    <input type="url" id="Github" name='project_links_github' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                    <p className="text-sm text-red-500"></p>
                </div>

                <div>
                <label htmlFor="LiveDemo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Live Demo</label>
                <input type="url" id="LiveDemo" name='project_links_live_demo' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"/>
                <p className="text-sm text-red-500"></p>
                </div>


                <div>
                <label htmlFor="PortfolioLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Portfolio Link</label>
                <input type="url" id="PortfolioLink" name='project_link_portfolio' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"/>
                <p className="text-sm text-red-500">{}</p>
                </div>


                </div>


                {/*Additional Information  */}





                {/* sample projects */}

                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 [&>*]:my-4">
                <p className="text-xl font-semibold my-2">My Projects</p>

                 {projects.map((projd)=>(
                <div key={projd.id} className="w-full bg-gray-100 flex rounded">

                    <div className="w-full py-5 px-3">
                        <h1 className="text-xl font-bold">{projd.project_title}</h1>
                        <p className="text-sm font-semibold">{projd.description}</p>
                    </div>

                    <div className="flex w-full justify-end px-4 py-6">
                    <RiDeleteBin6Line className="text-2xl cursor-pointer hover:text-gray-700"  onClick={ async () => deleteProject(projd.id)}/>
                    </div>
                </div>
                ))}

               

                </div>


                {/* sample projects */}




                {/* save anf update button */}

                <div className="w-full md:w-[70%] rounded px-5  bg-white drop-shadow-lg mt-10 [&>*]:my-4 m-auto md:flex justify-between ">
                    <div className="">
                    <p className="text-sm leading-[3rem]">Save your changes by clicking the Save & Update button.</p>
                    </div>
               
                    <div className="">
                        <button className="bg-[#727272] py-2 px-3 md:px-5 md:py-3 rounded text-white mb-5 md:mb-0" disabled={isLoading}>
                            
                                                
                        {isLoading? 
                    (<>
                    <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    </>)
                    :'Save & Update'}
                            </button>
                    </div>

                </div>



                <div className="md:w-[70%]  px-5 py-3 mt-1 m-auto text-right">
                <p className="text-sm">Dont forget to save your changes!</p>
                </div>

                {/* save and update button */}





                </form>
                {/* forn container */}
                
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
