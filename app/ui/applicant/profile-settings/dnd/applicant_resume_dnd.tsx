"use client"
import React, {useRef,useState,FormEvent} from 'react';
import {useDropzone} from 'react-dropzone';
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { http_endpoints } from "@/app/libs/definations";




export function ApplicantDndResume({className,name,notifytest}:{className:string,name:string,notifytest:string}){
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
                'application/pdf': [],
                'application/msword': [],
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [],
              },

          }
    );
    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <div key={file.path}>
        
            {errors.map(e => (
              <p className='text-sm text-red-500' key={e.code}>File type must be PDF OR DOCX document</p>
            ))}
          
        </div>
      ));

    const files = acceptedFiles.map(file =>(
        <p key={file.path} className=''>{file.path} - {file.size} byte</p>
    ))


    // process resume upload 
    
    // handle toast bar
    const notify = () => {
        toast.success(notifytest);
    }
    // handle form submition
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleresumeUpload = async (event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const file = formData.get('resume')
        console.log(file)
        try{
        setIsLoading(true)

        const response_token = await fetch(`/api/getToken`, {
            method: "GET",
      })
      if (response_token.ok){

        const token = await response_token.json()
        console.log("the token",token)

        const response = await axios.post(`${http_endpoints}careerportal/applicant-document-resume/`,  formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                  "Authorization":`Bearer ${token}`
            },
        });

        if (response.status === 201) {
            setIsLoading(false)
            notify()
            if (event.target) {
                (event.target as HTMLFormElement).reset();
            }
            console.log(response.data)
            
            console.log('Form submitted successfully');

        }

        



      

      }

       

        } catch (error){
            console.log("error",error)
        } finally{
            setIsLoading(false)
        }





    }
  

    return (
        <>
        <form onSubmit={handleresumeUpload}>
        <input type ="file" name={name} required style ={{opacity: 0}} ref={hiddenInputRef}/>
        <div {...getRootProps({ className:className})}>
        <input {...getInputProps()} />
        <div className='flex justify-center'>
        <IoCloudUploadOutline className='text-4xl'/>
       </div>
       
        <p>Click to Upload or Drag and drop</p>
        {files}
        {fileRejectionItems}
       
      </div>

      
      <div className="my-5">
                <button className="bg-[#727272] py-1 px-3 md:px-5 md:py-2 rounded text-white mb-5 md:mb-0" disabled={isLoading}>
                {isLoading? 
                    (<>
                    <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    </>)
                    :'Upload'}
                  </button>
            </div>
      </form>
        </>
    )
}