import React, { useState } from "react";
import * as Styles from "./Styles";
import { HeaderInput } from "./CVHeader/HeaderInput";
import { FormHeader } from "./CVHeader/FormHeader";
import { ExperienceInput } from "./CVExperience/ExperienceInput";
import { FormExperience } from "./CVExperience/FormExperience";
import { SkillsInput } from "./CVSkills/SkillsInput";
import { FormSkills } from "./CVSkills/FormSkills";
import { EducationInput } from "./CVEducation/EducationInput";
import { FormEducation } from "./CVEducation/FormEducation";

export const FormContainer: React.FC = () => {
  // general information
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    occupation: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
  });
  const handleGeneralInfo = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // experience
  const [experience, setExperience] = useState({
    company: "",
    city: "",
    state: "",
    from: "",
    to: "",
    role: "",
    accomplishments: "",
  });
  const handleExperience = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // skills
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  // education
  const [education, setEducation] = useState({
    schoolName: "",
    city: "",
    state: "",
    from: "",
    to: "",
    degree: "",
    achievements: "",
  });
  const handleEducation = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [achievement, setAchievement] = useState("");
  const [achievements, setAchievements] = useState([]);

  return (
    <>
      <Styles.InputsDiv>
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
      </Styles.InputsDiv>

      <Styles.CVDiv>
        <FormHeader info={info} />
        <hr />
        <FormExperience experience={experience} />
        <hr />
        <FormSkills skills={skills} />
        <hr />
        <FormEducation education={education} />
      </Styles.CVDiv>
    </>
  );
};
