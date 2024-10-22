import { FaRegCalendarMinus } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import Link from "next/link";
export function Jobs(){

    return(
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">

            <div className=" [&>*]:my-4">
                <h1 className="text-4xl font-bold w-full">Manage Posted Projected</h1>
                <p>Dashboard / Posted Project</p>
                <p className="text-sm">Review the best candidate who match your job postings. Sort,filter, and take action to shortlist or message candidates</p>

                {/* search input */}
            <div className="">
                <form>
                    
                <div>
                    <div className="flex">
                    <input type="search" id="CurrentMayor" name="Quote" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-[90%] focus:border-gray-50" required placeholder="Search jobs by title, keyword, or ID" />
                    <div>
                    <select name="filter" id="sorted" className="bg-gray-50  border-gray-300 text-gray-900 text-sm rounded-lg py-3 mx-2">
                    <option value="Latest" selected>Filter</option>
                    <option value="Latest" selected>Latest</option>
                    </select>
                    </div>
                    </div>

                </div>

                </form>
                
            </div>
              {/* search input */}

            </div>


            {/* overall job performance  */}
           
            <div className="w-full bg-white drop-shadow-lg px-4 rounded-lg">
                <h1 className="my-1"> Overall Performance</h1>
            <div className="w-full md:grid md:grid-cols-4 gap-3 ">

            <div className="bg-gray-100 rounded py-5 px-5 my-2">
                <h1 className="font-bold text-sm">Total Applications</h1>
                <h1 className="font-bold text-xl">1,234</h1>
            </div>

            
            <div className="bg-gray-100 rounded py-5 px-5 my-2">
                <h1 className="font-bold text-sm">Active Jobs</h1>
                <h1 className="font-bold text-xl">2</h1>
            </div>

            
            <div className="bg-gray-100 rounded py-5 px-5 my-2">
                <h1 className="font-bold text-sm">Closed Jobs</h1>
                <h1 className="font-bold text-xl"></h1>
            </div>


            <div className="bg-gray-100 rounded py-5 px-5 my-2">
                <h1 className="font-bold text-sm">Avg Candidate Match</h1>
                <h1 className="font-bold text-xl">78%</h1>
            </div>

                
            </div>

            </div>
             
             {/* overall job performance  */}


            {/* sample jobs */}
            <div className="w-full  bg-white drop-shadow-lg rounded-lg my-3">
                {/* top header */}
                <div className="md:grid grid-cols-2  w-full px-4 pt-3">
                    
                    <div className="w-[88%]">
                        <h1 className="font-bold">Senior Frontend Developer</h1>
                        {/* dates posted and location */}
                        <div className="flex [&>*]:mr-1 my-2">
                        <FaRegCalendarMinus className="text-xl"/> <p>Posted on January 15, 2025</p> <IoLocationSharp className="text-xl ml-3"/> <p>Remote</p>
                        </div>
                        {/* dates posted and location */}

                        {/* control btn */}

                        <div className="[&>*]:my-2 [&>*]:mr-2 md:[&>*]:my-0">
                            <button className="border py-1 px-3 rounded">Edit</button>
                            <button className="border py-1 px-3 rounded"><Link href="/employer/dashboard/job-details">View Applications</Link></button>
                            <button className="bg-slate-100 rounded py-1 px-3">Close Job</button>

                        </div>
                        {/* control btn */}

                    </div>


                   {/* left control */}
                    <div className="md:text-right my-2 md:my-0">
                        <span className="font-bold bg-slate-50 rounded-full py-2 px-2">Active</span>

                        <div className="flex md:justify-end my-4">
                        <BsExclamationCircle className="text-xl mr-2" />
                            <p>45 candidate applied</p>
                        </div>
                        
                    </div>

                      {/* left control */}


                </div>
                   {/* top header */}

                   {/* bottom container */}

                   <div className="w-full bg-slate-50 rounded-b-lg py-3 mt-5 px-2">
                    <h1>Top Candidates Matches</h1>

                    <div className="md:grid grid-cols-2 mt-3 ">
                    {/* candidate profile */}
                    <div className="w-full md:w-[80%] flex">

                        <div className="bg-gray-200 rounded-full w-14 h-14 mr-2"></div>

                        <div>
                            <h1 className="font-bold">James Bond</h1>
                            <p>8 year Experience | New York, NY</p>
                    </div>

                    </div>
                      {/* candidate profile */}

                      {/* controls btns */}
                      <div className="w-full">
                        <div className="flex justify-end">
                        <p className="font-bold mr-3 leading-9">95% Match</p>
                        <button className="bg-white border rounded py-1 px-2 mr-3 ">View Profile</button>
                        <button className="bg-gray-200 rounded py-1 px-2">message</button>
                        </div>
                      </div>

                      </div>

                      {/* controls btns */}
                   </div>

                      {/* bottom container */}
                    



            </div>


            {/* sample jobs */}



            <div className="w-full my-5">
                <div>
                    <h1> Showing 1 of 1  entries</h1>
                </div>

                <div className="flex">
                    

                </div>
            </div>
                    
                     
              
                    
        

        </section>
    )
}