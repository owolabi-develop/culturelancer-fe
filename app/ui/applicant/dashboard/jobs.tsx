import Link from "next/link";
import { FiFilter } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";

export function ApplicantJobs() {
  return (
    <section className="md:grid grid-cols-1 p-20 w-full justify-around">
      {/* Applicant jobs header */}
      <div className="w-full">
        <h1 className="text-3xl font-bold md:text-3xl block text-black">
          Top 25 Best Matches For You
        </h1>
        <p className="mt-3">
          Here are top 25 opportunities that match your skills and experiences
        </p>
      </div>

      {/* Applicant jobs header */}

      <div className="profile-details md:flex mt-10 w-full justify-between">
        {/* profile matches */}

        <div className="space-y-5 md:w-[30%] md:flex flex-col ">
          <div className="bg-white drop-shadow-lg w-full p-5 rounded flex-none">
            <h1 className="text-2xl font-bold md:text-2xl block text-black mb-5">
              Profile Match
            </h1>

            {/* progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div className={`bg-[gray] h-4 rounded-full w-[70%]`}></div>
            </div>
            {/* progress bar */}

            <p className="mt-5">Your profile match 75% of the top jobs</p>

            <h1 className="text-xl font-semibold md:text-xl block text-black mt-5">
              Imporve Your match:
            </h1>
            <div className="mt-4 px-4">
              <p>Add more skills to your profile</p>
              <p>Update your resume</p>
              <p>Complete your work history</p>
            </div>
          </div>
        </div>
        {/* profile match */}

        {/* job listing */}
        <div className="space-y-6 md:w-[68%] md:flex flex-col">
          <div className="w-full flex flex-row">
            <div className="w-1/2 sm:w-11 sortby p-2 md:w-full">
              <form>
                <div className="flex md:space-x-3">
                  <h1 className="text-sm md:leading-9">Sort by:</h1>
                  <select className="md:py-2 px-3 pe-9 block  border rounded-lg text-sm cursor-pointer">
                    <option>Latest</option>
                    <option>New</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full">
              <FiFilter className="text-3xl" />
            </div>
          </div>

          {/* main jobs */}
          <div className="bg-white drop-shadow-lg w-full p-3 rounded cursor-pointer transition-shadow duration-300 shadow-[rgba(0,0,0,0)] group hover:shadow-[-10px_0px_rgba(0,0,0,0.8)]">
            <h1 className="text-xl font-bold md:text-xl block text-black">
              Senior Frontend Developer
            </h1>
            <p className="mt-4">TechCorp Inc.</p>

            <p className="mt-5 mb-5">
              We are looking for an experienc frontend developer to join our
              team and help build cutting-edge web applications
            </p>

            <div className="my-5">
              <span className="bg-[lightgray] p-1 rounded">React</span>
              <span className="bg-[lightgray] p-1 rounded mx-2">
                TypeScript
              </span>
              <span className="bg-[lightgray] p-1 rounded mx-2">Css-in-JS</span>
            </div>

            {/* applied and save job controls */}
            <div className="w-full flex flex-row">
              <div className="w-2/3 sortby flex flex-row items-center md:w-full">
                <Link href="/applicant/dashboard/job-detail">
                  <button className="text-white bg-[#131313] rounded py-[0.4rem] px-[0.4rem] md:py-2 md:px-3 mr-3 ">
                    Apply Now
                  </button>
                </Link>
                <Link href="/applicant/dashboard/customize-resume">
                  {" "}
                  <button className="rounded py-[0.4rem] px-[0.4rem] md:py-2 md:px-3 border border-current">
                    Customize Resume
                  </button>
                </Link>
              </div>
              <div className="w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full">
                <FaRegBookmark className="text-3xl" />
              </div>
            </div>
            {/* applied and save job controls */}
          </div>
          {/* main jobs */}

          {/* main jobs */}
          <div className="bg-white drop-shadow-lg w-full p-3 rounded cursor-pointer transition-shadow duration-300 shadow-[rgba(0,0,0,0)] group hover:shadow-[-10px_0px_rgba(0,0,0,0.8)]">
            <h1 className="text-xl font-bold md:text-xl block text-black">
              Senior Frontend Developer
            </h1>
            <p className="mt-4">TechCorp Inc.</p>

            <p className="mt-5 mb-5">
              We are looking for an experienc frontend developer to join our
              team and help build cutting-edge web applications
            </p>

            <div className="my-5">
              <span className="bg-[lightgray] p-1 rounded">React</span>
              <span className="bg-[lightgray] p-1 rounded mx-2">
                TypeScript
              </span>
              <span className="bg-[lightgray] p-1 rounded mx-2">Css-in-JS</span>
            </div>

            {/* applied and save job controls */}
            <div className="w-full flex flex-row">
              <div className="w-2/3 sortby flex flex-row items-center md:w-full">
                <Link href="/applicant/dashboard/job-detail">
                  <button className="text-white bg-[#131313] rounded py-[0.4rem] px-[0.4rem] md:py-2 md:px-3 mr-3 ">
                    Apply Now
                  </button>
                </Link>
                <Link href="/applicant/dashboard/customize-resume">
                  {" "}
                  <button className="rounded py-[0.4rem] px-[0.4rem] md:py-2 md:px-3 border border-current">
                    Customize Resume
                  </button>
                </Link>
              </div>
              <div className="w-1/2 sm:w-10 sortby2 flex p-2 justify-end md:w-full">
                <FaRegBookmark className="text-3xl" />
              </div>
            </div>
            {/* applied and save job controls */}
          </div>
          {/* main jobs */}
        </div>
        {/* job listing */}
      </div>
    </section>
  );
}

// job details

export function ApplicantJobsDetails() {
  return (
    <section className="md:grid grid-cols-1 p-20 w-full justify-around">
      <div className="profile-details md:flex mt-10 w-full justify-between">
        <div className="space-y-6 md:w-[68%] md:flex flex-col">
          {/* Project title */}

          <div className="w-full py-1 px-5 rounded mb-6">
            <h1 className="text-2xl font-bold md:text-2xl block text-black">
              Senior UX Designer for Innovative Fintech Project
            </h1>
            <p className="">TechFinance Inc. - New York, NY</p>
          </div>

          {/* Project title */}

          {/* Project Description */}

          <div className="bg-white drop-shadow-lg w-full py-5 px-5 rounded">
            <h1 className="text-xl font-bold md:text-xl block text-black">
              Project Description
            </h1>
            <p className="mt-5">
              We are seeking a talanted Senior UX Designer to join our inovative
              fintech project. the ideal candidate will have a strong background
              in creating intuitive and user-friendly interfaces for complex
              financial applications.
            </p>
            <p className="underline">Read More</p>
          </div>

          {/* Project Description */}

          {/* skill Requirements */}

          <div className="bg-white drop-shadow-lg w-full py-5 px-5 rounded">
            <h1 className="text-xl font-bold md:text-xl block text-black">
              Project Description
            </h1>
            <p className="mt-5">
              We are seeking a talanted Senior UX Designer to join our inovative
              fintech project. the ideal candidate will have a strong background
              in creating intuitive and user-friendly interfaces for complex
              financial applications.
            </p>
            <p className="underline">Read More</p>
          </div>

          {/* skill requirements*/}

          {/* start Date */}

          <div className="bg-white drop-shadow-lg w-full py-5 px-5 rounded">
            <h1 className="text-xl font-bold md:text-xl block text-black">
              Project Timeline
            </h1>

            <p className="mt-5 md:flex">
              <CiCalendar className="text-3xl mr-2" /> Expected Start: March
              1,2025 - End:August 31,2025
            </p>
          </div>

          {/* start date*/}

          {/* share and email */}

          <div className="w-full py-5 px-5 rounded">
            <p className="mt-5 md:flex">
              <GoShareAndroid className="text-3xl mr-2" />{" "}
              <MdOutlineMail className="text-3xl mr-2" />
            </p>
          </div>

          {/* share and email */}

          {/* Related Projects */}
          <div className="bg-white drop-shadow-lg w-full p-5 py-10 rounded">
            <h1 className="text-2xl font-bold md:text-2xl block text-black mb-3">
              Related Projects
            </h1>

            <div className="space-y-6 sm:space-y-6 xl:space-x-4 jobs w-full md:flex  md:space-x-0 md:space-y-0 justify-evenly">
              <div className="rounded border p-5 drop-shadow-lg ">
                <p className="font-bold text-black py-2 ">
                  {" "}
                  UX/UI Designer for E-commarce Platform
                </p>
                <p className="mt-2">ShopTech Solution - Remote</p>
                <p className="mt-2">$800,00 - 100,000/year</p>
              </div>

              <div className="rounded border p-5 drop-shadow-lg ">
                <p className="font-bold text-black py-2 ">
                  {" "}
                  UX/UI Designer for E-commarce Platform
                </p>
                <p className="mt-2">ShopTech Solution - Remote</p>
                <p className="mt-2">$800,00 - 100,000/year</p>
              </div>

              <div className="rounded border p-5 drop-shadow-lg ">
                <p className="font-bold text-black py-2 ">
                  {" "}
                  UX/UI Designer for E-commarce Platform
                </p>
                <p className="mt-2">ShopTech Solution - Remote</p>
                <p className="mt-2">$800,00 - 100,000/year</p>
              </div>
            </div>
          </div>
          {/* Related Projects */}
        </div>
        {/*  job details section*/}

        {/* budget session */}

        <div className="space-y-5 md:w-[30%] md:flex flex-col ">
          {/* applied button */}

          <div className="mt-6 sm:mt-6 sortby flex flex-row items-center md:mt-0 md:w-full mb-12">
            <Link href="/applicant/dashboard/job-detail">
              <button className="text-white bg-[#131313] rounded py-[0.3rem] px-[1.5rem] md:py-2 md:px-3 mr-3 ">
                Apply Now
              </button>
            </Link>
            <Link href="/applicant/dashboard/customize-resume">
              {" "}
              <button className="rounded py-[0.3rem] px-[0.3rem] md:py-2 md:px-3 border border-current">
                Customize Resume
              </button>
            </Link>
          </div>

          {/* applied button */}

          <div className="bg-white drop-shadow-lg w-full p-4 rounded flex-none">
            <p className="my-3 text-2xl font-bold md:text-2xl block text-black">
              {" "}
              Budget and Payment
            </p>
            <h1 className="text-3xl font-bold md:text-3xl block text-black">
              $120,000 - $150,000
            </h1>
            <p className="my-2">Annual salary ( Full-time position )</p>

            <div className="w-full px-5">
              <p>Monthly payments</p>
              <p>Performance bonuses available</p>
              <p>Comprehensive benefits package</p>
            </div>
          </div>

          {/* client information */}
          <div className="bg-white drop-shadow-lg w-full px-5 py-5 rounded">
            <h1 className="text-2xl font-bold md:text-2xl block text-black">
              Client Information
            </h1>

            <div className="space-y-0 sm:space-y-0 md:flex flex-row md:space-x-3 py-3">
              <div className="bg-[#cccbc8] rounded-full w-14 h-14 py-4 px-3">
                {" "}
                logo
              </div>
              <div className="text-left">
                <h1>John Doe</h1>
                <h2>software Engineer</h2>
              </div>
            </div>
            <p className="p-2 underline cursor-pointer">View Company Profile</p>
          </div>

          {/* client information */}

          {/* save for later */}
          <div className="w-full py-5 px-5 text-right">
            <Link href="/hire">
              {" "}
              <button className="border text-black rounded py-3 px-5">
                Save For Later
              </button>
            </Link>
          </div>
        </div>

        {/* budget section */}
      </div>
    </section>
  );
}
