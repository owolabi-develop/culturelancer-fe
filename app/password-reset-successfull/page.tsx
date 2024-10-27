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
            <h1 className="text-2xl">Password Reset email Sent</h1>
        <p> Password reset instructions has been to your email follow the instructions to reset your password </p>
        </div>
     

        <div className="mb-4">
         
              </div>
           
             
      </div>

    </div>

     {/* otp */}


  
  
       </div>
        
       

    </section>

    <Footer/>


    </div>
    )
}