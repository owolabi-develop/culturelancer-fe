"use client"
import RequireSkills from "./taginput"
import { useState } from "react"
import { FaChevronDown } from "react-icons/fa";
import { AijobDescription } from "../../modals";

export function EmployerPostJobs(){
    const [showaiProgress,setshowaiProgress] = useState(false)
    const [locationType,setlocationType] = useState(false)

    
  const handleaiprogress = () => {
    setshowaiProgress(prev => !prev);
  };


  const handleLocationType = () => {
    setlocationType(prev => !prev);
  };


    return(
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">

            <div className=" [&>*]:my-4">
                <h1 className="text-4xl font-bold w-full">Post a New Job</h1>
                <p>Dashboard / Poste Job</p>
            </div>
        
           {/* job form */}
           <div>
           <form>

            <div className="w-full bg-white rounded-lg drop-shadow-lg my-4 py-3 px-3 [&>*]:my-3">
            <div>
                <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input type="text" id="Title" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" required />
            </div>
                
            <div className="relative">
                {/* resume and ai */}
                <div className="absolute right-4 bottom-7 flex">
                    {/* <span className="py-1 px-2 rounded bg-white drop-shadow-lg h-8 mr-2 cursor-pointer">Use AI</span> */}
                    <AijobDescription/>
                    <label htmlFor="resume" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white py-1 px-2 h-8 rounded bg-white drop-shadow-lg cursor-pointer">Upload</label>
                    <input type="file" name="resume" id="resume" className="rounded py-0 px-0 hidden"/>
                </div>
 {/* resume and ai */}
                <label htmlFor="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="Description" name="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Enter a detail description of the role, including required skills and responsibilities"></textarea>
                </div>

                <div className="py-3">
                <span className="bg-[#2f2f2f] py-3 px-4 rounded text-gray-50 cursor-pointer"onClick={handleaiprogress}>See AI Suggestions</span>
          </div>

            {/* AI Suggestions */}
            {showaiProgress &&(
            <div className="w-full">
                 {/* progress bar */}
                 <div className=" bg-gray-200 rounded-full h-2.5 ">
                    <div className={`bg-[gray] h-2.5 rounded-full w-[60%]`}></div>
                </div>
                {/* progress bar */}

                {/* ai match progress */}
                <div className="flex justify-between">
                    <div>
                    <p className='mt-2'>Need to improve Description</p>
                    <p className="text-sm text-gray-300">You can use our Ai to Enhance Your Description to get Perfect match for your Project</p>
                    </div>

                    <div className="text-right">
                        <h1>20%</h1>
                    </div>
                </div>
           
                 {/* ai match progress */}
            </div>
            )}


              {/* AI Suggestions */}

            </div>


            <div className="w-full bg-white rounded-lg drop-shadow-lg my-4 py-3 px-3">

        {/* job category */}

            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                            <label htmlFor="job_category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Category</label>
                            <input type="text" id="job_category" name="job_category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-4" required />
                    </div>

                        <div>
                            <label htmlFor="MaximumBudget" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skills Required</label>
                            <RequireSkills/>
                        </div>

            </div>
          {/*  */}


            {/* experience */}

            <div className="grid gap-6 mb-6 md:grid-cols-2">
                {/* experience level */}
        <div>
        <h1 className="font-bold text-base my-2">Experience Level</h1>
            <div className="flex">
            <div className="flex items-center me-4">
                <input id="UpfrontPayment" type="checkbox" value={`entry_level`}  name="payments_terms" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="inline-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Entry-level</label>
            </div>
            <div className="flex items-center me-4">
                <input id="mid_level" type="checkbox" value={`mid_level`} name="mid_level" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="mid_level" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Md-Level</label>
            </div>
            <div className="flex items-center me-4">
                <input id="senior" type="checkbox" value={`senior`}  name="senior" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="senior" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Senior</label>
            </div>
        
        </div>

                </div>
                {/* experience */}


                {/* job type */}
        <div>
            <h1 className="font-bold text-base my-2">Job type</h1>
            <div className="flex">
            <div className="flex items-center me-4">
                <input id="full_time" type="checkbox" value={`full_time`}  name="full_time" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="full_time" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Entry-level</label>
            </div>
            <div className="flex items-center me-4">
                <input id="part_time" type="checkbox" value={`part_time`} name="part_time" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="part_time" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Part-Time</label>
            </div>
            <div className="flex items-center me-4">
                <input id="contract" type="checkbox" value={`senior`}  name="contract" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="contract" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contract</label>
            </div>
        
        </div>

    </div>


                {/* job type */}


                
            </div>
          {/*  */}

            </div>


{/* Budget Range & Payment Terms  */}
            <div className="w-full bg-white rounded-lg drop-shadow-lg my-4 py-3 px-3">
                <h1 className="font-bold text-xl">
                    Budget Range & Payment Terms
                </h1>
                {/* input */}
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                            <label htmlFor="MinimumBudget" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minimum Budget</label>
                            <input type="text" id="MinimumBudget" name="minimum_budget" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" required />
                    </div>

                        <div>
                            <label htmlFor="MaximumBudget" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Maximum Budget</label>
                            <input type="text" id="MaximumBudget" name="maximum_budget" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " required />
                        </div>

                </div>
                 {/* input */}

                 <p className="my-3">Payments Terms</p>
                 {/* payment temsx */}
<div className="flex">
    <div className="flex items-center me-4">
        <input id="UpfrontPayment" type="radio" value={`UpfrontPayment`}  name="payments_terms" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
        <label htmlFor="inline-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Upfront Payment</label>
    </div>
    <div className="flex items-center me-4">
        <input id="milestone-base-payment" type="radio" value={`milestone_base_payment`} name="payments_terms" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
        <label htmlFor="milestone-base-payment" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Milestone Base Payment</label>
    </div>
    <div className="flex items-center me-4">
        <input id="iPaymentuponCompletion" type="radio" value={`payment_upon_completion`}  name="payments_terms" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
        <label htmlFor="PaymentuponCompletion" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Payment upon Completion</label>
    </div>
  
</div>
 {/* payment temsx */}

            </div>
 {/* Budget Range & Payment Terms  */}


 {/* location type */}

<div className="w-full my-3 cursor-pointer">
 <div className="my-2 flex" onClick={handleLocationType}>
 <FaChevronDown  className="mr-3 text-xl leading-5"/><h1> Additional Information (Optional)</h1>
 </div>

{ locationType &&(
 <div className="flex">
    <div className="flex items-center me-4">
        <input id="hybrid" type="checkbox" value={`hybrid`}  name="location_type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
        <label htmlFor="hybrid" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hybrid</label>
    </div>
    <div className="flex items-center me-4">
        <input id="milestone-base-payment" type="checkbox" value={`milestone_base_payment`} name="location_type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
        <label htmlFor="milestone-base-payment" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remote</label>
    </div>
    <div className="flex items-center me-4">
        <input id="iPaymentuponCompletion" type="checkbox" value={`onsite`}  name="location_type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
        <label htmlFor="PaymentuponCompletion" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">On-site</label>
    </div>

    </div>
    )}


 </div>




 {/* location type */}



 {/* submit button  */}
<div className="grid gap-6 mb-6 md:grid-cols-2 my-4">
        <div>
        <button className="py-1 px-4 rounded border bg-white drop-shadow-lg">Preview Job</button>
        </div>

        <div className="text-right">
           
            <button className="py-1 px-4 bg-[#3c3c3c] rounded text-gray-100">Submit Job</button>
        </div>

</div>
{/* submit button  */}
</form>

</div>
                

            




            {/* job */}

            
              
        
                     
              
    
        </section>
    )
}