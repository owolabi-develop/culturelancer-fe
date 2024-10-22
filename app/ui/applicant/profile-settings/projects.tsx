

export default function Projects(){

    return (
        <section className="w-full ">
            <div className="md:grid grid-cols-1 py-5 px-5">
                {/* progress bar */}

                <div className="md:w-full bg-gray-200 rounded-full h-2.5 my-3">
                            <div className={`bg-[gray] h-2.5 rounded-full w-[45%]`}></div>
                        </div>
                        {/* progress bar */}

                <p className="font-semibold text-[gray]">Profle Completion: 45%</p>

                <h1 className="my-3 font-extrabold text-2xl"> Projects</h1>


                {/* form container */}
                <form>
                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">
                    <p className="text-xl font-semibold my-2">Project Details</p>

                    {/* forms input */}
                    
                    <div className="grid gap-6 mb-6 md:grid-cols-2">

                        <div>
                            <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Title</label>
                            <input type="text" id="Title" name="project_title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" required />
                        </div>

                        <div>
                            <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                            <input type="text" id="role" name="role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " required />
                        </div>

                        <div>
                            <label htmlFor="StartDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                            <input type="date" id="StartDate" name="start_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "  required />
                        </div> 

                        <div>
                            <label htmlFor="EndDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                            <input type="date" id="EndDate" name="end_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" required />
                        </div>


                    </div>
                
                    {/* form input */}

                    {/* technology */}



                    <div className="my-5">
                        <p className="text-sm my-2">Technology Used</p>


                    <ul className="flex flex-col sm:flex-row">
                        <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ml-px sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-lg sm:last:rounded-bl-none sm:last:rounded-tr-lg ">
                        <div className="relative flex items-start w-full">
                        <div className="flex items-center h-5">
                        <input id="list-group-item-checkbox-4" name="tech_python" type="checkbox" className="w-5 cursor-pointer h-5 appearance-none border border-gray-300  rounded-md checked:bg-no-repeat checked:bg-center checked:border-[black] checked:bg-indigo-100"/>
                        </div>
                        <label htmlFor="list-group-item-checkbox-4" className="ml-3.5 block text-sm font-normal text-gray-600 cursor-pointer "> Python </label>
                        </div>
                        </li>
                        <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ml-px sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-lg sm:last:rounded-bl-none sm:last:rounded-tr-lg ">
                        <div className="relative flex items-start w-full">
                        <div className="flex items-center h-5">
                        <input id="list-group-item-checkbox-5" name="tech_javascript" type="checkbox" className="w-5 cursor-pointer h-5 appearance-none border border-gray-300  rounded-md checked:bg-no-repeat checked:bg-center checked:border-[black] checked:bg-indigo-100"/>
                        </div>
                        <label htmlFor="list-group-item-checkbox-5" className="ml-3.5 block text-sm font-normal text-gray-600 cursor-pointer "> Javascript </label>
                        </div>
                        </li>
                        <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ml-px sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-lg sm:last:rounded-bl-none sm:last:rounded-tr-lg ">
                        <div className="relative flex items-start w-full">
                        <div className="flex items-center h-5">
                        <input id="list-group-item-checkbox-6" name="tech_NextJs" type="checkbox" className="w-5 cursor-pointer h-5 appearance-none border border-gray-300  rounded-md checked:bg-no-repeat checked:bg-center checked:border-[black] checked:bg-indigo-100"/>
                        </div>
                        <label htmlFor="list-group-item-checkbox-6" className="ml-3.5 block text-sm font-normal text-gray-600 cursor-pointer "> Nextjs </label>
                        </div>
                        </li>
                    </ul>

                    </div>





                    {/* technology used */}

                <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Description</label>
                <textarea id="description" name="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder=""></textarea>
                </div>

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
                        <input id="dropzone-file" name="profile" type="file" className="hidden" />
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
                    <input type="url" id="Github" name="project_link_github" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"required />
                </div>

                <div>
                <label htmlFor="LiveDemo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Live Demo</label>
                <input type="url" id="LiveDemo" name="project_liveDemo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"required />
                </div>


                <div>
                <label htmlFor="PortfolioLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Portfolio Link</label>
                <input type="url" id="PortfolioLink" name="project_portfolio_link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"required />
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
                        <button className="bg-[#727272] py-2 px-3 md:px-5 md:py-3 rounded text-white mb-5 md:mb-0">Save & Update</button>
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