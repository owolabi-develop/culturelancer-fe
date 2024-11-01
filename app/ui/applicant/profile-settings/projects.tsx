"use client"

import React, { useState, FormEvent } from 'react'
import { TagsInput } from "react-tag-input-component";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { http_endpoints } from "@/app/libs/definations";




export default function Projects(){
    const [selected, setSelected] = useState([""]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

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
            // get token
        const response_token = await fetch(`/api/get-token`, {
                method: "GET",
          })
            
        if(response_token){
        const token = await response_token.json()
        console.log("the token",token)

        const response = await axios.post(`${http_endpoints}careerportal/applicant-project/`,  formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                  "Authorization":`Bearer ${token}`
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

                <div className="md:w-full bg-gray-200 rounded-full h-2.5 my-3">
                            <div className={`bg-[gray] h-2.5 rounded-full w-[45%]`}></div>
                        </div>
                        {/* progress bar */}

                <p className="font-semibold text-[gray]">Profle Completion: 45%</p>

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
                
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or GIF up to 10MB</p>
                        </div>
                        <input id="dropzone-file" name='logo' type="file"  className='hidden' />
                    </label>
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

                <div className="w-full bg-gray-100 flex rounded">

                    <div className="w-full py-5 px-3">
                        <h1 className="text-sm font-semibold">Project 1</h1>
                    </div>

                    <div className="flex w-full justify-end px-2">
                        <button className="rounded mr-5">Edit</button>
                        <button className="rounded ">Delete</button>
                    </div>
                </div>

               

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