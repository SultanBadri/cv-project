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

const InputDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 2rem;
  font-family: sans-serif;
`;

const CVDiv = styled.div`
  position: relative;
  border: 1px solid black;
  font-family: sans-serif;
  margin: 2rem;
  padding: 1.5rem;
`;

export const FormContainer: React.FC = () => {
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
    state: "",
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

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const [education, setEducation] = useState({
    schoolName: "",
    city: "",
    state: "",
    from: "",
    to: "",
    degree: "",
    achievements: "",
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
      <InputDiv>
        <HeaderInput info={info} handleGeneralInfo={handleGeneralInfo} />
        <ExperienceInput
          experience={experience}
          handleExperience={handleExperience}
        />
        <SkillsInput
          skill={skill}
          skills={skills}
          setSkills={setSkills}
          setSkill={setSkill}
        />
        <EducationInput
          education={education}
          handleEducation={handleEducation}
        />
      </InputDiv>

      <CVDiv>
        <FormHeader info={info} />
        <hr />
        <FormExperience experience={experience} />
        <hr />
        <FormSkills skills={skills} />
        <hr />
        <FormEducation education={education} />
      </CVDiv>
    </>
  );
};
