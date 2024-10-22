export default function CommunityEngagement(){
 
 
     return (
         <section className="md:grid grid-cols-1 p-20 w-full justify-around">
 
         <div className="m-5 text-center w-full">
             <h1 className="text-2xl font-bold md:text-4xl block">Community Engagement & Support</h1>
         </div>
         
         <div className="space-y-2 sm:space-y-4 md:space-y-0 md:grid grid-cols-2 rounded items-center p-5 w-full gap-10"> 
            
                 <div className="py-5 p-6">
                 <h1 className="text-sm font-bold md:text-2xl mb-8">Upcoming Events</h1>
                 {/* unpcoming */}
                 <div className="md:grid grid-rows-3 gap-4 space-y-2 sm:space-y-4 md:space-y-0">
                 <div className="bg-white drop-shadow-lg rounded py-5 md:w-full px-3">
                 <h1 className="font-bold">Tech Trends Webinar</h1>
                 <p>Date: August 15,2025</p>
                 </div>
                 <div className="bg-white drop-shadow-lg rounded py-5 md:w-full px-3">
                 <h1 className="font-bold">Community Meetup</h1>
                 <p>Date: September 15,2025</p>
                 </div>
                 <div className="bg-white drop-shadow-lg rounded py-5 md:w-full px-3">
                 <h1 className="font-bold">Career Fair</h1>
                 <p>Date: August 15,2025</p>
                 </div>
                
                 </div>

                 {/* upcoming event */}
                   
                 </div>



                 {/*live support  */}

                 <div className=" py-5 p-6">
                
                 <h1 className="text-sm font-bold md:text-2xl mt-12 mb-6">Live Chat Support</h1>
                 <div className="md:grid grid-rows-2 gap-1 space-y-1 sm:space-y-3 md:space-y-0">
                 
                 <div className="bg-white drop-shadow-lg rounded py-5 p-6 md:w-full">
                
                    <div className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3">
                    <div className='bg-[#cccbc8] rounded-full w-16 h-16'></div>
                        <div className="">
                            <h1 className="font-bold">Sarah Support Specialist</h1>
                            <p>How can I assist you today</p>
                            <button className=" bg-black text-white rounded py-2 px-5 mt-3">Start Chart</button>
                        </div>
                    </div>

                 </div>

                   </div>

                 </div>
                    {/*live support  */}
                  
         </div>

     </section>
     
     )
 
 }