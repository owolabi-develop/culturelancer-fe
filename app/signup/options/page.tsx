import HomeNavbar from "@/app/ui/navbar"
import Footer from "@/app/ui/footer"
import Link from 'next/link'

export default function SignUpOptions(){

    return (
    <div className={`w-full mx-auto`}>
        <HomeNavbar/>
      
    <section className="p-20 w-full text-center">       
        <div className="text-center w-full ">
         <h1 className="text-xl font-bold md:text-4xl block mb-4">Join as a Client or Job Seeker</h1>
         

         <div className="sm:space-x-3 space-x-0 space-y-4 md:flex flex-wrap place-content-center mid:space-x-0 md:space-y-0"> 
             
        
   
    <div className="bg-white rounded py-7 px-7 md:w-72 drop-shadow-lg text-center cursor-pointer border">
    <Link href="/signup/employer">
        <div className="bg-[#cccbc8] rounded-full w-20 h-20 mx-auto flex items-center justify-center">Icon</div>
        <div className="solutions-content text-black mt-3">
            <h1 className="font-semibold">Employer</h1>
            <p className="pl-3">Find top talent for your project</p>
        </div>
        </Link>
    </div>
    


   
    <div className="bg-white rounded py-7 px-7 md:w-72 drop-shadow-lg text-center cursor-pointer border">
    <Link href="/assessment">
        <div className="bg-[#cccbc8] rounded-full w-20 h-20 mx-auto flex items-center justify-center">Icon</div>
        <div className="solutions-content text-black mt-3">
            <h1 className="font-semibold">Job Seeker</h1>
            <p className="pl-3">Applied for the best jobs</p>
        </div>
        </Link>
        </div>
   


         </div>

         <h1 className="mt-6 cursor-pointer">Already have an account? <Link href="/login">Log In</Link> </h1>
        </div>


    </section>

    <Footer/>


    </div>
    )
}