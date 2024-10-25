import HomeNavbar from "@/app/ui/navbar"
import Footer from "@/app/ui/footer"

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function OtpVerification(){

    return (
    <div className={`w-full mx-auto`}>
        <HomeNavbar/>
      
    <section className="p-20 w-full text-center">       
        <div className="space-y-2 md:flex flex-col items-center text-center place-content-center w-full md:gap-2 md:space-y-0  mb-24">


          {/* otp */}
        
    <div className="bg-white rounded py-2 px-7 md:w-[35rem] drop-shadow-lg  cursor-pointer border">
      
      <div className="">
        <div className="text-center flex justify-center my-5">
        <IoMdCheckmarkCircleOutline className="text-[100px]" />
        </div>
        <div className="my-5 text-center">
            <h1 className="text-2xl">Account created successfully!</h1>
        <p>Congratulations your account has been createds. please check your inbox to Verify your account</p>
        </div>
     

        <div className="mb-4">
         
              </div>
            <button type="submit" className=" text-white  rounded-lg text-sm px-5 py-2.5 text-center bg-gray-600 mb-4">Continue</button>
             
      </div>

    </div>

     {/* otp */}


  
  
       </div>
        
       

    </section>

    <Footer/>


    </div>
    )
}