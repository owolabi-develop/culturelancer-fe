// import { LuPencil } from "react-icons/lu";
// import { useParams } from "next/navigation";
// import useSWR  from 'swr';
// import Cookies from "js-cookie";
// import Image from "next/image";


export default function EmployerCandidateProfile(){
    return (
        <>

        {/* profile icon */}
<div className="rounded bg-white drop-shadow-lg px-16 w-full"> 

<div className='w-full flex flex-row my-2'>
                
<div className='w-1/2 sm:w-11 sortby p-2 md:w-full'>

   {/* profile */}
   <div className="">
          
        <div className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3 relative">
    
            <div className='bg-[#cccbc8] rounded-full w-24 h-24'></div>
                <div className="">
                    <h1 className='font-bold text-2xl'>John Doe</h1>
                    <p className='font-semibold text-xl'>Seniorsoftware Engineer</p>
                    <p className='font-semibold text-base'>San Francisco, CA</p>
                    <p className='font-bold text-sm'>Open to Opportunities</p>

                </div>
            </div>

        </div>

  {/* profile */}


</div>


<div className='w-1/2 sm:w-10 p-2 justify-end md:w-[20%] cursor-pointer'>
    {/* progress bar */}
    <p className='my-2'>Profile 80% complete</p>
        <div className=" bg-gray-200 rounded-full h-2.5 ">
            <div className={`bg-[gray] h-2.5 rounded-full w-[60%]`}></div>
        </div>
        {/* progress bar */}

        <div className='[&>*]:py-1 [&>*]:px-1 [&>*]:mx-2 [&>*]:bg-gray-400 [&>*]:rounded-full my-3 [&>*]:text-sm'>
                                <span>Javascipt</span>
                                <span>React</span>
                                <span>Figma</span>
        </div>
</div>
</div>

</div>
{/* profile icon */}


        
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">
            {/* about applicant */}
            <h1 className="font-extrabold text-xl my-5">About</h1>
            <div className="w-full">
                
                <p className="break-all">Passionate web developer with 18 year of
                     experience in creating responsive and user friendly web 
                     applications. Specializing Javascript and React, I have a strong foundationin 
                     front-end developement and keen eye for design. I am always eager to learn new technologies and contribute to innovative projects 
                </p>

                <div className="my-4">
                    <button className="bg-[gray] py-3 px-4 rounded">Message Candidate</button>
                    <button className="border py-3 px-4 rounded mx-2">Invite to Apply</button>
                    
                </div>

            </div>

            {/* about applicant */}


            {/* experience */}

            <h1 className="font-extrabold text-xl my-5">Experience</h1>

            <div className="w-full">
                {/* exp */}

                <div className='bg-white drop-shadow-lg w-full rounded my-4'>

                <div className='w-full border-b-2 py-4 px-4'>
                <h1>Senior Web Developer</h1>
                <p>TechCorp Inc. | Jan 2021 - Present</p>
                </div>
                <div className="px-10 py-4">
                    <p className="break-all w-[70%]">
                        Led a team of % developers in creating a new e-commarce platform implemented React-base front-end, improving load times by
                        40% Mentored junior developers and conducted code reviews

                    </p>

                </div>



                </div>

                 {/* exp */}



            </div>

            {/* experience */}


            <h1 className="font-extrabold text-xl my-5">Skill & Expertise</h1>

          {/* Skill & Expertise  */}

          <div className="w-full md:grid md:grid-cols-4 gap-3">

          <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
                {/* progress bar */}
             
              <div className="flex justify-between">
              <p className='my-2'>Javascript</p>
              <p className='my-2'>Advance</p>
              </div>
            <div className=" bg-gray-200 rounded-full h-2.5 ">
                <div className={`bg-[gray] h-2.5 rounded-full w-[60%]`}></div>
            </div>
        {/* progress bar */}

          </div>

          
         
          <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
                {/* progress bar */}
             
              <div className="flex justify-between">
              <p className='my-2'>React</p>
              <p className='my-2'>Advance</p>
              </div>
            <div className=" bg-gray-200 rounded-full h-2.5 ">
                <div className={`bg-[gray] h-2.5 rounded-full w-[60%]`}></div>
            </div>
        {/* progress bar */}

          </div>
          
        
          <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
                {/* progress bar */}
             
              <div className="flex justify-between">
              <p className='my-2'>HTML/CSS</p>
              <p className='my-2'>Expert</p>
              </div>
            <div className=" bg-gray-200 rounded-full h-2.5 ">
                <div className={`bg-[gray] h-2.5 rounded-full w-[60%]`}></div>
            </div>
        {/* progress bar */}

          </div>


          <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
                {/* progress bar */}
             
              <div className="flex justify-between">
              <p className='my-2'>Node.js</p>
              <p className='my-2'>Intermediat</p>
              </div>
            <div className=" bg-gray-200 rounded-full h-2.5 ">
                <div className={`bg-[gray] h-2.5 rounded-full w-[60%]`}></div>
            </div>
        {/* progress bar */}

          </div>
              
    </div>

    {/* Skill & Expertise */}




    {/* Certificate & awards */}
    
<h1 className="font-extrabold text-xl my-5">Certificate & Awards</h1>



<div className="w-full md:grid md:grid-cols-3 gap-3">

<div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">

    <h1 className="font-semibold text-xl">React Developer Certification</h1>
    <div className="my-5">
    <p>Meta</p>
    Recidved: June 2025
    </div>
   

    <button className="py-2 border px-10 rounded">View Certificate</button>
    

</div>



<div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">

    
<h1 className="font-semibold text-xl">React Developer Certification</h1>
    <div className="my-5">
    <p>Meta</p>
    Recidved: June 2025
    </div>
   

    <button className="py-2 border px-10 rounded">View Certificate</button>
    

</div>


<div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">

    
<h1 className="font-semibold text-xl">React Developer Certification</h1>
    <div className="my-5">
    <p>Meta</p>
    Recidved: June 2025
    </div>
   

    <button className="py-2 border px-10 rounded">View Certificate</button>
   

</div>


    
</div>

 {/* certificate & awards */}




     {/* Portfolio */}
    
<h1 className="font-extrabold text-xl my-5">Portfolio</h1>



<div className="w-full md:grid md:grid-cols-3 gap-3">

<div className="bg-white drop-shadow-lg rounded my-8">
    <div className="bg-slate-100 py-20 rounded-t-lg text-center">
        <h1>Project Image</h1>
    </div>

    <div className="px-5 py-4">
        <h1 className="my-3 font-bold">E-commarce Platform</h1>

        <p> A Fully responsive online store built with React and Node.js</p>

        <button className="py-1 rounded border px-4 my-3">View Project</button>
    </div>

    

</div>



    
</div>

 {/* Portfolio */}

           


 <h1 className="font-extrabold text-xl my-5">Testimonial & Reviews</h1>


{/*Testimonial & Reviews*/}


<div className="w-full md:grid md:grid-cols-3 gap-3">
  
  <div className='bg-white drop-shadow-lg w-full rounded my-4'>
      <div className='w-full flex py-3 px-3 my-5'>
          <div className=' rounded-full w-16 h-16 bg-slate-200 mr-2'></div>
          <div>
              <h1 className='leading-7 font-bold'>John Doe</h1>
              <p className='font-semibold'>Product Manager</p>
          </div>
      </div>
      
      
  </div>
  </div>





 
  </section>
  </>

    ) 
}