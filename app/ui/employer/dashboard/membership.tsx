import { IoMdCheckmark } from "react-icons/io";

export default function MemberShip(){

    return(
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">
            {/* header */}
            <div className="w-full m-auto text-center [&>*]:my-4">
                <h1 className="font-bold text-4xl">Choose Your MemberShip Plan</h1>
                <p>Unlock the best tools and resource to find to talent and manage your job posting effectively.</p>
            </div>

              {/* header */}

              {/* plan */}

              <div className=" space-y-4 w-full md:grid grid-cols-3 mt-5 gap-3 md:space-y-0">
                <div className="bg-white drop-shadow-lg rounded-md py-4 px-5">
                    <h1 className="font-bold text-xl">Basic</h1>
                    <div className="flex">
                    <h1 className="font-extrabold text-4xl">$28</h1>
                    <span className="leading-[3rem]">/month</span>
                    </div>
                    <div className="flex flex-row flex-nowrap space-x-3 mt-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">5 jop posting</h1>
                    </div>
                    <div className="flex flex-row flex-nowrap space-x-3 mt-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">Basic resume search</h1>
                    </div>
                    <div className="flex flex-row flex-nowrap space-x-3 mt-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">Email support</h1>
                    </div>

                    <button className="py-2 text-white w-full bg-black rounded mt-[10.5rem]">Select Basic</button>
                </div>


                <div className="bg-white drop-shadow-lg rounded-md py-4 px-5">
                    <h1 className="font-bold text-xl">Pro</h1>
                    <div className="flex">
                    <h1 className="font-extrabold text-4xl">$99</h1>
                    <span className="leading-[3rem]">/month</span>
                    </div>
                    <div className="flex flex-row flex-nowrap space-x-3 mt-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">25 jop posting</h1>
                    </div>
                    <div className="flex flex-row flex-nowrap space-x-3 mt-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">Advance resume search</h1>
                    </div>
                    <div className="flex flex-row flex-nowrap space-x-3 mt-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">Phone & Email support</h1>
                    </div>

                    <div className="flex flex-row flex-nowrap space-x-3 mt-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">Featured posting</h1>
                    </div>

                    <button className="py-2 text-white w-full bg-[#565555] rounded mt-[8.2rem]">Select Pro</button>
                </div>


                <div className="bg-white drop-shadow-lg rounded-md py-4 px-5">
                    <h1 className="font-bold text-xl">Premiunm</h1>
                    <div className="flex">
                    <h1 className="font-extrabold text-4xl">$200</h1>
                    <span className="leading-[3rem]">/month</span>
                    </div>
                    <div className="flex flex-row flex-nowrap space-x-3 mt-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">Unlimited job posting</h1>
                    </div>
                    <div className="flex flex-row flex-nowrap space-x-3 mt-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">Full resume database access</h1>
                    </div>
                    <div className="flex flex-row flex-nowrap space-x-3 mt-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">24/7 periority support</h1>
                    </div>

                    <div className="flex flex-row flex-nowrap space-x-3 mt-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">Advance analytics</h1>
                    </div>

                    <div className="flex flex-row flex-nowrap space-x-3 mt-3">
                    <IoMdCheckmark  className="text-xl"/><h1 className="text-base">Dedicated account manager</h1>
                    </div>

                    <button className="py-2 text-gray-400 w-full bg-gray-200 rounded mt-24">Select Premium</button>
                </div>
                   
              </div>
              {/* plan */}


              {/* compare plane */}

              <h1 className="font-bold text-2xl my-10">Compare Plans</h1>


               {/* plans table */}
               <div className="bg-white drop-shadow-lg rounded w-full [&>*]:my-2 mt-4">

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-left border-slate-100 [&>*]:py-3 [&>*]:px-5 rounded-full">
                <th>Feature</th>
                <th>Basic</th>
                <th>pro</th>
                <th>Premium</th>
                </tr>
                </thead>

                <tbody>
                <tr className="text-left [&>*]:border-t-2 border-slate-100 [&>*]:py-3 [&>*]:px-5 rounded-full cursor-pointer hover:bg-slate-200 ">
                <td>Job Posting</td>
                <td>5</td>
                <td>25</td>
                <td>Unlimited</td>
                </tr>


                <tr className="text-left [&>*]:border-t-2 border-slate-100 [&>*]:py-3 [&>*]:px-5 rounded-full cursor-pointer hover:bg-slate-200 ">
                <td>Resume Access</td>
                <td>Basic</td>
                <td>Advance</td>
                <td>Full</td>
                </tr>


                <tr className="text-left [&>*]:border-t-2 border-slate-100 [&>*]:py-3 [&>*]:px-5 rounded-full cursor-pointer hover:bg-slate-200 ">
                <td>Customer Support</td>
                <td>Email</td>
                <td>Email & Phone</td>
                <td>24/7</td>
                </tr>


              

                </tbody>

                </table>
</div>
{/* plans table */}


              

           

        </section>
    )
}