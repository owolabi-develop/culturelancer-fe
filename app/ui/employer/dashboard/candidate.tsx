import Link from "next/link"

export function Candidate(){

    return(
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">

            <div className=" [&>*]:my-4">
                <h1 className="text-4xl font-bold w-full">Top Candidates</h1>
                <p>Dashboard / Candidate</p>
                <p className="text-sm">Review the best candidate who match your job postings. Sort,filter, and take action to shortlist or message candidates</p>

                {/* search input */}
            <div className="">
                <form>
                    
                <div>
                    <div className="flex">
                    <input type="search" id="CurrentMayor" name="Quote" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-[90%] focus:border-gray-50" required placeholder="Search candidates..." />
                    <div>
                    <select id="countries" className="bg-gray-50  border-gray-300 text-gray-900 text-sm rounded-lg py-3 mx-2">
                        <option value="Latest" selected>Latest</option>
                    </select>
                    </div>
                    </div>

                </div>

                </form>
                
            </div>
              {/* search input */}

            </div>


            {/* applicant scorea  */}

            <div className="w-full md:grid md:grid-cols-3 gap-3">

            <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
                <h1 className="font-bold text-xl">Total Candidate</h1>
                <h1 className="font-bold text-2xl">1,234</h1>
            </div>

            
            <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
                <h1 className="font-bold text-xl">Average Match Score</h1>
                <h1 className="font-bold text-2xl">85%</h1>
            </div>

            
            <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
                <h1 className="font-bold text-xl">Messsage Sent</h1>
                <h1 className="font-bold text-2xl">156</h1>
            </div>

                
            </div>

             
             {/* applicant scorea  */}


                      {/* best candidate recommendations */}
                    
                      <div className="space-y-3 w-full my-4 md:grid grid-cols-3 gap-3 md:space-y-0">

                        {/* candidate */}
                        <div className=" bg-white drop-shadow-lg py-3 px-4 [&>*]:my-3 rounded-md">
                            {/* profile  */}
                            <div className="flex">
                                <div className="bg-slate-200 mr-3 rounded-full w-16 h-16 py-5 px-4">icon</div>
                                <div>
                                    <h1 className="font-bold">Alex Johnson</h1>
                                    <p> Senior Developer</p>
                                </div>


                            </div>
                            {/* profile  */}

                            <div className="flex">
                                <div><h1>Match Score:</h1></div>

                                <div className="w-[80%] mx-3">
                                 {/* progress bar */}
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-3">
                                <div className={`bg-[gray] h-2.5 rounded-full w-[90%]`}></div>
                                </div>
                                 {/* progress bar */}
                                    
                                    
                                </div>

                                <div><h1>90%</h1></div>
                            </div>

                            <div className="flex [&>*]:bg-gray-200 [&>*]:mx-1 [&>*]:py-1 [&>*]:rounded-full [&>*]:px-1">
                            <span>Javasecipt</span> <span>React</span> <span>TypeScript</span>
                            </div> 
                            <div>
                            <p>Experience: 5 years</p> 
                            </div>
                            

                            {/* controls */}
                            <div className="w-full md:flex space-x-3">
                                 <button className="bg-gray-200 py-2 px-4 rounded"><Link href="/employer/dashboard/candidate-profile">View Profile</Link></button>
                                 <button className="border py-2 px-4 rounded">Message</button>
                                 <button className="border py-2 px-4 rounded">Shortlist</button>
                                 
                            </div>

                            {/* controls */}

                        </div>

                        {/* candidate */}






                          {/* candidate */}
                          <div className=" bg-white drop-shadow-lg py-3 px-4 [&>*]:my-3 rounded-md">
                            {/* profile  */}
                            <div className="flex">
                                <div className="bg-slate-200 mr-3 rounded-full w-16 h-16 py-5 px-4">icon</div>
                                <div>
                                    <h1 className="font-bold">Alex Johnson</h1>
                                    <p> Senior Developer</p>
                                </div>


                            </div>
                            {/* profile  */}

                            <div className="flex">
                                <div><h1>Match Score:</h1></div>

                                <div className="w-[80%] mx-3">
                                 {/* progress bar */}
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-3">
                                <div className={`bg-[gray] h-2.5 rounded-full w-[90%]`}></div>
                                </div>
                                 {/* progress bar */}
                                    
                                    
                                </div>

                                <div><h1>90%</h1></div>
                            </div>

                            <div className="flex [&>*]:bg-gray-200 [&>*]:mx-1 [&>*]:py-1 [&>*]:rounded-full [&>*]:px-1">
                            <span>Javasecipt</span> <span>React</span> <span>TypeScript</span>
                            </div> 
                            <div>
                            <p>Experience: 5 years</p> 
                            </div>
                            

                            {/* controls */}
                            <div className="w-full md:flex space-x-3">
                                 <button className="bg-gray-200 py-2 px-4 rounded">View Profile</button>
                                 <button className="border py-2 px-4 rounded">Message</button>
                                 <button className="border py-2 px-4 rounded">Shortlist</button>
                                 
                            </div>

                            {/* controls */}

                        </div>

                        {/* candidate */}

                          {/* candidate */}
                          <div className=" bg-white drop-shadow-lg py-3 px-4 [&>*]:my-3 rounded-md">
                            {/* profile  */}
                            <div className="flex">
                                <div className="bg-slate-200 mr-3 rounded-full w-16 h-16 py-5 px-4">icon</div>
                                <div>
                                    <h1 className="font-bold">Alex Johnson</h1>
                                    <p> Senior Developer</p>
                                </div>


                            </div>
                            {/* profile  */}

                            <div className="flex">
                                <div><h1>Match Score:</h1></div>

                                <div className="w-[80%] mx-3">
                                 {/* progress bar */}
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-3">
                                <div className={`bg-[gray] h-2.5 rounded-full w-[90%]`}></div>
                                </div>
                                 {/* progress bar */}
                                    
                                    
                                </div>

                                <div><h1>90%</h1></div>
                            </div>

                            <div className="flex [&>*]:bg-gray-200 [&>*]:mx-1 [&>*]:py-1 [&>*]:rounded-full [&>*]:px-1">
                            <span>Javasecipt</span> <span>React</span> <span>TypeScript</span>
                            </div> 
                            <div>
                            <p>Experience: 5 years</p> 
                            </div>
                            

                            {/* controls */}
                            <div className="w-full md:flex space-x-3">
                                 <button className="bg-gray-200 py-2 px-4 rounded">View Profile</button>
                                 <button className="border py-2 px-4 rounded">Message</button>
                                 <button className="border py-2 px-4 rounded">Shortlist</button>
                                 
                            </div>

                            {/* controls */}

                        </div>

                        {/* candidate */}


                      </div>

                       {/* candidate recommendations */}


                       <div className="w-full flex my-10">
                        <div>
                            <h1>Showing 1 to 3 of 97 results</h1>
                        </div>
                        <div></div>
                       </div>
              
                    
        

        </section>
    )
}