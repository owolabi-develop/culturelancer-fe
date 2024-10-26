"use client";
import { Button, Modal, } from "flowbite-react";
import { useState } from "react";
import { educationSchame } from "@/app/libs/shemas";
import { exprienceSchame } from "@/app/libs/shemas";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = z.infer<typeof educationSchame>

type Exp = z.infer<typeof exprienceSchame>

export function EducationModal() {
  const { register, handleSubmit,formState: { errors } } = useForm<Inputs>({resolver:zodResolver(educationSchame)});
  const onSubmit: SubmitHandler<Inputs> = data => {console.log(data)};

  const [openModal, setOpenModal] = useState(false);
  
  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <Button color="" onClick={() => setOpenModal(true)} className="bg-[#727272] rounded text-white mb-5 md:mb-0">+ Add Education</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 ">
            <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Education</h3>
            {/* form input */}
           <div className="[&>*]:my-5">
            <div>
            <label htmlFor="institution_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Institution Name</label>
            <input color="" type="text" {...register('institution_name')} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
            <p className="text-xl text-red-500">{errors.institution_name?.message}</p>

            </div>

            <div>
            <label htmlFor="degree" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Degree</label>
            <input color="" type="text" {...register('degree')} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
            <p className="text-xl text-red-500">{errors.degree?.message}</p>

            </div>



            <div>
            <label htmlFor="field_of_study" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Field Of Study</label>
            <input color="" type="text" {...register('field_of_study')} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
            <p className="text-xl text-red-500">{errors.field_of_study?.message}</p>

            </div>


            <div>
            <label htmlFor="start_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">StartDate</label>
            <input color="" type="date" {...register('start_date')} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
            <p className="text-xl text-red-500">{errors.start_date?.message}</p>

            </div>


            <div>
            <label htmlFor="end_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">EndDate</label>
            <input color="" type="date" {...register('end_date')} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
            <p className="text-xl text-red-500">{errors.end_date?.message}</p>

            </div>


            <div>
            <label htmlFor="gpa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gpa</label>
            <input color="" type="text" {...register('gpa')} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
            <p className="text-xl text-red-500">{errors.gpa?.message}</p>

            </div>



            
            <div className="">
                <button className="bg-[#727272] py-2 px-3 md:px-5 md:py-3 rounded text-white mb-5 md:mb-0">Save</button>
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



export function ExperienceModal() {
  const { register, handleSubmit,formState: { errors } } = useForm<Exp>({resolver:zodResolver(exprienceSchame)});
  const onSubmit: SubmitHandler<Exp> = data => {console.log(data)};
    const [openModal, setOpenModal] = useState(false);

    function onCloseModal() {
      setOpenModal(false);
    
    }
  
    return (
      <>
        <Button color=""  onClick={() => setOpenModal(true)} className="bg-[#727272]  rounded text-white mb-5 md:mb-0 ">+ Add Experience</Button>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Experience</h3>
            {/* form input */}
           <div className="[&>*]:my-5">
            <div>
            <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input color="" type="text" {...register('title')} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
            <p className="text-xl text-red-500">{errors.title?.message}</p>

            </div>

            <div>
            <label htmlFor="degree" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
            <input color="" type="text" {...register('company_name')} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
            <p className="text-xl text-red-500">{errors.company_name?.message}</p>

            </div>



            <div>
                <label htmlFor="location"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                <select id="location" {...register('location')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a Location</option>
                <option value="Remote">Remote</option>
                <option value="Onsite">Onsite</option>
                </select>
                <p className="text-xl text-red-500">{errors.location?.message}</p>

            </div>

<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
<input id="status" type="checkbox" value="" {...register('status')} className="w-4 h-4 bg-gray-100 border-gray-300 rounded"/>
<label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Present</label>
<p className="text-xl text-red-500">{errors.status?.message}</p>

</div>


            <div>
            <label htmlFor="start_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">StartDate</label>
            <input color="" type="date" {...register('start_date')} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
            <p className="text-xl text-red-500">{errors.start_date?.message}</p>

            </div>


            <div>
            <label htmlFor="end_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">EndDate</label>
            <input color="" type="date" {...register('end_date')} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
            <p className="text-xl text-red-500">{errors.end_date?.message}</p>

            </div>

            <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="description" {...register("description")} rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 drop-shadow-lg " placeholder="Enter your questions and answer here ..."></textarea>
                <p className="text-xl text-red-500">{errors.description?.message}</p>
            </div>



            
            <div className="">
                <button className="bg-[#727272] py-2 px-3 md:px-5 md:py-3 rounded text-white mb-5 md:mb-0">Save</button>
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

  export function AijobDescription() {
    const [openModal, setOpenModal] = useState(false);
  
  
    function onCloseModal() {
      setOpenModal(false);
    
    }
  
    return (
      <>
        <span color=""  onClick={() => setOpenModal(true)} className="py-1 px-2 rounded bg-white drop-shadow-lg h-8 mr-2 cursor-pointer">Use AI</span>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="w-full">

            <label htmlFor="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea id="Description" name="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Enter a detail description of the role, including required skills and responsibilities"></textarea>

            <button className="py-3 px-4 rounded border bg-white drop-shadow-lg my-3">Suggest</button>

           

            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  