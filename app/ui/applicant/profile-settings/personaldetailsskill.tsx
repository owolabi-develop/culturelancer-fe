

export default function PersonalDetailAndSkills(){

    return (
        <section className="w-full ">
            <div className="md:grid grid-cols-1 py-5 px-5">
                {/* progress bar */}

                <div className="md:w-full bg-gray-200 rounded-full h-2.5 my-3">
                            <div className={`bg-[gray] h-2.5 rounded-full w-[5%]`}></div>
                        </div>
                        {/* progress bar */}

                <p className="font-semibold text-[gray]">Profle Completion: 5%</p>

                <h1 className="my-3 font-extrabold text-2xl"> Personal Details & Skills</h1>


                {/* form container */}
                <form>
                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">
                    <p className="text-xl font-semibold my-2">Personal Information</p>

                    {/* forms input */}
                    
                    <div className="grid gap-6 mb-6 md:grid-cols-2">

                        <div>
                            <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                            <input type="text" id="Title" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" required />
                        </div>

                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                            <input type="text" id="first_name" name="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " required />
                        </div>

                        <div>
                            <label htmlFor="LastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input type="text" id="LastName" name="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "  required />
                        </div> 

                        <div>
                            <label htmlFor="DisplayName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Display Name</label>
                            <input type="text" id="DisplayName" name="display_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" required />
                        </div>


                        <div>
                            <label htmlFor="PhoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <input type="text" id="PhoneNumber" name="phone_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  " required />
                        </div>

                        <div>
                            <label htmlFor="Tagline" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tagline</label>
                            <input type="text" id="Tagline" name="tagline" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "required />
                        </div>


                        <div>
                            <label htmlFor="CurrentMayor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Mayor</label>
                            <input type="text" id="CurrentMayor" name="current_mayor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"required />
                        </div>

                        <div>
                            <label htmlFor="DreamCareer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dream Career</label>
                            <input type="text" id="DreamCareer" name="dream_career" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"required />
                        </div>

                    </div>


                    {/*  */}
                    <div className="mb-6">
                        <label htmlFor="Activities" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Activities</label>
                        <input type="text" name="activities" id="Activities" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                    </div> 
                    
                    {/* form input */}

                </div>


                {/*profile media  */}
                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5">
                <p className="text-xl font-semibold my-2">Profile Media</p>



                <div className="grid gap-6 mb-6 md:grid-cols-2">

                    {/* profile photo */}
                    
                <div>
                <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Photo</h1>
                
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






                      {/* banner photo */}
                    
                <div>
                <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">banner</h1>
                
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or GIF up to 10MB</p>
                        </div>
                        <input id="dropzone-file" name="banner" type="file" className="hidden" />
                    </label>
                </div> 
                
                </div>
                  {/* banner photo */}





                      {/* Gallery Photo */}
                    
                      <div>
                <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">banner</h1>
                
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  ">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or GIF up to 10MB</p>
                        </div>
                        <input id="dropzone-file" name="banner" type="file" className="hidden" />
                    </label>
                </div> 
                
                </div>
                  {/* Gallery photo */}





                  
                      {/* resume file */}
                    
                      <div>
                <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">banner</h1>
                
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">PDF,DOC,DOCX up to 5MB</p>
                        </div>
                        <input id="dropzone-file" name="banner" type="file" className="hidden" />
                    </label>
                </div> 
                
                </div>
                  {/* resume file */}


                </div>
                </div>


                {/*profile media  */}




                 {/*Additional Information  */}
                 <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 [&>*]:my-4">
                <p className="text-xl font-semibold my-2">Additional Information</p>

                <div>
                    <label htmlFor="Quote" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Word to Live ByQuote</label>
                    <input type="text" id="CurrentMayor" name="Quote" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"required />
                </div>

                <div>
                <label htmlFor="Highlights" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">A Fun Fact or Somethng That Highlights Your Personality</label>
                <input type="text" id="Highlights" name="highlights" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"required />
                </div>


                <div>
                <label htmlFor="HBCU" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">HBCU</label>
                <input type="text" id="HBCU" name="hbcu" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"required />
                </div>


                <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Description</label>
                <textarea id="description" name="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Tell us more about your self"></textarea>
                </div>



                </div>


                {/*Additional Information  */}





                {/* language and skills */}

                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 [&>*]:my-4">
                <p className="text-xl font-semibold my-2">language & Skills</p>

                <div>
                <label htmlFor="Language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language You Can Speak</label>
                <textarea id="language" name="language" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "></textarea>
                </div>



                </div>


                {/* language and skills */}




                {/* save anf update button */}

                <div className="w-full md:w-[70%] rounded px-5  bg-white drop-shadow-lg mt-10 [&>*]:my-4 m-auto md:flex justify-between ">
                    <div className="">
                    <p className="text-sm leading-[3rem]">Save your changes by clicking the 'Save & Update'button.</p>
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