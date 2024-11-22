"use client";
import React, { useRef, useState, FormEvent } from "react";
import { useDropzone } from "react-dropzone";
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import axios from "axios";
import { http_endpoints } from "@/app/libs/definations";
import AppButton from "@/app/ui/AppButton";

export function ApplicantDndResume({
  className,
  name,
  notifytest,
}: {
  className: string;
  name: string;
  notifytest: string;
}) {
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
        "application/pdf": [],
        "application/msword": [],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          [],
      },
    });
  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <div key={file.path}>
      {errors.map((e) => (
        <p className="text-sm text-red-500" key={e.code}>
          File type must be PDF OR DOCX document
        </p>
      ))}
    </div>
  ));

  const files = acceptedFiles.map((file) => (
    <p key={file.path} className="">
      {file.path} - {file.size} byte
    </p>
  ));

  // process resume upload

  // handle toast bar
  const notify = () => {
    toast.success(notifytest);
  };
  // handle form submition
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleresumeUpload = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const file = formData.get("resume");
    console.log(file);
    try {
      setIsLoading(true);

      const response_token = await fetch(`/api/getToken`, {
        method: "GET",
      });
      if (response_token.ok) {
        const token = await response_token.json();
        console.log("the token", token);

        const response = await axios.post(
          `${http_endpoints}careerportal/applicant-document-resume/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 201) {
          setIsLoading(false);
          notify();
          if (event.target) {
            (event.target as HTMLFormElement).reset();
          }
          console.log(response.data);

          console.log("Form submitted successfully");
        }
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleresumeUpload}>
        <input
          type="file"
          name={name}
          required
          style={{ opacity: 0 }}
          ref={hiddenInputRef}
          className="h-0 w-0"
        />
        <div {...getRootProps({ className: className })}>
          <AppButton className="!w-[250px] mb-4 mx-auto" isLoading={isLoading}>
            Upload Resume/CV
          </AppButton>
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center">
            <p className="text-[16px] text-[#737373]">
              or drag and drop your file here
            </p>
            <p className="text-sm text-[#A3A3A3]">
              Supported formats: .docx, .pdf (Max size: 5MB)
            </p>
          </div>
          {files}
          {fileRejectionItems}
        </div>
      </form>
    </>
  );
}
