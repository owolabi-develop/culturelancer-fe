import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function SocialProfile(){

    return (
        <section className="w-full ">
            <div className="md:grid grid-cols-1 py-5 px-5">
                {/* progress bar */}

                <div className="md:w-full bg-gray-200 rounded-full h-2.5 my-3">
                            <div className={`bg-[gray] h-2.5 rounded-full w-[85%]`}></div>
                        </div>
                        {/* progress bar */}

                <p className="font-semibold text-[gray]">Profle Completion: 85%</p>

                <h1 className="my-3 font-extrabold text-2xl"> Social Profile</h1>


                {/* form container */}
                <form>
                <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">
                    <p className="text-sm font-semibold my-5">Connect your social profiles to showcase your online presence</p>

                    {/* forms input */}
                  
                    {/*  */}
                    <div className="mb-6">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch justify-between">
                    <FaFacebook  className="text-4xl" />
                        <input type="url" id="Title" name="facebook" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[95%] p-2.5" required />
                    </div>

                    <div className="relative mb-4 flex w-full flex-wrap items-stretch justify-between">
                    <FaTwitter className="text-4xl" />
                        <input type="url" id="Title" name="twitter_x" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[95%] p-2.5" required />
                    </div>

                    <div className="relative mb-4 flex w-full flex-wrap items-stretch justify-between">
                    <FaLinkedin className="text-4xl" />
                        <input type="url" id="Title" name="linkedin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[95%] p-2.5" required />
                    </div>
                       
                    </div> 
                    
                    {/* form input */}

                    
                    <div className="">
                        <button className="bg-[#727272] py-2 px-3 md:px-5 md:py-3 rounded text-white mb-5 md:mb-0">Save & Update</button>
                    </div>

                </div>


                </form>
                {/* forn container */}
                
            </div>

        </section>
    )
}