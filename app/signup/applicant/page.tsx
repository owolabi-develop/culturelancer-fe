import HomeNavbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer"
import { FaApple } from "react-icons/fa";
import Link from 'next/link'

export default function Login(){

    return (
    <div className={`w-full mx-auto`}>
        <HomeNavbar/>
      
    <section className="p-20 w-full text-center">  
      <h1 className="text-3xl font-bold md:text-3xl block mb-8">Sign up to find work you love</h1>
        
        <div className="space-y-2 md:flex flex-col items-center text-center place-content-center w-full md:gap-2 md:space-y-0">
        <button className="bg-white rounded md:w-[35rem] drop-shadow-lg text-center cursor-pointer border flex place-content-center items-center space-x-2 h-10 w-full"> 
      <FaApple className="text-2xl text-[#1877F2]" />
    <span>Continue with Apple</span>
    </button>
    <button  className="bg-white rounded py-2 px-7 md:w-[35rem] drop-shadow-lg text-center cursor-pointer border flex place-content-center items-center space-x-2 h-10 w-full">
      <span>Continue with Owolabi Akintan</span></button>

 {/* divider */}
 <div className="py-2 px-7 md:w-[35rem]  text-center  flex place-content-center items-center space-x-2 h-10 w-full">
    <hr className="flex-grow h-0.5 border-t-0border-t-0 bg-neutral-100 dark:bg-white/10  w-full" />
    <div className="rounded-full w-11 h-11 p-2">
        <h1 className="text-center">or</h1>
    </div>
    <hr className="flex-grow h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10  w-full" />
</div>
      {/* divider */}
     
          {/* login */}
        
    <div className="bg-white rounded py-2 px-7 md:w-[35rem] drop-shadow-lg  cursor-pointer border">
      <div className="text-left">
        <form action={`#`}>


        <div className="p-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" name="first_name" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your Email "/>
        </div>

        <div className="p-2">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" name="last_name" id="lastName" placeholder="Enter your LastName" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
        </div>
          


        <div className="p-4">

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your Email "/>
        </div>

        <div className="p-2">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
        </div>

        <div className="mb-4">
          <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
            <button type="submit" className="w-full text-white  rounded-lg text-sm px-5 py-2.5 text-center bg-gray-600 mb-4">Create Account</button>
          

        </form>
        
      </div>

    </div>

     {/* signup */}

    
       </div>
         <h1 className="mt-3 cursor-pointer">Already have an account? <Link href="/login">Log in</Link></h1>
       

    </section>

    <Footer/>


    </div>
    )
}