import HomeNavbar from "@/app/ui/navbar"
import Footer from "@/app/ui/footer"
import Link from 'next/link'

export default function ForgotPassword(){

    return (
    <div className={`w-full mx-auto`}>
        <HomeNavbar/>
      
    <section className="p-20 w-full text-center">       
        <div className="space-y-2 md:flex flex-col items-center text-center place-content-center w-full md:gap-2 md:space-y-0  mb-[9.2rem]">


          {/* login */}
        
    <div className="bg-white rounded py-2 px-7 md:w-[35rem] drop-shadow-lg  cursor-pointer border">
      <div><h1 className="text-2xl font-bold md:text-2xl block mt-3">Forgot Password</h1></div>
      <div className="text-left">
        <form action={`#`}>

        <div className="p-4">

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your Email "/>
        </div>

        <div className="mb-4">
          <Link href="/login" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
              </div>
            <button type="submit" className="w-full text-white rounded-lg text-sm px-5 py-2.5 text-center bg-gray-600 mb-4">Forget Password</button>
          

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