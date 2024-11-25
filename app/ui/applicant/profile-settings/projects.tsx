"use client";

import React, { useState, useEffect, FormEvent, useRef } from "react";
import { TagsInput } from "react-tag-input-component";
import { toast } from "react-toastify";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { IoCloudUploadOutline } from "react-icons/io5";
import ProgressBar from "@ramonak/react-progress-bar";
import { fetchprojects } from "@/app/libs/utils";
import { RiDeleteBin6Line } from "react-icons/ri";
import useSWR from "swr";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import { useApplicantProfileDetails } from "@/app/hooks/useApplicantProfileDetails";
import { cultureLancerAxios } from "@/app/ui-services/axios";
import { ProfilePercent } from "../../progressBar";
import AppButton from "../../AppButton";

type projectsSchema = {
  id: string;
  project_title: string;
  description: string;
};

export default function Projects() {
  const [selected, setSelected] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dndstyle = `border-dashed border-2 text-center py-8 hover:border-blue-300 cursor-pointer`;
  //  retrive  profle completion percent
  const [projects, Setporjects] = useState<projectsSchema[]>([]);

  const handlecertificatedetails = async () => {
    const data = await fetchprojects();
    if (data !== null) {
      Setporjects(data);
      console.log("project data", data);
    }
  };

  // fetch all certificate data
  useEffect(() => {
    handlecertificatedetails();
  }, []);

  // delete certificate

  const notifydelete = () => {
    toast.success("project Deleted");
  };

  const deleteProject = async (id: string) => {
    try {
      const response = await cultureLancerAxios.delete(
        `/applicant-project/${id}/`
      );
      handlecertificatedetails();
      notifydelete();
    } catch (error) {
      console.error("Error deleting projects", error);
    }
  };

  // dnd
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      onDrop: (incomingFiles) => {
        if (hiddenInputRef.current) {
          const dataTransfer = new DataTransfer();
          incomingFiles.forEach((v) => {
            dataTransfer.items.add(v);
          });
          hiddenInputRef.current.files = dataTransfer.files;
        }
      },
      maxFiles: 1,
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
    });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <div key={file.path}>
      {errors.map((e) => (
        <p className="text-sm text-red-500" key={e.code}>
          File type must be image format{" "}
        </p>
      ))}
    </div>
  ));

  const files = acceptedFiles.map((file) => (
    <p key={file.path} className="">
      {file.path} - {file.size} byte
    </p>
  ));

  const notify = () => {
    toast.success("Project Added!");
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const formObject: Record<string, FormDataEntryValue> = {};
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const technologiesUsed = JSON.stringify(selected);
    formData.append("technologies_used", technologiesUsed);
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    try {
      const response = await cultureLancerAxios.post(
        `/applicant-project/`,
        formData
      );
      handlecertificatedetails();
      setIsLoading(false);
      notify();
      setSelected([]);
      if (event.target) {
        (event.target as HTMLFormElement).reset();
      }
      console.log(response.data);
      console.log("Form submitted successfully");
    } catch (error) {
      console.log("server error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full ">
      <div className="md:grid grid-cols-1 py-5 px-5">
        {/* progress bar */}

        <ProfilePercent />

        <h1 className="my-3 font-extrabold text-2xl"> Projects</h1>

        {/* form container */}
        <form onSubmit={handleFormSubmit} encType="multipart/form-data">
          <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg ">
            <p className="text-xl font-semibold my-2">Project Details</p>

            {/* forms input */}

            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="Title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Project Title
                </label>
                <input
                  type="text"
                  id="Title"
                  name="project_title"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                />
                <p className="text-sm text-red-500"></p>
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                />
                <p className="text-sm text-red-500"></p>
              </div>

              <div>
                <label
                  htmlFor="StartDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="StartDate"
                  name="start_date"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                />
                <p className="text-sm text-red-500">{}</p>
              </div>

              <div>
                <label
                  htmlFor="EndDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="EndDate"
                  name="end_date"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                />
                <p className="text-sm text-red-500"></p>
              </div>
            </div>

            {/* form input */}

            {/* technology */}

            <div className="my-5">
              <p className="text-sm my-2">Technology Used</p>
              <TagsInput
                value={selected}
                onChange={(tags) => {
                  setSelected(tags);
                }}
                placeHolder="E.g Javascript, python"
                classNames={{
                  tag: "bg-[#2f2f2f] rounded-full px-4 py-1 mr-1 mb-2 inline-flex items-center",
                  input:
                    "border-0 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full",
                }}
              />

              <p className="text-sm text-red-500">{}</p>
            </div>

            {/* technology used */}

            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Add Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
                placeholder=""
              ></textarea>
            </div>
            <p className="text-sm text-red-500"></p>
          </div>

          {/*profile media  */}
          <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5">
            <p className="text-xl font-semibold my-2">Projects Media</p>

            <div className="grid gap-6 mb-6 md:grid-cols-1">
              {/* project photo */}

              <div>
                <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Project Photo
                </h1>

                <input
                  type="file"
                  name="project_image"
                  required
                  style={{ opacity: 0 }}
                  ref={hiddenInputRef}
                />
                <div {...getRootProps({ className: dndstyle })}>
                  <input {...getInputProps()} />
                  <div className="flex justify-center">
                    <IoCloudUploadOutline className="text-4xl" />
                  </div>

                  <p>Click to Upload or Drag and drop</p>
                  {files}
                  {fileRejectionItems}
                </div>
              </div>
              {/* profile photo */}
            </div>
          </div>

          {/*project media  */}

          {/*project links  */}
          <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 [&>*]:my-4">
            <p className="text-xl font-semibold my-2">Project Links</p>

            <div>
              <label
                htmlFor="Github"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Github
              </label>
              <input
                type="url"
                id="Github"
                name="project_links_github"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              />
              <p className="text-sm text-red-500"></p>
            </div>

            <div>
              <label
                htmlFor="LiveDemo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Live Demo
              </label>
              <input
                type="url"
                id="LiveDemo"
                name="project_links_live_demo"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              />
              <p className="text-sm text-red-500"></p>
            </div>

            <div>
              <label
                htmlFor="PortfolioLink"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Portfolio Link
              </label>
              <input
                type="url"
                id="PortfolioLink"
                name="project_link_portfolio"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              />
              <p className="text-sm text-red-500">{}</p>
            </div>
          </div>

          {/*Additional Information  */}

          {/* sample projects */}

          <div className="w-full rounded px-5 py-5 bg-white drop-shadow-lg my-5 [&>*]:my-4">
            <p className="text-xl font-semibold my-2">My Projects</p>

            {projects.map((projd) => (
              <div key={projd.id} className="w-full bg-gray-100 flex rounded">
                <div className="w-full py-5 px-3">
                  <h1 className="text-xl font-bold">{projd.project_title}</h1>
                  <p className="text-sm font-semibold">{projd.description}</p>
                </div>

                <div className="flex w-full justify-end px-4 py-6">
                  <RiDeleteBin6Line
                    className="text-2xl cursor-pointer hover:text-gray-700"
                    onClick={async () => deleteProject(projd.id)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* sample projects */}

          {/* save anf update button */}

          <div className="w-full md:w-[70%] rounded px-5  bg-white drop-shadow-lg mt-10 [&>*]:my-4 m-auto md:flex justify-between ">
            <div className="">
              <p className="text-sm leading-[3rem]">
                Save your changes by clicking the Save & Update button.
              </p>
            </div>

            <div className="">
              <AppButton type="submit" isLoading={isLoading}>
                Save & Update
              </AppButton>
            </div>
          </div>

          <div className="md:w-[70%]  px-5 py-3 mt-1 m-auto text-right">
            <p className="text-sm">Dont forget to save your changes!</p>
          </div>

          {/* save and update button */}
        </form>
        {/* forn container */}
      </div>
    </section>
  );
}
