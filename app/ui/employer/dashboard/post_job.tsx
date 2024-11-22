"use client";
import RequireSkills from "./taginput";
import React, { useState, FormEvent } from "react";
// import { AijobDescription } from "../../modals";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export function EmployerPostJobs() {
  const notifySuccess = () => {
    toast.success("Job created successfully");
  };

  const handleaiprogress = () => {
    setshowaiProgress((prev) => !prev);
  };

  const toggleAddtionalInformation = () => {
    setview_additional_information(!view_additional_information);
  };

  const [showaiProgress, setshowaiProgress] = useState(false);
  // const [aidescription,setaidescription] = useState<string>([])
  const [view_additional_information, setview_additional_information] =
    useState(false);

  const [jobCategory, setJobCategory] = useState("");
  const [jobType, setJobType] = useState<string[]>([]);
  const [jobTitle, setJobTitle] = useState("");
  const [locationType, setLocationType] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [minimumBudget, setMinimumBudget] = useState("");
  const [maximumBudget, setMaximumBudget] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [experienceLevels, setExperienceLevels] = useState<string[]>([]);
  const [skills, setskills] = useState<string[]>([]);

  // handle multiple select
  const jobTypeOptions = ["Full-time", "Part-time", "Contract", "Internship"];
  const ExperienceLevels = ["Entry-Level", "Senior", "Mid-Level"];

  const paymentsTerms = [
    "Upfront Payment",
    "Milestone Base Payment",
    "Payment upon Completion",
  ];

  const LocationsType = ["Remote", "Onsite", "Hybrid"];

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setJobType((prev) => [...prev, value]); // Add selected value
    } else {
      setJobType((prev) => prev.filter((type) => type !== value)); // Remove unselected value
    }
  };

  /// handle job experience change
  const handleCheckboxexperience = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setExperienceLevels((prev) => [...prev, value]); // Add selected value
    } else {
      setExperienceLevels((prev) => prev.filter((type) => type !== value)); // Remove unselected value
    }
  };

  //  handle paymentterms change

  /// handle job experience change
  const handleCheckboxlocationTypes = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = e.target;
    if (checked) {
      setLocationType((prev) => [...prev, value]); // Add selected value
    } else {
      setLocationType((prev) => prev.filter((type) => type !== value)); // Remove unselected value
    }
  };

  /// handle form form submition
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      job_title: jobTitle,
      location_type: locationType,
      payments_terms: paymentTerms,
      minimum_budget: minimumBudget,
      maximum_budget: maximumBudget,
      job_type: jobType,
      job_category: jobCategory,
      description: description,
      skills: skills,
      experience_levels: experienceLevels,
      status: "active",
    };

    console.log("form", formData);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/job/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("item")}`,
        },
        body: JSON.stringify(formData),
      }
    );
    const error = await response.json();
    console.log(error);
    if (response.ok) {
      notifySuccess();
      console.log("job added");
    }
  };

  return (
    <section className="md:grid grid-cols-1 p-20 w-full justify-around">
      <div className=" [&>*]:my-4">
        <h1 className="text-4xl font-bold w-full">Post a New Job</h1>
        <p>Dashboard / Post Job</p>
      </div>

      {/* job form */}
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="w-full bg-white rounded-lg drop-shadow-lg my-4 py-3 px-3 [&>*]:my-3">
              <div>
                <label
                  htmlFor="Title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="Title"
                  name="job_title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                {/* resume and ai */}
                {/* <div className="absolute right-4 bottom-7 flex">
                <AijobDescription setdescription={aidescription}/>
                <label
                  htmlFor="resume"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white py-1 px-2 h-8 rounded bg-white drop-shadow-lg cursor-pointer"
                >
                  Upload
                </label>
                <input type="file" name="resume" id="resume" className="rounded py-0 px-0 hidden" />
              </div> */}
                {/* resume and ai */}
                <label
                  htmlFor="Description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="Description"
                  name="description"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                  placeholder="Enter a detail description of the role, including required skills and responsibilities"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="py-3">
                <span
                  className="bg-[#2f2f2f] py-3 px-4 rounded text-gray-50 cursor-pointer"
                  onClick={handleaiprogress}
                >
                  See AI Suggestions
                </span>
              </div>

              {/* AI Suggestions */}
              {showaiProgress && (
                <div className="w-full">
                  {/* progress bar */}
                  <div className=" bg-gray-200 rounded-full h-2.5 ">
                    <div
                      className={`bg-[gray] h-2.5 rounded-full w-[60%]`}
                    ></div>
                  </div>
                  {/* progress bar */}

                  {/* ai match progress */}
                  <div className="flex justify-between">
                    <div>
                      <p className="mt-2">Need to improve Description</p>
                      <p className="text-sm text-gray-300">
                        You can use our Ai to Enhance Your Description to get
                        Perfect match for your Project
                      </p>
                    </div>

                    <div className="text-right">
                      <h1>20%</h1>
                    </div>
                  </div>

                  {/* ai match progress */}
                </div>
              )}

              {/* AI Suggestions */}
            </div>

            <div className="w-full bg-white rounded-lg drop-shadow-lg my-4 py-3 px-3">
              {/* job category */}

              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="job_category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Job Category
                  </label>
                  <input
                    type="text"
                    id="job_category"
                    name="job_category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full py-4"
                    onChange={(e) => setJobCategory(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="MaximumBudget"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Skills Required
                  </label>
                  <RequireSkills setskills={setskills} />
                </div>
              </div>
              {/*  */}

              {/* experience */}

              <div className="grid gap-6 mb-6 md:grid-cols-2">
                {/* experience level */}
                <div>
                  <h1 className="font-bold text-base my-2">Experience Level</h1>
                  <div className="flex">
                    {ExperienceLevels.map((options, index) => (
                      <div key={index} className="flex items-center me-4">
                        <input
                          id="senior"
                          type="checkbox"
                          value={options}
                          name="experience_levels"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                          onChange={handleCheckboxexperience}
                        />
                        <label
                          htmlFor="senior"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {options}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                {/* experience */}

                {/* job type */}
                <div>
                  <h1 className="font-bold text-base my-2">Job type</h1>
                  <div className="flex">
                    {jobTypeOptions.map((options, index) => (
                      <div key={index} className="flex items-center me-4">
                        <input
                          id="full_time"
                          type="checkbox"
                          value={options}
                          name="job_type"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor="full_time"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {options}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* job type */}
              </div>
              {/*  */}
            </div>

            {/* Budget Range & Payment Terms  */}
            <div className="w-full bg-white rounded-lg drop-shadow-lg my-4 py-3 px-3">
              <h1 className="font-bold text-xl">
                Budget Range & Payment Terms
              </h1>
              {/* input */}
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="MinimumBudget"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Minimum Budget
                  </label>
                  <input
                    type="number"
                    id="MinimumBudget"
                    name="minimum_budget"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                    onChange={(e) => setMinimumBudget(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="MaximumBudget"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Maximum Budget
                  </label>
                  <input
                    type="number"
                    id="MaximumBudget"
                    name="maximum_budget"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                    onChange={(e) => setMaximumBudget(e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* input */}

              <p className="my-3">Payments Terms</p>
              {/* payment temsx */}
              <div className="flex">
                {paymentsTerms.map((options, index) => (
                  <div key={index} className="flex items-center me-4">
                    <input
                      id="UpfrontPayment"
                      type="radio"
                      value={options}
                      name="payments_terms"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                      onChange={(e) => setPaymentTerms(e.target.value)}
                      required
                    />
                    <label
                      htmlFor="inline-checkbox"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {options}
                    </label>
                  </div>
                ))}
              </div>

              {/* location type
            <div className="w-full my-3 cursor-pointer mt-4">
              <h1> Additional Information </h1>

              <div className="flex mt-2">
                <div className="flex items-center me-4">
                  <input
                    id="hybrid"
                    type="checkbox"
                    value={`Hybrid`}
                    name="location_type"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    
                  />
                  <label htmlFor="hybrid" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Hybrid
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="milestone-base-payment"
                    type="checkbox"
                    value={`Remote`}
                    name="location_type"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  
                  />
                  <label htmlFor="milestone-base-payment" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Remote
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="iPaymentuponCompletion"
                    type="checkbox"
                    value={`Onsite`}
                    name="location_type"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  
                  />
                  <label htmlFor="PaymentuponCompletion" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    On-site
                  </label>
                </div>
              </div>
            </div> */}
              {/* payment temsx */}
            </div>
            {/* Budget Range & Payment Terms  */}

            {/* location type */}

            <div className="w-full my-3 cursor-pointer">
              <div className="my-2 flex" onClick={toggleAddtionalInformation}>
                {/* <FaChevronDown className="mr-3 text-xl leading-5" /> */}
                <h1> Additional Information (Optional)</h1>
              </div>

              {view_additional_information && (
                <div className="flex">
                  {LocationsType.map((options, index) => (
                    <div key={index} className="flex items-center me-4">
                      <input
                        id="iPaymentuponCompletion"
                        type="checkbox"
                        value={options}
                        name="location_type"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                        onChange={handleCheckboxlocationTypes}
                      />
                      <label
                        htmlFor="PaymentuponCompletion"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {options}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* location type */}

            {/* submit button  */}
            <div className="flex  justify-between items-center">
              <div>
                <button className="py-1 px-4 rounded border bg-white drop-shadow-lg">
                  Preview Job
                </button>
              </div>

              <div className="text-right">
                <button className="py-1 px-4 bg-[#3c3c3c] rounded text-gray-100">
                  Submit Job
                </button>
              </div>
            </div>
            {/* submit button  */}
          </div>
        </form>
      </div>

      {/* job */}
    </section>
  );
}
