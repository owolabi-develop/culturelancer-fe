"use client"
import Link from 'next/link'
// import { http_endpoints } from "@/app/libs/definations";
import { useState } from 'react';

export  function AssesmentResult(){
    const [assessemtScore,setassessemtScore] = useState<number>(0)

    const  get_assessment_result_details = async () =>{

      const response_token = await fetch(`/api/get-token`, {
            method: "GET",
      })
      if(response_token.ok){
       const token = await response_token.json()
        console.log("the token",token)

        //  get assessment dateila
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/get-user-assessment-score/`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "Authorization":`Bearer ${token}`
          },
         
      });

      if (response.ok){
        const {assessment_score} = await response.json()
        console.log(assessment_score)
        setassessemtScore(assessment_score)
      } 

           //  get assessment dateil

      }


     
   

    }


    get_assessment_result_details()


    return (
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">
            {/* Assessment progress */}
        <div className="w-full"> 
            <h1 className='text-3xl font-bold md:text-3xl block text-black'>Your Skill Assessment Progress</h1>
            <p className='mt-3'>Track your progress accross various skill categories and explore personalized recommededations to enhance your capatibilities.</p>


            <div className='space-y-4 xl:space-y-0 md:grid grid-cols-4 gap-3 mt-4'>

                {/* assessemt container */}
                <div className='bg-[lightgray] drop-shadow-lg p-3 rounded'>
                
                <p className='my-3 font-bold'>Technical Skills</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className={`bg-[gray] h-2.5 rounded-full w-[70%]`}></div>
                   
                </div>
                <p className='my-3'>75% Complete</p>

                   
                </div>
                  {/* assessemt container */}


                  {/* assessemt container */}
                <div className='bg-[lightgray] drop-shadow-lg  p-3 rounded'>
                
                <p className='my-3 font-bold'>Soft Skills</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className={`bg-[gray] h-2.5 rounded-full w-[60%]`}></div>
                   
                </div>
                <p className='my-3'>65% Complete</p>

                   
                </div>
                  {/* assessemt container */}


                  
                  {/* assessemt container */}
                <div className='bg-[lightgray] drop-shadow-lg p-3 rounded'>
                
                <p className='my-3 font-bold'>Industry Knowledge</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className={`bg-[gray] h-2.5 rounded-full w-[60%]`}></div>
                   
                </div>
                <p className='my-3'>75% Complete</p>

                   
                </div>
                  {/* assessemt container */}


                  {/* assessemt container */}
                <div className='bg-[lightgray] drop-shadow-lg p-3 rounded'>
                
                <p className='my-3 font-bold'> Assessment Score</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className={`bg-[gray] h-2.5 rounded-full w-[${assessemtScore}%]`}></div>
                   
                </div>
                <p className='my-3 text-xl font-bold'>{assessemtScore}%</p>

                   
                </div>
                  {/* assessemt container */}

            </div>



            <Link href="/hire"> <button className=" bg-black text-white rounded py-3 px-5 mt-5">View Full Report</button></Link>
        </div>

        {/* Assessment progress */}


    {/* Actionable insights */}

    <div className='w-full mt-5'>
    <h1 className='text-2xl font-bold md:text-2xl block text-black'>Actionable insights</h1>

    <div className="rounded bg-[lightgray] p-10 w-full mt-5"> 
            <h1 className='text-2xl font-bold md:text-2xl block text-black'>Skill Analysis</h1>
            <div className='p-3'>
                <h1>Your performance in skill category 1 is stronger. Consider advance course to further excel</h1>
                <h1>Your performance in skill category 1 is stronger. Consider advance course to further excel</h1>
                <h1>Your performance in skill category 1 is stronger. Consider advance course to further excel</h1>

            </div>
        </div>

    </div>

      {/* Actionable insights */}


{/* course remendations */}


<div className='w-full mt-5 mb-28'>
    <h1 className='text-2xl font-bold md:text-2xl block text-black'>Personalized Course Recommendations</h1>

        {/* courses container */}

            <div className='space-y-4 xl:space-y-0 md:grid grid-cols-3 gap-3 mt-4'>

            {/* course container */}
            <div className='drop-shadow-lg p-5 rounded border'>
            <div className={`bg-[lightgray] rounded text-center p-20`}> Course Image</div>

            <h1 className='my-3 font-bold'>Advance Skill Category 1</h1>
            <p className='my-3'> Enhance your Experties in Skill Category 1 with this advance course.</p>

        <div className="space-x-4 ">
           <Link href="/hire"> <button className=" bg-[lightgray] text- rounded py-2 px-5">Learn More</button></Link>
           <Link href="/work"><button className="rounded py-2 px-5 text-[white] bg-[#131313] border border-current">View More</button></Link>
        </div>
           
            </div>
            {/* course container */}



              {/* course container */}
              <div className='drop-shadow-lg p-5 rounded border'>
            <div className={`bg-[lightgray] rounded text-center p-20`}> Course Image</div>

            <h1 className='my-3 font-bold'>Advance Skill Category 1</h1>
            <p className='my-3'> Enhance your Experties in Skill Category 1 with this advance course.</p>

        <div className="space-x-4 ">
           <Link href="/hire"> <button className=" bg-[lightgray] text- rounded py-2 px-5">Learn More</button></Link>
           <Link href="/work"><button className="rounded py-2 px-5 text-[white] bg-[#131313] border border-current">View More</button></Link>
        </div>
           
            </div>
            {/* course container */}



              {/* course container */}
              <div className='drop-shadow-lg p-5 rounded border'>
            <div className={`bg-[lightgray] rounded text-center p-20`}> Course Image</div>

            <h1 className='my-3 font-bold'>Advance Skill Category 1</h1>
            <p className='my-3'> Enhance your Experties in Skill Category 1 with this advance course.</p>

        <div className="space-x-4 ">
           <Link href="/hire"> <button className=" bg-[lightgray] text- rounded py-2 px-5">Learn More</button></Link>
           <Link href="/work"><button className="rounded py-2 px-5 text-[white] bg-[#131313] border border-current">View More</button></Link>
        </div>
           
            </div>
            {/* course container */}



            </div>

        {/* courses container */}

        </div>

    {/* course remendations */}





        
    </section>
    
    )

}