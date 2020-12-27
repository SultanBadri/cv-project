import React, { useState } from "react";
import styled from "styled-components";
import { HeaderInput } from "./CVHeader/HeaderInput";
import { FormHeader } from "./CVHeader/FormHeader";
import { ExperienceInput } from "./CVExperience/ExperienceInput";
import { FormExperience } from "./CVExperience/FormExperience";
import { SkillsInput } from "./CVSkills/SkillsInput";
import { FormSkills } from "./CVSkills/FormSkills";
import { EducationInput } from "./CVEducation/EducationInput";
import { FormEducation } from "./CVEducation/FormEducation";

export const FormContainer: React.FC = () => {
  const FormatCV = styled.div`
    position: relative;
    border: 1px solid black;
    font-family: sans-serif;
    margin: 2rem;
    padding: 1rem;
  `;

  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    occupation: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
  });
  const handleGeneralInfo = (e: any) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [experience, setExperience] = useState({
    company: "",
    city: "",
    from: "",
    to: "",
    role: "",
    accomplishments: "",
  });
  const handleExperience = (e: any) => {
    const { name, value } = e.target;
    setExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [skills, setSkills] = useState({
    skills: [],
  });
  const handleSkills = (e: any) => {
    const { name, value } = e.target;
    setSkills((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [education, setEducation] = useState({
    schoolName: "",
    city: "",
    from: "",
    to: "",
    degree: "",
  });
  const handleEducation = (e: any) => {
    const { name, value } = e.target;
    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <HeaderInput info={info} handleGeneralInfo={handleGeneralInfo} />
      <ExperienceInput
        experience={experience}
        handleExperience={handleExperience}
      />
      <SkillsInput skills={skills} handleSkills={handleSkills} />
      <EducationInput education={education} handleEducation={handleEducation} />

      <FormatCV>
        <FormHeader info={info} />
        <hr />
        <FormExperience experience={experience} />
        <hr />
        <FormSkills skills={skills} />
        <hr />
        <FormEducation education={education} />
      </FormatCV>
    </>
  );
};
