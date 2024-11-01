"use client"

// import React, { useState, } from 'react'
// import { toast, ToastContainer } from 'react-toastify';
// import { useForm, SubmitHandler } from "react-hook-form";
// import { zodResolver } from '@hookform/resolvers/zod';
import "react-toastify/dist/ReactToastify.css";

// type Inputs = z.infer<typeof AwardCertificationSchema>

export default function PersonalDetailAndSkills(){
    // const [isLoading, setIsLoading] = useState<boolean>(false);
 
    // const { register,reset,handleSubmit,formState: { errors } } = useForm<Inputs>({resolver:zodResolver(AwardCertificationSchema)});

    // handle toast bar
    // const notify = () => {
    //     toast.success("Certification Added!");
    // }
    // handle form submition
//   const onSubmit: SubmitHandler<Inputs> =  async data => {
//     console.log(data)
//     try{
//         setIsLoading(true)
//     const response =  await fetch(`/api/applicant-settings/award-certification/`,{
//         method: "POST",
//         headers: {
//         "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
// });
 
// if (response.ok){
//     console.log("certification award added")
//     reset()
//     setIsLoading(false)
//     notify()

// }
//     }catch (error){
//         console.log("server Error: ",error)
//     }
// };

  
   


    return (
        <section className="w-full ">
             {/* <ToastContainer/> */}
            <div className="md:grid grid-cols-1 py-5 px-5">
                {/* progress bar */}

                <div className="md:w-full bg-gray-200 rounded-full h-2.5 my-3">
                            <div className={`bg-[gray] h-2.5 rounded-full w-[5%]`}></div>
                        </div>
                        {/* progress bar */}

                <p className="font-semibold text-[gray]">Profle Completion: 5%</p>

                <h1 className="my-3 font-extrabold text-2xl"> Personal Details & Skills</h1>


                {/* form container */}
                <form  encType="multipart/form-data">

                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">
                    <p className="text-xl font-semibold my-2">Personal Information</p>

                    {/* forms input */}
                    
                    <div className="grid gap-6 mb-6 md:grid-cols-2">

                        <div>
                            <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                            <input type="text" id="Title" name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"/>
                            <p className='text-sm text-red-500'></p>
                        </div>

                        <div>
                            <label htmlFor="DisplayName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Display Name</label>
                            <input type="text" id="DisplayName" name='displayName'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"/>
                            <p className='text-sm text-red-500'></p>
                        </div>


                        <div>
                            <label htmlFor="PhoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <input type="text" id="PhoneNumber" name='phoneNumber' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " />
                            <p className='text-sm text-red-500'></p>
                            
                        </div>

                        <div>
                            <label htmlFor="Tagline" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tagline</label>
                            <input type="text" id="Tagline" name='tagline' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "/>
                            <p className='text-sm text-red-500'></p>
                        </div>


                        <div>
                            <label htmlFor="CurrentMayor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Mayor</label>
                            <input type="text" id="CurrentMayor" name='current_major' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"/>
                            <p className='text-sm text-red-500'></p>
                        </div>

                        <div>
                            <label htmlFor="DreamCareer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dream Career</label>
                            <input type="text" id="DreamCareer" name='dream_carerr' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"/>
                            <p className='text-sm text-red-500'></p>
                        </div>

                    </div>


                    {/*  */}
                    <div className="my-6 w-full grid grid-cols-2 gap-3">
                        <div>
                        <label htmlFor="Activities" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Activities</label>
                        <input type="text" name='activities' id="Activities" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                        <p className='text-sm text-red-500'></p>
                        </div>

                        <div>
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="text" name='address' id="Address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                        <p className='text-sm text-red-500'></p>
                        </div>
                    </div> 


                    {/* gender */}
                    <div className='my-6'>
                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Gender</h3>
                    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                    <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4  bg-gray-100 border-gray-300 "/>
                    <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                    </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                    <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 bg-gray-100 border-gray-300 "/>
                    <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                    </div>
                    </li>


                    </ul>
                    </div>


                    {/* gender */}
                    
                    {/* form input */}
{/* 
                    <div className="w-full grid grid-cols-3 gap-3">
                    <div>
                    <label htmlFor="event_organization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Country
                    </label>
                    <select id="event_organization"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                    <option value=""></option>
                    
                    </select>  
                  
                    </div>

                    
                    <div>
                    <label htmlFor="learning_preference" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                   State
                    </label>
                    <select id="learning_preference" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                    <option value=""></option>
                    
                    </select>   
                   
                    </div>

                    <div>
                    <label htmlFor="learning_preference" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                   City
                    </label>
                    <select id="learning_preference" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                    <option value=""></option>
                    
                    </select>   
                   
                    </div>






                </div> */}

                </div>


                 {/*Additional Information  */}
                 <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 [&>*]:my-4">
                <p className="text-xl font-semibold my-2">Additional Information</p>

                <div>
                    <label htmlFor="Quote" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Word to Live ByQuote</label>
                    <input type="text" id="quote" name='quote' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
                    <p className='text-sm text-red-500'></p>
                </div>

                <div>
                <label htmlFor="Highlights" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">A Fun Fact or Somethng That Highlights Your Personality</label>
                <input type="text" id="Highlights" name='personality' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"/>
                <p className='text-sm text-red-500'></p>
                </div>


                <div>
                <label htmlFor="HBCU" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">HBCU</label>
                <input type="text" id="HBCU" name='hbcq' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"/>
                <p className='text-sm text-red-500'></p>
                </div>


                <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Description</label>
                <textarea id="description" name='description' rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Tell us more about your self"></textarea>
                <p className='text-sm text-red-500'></p>
                </div>



                </div>


                {/*Additional Information  */}





                {/* language and skills */}

                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 [&>*]:my-4">
                <p className="text-xl font-semibold my-2">language</p>

                <div>
                <label htmlFor="Language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language You Can Speak</label>
                <textarea id="language" name='language' rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "></textarea>
                <p className='text-sm text-red-500'></p>
                </div>



                </div>


                {/* language and skills */}




                {/* save anf update button */}

                <div className="w-full md:w-[70%] rounded px-5  bg-white drop-shadow-lg mt-10 [&>*]:my-4 m-auto md:flex justify-between ">
                    <div className="">
                    <p className="text-sm leading-[3rem]">Save your changes by clicking the Save & Update button.</p>
                    </div>
               
                    <div className="">
                        <button type='submit' className="bg-[#727272] py-2 px-3 md:px-5 md:py-3 rounded text-white mb-5 md:mb-0" >
{/*                                                          
                        {isLoading? 
                    (<>
                    <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    </>)
                    :'Save & Update'} */}
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