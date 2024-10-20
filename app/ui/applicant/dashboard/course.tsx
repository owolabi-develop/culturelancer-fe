import Link from "next/link"

export  function ApplicantCoursePage(){

    return (
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">
        <div className='w-full'>
            <h1 className='font-bold text-3xl my-2'>Enhance Your Skills with Certified Courses</h1>
            <p className='my-2'>Boost your profile and improve job matche by completing industry-recognized course.</p>
        </div>


{/* course banner */}

        <div className='bg-[#eeeded] rounded py-14 px-5 flex flex-wrap my-10 '>

            <div className=' md:w-[50%]'>
                <h1 className='text-xl font-bold mb-5'>Master Digital Marketing</h1>
                <p className="my-5">Learn the latest strategies and tool to excel in the digital marketing landspace. Perfect for beginners and intermediate marketers looking to upgrade their skills.</p>
                <button className='bg-[#1a1919] text-[lightgray] py-2 px-5 rounded my-5'>Enroll Now</button>
            </div>

            <div className='w-full flex place-content-end md:w-[50%]'>
                <div className='w-full sm:w-full course-image bg-[#dad8d8] rounded py-20 px-16 text-center items-center md:w-[40%]'>
                Coures Image
                </div>
            </div>
           
        </div>


{/* course banner */}




{/* sample courses */}


<div className='py-14 px-5 flex flex-wrap '>

<div className='bg-[#f2f0f0] drop-shadow-lg rounded py-5 px-5'>
    <h1 className="font-bold text-2xl my-2">Cross-Culture Communication</h1>
    <p className="my-2 text-base">Learn effective communication strategies across diverse cultures.</p>

{/* details 1 */}
    <div className='w-full flex flex-row'>
            <div className='w-2/3 sortby flex flex-row items-center md:w-full'>
            <p>Issued by: Global Institute</p>
           
            </div>
            <div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full'><h1>Duration 4 Weeks</h1></div>
    </div>

{/* details 1 */}



{/* details 2 */}

<div className='w-full flex flex-row'>
            <div className='w-2/3 flex items-center '>
            <button className="py-1 rounded-full bg-[#afaeae] px-1">Cerification Avaliable</button>
            </div>

            <div className='w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full'>
            <button className='bg-[#1a1919] text-[lightgray] py-2 px-5 rounded'>Enroll Now</button>
            </div>

    </div>

{/* details 2 */}
    
  
</div>



</div>





{/* sample courses */}




{/* my certificate */}
<div className="w-full px-5">
<h1 className="text-3xl font-bold mb-5">My Certificate</h1>
<p className="my-2">Your Progress: 3/5 Certification Earned</p>
 {/* progressbar  */}
 <div className="w-full xl:w-full md:w-[20rem] bg-gray-200 rounded-full h-2.5 ">
    <div className={`bg-[gray] h-2.5 rounded-full w-[70%]`}></div>
</div>
 {/* progressbar */}

 {/* certificates */}

 <div className=" space-y-3 w-full my-8 md:grid grid-cols-4 gap-4 md:space-y-0">
    {/* certificate 1 */}

    <div className="bg-white drop-shadow-lg rounded px-5 py-3">
        <h1 className="font-bold my-4">Web Development Fundamentals</h1>
        <p className="my-4"> TechEdu Academy</p>

        <p className="my-4">Completed January 15,2025</p>

        <div className="details my-4">
            <button className="py-1 rounded mr-2">View Details</button>
          
            <button className="py-1 px-2 mx-2  bg-[#0c0c0c] text-[#dddcdc] rounded">Download as PDF</button>
            <button className="py-1 px-2 mx-2  bg-[lightgray] rounded"> Share </button>

        </div>

    </div>
     {/* certificate 1 */}



      {/* certificate 1 */}

    <div className="bg-white drop-shadow-lg rounded px-5 py-3">
        <h1 className="font-bold my-4">Web Development Fundamentals</h1>
        <p className="my-4"> TechEdu Academy</p>

        <p className="my-4">Completed January 15,2025</p>

        <div className="details my-4">
            <button className="py-1 rounded mr-2">View Details</button>
          
            <button className="py-1 px-2 mx-2  bg-[#0c0c0c] text-[#dddcdc] rounded">Download as PDF</button>
            <button className="py-1 px-2 mx-2  bg-[lightgray] rounded"> Share </button>

        </div>
        
    </div>
     {/* certificate 1 */}



      {/* certificate 1 */}

    <div className="bg-white drop-shadow-lg rounded px-5 py-3">
        <h1 className="font-bold my-4">Web Development Fundamentals</h1>
        <p className="my-4"> TechEdu Academy</p>

        <p className="my-4">Completed January 15,2025</p>

        <div className="details my-4">
            <button className="py-1  rounded mr-2">View Details</button>
          
            <button className="py-1 px-2 mx-2  bg-[#0c0c0c] text-[#dddcdc] rounded">Download as PDF</button>
            <button className="py-1 px-2 mx-2  bg-[lightgray] rounded"> Share </button>

        </div>
        
    </div>
     {/* certificate 1 */}


 </div>

 {/* certificates */}


</div>

{/* my certificate */}






{/* Recommendation course for you */}

<div className="w-full px-5 mt-14">
<h1 className="text-3xl font-bold mb-5">Recommended  for You</h1>


{/* course */}

<div className="w-full space-y-4  md:grid grid-cols-4 md:gap-4 md:space-y-0">

    {/* course 1 */}

    <div className="bg-white drop-shadow-lg rounded">
        {/* thumbnail */}
        <div className="py-10 px-20 bg-[lightgray] rounded-t-lg text-center">
            <p>Course Thumbnail</p>
        </div>
          {/* thumbnail */}

          {/* description */}

          <div className="py-2 px-5 bg-white rounded-b-lg">
            <h1 className="font-bold">Advance Javascript</h1>
            <p className="my-2">Take your JavaScript skill to the next level with advance concepts and pattern</p>
            <button className="w-full py-2 bg-[#0c0c0c] text-[#dddcdc] rounded my-2">Enroll Now</button>


          </div>

           {/* description */}
    </div>


     {/* course 1 */}




      {/* course 1 */}

    <div className="bg-white drop-shadow-lg rounded">
        {/* thumbnail */}
        <div className="py-10 px-20 bg-[lightgray] rounded-t-lg text-center">
            <p>Course Thumbnail</p>
        </div>
          {/* thumbnail */}

          {/* description */}

          <div className="py-2 px-5 bg-white rounded-b-lg">
            <h1 className="font-bold">Cloud Computing Basic</h1>
            <p className="my-2">Take your JavaScript skill to the next level with advance concepts and pattern</p>
            <button className="w-full py-2 bg-[#0c0c0c] text-[#dddcdc] rounded my-2">Enroll Now</button>


          </div>

           {/* description */}
    </div>


     {/* course 1 */}


</div>


{/* course */}


</div>



{/* Recommendation course for you */}






    </section>
    
    )

}



