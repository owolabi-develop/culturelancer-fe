import HomeNavbar from "@/app/ui/navbar"
import Footer from "@/app/ui/footer"
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImLinkedin } from "react-icons/im";
import Link from 'next/link'

export default function Login(){

    return (
    <div className={`w-full mx-auto`}>
        <HomeNavbar/>
      
    <section className="p-20 w-full text-center">       
        <div className="space-y-2 md:flex flex-col items-center text-center place-content-center w-full md:gap-2 md:space-y-0">


          {/* login */}
        
    <div className="bg-white rounded py-2 px-7 md:w-[35rem] drop-shadow-lg  cursor-pointer border">
      <div><h1 className="text-2xl font-bold md:text-2xl block mt-3">Login</h1></div>
      <div className="text-left">
        <form action={`#`}>

        <div className="p-4">

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your Email "/>
        </div>

        <div className="p-2">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
        </div>

        <div className="mb-4">
          <Link href="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
              </div>
            <button type="submit" className="w-full  text-white  rounded-lg text-sm px-5 py-2.5 text-center bg-gray-600 mb-4">Login in</button>
          

        </form>
        
      </div>

    </div>

     {/* login */}


  
    <button  className="bg-white rounded py-2 px-7 md:w-[35rem] drop-shadow-lg text-center cursor-pointer border flex place-content-center items-center space-x-2 h-10 w-full"> 
      <FcGoogle className="text-2xl" /> 
      <span>Login with Google</span>
      </button>
    <button className="bg-white rounded md:w-[35rem] drop-shadow-lg text-center cursor-pointer border flex place-content-center items-center space-x-2 h-10 w-full"> 
      <FaFacebook className="text-2xl text-[#1877F2]" />
    <span>Login with Facebook</span>
    </button>
    <button  className="bg-white rounded py-2 px-7 md:w-[35rem] drop-shadow-lg text-center cursor-pointer border flex place-content-center items-center space-x-2 h-10 w-full">
    <ImLinkedin className="text-2xl text-[#1877F2]"/>
      <span>Login with LinkedIn</span></button>
       </div>
         <h1 className="mt-3 cursor-pointer">`Don`t have an account? <Link href="/signup/options">Sign Up</Link> </h1>
       

    </section>

    <Footer/>


    </div>
    )
}