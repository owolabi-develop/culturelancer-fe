import VideoThumbnail from "./video"
export default function Cta(){
 
 
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