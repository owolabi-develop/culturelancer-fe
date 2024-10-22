import Link from 'next/link'
import { IoMdAdd } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";

export  function EmployerUserProfile(){

    return (
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">
          <h1 className='font-bold mb-10'>Dashboard / Profile</h1>  

{/* profile icon */}
        <div className="rounded bg-white drop-shadow-lg p-5 w-full"> 

        <div className='w-full flex flex-row'>
                        
        <div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>

           {/* profile */}
           <div className="">
                  
                <div className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3 relative">
                    {/* change icon pen */}
                    <div className='bg-[#f6f4f4] rounded-full w-10 h-10 drop-shadow-lg absolute py-3 px-[0.6rem] top-[4.5rem] md:bottom-1 left-[4rem]'>
                    <LuPencil className='text-xl' />
                    </div>
                      {/* change icon pen */}

                    <div className='bg-[#cccbc8] rounded-full w-24 h-24'></div>
                        <div className="">
                            <h1 className='font-bold text-2xl'>John Doe</h1>
                            <p className='font-semibold text-xl'>Seniorsoftware Engineer</p>
                            <p className='font-semibold text-base'>San Francisco, CA</p>

                            <div className='[&>*]:py-1 [&>*]:px-1 [&>*]:mx-2 [&>*]:bg-gray-400 [&>*]:rounded-full my-3 [&>*]:text-sm'>
                                <span>AI Solutions</span>
                                <span>Web Developement</span>
                                <span>UX/UI Design</span>
                            </div>

                        </div>
                    </div>

                </div>

          {/* profile */}


        </div>


        <div className='w-1/2 sm:w-10 p-2 justify-end md:w-[20%] cursor-pointer'>
            {/* progress bar */}
                <div className=" bg-gray-200 rounded-full h-2.5 ">
                    <div className={`bg-[gray] h-2.5 rounded-full w-[60%]`}></div>
                </div>
                {/* progress bar */}
        <p className='my-2'>Profile 80% complete</p>
        <button className="py-2 px-4 font-bold bg-[#242424] rounded text-white my-2">Complete Profile</button>
        </div>
        </div>

        </div>
{/* profile icon */}



            {/* applicant scorea  */}

            <div className="w-full md:grid md:grid-cols-4 gap-3">

            <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
                <h1 className="font-bold text-sm">Total jOb Posted</h1>
                <h1 className="font-bold text-xl">42</h1>
            </div>

            
            <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
                <h1 className="font-bold text-sm">Total Candidate Applied</h1>
                <h1 className="font-bold text-xl">256</h1>
            </div>

            
            <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
                <h1 className="font-bold text-sm">Average Candidate Match</h1>
                <h1 className="font-bold text-xl">78%</h1>
            </div>


            <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
                <h1 className="font-bold text-sm">Average Review rating</h1>
                <h1 className="font-bold text-xl">4.8/5</h1>
            </div>

                
            </div>

             


    <div className='w-full p-3 rounded grid grid-cols-2 gap-3'>  
        
    </div>



    
    <div className='bg-white drop-shadow-lg w-full rounded my-4'>

        <div className='w-full border-b-2 py-4 px-4'>
            <h1>Testimonial & Reviews</h1>
        </div>

        <div className='w-full flex py-3 px-3'>
            <div className=' rounded-full w-16 h-16 bg-slate-200 mr-2'></div>
            <div>
                <h1 className='leading-7 font-bold'>John Doe</h1>
                <p className='font-semibold'>Full Stack Developer</p>
            </div>
        </div>
        
        
    </div>



   
    </section>
    
    )

}



