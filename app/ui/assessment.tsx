"use client"
import { useState } from "react"

export default function ApplicantAssessment(){
    const steps = [
        {id:"Step 1",name:"Intrinsic Values and Preferences"},
        {id:"Step 2",name:"Natural Skills and Traits"},
        {id:"Step 3",name:"Industry Experience and Exposure"},
        {id:"Step 4",name:"Career Path Exploration and Alignment"},
        {id:"step 5",name:"Demographic Questions"}
       
        
    ]
    
     const [currentStep,setCurrentStep] = useState(0)



    const next =()=>{
        if (currentStep < steps.length-1){
            setCurrentStep( step => step +1)
        }

     }


     const prev = ()=>{
        if (currentStep > 0){
            setCurrentStep( step => step - 1)
        }

     }


    return (
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">
           
            <div className="w-full bg-white py-4 px-4 drop-shadow-lg rounded-lg">
                {/* header */}
                <h1 className="text-2xl font-bold">Assessment Questions</h1>
                <p>Take the assessment to match jobs that fit your profile</p>
                {/* header */}


                {/* nav stepper */}

    <div className="w-full mt-6">
    <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
    {steps.map((step, index) => (
        <li className={`flex items-center ${ index <= currentStep ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400' }`} key={step.id}>
            <span className="hidden sm:inline-flex sm:ms-2">
                {step.name}
             </span>

            {index < steps.length - 1 && (
            <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" /></svg> )}
        </li> ))}
        </ol>
    </div>
                

        {/* nav stepper */}



        {/* form input */}
        <form>
            

        {currentStep === 0 &&(

        <div className="w-full py-3 px-3">
            {/* <h1 className="font-bold text-base mb-4">Intrinsic Values and Preferences</h1> */}
 
              {/* inputs */}
            <div className="w-full grid grid-cols-2 gap-3">
                <div>
                <label htmlFor="motivation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                What motivates you the most in a school or work environment?
                </label>
                <select id="motivation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="1">Getting recognized and rewarded for my efforts</option>
                <option value="1">Making a positive impact on my community or society</option>
                <option value="1">Learning new things and growing as a person</option>
                <option value="1">Working together with others to achieve common goals</option>
                </select>
                </div>

                <div>
                <label htmlFor="success_definition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                How do you define success in your future career?
                </label>
                <select id="success_definition" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="1">Earning a high salary and having great benefits</option>
                <option value="1">Finding personal fulfillment and a sense of purpose in my work</option>
                <option value="1">Being in a position of influence and leadership</option>
                <option value="1">Maintaining a good balance between work and personal life</option>
                </select>
                </div>

                <div>
                <label htmlFor="group_project_feeling" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Imagine you are assigned to a group project with team members from different cultural backgrounds. How do you feel about this situation?
                </label>
                <select id="group_project_feeling" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="0">I feel uncomfortable and prefer working with people similar to me</option>
                <option value="1">I can manage but its not my preference</option>
                <option value="2">I look forward to learning from different perspectives</option>
                <option value="3">I enjoy the diversity and think it enhances our work</option>
                <option value="4">I thrive in diverse environments and actively seek such opportunities</option>
                </select>
                </div>

                <div>
                <label htmlFor="preferred_project_situation" className="block mb-7 text-sm font-medium text-gray-900 dark:text-white">
                Imagine you are working on a group project. Which situation would you prefer?
                </label>
                <select id="preferred_project_situation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="1">The project has clear instructions and guidelines, and everyone knows their role</option>
                <option value="1">The project allows for creativity and trying out new ideas</option>
                <option value="1">The project is fast-paced and requires quick decisions and adaptability</option>
                <option value="1">The project involves a lot of teamwork and collaboration</option>
                <option value="1">The project allows you to work independently on your part</option>
                </select>
                </div>

                <div>
                <label htmlFor="problem_solving" className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Which type of problem are you most passionate about solving?
                </label>
                <select id="problem_solving" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="1">Improving how people experience services or products</option>
                <option value="1">Creating new and innovative solutions</option>
                <option value="1">Tackling environmental and sustainability issues</option>
                <option value="1">Addressing social justice and inclusion</option>
                </select>
                </div>




            </div>
             {/* inputs */}

        </div>
        )}


      {currentStep === 1 &&(
        <div className="w-full py-3 px-3">
            {/* <h1 className="font-bold text-base mb-4">Natural Skills and Traits</h1> */}
            <div className="w-full grid grid-cols-2 gap-3">
                <div>
                <label htmlFor="enjoyable_activity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Which activity do you find most enjoyable?
                </label>
                <select id="enjoyable_activity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="1">Solving puzzles or complex problems</option>
                <option value="1">Talking and presenting ideas to others</option>
                <option value="1">Organizing events or plans</option>
                <option value="1">Working on technical projects or experiments</option>
                </select>   
                </div>

                <div>
                <label htmlFor="learning_approach" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                What is your approach to learning new skills?
                </label>
                <select id="learning_approach" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="1">I prefer learning through structured courses and training</option>
                <option value="1">I enjoy exploring and experimenting to learn new things</option>
                <option value="1">I learn best by collaborating and discussing with others</option>
                <option value="1">I rely on self-study and independent research</option>
                </select>   
                </div>

                <div>
                <label htmlFor="handling_criticism" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                How do you handle criticism or feedback?
                </label>
                <select id="handling_criticism" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="0">I get defensive and find it hard to accept</option>
                <option value="1">I consider it but often feel discouraged</option>
                <option value="2">I appreciate it and use it to improve</option>
                <option value="3">I actively seek feedback and view it as a growth opportunity</option>
                </select>   
                </div>

                <div>
                <label htmlFor="traits_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Which of these traits best describes you?
                </label>
                <select id="traits_description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="1">Persistent in achieving goals</option>
                <option value="1">Always accurate and detail-oriented</option>
                <option value="1">Visionary and forward-thinking</option>
                <option value="1">Flexible and adaptable to new situations</option>
                </select>   
                </div>

                <div>
                <label htmlFor="task_management" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                How do you manage your tasks and responsibilities?
                </label>
                <select id="task_management" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="1">I create detailed plans and follow them closely</option>
                <option value="1">I prioritize tasks based on urgency and importance</option>
                <option value="1">I adapt my plans as needed and stay flexible</option>
                <option value="1">I rely on collaboration and delegation</option>
                </select>   
                </div>




            </div> 

        </div>

        )}



        {currentStep === 2 &&(
        <div className="w-full py-3 px-3">
             {/* <h1 className="font-bold text-base mb-4">Industry Experience and Exposure</h1> */}

                <div className="w-full grid grid-cols-2 gap-3">
                    <div>
                    <label htmlFor="event_organization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Imagine you have to organize an event. What would be your first step?
                    </label>
                    <select id="event_organization" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                    <option value="1">Create a detailed plan and checklist</option>
                    <option value="1">Think about the big picture and overall strategy</option>
                    <option value="1">Come up with creative ideas to make it exciting</option>
                    <option value="1">Talk to others to gather their input and build a team</option>
                    </select>   
                    </div>

                    <div>
                    <label htmlFor="learning_preference" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    When learning something new, how do you prefer to do it?
                    </label>
                    <select id="learning_preference" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                    <option value="1">I like structured lessons and clear instructions</option>
                    <option value="1">I learn best through hands-on experience</option>
                    <option value="1">I enjoy discussing and collaborating with others</option>
                    <option value="1">I prefer figuring things out on my own</option>
                    </select>   
                    </div>




                </div>
         
        </div>
        )}

        {currentStep === 3 &&(
        <div className="w-full py-3 px-3">
             {/* <h1 className="font-bold text-base mb-4">Career Path Exploration and Alignment</h1> */}

             <div className="w-full grid grid-cols-2 gap-3">
                <div>
                <label htmlFor="appealing_task" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Which of these tasks sounds most appealing to you?
                </label>
                <select id="thriving_role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                    <option value="1">Planning and organizing events or projects</option>
                    <option value="1">Persuading others to see your point of view</option>
                    <option value="1">Creating new products or solutions</option>
                    <option value="1">Analyzing data to find trends and insights</option>
                </select>
                </div>

                <div>
                <label htmlFor="values_importance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                How important is it for you to pursue a career path that aligns with your values and interests?
                </label>
                <select id="thriving_role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                    <option value="0">Not important at all</option>
                    <option value="1">Slightly important</option>
                    <option value="2">Moderately important</option>
                    <option value="3">Important</option>
                    <option value="4">Extremely important</option>
                </select>
                </div>

                <div>
                <label htmlFor="thriving_role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Which type of role do you see yourself thriving in?
                </label>
                <select id="thriving_role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="1">Leading a team to achieve goals</option>
                <option value="1">Developing strategies and plans </option>
                <option value="1">Implementing and executing plans </option>
                <option value="1">Researching and analyzing information</option>
                <option value="1">Engaging with customers and clients </option>
                </select>   
                </div>

                <div>
                <label htmlFor="career_path_preference" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Would you prefer a structured career path with defined milestones or an exploratory path with diverse opportunities?
                </label>
                <select id="career_path_preference" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="1">Structured career path</option>
                <option value="1">Exploratory path </option>
                <option value="1">A mix of both </option>
                <option value="0">Unsure </option>
                </select>   
                </div>

                <div>
                <label htmlFor="skill_eagerness" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                How eager are you to gain new skills and certifications to pursue your desired career path?
                </label>
                <select id="skill_eagerness" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="0">Extremely uneager </option>
                <option value="1">Uneager </option>
                <option value="2">Neutral </option>
                <option value="3">Eager </option>
                <option value="4">Extremely eager </option>
                </select>   
                </div>

                <div>
                <label htmlFor="career_challenges" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                What challenges do you foresee in achieving your career goals?
                </label>
                <select id="career_challenges" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="1">Lack of mentorship and guidance </option>
                <option value="1">Limited networking opportunities</option>
                <option value="1">Financial constraints for further education</option>
                <option value="1">Uncertain job market </option>
                <option value="1">Skill gaps and lack of experience</option>
                </select>   
                </div>


            </div> 


            
        </div>
        )}



{currentStep === 4 &&(
        <div className="w-full py-3 px-3">
             {/* <h1 className="font-bold text-base mb-4">Demographic Questions</h1> */}

             <div className="w-full grid grid-cols-2 gap-3">

             
             <div>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Are you currently enrolled as a student at a university?
                </label>
                <select id="University_enrolled_at" name="University_enrolled_at" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                    <option value="Yes">Yes (if yes move to question 27) </option>
                  
                    <option value="No">No  (if no move to question36)</option>
                  
                </select>   
             </div>


             <div>
                <label htmlFor="College_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                What type of college or university are you currently attending?
                </label>
                <select id="College_type" name="College_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="Four-year College/University">Four-year College/University</option>
                <option value="Community College">Community College</option>
                <option value="Technical/Trade School">Technical/Trade School</option>
                
                
                </select>   
             </div>


             <div>
                <label htmlFor="Institution_Type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                What type of institution do you attend?
                </label>
                <select id="Institution_Type" name="Institution_Type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="Historically Black College or University (HBCU)">Historically Black College or University (HBCU)</option>
                <option value="Minority-Serving Institution (MSI)">Minority-Serving Institution (MSI)</option>
                <option value="Predominantly White Institution (PWI)">Predominantly White Institution (PWI)</option>
                <option value="Other">Other</option>   
                </select> 

             </div>

             <div>
                <label htmlFor="current_year_in_school" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                What is your current year in school?

                </label>
                <select id="current_year_in_school" name="current_year_in_school" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Other">Senior</option>  
                <option value="Other">Graduate student</option>  
                  
                </select>   
             </div>

             <div>
                <label htmlFor="field_of_study" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                What is your major or field of study?
                </label>
                <input type="text" id="field_of_study" name="field_of_study" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
             
             </div>



             <div>
                <label htmlFor="age_range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                What is your age range?

                </label>
                <select id="age_range" name="age_range" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="Under 18">Under 18</option>
                <option value="18-20">18-20</option>
                <option value="21-25">21-25</option>
                <option value="26-30">26-30</option>  
                <option value="31-35">31-35</option> 
                <option value="Over 35">Over 35</option>  
                  
                </select>   
             </div>


             
             <div>
                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                What is your gender identity?

                </label>
                <select id="gender" name="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary/third gender">Non-binary/third gender</option>
                <option value="Prefer not to say">Prefer not to say</option>   
                </select>   
             </div>


             <div>
                <label htmlFor="racial_background" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                What is your ethnicity or racial background?

                </label>
                <select id="racial_background" name="racial_background" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="asian">Asian</option>
                <option value="black_or_african_american">Black or African American</option>
                <option value="hispanic_or_latino">Hispanic or Latino</option>
                <option value="white">White</option>
                <option value="native_american">Native American or Alaska Native</option>
                <option value="native_hawaiian">Native Hawaiian or Other Pacific Islander</option>
                <option value="multiracial">Multiracial</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
                <option value="other">Other</option>
                </select>   
             </div>



             <div>
                <label htmlFor="first_generation_college_student" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Are you a first-generation college student?

                </label>
                <select id="first_generation_college_student" name="first_generation_college_student" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                  <option value='yes'>Yes</option>
                  <option value='No'>No</option>
                  <option value='Not Sure'>Not Sure</option>
                </select>   
             </div>

             
             <div>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Are you currently employed while attending college?


                </label>
                <select id="currently_employed_in_college" name="currently_employed_in_college" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="full_time">Yes (full-time)</option>
                <option value="part_time">Yes (part-time)</option>
                <option value="no">No</option>
                <option value="not_currently">Not currently (seeking employment)</option>
                </select>   
             </div>


               
             <div>
                <label htmlFor="currently_employed" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Are you currently employed?


                </label>
                <select id="countries" name="currently_employed" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="full_time">Yes (full-time)</option>
                <option value="part_time">Yes (part-time)</option>
                <option value="no">No</option>
                <option value="not_currently">Not currently (seeking employment)</option>
                </select>   
             </div>


                  
             <div>
                <label htmlFor="areas_of_experience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                In which of the following areas do you have experience? 

                </label>
                <select id="areas_of_experience" name="areas_of_experience" multiple className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option value="business_operations">Business Operations</option>
                <option value="business_development">Business Development</option>
                <option value="product">Product</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
                <option value="accounting">Accounting</option>
                <option value="finance">Finance</option>
                <option value="customer_support">Customer Support</option>
                <option value="human_resources">Human Resources</option>
                <option value="legal_compliance">Legal & Compliance</option>
                <option value="technology">Technology</option>
                <option value="quality_assurance">Quality Assurance</option>
                <option value="supply_chain">Supply Chain & Logistics</option>
                <option value="research_development">Research & Development</option>
                <option value="partnerships_alliances">Partnerships & Alliances</option>
                <option value="strategy_planning">Strategy & Planning</option>
                <option value="innovation">Innovation</option>
                </select>   
             </div>


                   
             <div>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Did you attend a college or university?

                </label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                    <option value="yes">Yes</option>
                    <option value="No">No</option>
                  
                </select>   
             </div>


            </div> 


            
        </div>
        )}
        
        


          {/* form input */}


          <div className="my-4 w-full text-right">
          {currentStep === 4 &&(
              <button type="submit" className="py-3 px-4 border bg-white drop-shadow-lg rounded">Submit</button>
                    )}
          </div>

          </form>

          {/* Navigations */}

          <div className="my-4 md:grid grid-cols-2">
            {/* prev */}
            <div className="">
                <button type="button" className="py-3 px-4 border bg-white drop-shadow-lg rounded cursor-pointer" onClick={prev}>Prev</button>

            </div>
              {/* prev */}

            {/* next and submit */}
              <div className="text-right">
              {currentStep !== steps.length - 1 &&(
              <button className="py-3 px-4 border bg-white drop-shadow-lg rounded cursor-pointer" onClick={next}>Next</button>
            )}


              </div>
               {/* next and*/}

          </div>



          {/* Navigations */}

       

            </div>
           
 
           

        </section>
    )
}