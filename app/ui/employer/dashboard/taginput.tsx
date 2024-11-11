"use client";

import React, { useEffect, useState } from "react";
import { TagsInput } from "react-tag-input-component";

export interface IRequiredSkills {
  setskills: (skills: string[]) => void;
}

const RequireSkills = (props: IRequiredSkills) => {
  const { setskills } = props;
  const [selected, setSelected] = useState(["javascript"]);

  console.log(selected, "selected");
  
 useEffect(() => {
  setskills(selected)
 }, [selected]);
 
  return (
    <>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="skills"
        placeHolder="e.g Javascript, Graphic Design"
        classNames={{
          tag: "bg-[#2f2f2f] rounded-full px-4 py-1 mr-1 mb-2 inline-flex items-center", // Tailwind styles for tags
          input: "border-0 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full", // Tailwind styles for input
        }}
      />
    </>
  );
};

export default RequireSkills;
