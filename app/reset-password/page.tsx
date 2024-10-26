"use client"
import HomeNavbar from "@/app/ui/navbar"
import Footer from "@/app/ui/footer"

import * as z from 'zod';
import { passwordReset } from "@/app/libs/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

type Inputs = z.infer<typeof passwordReset>

export default function ResetPassword(){

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(passwordReset)
  });

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
    <div className={`w-full mx-auto`}>
        <HomeNavbar/>
      
    <section className="p-20 w-full text-center">       
        <div className="space-y-2 md:flex flex-col items-center text-center place-content-center w-full md:gap-2 md:space-y-0  mb-24">


          {/* login */}
        
    <div className="bg-white rounded py-2 px-7 md:w-[35rem] drop-shadow-lg  cursor-pointer border">
      <div><h1 className="text-2xl font-bold md:text-2xl block mt-3">Reset Password</h1></div>
      <div className="text-left">
        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="p-2">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" {...register("password")} id="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
            <p className="text-sm text-red-500">{errors.password?.message}</p>
        </div>

        <div className="p-2">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
            <input type="password" {...register("password1")} id="password" placeholder="Confirm Password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
            <p className="text-sm text-red-500">{errors.password1?.message}</p>
        </div>

        <div className="mb-4">
         
              </div>
            <button type="submit" className="w-full text-white  rounded-lg text-sm px-5 py-2.5 text-center bg-gray-600 mb-4">Reset Password</button>
          

        </form>
        
      </div>

    </div>

     {/* login */}


  
  
       </div>
        
       

    </section>

    <Footer/>


    </div>
    )
}