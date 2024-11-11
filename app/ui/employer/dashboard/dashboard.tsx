import Link from "next/link";
export function WelcomeHeader({ headerTest, employer }: { headerTest: string; employer: any }) {
  

  const totalApplicants = employer?.jobs?.reduce((acc: any, curr: any) => acc + curr?.applications?.length, 0);
  return (
    <section className="md:grid grid-cols-1 p-20 w-full justify-around">
      <div className="text-center m-auto [&>*]:my-4">
        <h1 className="text-4xl font-bold w-full">Welcome, {headerTest}</h1>
        <p className="text-xl">Manage your job postings, review applications and connect with top Freelancers</p>

        {/* search input */}
        <div className="text-center">
          <form>
            <div>
              <div className="flex justify-center">
                <input
                  type="search"
                  id="CurrentMayor"
                  name="Quote"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-[50%]"
                  required
                  placeholder="Search ...."
                />
                <Link href="/employer/dashboard/post-job " className="bg-[#727272]  rounded text-white mx-2 px-5 text-center flex items-center">
                  Post a Job
                </Link>
                <button className="bg-[#727272]  rounded text-white mx-2 px-5 text-center">Browser Talent</button>
              </div>
            </div>
          </form>
        </div>
        {/* search input */}
      </div>

      {/* total jobs and applicant */}

      <div className="w-full md:grid md:grid-cols-3 gap-3">
        <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
          <h1 className="font-bold text-xl">Jobs Posted</h1>
          <h1 className="font-bold text-2xl">{employer?.jobs?.length}</h1>
        </div>

        {/* <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
          <h1 className="font-bold text-xl">Best Recommended Telant</h1>
          <h1 className="font-bold text-2xl">8</h1>
        </div> */}

        <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
          <h1 className="font-bold text-xl">Total Candidate Applied</h1>
          <h1 className="font-bold text-2xl">{totalApplicants}</h1>
        </div>
      </div>

      {/* total jobs and applicant  */}

      {/* activities */}

      <div className="w-full md:flex">
        {/* recent activatie */}
        <div className="w-full md:w-[70%] px-5">
          <h1 className="text-2xl font-bold">Recent Activity</h1>

          {/* activate table */}
          <div className="bg-white drop-shadow-lg rounded w-full [&>*]:my-2 mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-left border-slate-100 [&>*]:py-3 [&>*]:px-5 rounded-full">
                  <th>Candidate</th>
                  <th>Job</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="text-left [&>*]:border-t-2 border-slate-100 [&>*]:py-3 [&>*]:px-5 rounded-full cursor-pointer hover:bg-slate-200 ">
                  <td className="flex w-full">
                    <div className="bg-gray-200 rounded-full w-10 h-10 mr-2"></div>
                    <div className="">
                      <p className="leading-10">Owolabi Akintan</p>
                    </div>
                  </td>
                  <td>Senior Developer</td>
                  <td>
                    <span className="py-1 px-1 bg-slate-100 rounded">Shortlisted</span>
                  </td>
                </tr>

                <tr className="text-left [&>*]:border-t-2 border-slate-100 [&>*]:py-3 [&>*]:px-5 rounded-full cursor-pointer hover:bg-slate-200 ">
                  <td className="flex w-full">
                    <div className="bg-gray-200 rounded-full w-10 h-10 mr-2"></div>
                    <div className="">
                      <p className="leading-10">Jane Smith</p>
                    </div>
                  </td>
                  <td>UX Designer</td>
                  <td>
                    <span className="py-1 px-1 bg-slate-100 rounded">Reviewed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* activate table */}

          {/* best candidate recommendations */}
          <h1 className="text-2xl font-bold my-8">Best Candidate Recommendations</h1>

          <div className="space-y-3 w-full my-4 md:grid grid-cols-2 gap-3 md:space-y-0">
            <div className=" bg-white drop-shadow-lg py-3 px-4 [&>*]:my-3 rounded-md">
              <div className="flex">
                <div className="bg-slate-200 mr-3 rounded-full w-16 h-16 py-5 px-4">icon</div>
                <div>
                  <h1 className="font-bold">Alex Johnson</h1>
                  <p> Senior Developer</p>
                </div>
              </div>

              <p className="">
                Skills: <span>Javasecipt</span>,<span>React</span>
              </p>
              <p>Experience: 5 years</p>

              <div className="w-full md:flex">
                <div className="w-full md:w-[55%]">
                  <h1 className="text-2xl font-bold">95% Match</h1>
                </div>

                <div className="w-full flex justify-between">
                  <button className="bg-gray-200 py-2 px-4 rounded">
                    <Link href="/employer/dashboard/candidate-profile">View Profile</Link>
                  </button>
                  <button className="bg-black py-2 px-4 rounded text-white">Message</button>
                </div>
              </div>
            </div>

            {/* candidate */}

            {/* candidate */}
            <div className=" bg-white drop-shadow-lg py-3 px-4 [&>*]:my-3 rounded-md">
              {/* profile  */}
              <div className="flex">
                <div className="bg-slate-200 mr-3 rounded-full w-16 h-16 py-5 px-4">icon</div>
                <div>
                  <h1 className="font-bold">Alex Johnson</h1>
                  <p> Senior Developer</p>
                </div>
              </div>
              {/* profile  */}

              <p className="">
                Skills: <span>Javasecipt</span>,<span>React</span>
              </p>
              <p>Experience: 5 years</p>

              {/* controls */}
              <div className="w-full md:flex">
                <div className="w-full md:w-[55%]">
                  <h1 className="text-2xl font-bold">95% Match</h1>
                </div>

                <div className="w-full flex justify-between">
                  <button className="bg-gray-200 py-2 px-4 rounded">
                    <Link href="/employer/dashboard/candidate-profile">View Profile</Link>
                  </button>
                  <button className="bg-black py-2 px-4 rounded text-white">Message</button>
                </div>
              </div>

              {/* controls */}
            </div>

            {/* candidate */}
          </div>

          {/* best candidate recommendations */}
        </div>
        {/* recent activatie */}

        {/* job posting summary */}

        <div className="w-full md:w-[30%] px-5 md:grid grid-cols-1 ">
          <h1 className="text-2xl font-bold">Recent Job post Summary</h1>

          {/* summary */}

          {employer?.jobs.length > 0 &&
            employer?.jobs.map((job: any) => (
              <div className="bg-white drop-shadow-lg rounded w-full py-4 px-3 [&>*]:my-2 mt-4" key={job?.id}>
                <h1 className="text-xl font-bold">{job.title}</h1>
                <p>Posted: J{job?.posted_date}</p>
                <p>Candidate Applied: {job?.applications.length}</p>
                <p>Status : {job?.status}</p>
                <div className="w-full md:w-[55%] flex justify-between">
                  <button className="bg-gray-200 py-2 px-4 rounded">Edit</button>
                  <button className="bg-gray-200 py-2 px-4 rounded">View Applications</button>
                </div>
              </div>
            ))}

          {/* summary */}
        </div>
        {/* job posting summary */}
      </div>

      {/* actitvites */}

      {/*  job performace chart */}

      <div className="w-full md:grid md:grid-cols-2 gap-3">
        <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
          <h1 className="font-bold text-xl my-2">Jobs Performace Over Time</h1>
          <div className="bg-slate-50 w-full rounded py-36 text-center">
            <h1>Line chart Job Views, Applications</h1>
          </div>
        </div>

        <div className="bg-white drop-shadow-lg rounded py-5 px-5 my-8">
          <h1 className="font-bold text-xl my-2">Candidate Applications</h1>
          <div className="bg-slate-50 w-full rounded py-36 text-center">
            <h1>Bar chart Applicant per Job</h1>
          </div>
        </div>
      </div>

      {/*  job performace chart */}
    </section>
  );
}
