"use client"
import HomeNavbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer"
import { FaApple } from "react-icons/fa";
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createAccount } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation'
import React, { useState,} from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";


type Inputs = z.infer<typeof createAccount>


export default function ApplicantSignUp(){

  // loading as error state
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
 
  const router = useRouter()
  const { register,handleSubmit,formState: { errors } } = useForm<Inputs>({resolver:zodResolver(createAccount)});
  const [showPassword,setShowPassword] = useState(false)

  const togglePassword = () => setShowPassword(!showPassword);

  //  submit from to server
  const processForm: SubmitHandler<Inputs> =  async data => {
    console.log(data);
    try{
    setIsLoading(true)
      const response = await fetch('/api/register/applicant',{
        method: "POST",
        body: JSON.stringify(data),

      });
       if(response.ok){
        console.log(response.json())
        router.push('/account-created-successfull')
        
       }
       if(response.status === 406){
        console.log(await response.json())

       }
      if (!response.ok){
        setError("Account already exists with this email")
      }
       console.log(response)
       setIsLoading(false)
      
    } catch (error){
      console.error("account creation fail",error)
      setIsLoading(false)
    }
   
  }
  //  submit from to server
 




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
        <form onSubmit={handleSubmit(processForm)}>


        <div className="p-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" {...register("first_name")} id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="First Name"/>
            <p className="text-sm text-red-500">{errors.first_name?.message}</p>
        </div>

        <div className="p-2">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text"  {...register("last_name")} id="lastName" placeholder="Enter your Last Name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
            <p className="text-sm text-red-500">{errors.last_name?.message}</p>
        </div>
          


        <div className="p-4">

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
            <input type="email"  {...register("email")} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your Email "/>
            <p className="text-sm text-red-500">{errors.email?.message}</p>
        </div>

        <div className="p-2 relative">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type={showPassword ? 'text' : 'password'}  {...register("password")} id="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
            <span className="absolute bottom-5 right-9" onClick={togglePassword} >{showPassword ? <FaRegEye className="text-2xl"/> : <FaRegEyeSlash className="text-2xl" />}</span>
            <p className="text-sm text-red-500">{errors.password?.message}</p>
            <input type="text" hidden={true}  {...register("role")} value={"applicant"} />
            
        </div>



        <div className="mb-4">
          <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
            <button type="submit" className="w-full text-white  rounded-lg text-sm px-5 py-2.5 text-center bg-gray-600 mb-4" disabled={isLoading}>
              {isLoading? 
              (<>
  <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>Creating...
              </>)
              :'Create Account'}
              </button>
          

        </form>
        
      </div>

    </div>
    <p className="my-3 text-red-400 text-base">{error}</p>

     {/* signup */}
    
       </div>
         <h1 className="mt-3 cursor-pointer">Already have an account? <Link href="/login">Log in</Link></h1>
       

    </section>

    <Footer/>


    </div>
    )
}