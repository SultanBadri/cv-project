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
import { AiOutlinePrinter } from "react-icons/ai";

const InputsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 2rem 1rem;
  font-family: sans-serif;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
  @media print {
    display: none;
  }
`;

const CVDiv = styled.div`
  position: relative;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
  border-radius: 4px;
  font-family: sans-serif;
  margin: 2rem;
  padding: 1.5rem;
  @media print {
    box-shadow: none;
    margin: -2rem;
  }
`;

const PrintButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrintButton = styled.button`
  padding: 8px 26px;
  font-size: 1rem;
  border-radius: 4px;
  border: 2px solid #11698e;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #11698e;
  font-weight: bold;
  transition: 0.3s ease;
  &:hover {
    background: #11698e;
    color: white;
  }
  @media print {
    display: none;
  }
`;

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

  const [accomplishment, setAccomplishment] = useState("");
  const [accomplishments, setAccomplishments] = useState([]);

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
      <InputsDiv>
        <HeaderInput info={info} handleGeneralInfo={handleGeneralInfo} />
        <ExperienceInput
          accomplishment={accomplishment}
          accomplishments={accomplishments}
          setAccomplishment={setAccomplishment}
          setAccomplishments={setAccomplishments}
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
          achievement={achievement}
          achievements={achievements}
          setAchievement={setAchievement}
          setAchievements={setAchievements}
          education={education}
          handleEducation={handleEducation}
        />
      </InputsDiv>

      <CVDiv>
        <FormHeader info={info} />
        <hr />
        <FormExperience
          experience={experience}
          accomplishments={accomplishments}
        />
        <hr />
        <FormSkills skills={skills} />
        <hr />
        <FormEducation education={education} achievements={achievements} />
      </CVDiv>
      <PrintButtonContainer>
        <PrintButton onClick={() => window.print()}>
          <AiOutlinePrinter style={{ verticalAlign: "middle" }} /> Print CV
        </PrintButton>
      </PrintButtonContainer>
    </>
  );
};
