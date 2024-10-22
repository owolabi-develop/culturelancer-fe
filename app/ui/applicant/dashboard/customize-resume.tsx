import Link from "next/link";
import { HiOutlineTemplate } from "react-icons/hi";
import { FaBolt } from "react-icons/fa6";




export default function AIResume(){
    return(
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">

        <div className="w-full text-center">
            <h1 className='text-3xl font-bold md:text-3xl block text-black'>Elevate Your Resume with AI</h1>
            <p className='my-5'> Enhance your professional profile with smart AI-driven tools.</p>
            <Link href="/work"><button className="rounded py-3 px-5 text-[white] bg-[#131313] border border-current my-4">Start AI Resume Update</button></Link>
        </div>


{/* ai description */}
        <div className="w-full mt-6">

        <div className="space-y-4 sm:space-y-4 md:space-y-0 md:grid grid-cols-2 rounded items-center w-full gap-10 mb-12"> 
            
            <div className="py-5">

               <div className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3">
               <div className='bg-[#cccbc8] rounded-full w-14 h-14 py-3 px-3'>
               <FaBolt className="text-3xl" />
               </div>
                   <div className="">
                       <h1 className="text-2xl text-black font-semibold leading-[3.1rem]">AI-driven Recommendations</h1>
                   </div>
               </div>
               <p>Get personalized suggestion to improve your resume base on industry standards and job requirements</p>

            </div>




            {/* second user profile */}

            <div className="py-5 p-6">
              

               <div className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3">
               <div className='bg-[#cccbc8] rounded-full w-14 h-14 py-3 px-3'>
               <HiOutlineTemplate className="text-3xl" />
               </div>
                   <div className="">
                       <h1 className="text-2xl text-black font-semibold leading-[3.1rem]">Smart Templates</h1>
                   </div>
               </div>
               <p> Choose from a variety of professional template tailored to your industry and career level</p>

            </div>

              {/* second user profile */}


             
    </div>
    {/* ai description */}

           
        </div>

        {/* drag and drop resume upload */}

        <div className="w-full px-10 bg-[#eceaea] drop-shadow-lg rounded">
        <h1 className='my-10 text-3xl font-bold md:text-3xl block text-black md:my-5'>Upload Resume</h1>

    <div className="mb-10 flex items-center justify-center w-full md:my-8">
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Support Format: PDF,DOCX</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 

        </div>
          {/* resume upload */}



          
        {/* resume download */}

        <div className="w-full px-10 my-10">
        <h1 className='text-2xl font-bold md:text-2xl block text-black'>Customize and Download</h1>

        <div className="space-y-2 md:space-y-0 md:flex flex-row flex-wrap  md:space-x-8 mt-8 "> 
            <button className=" bg-black text-white rounded py-2 px-5">Download as PDF</button>
            <button className="rounded py-2 px-5 text-black bg-[lightgray]">Download as Word</button>
            <button className="rounded py-2 px-5 text-black bg-[lightgray]">Send to Email</button>

         </div>
         <p className="my-2">Save to Profile</p>

        </div>
          {/* resume download */}



            {/* user testimonie */}

        <div className="w-full px-10 bg-[#eceaea] drop-shadow-lg rounded py-16 my-10">
        <h1 className='text-2xl font-bold md:text-2xl block text-black my-3'>What Our Users Say</h1>
        <p>Culturelancer AI-powered resume tool help me land my dream job. The recommendations were spot-on</p>

        <h1 className='text-xl font-bold md:text-xl block text-black my-2'>- Sarah J. Software Engineer</h1>
        </div>
          {/* user testimonie  */}


        </section>
    )
}



