
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { HiOutlineChartPie } from "react-icons/hi";
import { BsPalette2 } from "react-icons/bs";
import { RiAddLargeLine } from "react-icons/ri";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaRegClipboard } from "react-icons/fa";

export function OurSolutions(){

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




// top services


export function TopService(){

    const solutions = [
        {title:"Web Developement",details:"Custom websites and web application",logo: <HiOutlineDesktopComputer className=" text-3xl" />},
        {title:"UI/UX Design",details:"Intuitive and engaging user interfaces",logo: <BsPalette2 className=" text-3xl" />},
        {title:"Data Analysis",details:"Insights and visualization from your data",logo:<HiOutlineChartPie className=" text-3xl" />},
     
    
    ]
 
 
     return (
         <section className="md:grid grid-cols-1 p-20 w-full justify-around">
 
         <div className="m-5 text-center w-full">
             <h1 className="text-2xl font-bold md:text-4xl block">Top Services</h1>
         </div>

         <div className="space-y-4 sm:space-y-4 md:space-y-0 md:grid grid-cols-3 rounded text-center items-center p-5 w-full gap-8"> 

             {solutions.map((items,index)=>(
            <div key={index} className="bg-white rounded py-7 text-left px-7 drop-shadow-lg">

            <div className='bg-[#cccbc8] rounded-full w-16 h-16 py-4 px-4'>{items.logo}</div>

                <div className="solutions-content text-black py-42 mt-3">
                    <h1 className=" font-semibold mb-2">{items.title}</h1>
                    <p>{items.details}</p>
                </div>

            </div>
))}  
         </div>



     </section>
     
     )
 
 }





 
// top services


export function FocusArea(){

    const solutions = [
        {title:"Global Talent Pool",details:"Acess a diverse range of skill professional from around the world",logo: <HiOutlineDesktopComputer className=" text-3xl" />},
        {title:"Cultural Integration",details:"Ensure smooth onboarding with our cultural integration support services",logo: <BsPalette2 className=" text-3xl" />},
        {title:"Hiring Simplicity",details:"streamlined hiring process to save time and resource for your company",logo:<HiOutlineChartPie className=" text-3xl" />},
     
    
    ]
 
 
     return (
         <section className="md:grid grid-cols-1 p-20 w-full justify-around">
 
         <div className="m-5 text-center w-full">
             <h1 className="text-2xl font-bold md:text-4xl block">Our Focus Area</h1>
         </div>

         <div className="space-y-4 sm:space-y-4 md:space-y-0 md:grid grid-cols-3 rounded text-center items-center p-5 w-full gap-8"> 

             {solutions.map((items,index)=>(
            <div key={index} className="bg-white rounded py-7 text-left px-7 drop-shadow-lg">

            <div className='bg-[#cccbc8] rounded-full w-16 h-16 py-4 px-4'>{items.logo}</div>

                <div className="solutions-content text-black py-42 mt-3">
                    <h1 className=" font-semibold mb-2">{items.title}</h1>
                    <p>{items.details}</p>
                </div>

            </div>
))}  
         </div>



     </section>
     
     )
 
 }



//   how it works Hiring





export function WorkProcess(){

    const solutions = [
        {title:"Post Job",details:"Describe your project and requirements",logo: <RiAddLargeLine className=" text-3xl" />,btn:"Post Now"},
        {title:"Review Top 10 Proposal",details:"Compare and select the best Freelancer",logo: <FaRegClipboard className=" text-3xl" />,btn:"Browser Talent"},
        {title:"Hire the Best",details:"collaborate and achive your goals",logo:<IoCheckmarkCircleOutline className="text-3xl" />,btn:"Start Project"},
     
    
    ]
 
 
     return (
         <section className="md:grid grid-cols-1 p-20 w-full justify-around">
 
         <div className="m-5 text-center w-full">
             <h1 className="text-2xl font-bold md:text-4xl block">How It Work</h1>
         </div>

         <div className="space-y-4 sm:space-y-4 md:space-y-0 md:grid grid-cols-3 rounded text-center items-center p-5 w-full gap-8"> 

             {solutions.map((items,index)=>(
            <div key={index} className="py-7 px-7 flex flex-col items-center">

            <div className='bg-[#cccbc8] rounded-full w-16 h-16 py-4 px-4'>{items.logo}</div>

                <div className="solutions-content text-black py-42 mt-3">
                    <h1 className="font-bold mb-2">{items.title}</h1>
                    <p>{items.details}</p>
                </div>
                <button className="bg-black text-white rounded py-2 px-4 mt-5">{items.btn}</button>

            </div>

            
))}  
         </div>



     </section>
     
     )
 
 }
