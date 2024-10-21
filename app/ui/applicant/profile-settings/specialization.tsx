
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
export default function Specializations(){

    return (
        <section className="w-full ">
            <div className="md:grid grid-cols-1 py-5 px-5">
                {/* progress bar */}

                <div className="md:w-full bg-gray-200 rounded-full h-2.5 my-3">
                            <div className={`bg-[gray] h-2.5 rounded-full w-[75%]`}></div>
                        </div>
                        {/* progress bar */}

                <p className="font-semibold text-[gray]">Profle Completion: 75%</p>

                <h1 className="my-3 font-extrabold text-2xl"> Specialization</h1>


                {/* form container */}
                <form>
                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">

                    {/* forms input */}

                    <div className="my-2">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Specialization</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ">
                        <option value="Web Developement">Web Developement</option>
                        <option value="Graphic Design">Graphic Design</option>
                    
                        </select>
                    </div>
                  

                    {/*  */}
                    <div className="mb-6">
                        <label htmlFor="Activities" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Proficiencys(%)</label>
                        <input type="number" name="activities" id="Activities" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required  placeholder="Enter Proficiency level"/>
                    </div> 
                    
                    {/* form input */}

                    <div className="md:flex">
                        <div className="md:w-full">
                        <button className="bg-[#727272] py-2 px-3 md:px-5 md:py-3 rounded text-white mb-5 md:mb-0">Add Specialization</button>
                        </div>
                       
                        <div className="text-right w-full"><h1>Select your area of experties and indicate your proficiency level as a percentage</h1></div>
                    </div>


                </div>

              


                </form>
                {/* forn container */}


                {/* Added Specializations */}

                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 [&>*]:my-4">
                <p className="text-xl font-semibold my-2">Added Specializations</p>


                {/* Specializations */}

                <div className="md:flex">
                        <div className="w-full">
                       <h1 className="font-semibold">Web Developement</h1>
                       <p>Proficiency: 70%</p>
                        </div>
                               
                {/* control */}

                <div className="md:flex md:w-full md:my-4 md:justify-end">
                 <div className="border rounded md:py-1 md:px-1">
                 <MdEdit  className="text-2xl cursor-pointer" />
                 </div>

                <div className="border w-10 rounded md:py-1 md:px-1 mx-2">
                <RiDeleteBin6Line className="text-2xl cursor-pointer" />
                </div>
               
                </div>
                          
                 {/* control */}
                     
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                   {/* Specializations */}

                <div>
              
                </div>



                </div>

                  {/* Added Specializations*/}


                
            </div>

        </section>
    )
}