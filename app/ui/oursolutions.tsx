
export default function OurSolutions(){

    const solutions = [
        {title:"Telent Empowerment",details:"Empower global talent with opportunities",logo:""},
        {title:"Telent Empowerment",details:"Empower global talent with opportunities",logo:""},
        {title:"Telent Empowerment",details:"Empower global talent with opportunities",logo:""},
        {title:"Telent Empowerment",details:"Empower global talent with opportunities",logo:""}
    
    ]
 
 
     return (
         <section className="md:grid grid-cols-1 p-20 w-full justify-around">
 
         <div className="m-5 text-center w-full">
             <h1 className="text-2xl font-bold md:text-4xl block">Our Solutions</h1>
         </div>

         <div className="space-y-4 sm:space-y-4 md:space-y-0 md:grid grid-cols-4 rounded text-center items-center p-5 w-full gap-8"> 

             {solutions.map((items,index)=>(
            <div key={index} className="bg-white rounded py-7 text-left px-7 md:w-72 drop-shadow-lg">

            <div className='bg-[#cccbc8] rounded-full w-16 h-16'>{items.logo}</div>

                <div className="solutions-content text-black py-4">
                    <h1 className=" font-semibold mb-2">{items.title}</h1>
                    <p>{items.details}</p>
                </div>

            </div>
))}  
         </div>



         <div className="text-center w-full mt-24">
         <h1 className="text-2xl font-bold md:text-4xl block">Choose Your Path</h1>


         <div className="space-y-2 md:space-y-0 md:flex flex-row flex-wrap justify-center md:space-x-8 mt-8 "> 
            

             
            <div className="bg-white rounded py-7 text-left px-7 md:w-96 drop-shadow-lg">
                <div className="solutions-content text-black py-4">
                    <h1 className=" font-semibold mb-2"> I Am a Job Seeker</h1>
                    <p className="pl-3"> Accesss global opportunities Skill developement resources Personalized job matches</p>
                </div>
                <button className="text-white py-2 bg-black rounded w-full"> Get Started</button>
            </div>


  
            <div className="bg-white rounded py-7 text-left px-7 md:w-96 drop-shadow-lg">
                <div className="solutions-content text-black py-4">
                    <h1 className=" font-semibold mb-2"> I Am a Job Seeker</h1>
                    <p className="pl-3"> Accesss global opportunities Skill developement resources Personalized job matches</p>
                </div>
                <button className="text-white py-2 bg-black rounded w-full"> Get Started</button>
            </div>


         </div>

         


         </div>
     </section>
     
     )
 
 }