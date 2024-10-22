
export default function JobDetails(){
    return (
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">

    


         {/* job details */}

         <div className="w-full md:flex">

          
            <div className="w-full md:w-[60%] px-5">

                {/* job descriptions */}
                <div className="bg-white drop-shadow-lg rounded w-full [&>*]:my-2 mt-4 py-2 px-3">
                    <h1 className="font-bold">Job Descriptions</h1>
                    <p>
                        We are seeking a Senior Software Engineer to join our dynamic team...
                    </p>
                    <p>Responsibilities:</p>
                    <p className=""> 
                        Design and implement scalable software solutions
                        Collaborate with cross-functional teams to define and develop new features

                    </p>
                   
                   
                    <button className="bg-gray-200 py-2 px-4 rounded">Improve with AI</button>
                </div>
                   {/* job descriptions */}



                   {/* top candidate  candidate */}

                   <div className="bg-white drop-shadow-lg rounded w-full [&>*]:my-2 mt-4 py-2 px-3">
                    <h1 className="font-bold">Top Candidate Matches</h1>

                    {/* candidate profile */}
                    <div className="w-full bg-slate-50 rounded md:grid grid-cols-3 py-2 px-4">
                        <div className="rounded-full bg-gray-300 w-16 h-16"></div>
                        <div className="">
                            <h1>John Doe</h1>
                            <p>95% Match 7 years exp. San Francisco, CA</p>
                            <div className="[&>*]:bg-gray-200 [&>*]:py-1 [&>*]:rounded-full [&>*]:mx-2 [&>*]:px-2 my-2">
                                <span>Javascript</span>
                                <span>React</span>
                                <span>Node.js</span>
                            </div>
                        </div>

                        <div className="[&>*]:my-3 [&>*]:mx-2">
                        <button className="border py-1 px-4 rounded">View Profile</button>
                        <button className="border py-1 px-4 rounded">Message</button>
                        <button className="bg-gray-200 py-1 px-4 rounded">Shortlist</button>
                            
                        </div>

                    </div>
                     {/* candidate profile */}
                   
                     </div>

                     


                    {/* top candidate  candidate */}
            

                   
            </div>
             


              
             {/* job performace */}

              <div className="w-full md:w-[40%] px-5 md:grid grid-cols-1 ">
           

              {/* summary */}

              <div className="bg-white drop-shadow-lg rounded w-full py-4 px-4 [&>*]:my-3 mt-4">
                <h1 className="text-xl font-bold">Job Performace</h1>

                <div className="w-full">
                    <p className="text-sm">Total Views</p>
                    <h1 className="text-xl font-bold">1,234</h1>
                </div>


                <div className="w-full">
                    <p className="text-sm">Total Applicantions</p>
                    <h1 className="text-xl font-bold">56</h1>
                </div>


                <div className="w-full">
                    <p className="text-sm">Interview Request Sent</p>
                    <h1 className="text-xl font-bold">12</h1>
                </div>


                <div className="w-full">
                    <p className="text-sm">Hire Made</p>
                    <h1 className="text-xl font-bold">0</h1>
                </div>


              </div>
             
             {/* job actions */}

              <div className="bg-white drop-shadow-lg rounded w-full py-4 px-3 [&>*]:my-2 mt-4">
                <h1 className="text-xl font-bold">Job Actions</h1>
                
                <div className="w-full [&>*]:w-full [&>*]:my-3 ">
                    <button className="bg-gray-200 py-2 px-4 rounded">Edit Job</button>
                    <button className="border py-2 px-4 rounded">Close Job</button>
                    <button className="border py-2 px-4 rounded">Delete Job</button>
                </div>


              </div>
                {/* job actions */}

            {/* summary */}




              </div>
                 {/* job performace */}


                
         </div>


          {/* job details */}


    </section>

    ) 
}