import VideoThumbnail from "./video"
import { IoMdCheckmark } from "react-icons/io";
import { FocusArea } from "./oursolutions";
import { IoIosStar } from "react-icons/io";

export  function Cta(){
 
 
     return (
         <section className="md:grid grid-cols-1 p-20 w-full justify-around">
 
         <div className="m-5 text-center w-full">
             <h1 className="text-2xl font-bold md:text-4xl block">What Our Users Say</h1>
         </div>
         <div className="space-y-4 sm:space-y-4 md:space-y-0 md:grid grid-cols-2 rounded items-center p-5 w-full gap-10"> 
            
                 <div className="bg-[#f1f1f1] rounded py-5 p-6">
                    <p>CultureLancer Transform my career path. I found opportunities i never knew existed</p>

                    <div className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3">
                    <div className='bg-[#cccbc8] rounded-full w-14 h-14'></div>
                        <div className="">
                            <h1>John Doe</h1>
                            <p>software Engineer</p>
                        </div>
                    </div>

                 </div>

                 {/* second user profile */}

                 <div className="bg-[#f1f1f1] rounded py-5 p-6">
                    <p> As an employer, CultureLancer has been invaluable in finding diverse skilled talent</p>

                    <div className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3">
                    <div className='bg-[#cccbc8] rounded-full w-14 h-14'></div>
                        <div className="">
                            <h1>John Smith</h1>
                            <p>Hr Manager</p>
                        </div>
                    </div>

                 </div>
                  
         </div>

{/* Video Testimonials  */}
         <div className="w-full p-4">
             <p className="text-base pl-3 font-bold md:text-lg text-black">Video Testimonials</p>
             <div className="space-y-4 sm:space-y-4 md:space-y-0 md:grid grid-cols-3 rounded text-center items-center p-5 w-full gap-10"> 
            
            <div className="">
               <VideoThumbnail source_url={``}/>
            </div>

            <div className="rounded py-4">
            <VideoThumbnail source_url={``}/>
            </div>

            <div className="rounded py-4">
            <VideoThumbnail source_url={``}/>
            </div>
             
    </div>


         </div>


     </section>
     
     )
 
 }



// hire cta


 export function HireCta(){
 
 
    return (
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">

        <div className="m-5 text-center w-full">
            <h1 className="text-2xl font-bold md:text-4xl block">Price Plans</h1>
        </div>
        <div className="space-y-4 sm:space-y-4 md:space-y-0 md:grid grid-cols-3 rounded items-center p-5 w-full gap-2"> 
           
                <div className="rounded py-5 p-6 border shadow-lg ">
                    <h1 className="font-bold text-xl mb-3">Basic</h1>
                    <span className="font-semibold text-2xl">$99</span><span>/month</span>
                    <div className="flex flex-row flex-nowrap space-x-3 mt-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">5 projects</h1>
                    </div>

                    <div className="flex flex-row flex-nowrap space-x-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">Basic Support</h1>
                    </div>

                    
                  <button className="py-2 text-white w-full bg-black rounded mt-[6.5rem]">Choose Plan</button>

                  

                </div>

                {/* second */}


                
                <div className="rounded py-5 p-6 border shadow-lg ">
                    <h1 className="font-bold text-xl mb-3">Pro</h1>
                    <span className="font-semibold text-2xl">$199</span><span>/month</span>
                    <div className="flex flex-row flex-nowrap space-x-3 mt-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">15 projects</h1>
                    </div>

                    <div className="flex flex-row flex-nowrap space-x-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">Priority Support</h1>
                    </div>

                    <div className="flex flex-row flex-nowrap space-x-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">Advance analytics</h1>
                    </div>
                  <button className="py-2 text-white w-full bg-black rounded mt-20">Choose Plan</button>

                  

                </div>


            {/* third */}

            <div className="rounded py-5 p-6 border shadow-lg ">
                    <h1 className="font-bold text-xl mb-3">Enterprise</h1>
                    <span className="font-bold text-3xl">Custom</span>
                    <div className="flex flex-row flex-nowrap space-x-3 mt-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">Unlimited projects</h1>
                    </div>

                    <div className="flex flex-row flex-nowrap space-x-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">24/7 Support</h1>
                    </div>

                    <div className="flex flex-row flex-nowrap space-x-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">Advance analytics</h1>
                    </div>
                  <button className="py-2 text-white w-full bg-black rounded mt-20">Contact Sales</button>

                  

                </div>

        
        </div>

{/* Success Stories  */}

<div className="text-center w-full mt-24">
         <h1 className="text-2xl font-bold md:text-4xl block">Success Stories</h1>


         <div className="space-y-2 md:space-y-0 md:flex flex-row flex-wrap justify-center md:space-x-8 mt-8 "> 
            

             
            <div className="bg-white rounded py-7 text-left px-7 md:w-96 drop-shadow-lg">
                <div className="solutions-content text-black py-4">
                <div className='bg-[#cccbc8] rounded-full w-16 h-16 py-4 px-4 mb-4'></div>
                   
                    <p className="">Culturelancer help us find the perfect developer for our startup. Highly recommended</p>
                </div>
                <h1 className=" font-semibold mb-2"> John Doe, CEO of TechStart</h1>
               
            </div>


            <div className="bg-white rounded py-7 text-left px-7 md:w-96 drop-shadow-lg">
                <div className="solutions-content text-black py-4">
                <div className='bg-[#cccbc8] rounded-full w-16 h-16 py-4 px-4 mb-4'></div>
                   
                    <p className="">Culturelancer help us find the perfect developer for our startup. Highly recommended</p>
                </div>
                <h1 className=" font-semibold mb-2"> Jone Smith, Founder of GrowthX</h1>
               
            </div>


            <div className="bg-white rounded py-7 text-left px-7 md:w-96 drop-shadow-lg">
                <div className="solutions-content text-black py-4">
                <div className='bg-[#cccbc8] rounded-full w-16 h-16 py-4 px-4 mb-4'></div>
                   
                    <p className="">Culturelancer help us find the perfect developer for our startup. Highly recommended</p>
                </div>
                <h1 className=" font-semibold mb-2">Mike Johnson, CTO of InnovateCo</h1>
               
            </div>




         </div>
         </div>
       

       


    </section>
    
    )

}


// work 


export function WorkCta(){
 
 
    return (
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">

        <div className="m-5 text-center w-full">
            <h1 className="text-2xl font-bold md:text-4xl block">MemberShip Plans</h1>
        </div>
        <div className="space-y-4 sm:space-y-4 md:space-y-0 md:grid grid-cols-3 rounded items-center p-5 w-full gap-2"> 
           
                <div className="rounded py-5 p-6 border shadow-lg">
                    <h1 className="font-bold text-xl">Basic</h1>
                
                    <div className="flex flex-row flex-nowrap space-x-3  p-4">
                    <ul className="list-disc [&>*]:p-1">
                        <li> limited job listing</li>
                        <li> Basic Profile</li>
                        <li> Email support</li>
                    </ul>
                  
                    </div>

                    
                  <button className="py-2 text-white w-full bg-black rounded mt-[6.5rem]">Choose Plan</button>

                  

                </div>

                {/* second */}


                
                <div className="rounded py-5 p-6 border shadow-lg">
                    <h1 className="font-bold text-xl mb-3">Pro</h1>
                    <span className="font-semibold text-2xl">$45</span><span>/month</span>
                    <div className="flex flex-row flex-nowrap space-x-3  p-4">
                    <ul className="list-disc [&>*]:p-1">
                        <li> Unlimited job listing</li>
                        <li> Enhanced Profile</li>
                        <li> Priority support</li>
                        <li> Resume Review</li>
                    </ul>
                    </div>
                  <button className="py-2 text-white w-full bg-black rounded mt-8">Choose Plan</button>

                  

                </div>


            {/* third */}

            <div className="rounded py-5  border shadow-lg">
                    <h1 className="font-bold text-xl mb-3">Enterprise</h1>
                    <div className="flex flex-row flex-nowrap space-x-3  p-4">
                    <ul className="list-disc [&>*]:p-1">
                        <li>Custom solutions</li>
                        <li> Dedicated account manager</li>
                        <li> Api Access</li>
                        <li>Advance Analytics</li>
                    </ul>
                    </div>
                  <button className="py-2 text-white w-full bg-black rounded mt-20">Contact Sales</button>

                  

                </div>

        
        </div>

         {/* FocusArea */}

     
      <FocusArea/>
   
  
   {/* FocusArea */}

{/* Success Stories  */}

<div className="text-center w-full mt-24">
         <h1 className="text-2xl font-bold md:text-4xl block">Success Stories</h1>


         <div className="space-y-2 md:space-y-0 md:flex flex-row flex-wrap justify-center md:space-x-8 mt-8 "> 
            

             
         <div className="bg-white drop-shadow-lg rounded py-5 p-6 ">
                 

                <div className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3">
                    <div className='bg-[#cccbc8] rounded-full w-14 h-14'></div>
                        <div className="text-left">
                            <h1>John Doe</h1>
                            <h2>software Engineer</h2>
                        </div>
                    </div>
                    <p className="p-2">CultureLancer Transform my career path. I found opportunities i never knew existed</p>
                    <div className="flex">
                        <IoIosStar className="text-2xl text-[#636161] bg"/>
                        <IoIosStar className="text-2xl text-[#636161] bg"/>
                        <IoIosStar className="text-2xl text-[#636161] bg"/>
                        <IoIosStar className="text-2xl text-[#636161] bg"/>
                        <IoIosStar className="text-2xl text-[#636161] bg"/>
                      
                    </div>

                 </div>
                 


            




         </div>
         </div>
       

  {/* ready to get started */}

  <div className="text-center w-full mt-24">
         <h1 className="text-2xl font-bold md:text-4xl block">Ready To Get Started</h1>
         <h2 className="text-lg md:text-2xl text-black mt-4">
         Join CultureLancer today and transform your hiring process
            </h2>

         <div className="space-y-2 md:space-y-0 md:flex flex-row flex-wrap justify-center md:space-x-8 mt-8 "> 
            <button className=" bg-black text-white rounded py-3 px-5">Sign Up Now</button>
            <button className="rounded py-3 px-5 text-black bg-white border border-current"> Learn How to Hire</button>
        
         </div>
         </div>


    </section>
    
    )

}



