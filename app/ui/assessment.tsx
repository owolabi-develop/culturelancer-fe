"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AssessmentSchema } from "../libs/shemas";
import * as z from "zod";
import { initialTraitScores } from "../libs/utils";
import { useRouter } from "next/navigation";
import { cultureLancerAxios } from "../ui-services/axios";
import { toast } from "react-toastify";

type Inputs = z.infer<typeof AssessmentSchema>;

export default function ApplicantAssessment() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // interface AssessmentData {
  //     [key: string]: string | number;
  // }
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const save: Record<string, number | string | (string | number)[]> = {
      ...initialTraitScores,
    };

    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === "string" && value.includes(" ")) {
        const [trait, points] = value.split(" ");
        const pointValue = parseInt(points, 10);

        if (typeof save[trait] === "number") {
          save[trait] += pointValue;
        } else {
          save[trait] = pointValue;
        }
      } else {
        save[key] = value;
      }
    });

    console.log("Save Object:", save);
    // create assessment
    try {
      setIsLoading(true);
      const response = await cultureLancerAxios.post("/assesment/", save);
      console.log("assessment created");
      router.push(`/signup/applicant/${response.data.id}`);

      console.log("Response from server:", response);
    } catch (error: any) {
      toast.error(error.response.data.error || "Error submitting data");
      console.error("Error submitting data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    { id: "Step 1", name: "Intrinsic Values and Preferences" },
    { id: "Step 2", name: "Natural Skills and Traits" },
    { id: "Step 3", name: "Industry Experience and Exposure" },
    { id: "Step 4", name: "Career Path Exploration and Alignment" },
    { id: "step 5", name: "Demographic Questions" },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

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
              <li
                className={`flex items-center ${
                  index <= currentStep
                    ? "text-blue-600 dark:text-blue-500"
                    : "text-gray-500 dark:text-gray-400"
                }`}
                key={step.id}
              >
                <span className="hidden sm:inline-flex sm:ms-2">
                  {step.name}
                </span>

                {index < steps.length - 1 && (
                  <svg
                    className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m7 9 4-4-4-4M1 9l4-4-4-4"
                    />
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* nav stepper */}

        {/* form input */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 0 && (
            <div className="w-full py-3 px-3">
              {/* <h1 className="font-bold text-base mb-4">Intrinsic Values and Preferences</h1> */}

              {/* inputs */}
              <div className="w-full grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="motivation"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    What motivates you the most in a school or work environment?
                  </label>
                  <select
                    id="motivation"
                    {...register("motivation")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="leadership 1">
                      Getting recognized and rewarded for my efforts
                    </option>
                    <option value="empathy 1">
                      Making a positive impact on my community or society
                    </option>
                    <option value="resilience 1">
                      Learning new things and growing as a person
                    </option>
                    <option value="relationship_building 1">
                      Working together with others to achieve common goals
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="success_definition"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    How do you define success in your future career?
                  </label>
                  <select
                    id="success_definition"
                    {...register("success_definition")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="rational 1">
                      Earning a high salary and having great benefits
                    </option>
                    <option value="integrity 1">
                      Finding personal fulfillment and a sense of purpose in my
                      work
                    </option>
                    <option value="leadership 1">
                      Being in a position of influence and leadership
                    </option>
                    <option value="flexibility 1">
                      Maintaining a good balance between work and personal life
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="group_project_feeling"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Imagine you are assigned to a group project with team
                    members from different cultural backgrounds. How do you feel
                    about this situation?
                  </label>
                  <select
                    id="group_project_feeling"
                    {...register("group_project_feeling")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="low_adaptability 1">
                      I feel uncomfortable and prefer working with people
                      similar to me
                    </option>
                    <option value="adaptability 1">
                      I can manage but its not my preference
                    </option>
                    <option value="adaptability 1">
                      I look forward to learning from different perspectives
                    </option>
                    <option value="adaptability 1">
                      I enjoy the diversity and think it enhances our work
                    </option>
                    <option value="adaptability 1">
                      I thrive in diverse environments and actively seek such
                      opportunities
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="preferred_project_situation"
                    className="block mb-7 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Imagine you are working on a group project. Which situation
                    would you prefer?
                  </label>
                  <select
                    id="preferred_project_situation"
                    {...register("preferred_project_situation")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="strategic_thinking 1">
                      The project has clear instructions and guidelines, and
                      everyone knows their role
                    </option>
                    <option value="creativity 1">
                      The project allows for creativity and trying out new ideas
                    </option>
                    <option value="adaptability 1">
                      The project is fast-paced and requires quick decisions and
                      adaptability
                    </option>
                    <option value="relationship_building 1">
                      The project involves a lot of teamwork and collaboration
                    </option>
                    <option value="self_reliance 1">
                      The project allows you to work independently on your part
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="problem_solving"
                    className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Which type of problem are you most passionate about solving?
                  </label>
                  <select
                    id="problem_solving"
                    {...register("problem_solving")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="communication 1">
                      Improving how people experience services or products
                    </option>
                    <option value="creativity 1">
                      Creating new and innovative solutions
                    </option>
                    <option value="integrity 1">
                      Tackling environmental and sustainability issues
                    </option>
                    <option value="empathy 1">
                      Addressing social justice and inclusion
                    </option>
                  </select>
                </div>
              </div>
              {/* inputs */}
            </div>
          )}

          {currentStep === 1 && (
            <div className="w-full py-3 px-3">
              {/* <h1 className="font-bold text-base mb-4">Natural Skills and Traits</h1> */}
              <div className="w-full grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="enjoyable_activity"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Which activity do you find most enjoyable?
                  </label>
                  <select
                    id="enjoyable_activity"
                    {...register("enjoyable_activity")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="critical_thinking 1">
                      Solving puzzles or complex problems
                    </option>
                    <option value="communicative 1">
                      Talking and presenting ideas to others
                    </option>
                    <option value="attention_to_detail 1">
                      Organizing events or plans
                    </option>
                    <option value="precision 1">
                      Working on technical projects or experiments
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="learning_approach"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    What is your approach to learning new skills?
                  </label>
                  <select
                    id="learning_approach"
                    {...register("learning_approach")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="strategic_thinking 1">
                      I prefer learning through structured courses and training
                    </option>
                    <option value="creativity 1">
                      I enjoy exploring and experimenting to learn new things
                    </option>
                    <option value="communicative 1">
                      I learn best by collaborating and discussing with others
                    </option>
                    <option value="self_reliance 1">
                      I rely on self-study and independent research
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="handling_criticism"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    How do you handle criticism or feedback?
                  </label>
                  <select
                    id="handling_criticism"
                    {...register("handling_criticism")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="low_resilience 1">
                      I get defensive and find it hard to accept
                    </option>
                    <option value="resilience 1">
                      I consider it but often feel discouraged
                    </option>
                    <option value="resilience 1">
                      I appreciate it and use it to improve
                    </option>
                    <option value="high_resilience 1">
                      I actively seek feedback and view it as a growth
                      opportunity
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="traits_description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Which of these traits best describes you?
                  </label>
                  <select
                    id="traits_description"
                    {...register("traits_description")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="persistence 1">
                      Persistent in achieving goals
                    </option>
                    <option value="accuracy 1">
                      Always accurate and detail-oriented
                    </option>
                    <option value="vision 1">
                      Visionary and forward-thinking
                    </option>
                    <option value="flexibility 1">
                      Flexible and adaptable to new situations
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="task_management"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    How do you manage your tasks and responsibilities?
                  </label>
                  <select
                    id="task_management"
                    {...register("task_management")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="attention_to_detail 1">
                      I create detailed plans and follow them closely
                    </option>
                    <option value="decision_making 1">
                      I prioritize tasks based on urgency and importance
                    </option>
                    <option value="flexibility 1">
                      I adapt my plans as needed and stay flexible
                    </option>
                    <option value="collaboration 1">
                      I rely on collaboration and delegation
                    </option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="w-full py-3 px-3">
              {/* <h1 className="font-bold text-base mb-4">Industry Experience and Exposure</h1> */}

              <div className="w-full grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="event_organization"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Imagine you have to organize an event. What would be your
                    first step?
                  </label>
                  <select
                    id="event_organization"
                    {...register("event_organization")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="attention_to_detail 1">
                      Create a detailed plan and checklist
                    </option>
                    <option value="strategic_thinking 1">
                      Think about the big picture and overall strategy
                    </option>
                    <option value="creativity 1">
                      Come up with creative ideas to make it exciting
                    </option>
                    <option value="relationship_building 1">
                      Talk to others to gather their input and build a team
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="learning_preference"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    When learning something new, how do you prefer to do it?
                  </label>
                  <select
                    id="learning_preference"
                    {...register("learning_preference")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="strategic_thinking 1">
                      I like structured lessons and clear instructions
                    </option>
                    <option value="practical 1">
                      I learn best through hands-on experience
                    </option>
                    <option value="communicative 1">
                      I enjoy discussing and collaborating with others
                    </option>
                    <option value="self_reliance 1">
                      I prefer figuring things out on my own
                    </option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="w-full py-3 px-3">
              {/* <h1 className="font-bold text-base mb-4">Career Path Exploration and Alignment</h1> */}

              <div className="w-full grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="appealing_task"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Which of these tasks sounds most appealing to you?
                  </label>
                  <select
                    id="thriving_role"
                    {...register("appealing_task")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="organizational_skills 1">
                      Planning and organizing events or projects
                    </option>
                    <option value="persuasive 1">
                      Persuading others to see your point of view
                    </option>
                    <option value="creativity 1">
                      Creating new products or solutions
                    </option>
                    <option value="analytical_skills 1">
                      Analyzing data to find trends and insights
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="values_importance"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    How important is it for you to pursue a career path that
                    aligns with your values and interests?
                  </label>
                  <select
                    id="values_importance"
                    {...register("values_importance")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="low_values_alignment 1">
                      Not important at all
                    </option>
                    <option value="low_values_alignment 1">
                      Slightly important
                    </option>
                    <option value="moderate_values_alignment 1">
                      Moderately important
                    </option>
                    <option value="high_values_alignment 1">Important</option>
                    <option value="high_values_alignment 1">
                      Extremely important
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="thriving_role"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Which type of role do you see yourself thriving in?
                  </label>
                  <select
                    id="thriving_role"
                    {...register("thriving_role")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="leadership 1">
                      Leading a team to achieve goals
                    </option>
                    <option value="strategic_thinking 1">
                      Developing strategies and plans{" "}
                    </option>
                    <option value="decision_making 1">
                      Implementing and executing plans{" "}
                    </option>
                    <option value="critical_thinking 1">
                      Researching and analyzing information
                    </option>
                    <option value="communication_skills 1">
                      Engaging with customers and clients{" "}
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="career_path_preference"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Would you prefer a structured career path with defined
                    milestones or an exploratory path with diverse
                    opportunities?
                  </label>
                  <select
                    id="career_path_preference"
                    {...register("career_path_preference")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="organizational_skills 1">
                      Structured career path
                    </option>
                    <option value="flexibility 1">Exploratory path </option>
                    <option value="balance 1">A mix of both </option>
                    <option value="problem-solving 1">Unsure </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="skill_eagerness"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    How eager are you to gain new skills and certifications to
                    pursue your desired career path?
                  </label>
                  <select
                    id="skill_eagerness"
                    {...register("skill_eagerness")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="leadership 1">Extremely uneager </option>
                    <option value="low_leadership 1">Uneager </option>
                    <option value="neutral_leadership 1">Neutral </option>
                    <option value="high_leadership 1">Eager </option>
                    <option value="high_leadership 1">Extremely eager </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="career_challenges"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    What challenges do you foresee in achieving your career
                    goals?
                  </label>
                  <select
                    id="career_challenges"
                    {...register("career_challenges")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="relationship_building 1">
                      Lack of mentorship and guidance{" "}
                    </option>
                    <option value="social 1">
                      Limited networking opportunities
                    </option>
                    <option value="rational 1">
                      Financial constraints for further education
                    </option>
                    <option value="resilience 1">Uncertain job market </option>
                    <option value="persistence 1">
                      Skill gaps and lack of experience
                    </option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="w-full py-3 px-3">
              {/* <h1 className="font-bold text-base mb-4">Demographic Questions</h1> */}

              <div className="w-full grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Are you currently enrolled as a student at a university?
                  </label>
                  <select
                    id="University_enrolled_at"
                    {...register("University_enrolled_at")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="Yes">Yes</option>

                    <option value="No">No</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="College_type"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    What type of college or university are you currently
                    attending?
                  </label>
                  <select
                    id="College_type"
                    {...register("College_type")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="Four-year-College/University">
                      Four-year College/University
                    </option>
                    <option value="Community-College">Community College</option>
                    <option value="Technical/Trade-School">
                      Technical/Trade School
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="Institution_Type"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    What type of institution do you attend?
                  </label>
                  <select
                    id="Institution_Type"
                    {...register("Institution_Type")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="Historically-Black-College-or-University-(HBCU)">
                      Historically Black College or University (HBCU)
                    </option>
                    <option value="Minority-Serving-Institution-(MSI)">
                      Minority-Serving Institution (MSI)
                    </option>
                    <option value="Predominantly-White-Institution-(PWI)">
                      Predominantly White Institution (PWI)
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="current_year_in_school"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    What is your current year in school?
                  </label>
                  <select
                    id="current_year_in_school"
                    {...register("current_year_in_school")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Other">Senior</option>
                    <option value="Other">Graduate student</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="field_of_study"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    What is your major or field of study?
                  </label>
                  <input
                    type="text"
                    id="field_of_study"
                    {...register("field_of_study")}
                    name="field_of_study"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                </div>

                <div>
                  <label
                    htmlFor="age_range"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    What is your age range?
                  </label>
                  <select
                    id="age_range"
                    {...register("age_range")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="Under-18">Under 18</option>
                    <option value="18-20">18-20</option>
                    <option value="21-25">21-25</option>
                    <option value="26-30">26-30</option>
                    <option value="31-35">31-35</option>
                    <option value="Over 35">Over 35</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    What is your gender identity?
                  </label>
                  <select
                    id="gender"
                    {...register("gender")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-binary/third gender">
                      Non-binary/third gender
                    </option>
                    <option value="Prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="racial_background"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    What is your ethnicity or racial background?
                  </label>
                  <select
                    id="racial_background"
                    {...register("racial_background")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="asian">Asian</option>
                    <option value="black_or_african_american">
                      Black or African American
                    </option>
                    <option value="hispanic_or_latino">
                      Hispanic or Latino
                    </option>
                    <option value="white">White</option>
                    <option value="native_american">
                      Native American or Alaska Native
                    </option>
                    <option value="native_hawaiian">
                      Native Hawaiian or Other Pacific Islander
                    </option>
                    <option value="multiracial">Multiracial</option>
                    <option value="prefer_not_to_say">Prefer not to say</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="first_generation_college_student"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Are you a first-generation college student?
                  </label>
                  <select
                    id="first_generation_college_student"
                    {...register("first_generation_college_student")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Are you currently employed while attending college?
                  </label>
                  <select
                    id="currently_employed_in_college"
                    {...register("currently_employed_in_college")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="full_time">Yes (full-time)</option>
                    <option value="part_time">Yes (part-time)</option>
                    <option value="no">No</option>
                    <option value="not_currently">
                      Not currently (seeking employment)
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="currently_employed"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Are you currently employed?
                  </label>
                  <select
                    id="countries"
                    {...register("currently_employed")}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="full_time">Yes (full-time)</option>
                    <option value="part_time">Yes (part-time)</option>
                    <option value="no">No</option>
                    <option value="not_currently">
                      Not currently (seeking employment)
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="areas_of_experience"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    In which of the following areas do you have experience?
                  </label>
                  <select
                    id="areas_of_experience"
                    {...register("areas_of_experience")}
                    multiple
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value=""></option>
                    <option value="business_operations">
                      Business Operations
                    </option>
                    <option value="business_development">
                      Business Development
                    </option>
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
                    <option value="supply_chain">
                      Supply Chain & Logistics
                    </option>
                    <option value="research_development">
                      Research & Development
                    </option>
                    <option value="partnerships_alliances">
                      Partnerships & Alliances
                    </option>
                    <option value="strategy_planning">
                      Strategy & Planning
                    </option>
                    <option value="innovation">Innovation</option>
                  </select>
                </div>

                {/*                    
             <div>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Did you attend a college or university?

                </label>
                <select id="countries" {...register('')} className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                    <option value="yes">Yes</option>
                    <option value="No">No</option>
                  
                </select>   
             </div> */}
              </div>
            </div>
          )}

          {/* form input */}

          <div className="my-4 w-full text-right">
            {currentStep === 4 && (
              <button
                type="submit"
                className="py-3 px-4 border bg-white drop-shadow-lg rounded"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-5 h-5 me-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            )}
          </div>
        </form>

        {/* Navigations */}

        <div className="my-4 md:grid grid-cols-2">
          {/* prev */}
          <div className="">
            {currentStep > 0 && (
              <button
                type="button"
                className="py-3 px-4 border bg-white drop-shadow-lg rounded cursor-pointer"
                onClick={prev}
              >
                Prev
              </button>
            )}
          </div>
          {/* prev */}

          {/* next and submit */}
          <div className="text-right">
            {currentStep !== steps.length - 1 && (
              <button
                className="py-3 px-4 border bg-white drop-shadow-lg rounded cursor-pointer"
                onClick={next}
              >
                Next
              </button>
            )}
          </div>
          {/* next and*/}
        </div>

        {/* Navigations */}
      </div>
    </section>
  );
}
