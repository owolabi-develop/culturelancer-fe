"use client";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { educationSchame } from "@/app/libs/shemas";
import { exprienceSchame, skills } from "@/app/libs/shemas";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = z.infer<typeof educationSchame>;

type Exp = z.infer<typeof exprienceSchame>;

type Skl = z.infer<typeof skills>;

export function EducationModal({ notifytest }: { notifytest: string }) {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(educationSchame) });
  // handle toast bar
  const notify = () => {
    toast.success(notifytest);
  };
  // handle form submition
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      setIsLoading(true);
      const response = await fetch(`/api/applicant-settings/education/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("education added");
        reset();
        onCloseModal();
        setIsLoading(false);
        notify();
      }
    } catch (error) {
      console.log("server Error: ", error);
    }
  };

  return (
    <>
      <Button color="" onClick={() => setOpenModal(true)} className="bg-[#727272] rounded text-white mb-5 md:mb-0">
        + Add Education
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Education</h3>
              {/* form input */}
              <div className="[&>*]:my-5">
                <div>
                  <label htmlFor="institution_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    Institution Name
                  </label>
                  <input
                    color=""
                    type="text"
                    {...register("institution_name")}
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                  <p className="text-sm text-red-500">{errors.institution_name?.message}</p>
                </div>

                <div>
                  <label htmlFor="degree" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Degree
                  </label>
                  <input
                    color=""
                    type="text"
                    {...register("degree")}
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                  <p className="text-sm text-red-500">{errors.degree?.message}</p>
                </div>

                <div>
                  <label htmlFor="field_of_study" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Field Of Study
                  </label>
                  <input
                    color=""
                    type="text"
                    {...register("field_of_study")}
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                  <p className="text-sm text-red-500">{errors.field_of_study?.message}</p>
                </div>

                <div>
                  <label htmlFor="start_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    StartDate
                  </label>
                  <input
                    color=""
                    type="date"
                    {...register("start_date")}
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                  <p className="text-sm text-red-500">{errors.start_date?.message}</p>
                </div>

                <div>
                  <label htmlFor="end_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    EndDate
                  </label>
                  <input
                    color=""
                    type="date"
                    {...register("end_date")}
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                  <p className="text-sm text-red-500">{errors.end_date?.message}</p>
                </div>

                <div>
                  <label htmlFor="gpa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Gpa
                  </label>
                  <input
                    color=""
                    type="text"
                    {...register("gpa")}
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    required
                  />
                  <p className="text-sm text-red-500">{errors.gpa?.message}</p>
                </div>

                <div className="">
                  <button className="bg-[#727272] py-2 px-3 md:px-5 md:py-3 rounded text-white mb-5 md:mb-0" disabled={isLoading}>
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
                      "Save & Update"
                    )}
                  </button>
                </div>
                {/* form input */}
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

// Experience modal

export function ExperienceModal({ notifytest }: { notifytest: string }) {
  const [openModal, setOpenModal] = useState(false);
  const employmentTypes = z.enum(["Full-Time", "Part-Time", "Contract", "Temporary", "Internship", "Freelance", "Volunteer", "Seasonal"]);

  function onCloseModal() {
    setOpenModal(false);
  }
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Exp>({ resolver: zodResolver(exprienceSchame) });
  // handle toast bar
  const notify = () => {
    toast.success(notifytest);
  };
  // handle form submition
  const onSubmit: SubmitHandler<Exp> = async (data) => {
    console.log(data);
    try {
      setIsLoading(true);
      const response = await fetch(`/api/applicant-settings/experience/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("experience added");
        reset();
        onCloseModal();
        setIsLoading(false);
        notify();
      }
    } catch (error) {
      console.log("server Error: ", error);
    }
  };

  return (
    <>
      <Button color="" onClick={() => setOpenModal(true)} className="bg-[#727272]  rounded text-white mb-5 md:mb-0 ">
        + Add Experience
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Experience</h3>
              {/* form input */}
              <div className="[&>*]:my-5">
                <div>
                  <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Title
                  </label>
                  <input
                    color=""
                    type="text"
                    {...register("title")}
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                  <p className="text-sm text-red-500">{errors.title?.message}</p>
                </div>

                <div>
                  <label htmlFor="degree" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Company Name
                  </label>
                  <input
                    color=""
                    type="text"
                    {...register("company_name")}
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                  <p className="text-sm text-red-500">{errors.company_name?.message}</p>
                </div>

                <div>
                  <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Select an option
                  </label>
                  <select
                    id="location"
                    {...register("location_type")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg "
                  >
                    <option disabled>Choose a Location</option>
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                  </select>
                  <p className="text-sm text-red-500">{errors.location_type?.message}</p>
                </div>

                <div>
                  <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Employment type
                  </label>
                  <select
                    id="location"
                    {...register("employment_types")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg "
                  >
                    <option selected disabled>
                      Choose a Location
                    </option>
                    {employmentTypes.options.map((employment) => (
                      <option key={employment} value={employment}>
                        {employment}
                      </option>
                    ))}
                  </select>
                  <p className="text-sm text-red-500">{errors.employment_types?.message}</p>

                  <p className="text-sm text-red-500">{}</p>
                </div>

                <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                  <input id="status" type="checkbox" value="" {...register("present")} className="w-4 h-4 bg-gray-100 border-gray-300 rounded" />
                  <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Present
                  </label>
                  <p className="text-xl text-red-500">{errors.present?.message}</p>
                </div>

                <div>
                  <label htmlFor="start_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    StartDate
                  </label>
                  <input
                    color=""
                    type="date"
                    {...register("start_date")}
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                  <p className="text-sm text-red-500">{errors.start_date?.message}</p>
                </div>

                <div>
                  <label htmlFor="end_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    EndDate
                  </label>
                  <input
                    color=""
                    type="date"
                    {...register("end_date")}
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                  <p className="text-sm text-red-500">{errors.end_date?.message}</p>
                </div>

                <div>
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Description
                  </label>
                  <textarea
                    id="description"
                    {...register("description")}
                    rows={8}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 drop-shadow-lg "
                    placeholder="Enter your questions and answer here ..."
                  ></textarea>
                  <p className="text-sm text-red-500">{errors.description?.message}</p>
                </div>

                <div className="">
                  <button className="bg-[#727272] py-2 px-3 md:px-5 md:py-3 rounded text-white mb-5 md:mb-0" disabled={isLoading}>
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
                      "Save & Update"
                    )}
                  </button>
                </div>
                {/* form input */}
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

// Experience modal

//  skill modal

export function Skill({ notifytest }: { notifytest: string }) {
  const LevelEnum = z.enum(["Beginner", "Intermediate", "Expert"]);
  const TechSkillEnum = z.enum([
    "Python",
    "JavaScript",
    "React",
    "Django",
    "Node.js",
    "SQL",
    "nextjs",
    "postgres",
    "Java",
    "C++",
    "Ruby",
    "TypeScript",
    "R",
    "Scala",
    "Go",
    "MATLAB",
    "Julia",
    "Vue",
    "Angular",
    "Flask",
    "NoSQL",
    "Apache Spark",
    "Hadoop",
    "Kafka",
    "Airflow",
    "ETL",
    "BigQuery",
    "Redshift",
    "Snowflake",
    "MongoDB",
    "Pandas",
    "NumPy",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "Scikit-Learn",
    "XGBoost",
    "LightGBM",
    "NLTK",
    "SpaCy",
    "AWS",
    "Azure",
    "GCP",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Tableau",
    "Power BI",
    "Looker",
    "Data Studio",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Git",
    "Jenkins",
    "Ansible",
    "Apache Beam",
    "Presto",
  ]);
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Skl>({ resolver: zodResolver(skills) });
  // handle toast bar
  const notify = () => {
    toast.success(notifytest);
  };
  // handle form submition
  const onSubmit: SubmitHandler<Skl> = async (data) => {
    console.log(data);
    try {
      setIsLoading(true);
      const response = await fetch(`/api/applicant-settings/skill/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("skill added");
        reset();
        onCloseModal();
        setIsLoading(false);
        notify();
      }
    } catch (error) {
      console.log("server Error: ", error);
    }
  };

  return (
    <>
      <Button color="" onClick={() => setOpenModal(true)} className="bg-[#727272]  rounded text-white mb-5 md:mb-0 ">
        + Add Skills
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Skills</h3>
              {/* form input */}
              <div className="[&>*]:my-5">
                <div>
                  <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Select an option
                  </label>
                  <select id="Skill" {...register("skill")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full">
                    <option selected disabled>
                      Choose skill
                    </option>
                    {TechSkillEnum.options.map((skill) => (
                      <option key={skill} value={skill}>
                        {skill}
                      </option>
                    ))}
                  </select>
                  <p className="text-sm text-red-500">{errors.skill?.message}</p>
                </div>

                <div>
                  <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Select an option
                  </label>
                  <select id="Skill" {...register("level")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full">
                    <option selected disabled>
                      Choose skill level
                    </option>
                    {LevelEnum.options.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  <p className="text-sm text-red-500">{errors.skill?.message}</p>
                </div>

                <div className="">
                  <button className="bg-[#727272] py-2 px-3 md:px-5 md:py-3 rounded text-white mb-5 md:mb-0" disabled={isLoading}>
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
                      "Save & Update"
                    )}
                  </button>
                </div>
                {/* form input */}
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

// ai description modal

export interface IAijobDescription {
  setdescription: (text: string) => void;
}

export function AijobDescription(props: IAijobDescription) {
  const { setdescription } = props;
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <span color="" onClick={() => setOpenModal(true)} className="py-1 px-2 rounded bg-white drop-shadow-lg h-8 mr-2 cursor-pointer">
        Use AI
      </span>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="w-full">
            <label htmlFor="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
              id="Description"
              name="description"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
              placeholder="Enter a detail description of the role, including required skills and responsibilities"
              onChange={(e) => setdescription(e.target.value)}
            ></textarea>

            <button className="py-3 px-4 rounded border bg-white drop-shadow-lg my-3" onClick={onCloseModal}>
              Suggest
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
