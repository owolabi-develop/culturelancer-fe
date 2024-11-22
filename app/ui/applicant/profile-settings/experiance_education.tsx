"use client";

import { EducationModal, Skill } from "../../modals";
import { ExperienceModal } from "../../modals";
import useSWR from "swr";
import { useParams } from "next/navigation";

import ProgressBar from "@ramonak/react-progress-bar";

import { ApplicantDndResume } from "./dnd/applicant_resume_dnd";
import { useApplicantProfileDetails } from "@/app/hooks/useApplicantProfileDetails";
import { ProfilePercent } from "../../progressBar";

export default function ExperienceEducation() {
  return (
    <section className="w-full ">
      <div className="md:grid grid-cols-1 py-5 px-5">
        {/* progress bar */}
        <ProfilePercent />

        {/* education */}
        <div className="w-full rounded-lg px-5 py-5 bg-white border border-[#E5E5E5] ">
          <p className="text-xl font-medium my-2">Add Your Education</p>

          <div className="">
            <EducationModal notifytest="Education Added!" />
          </div>
        </div>

        {/* education */}

        {/* experience */}
        <div className="w-full rounded-lg px-5 py-5 bg-white border border-[#E5E5E5] my-5 ">
          <p className="text-xl font-medium my-2">Add Your Experience</p>

          <div className="">
            <ExperienceModal notifytest="Experience Added!" />
          </div>
        </div>

        {/* experience */}

        {/* skills */}

        <div className="w-full rounded-lg px-5 py-5 bg-white border border-[#E5E5E5] ">
          <p className="text-xl font-medium my-2">Add Your Skill</p>

          <div className="">
            <Skill notifytest="Skill Added!" />
          </div>
        </div>

        {/* skills */}

        {/* resume */}

        <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-4">
          <p className="text-xl font-medium my-2">Add Your resume</p>

          <ApplicantDndResume
            notifytest="Resume Uploaded"
            name="resume"
            className={`border-dashed border-2 text-center -mt-6 py-8 rounded-lg hover:border-blue-300 cursor-pointer`}
          />
          <p className="text-[#525252] text-sm mt-4">
            Upload your resume/CV to enhance your profile and increase your
            chances of being noticed by employers.
          </p>
        </div>

        {/* resume */}
      </div>
    </section>
  );
}
