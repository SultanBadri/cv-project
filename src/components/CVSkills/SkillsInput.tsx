import React from "react";
import styled from "styled-components";
import { VscTools } from "react-icons/vsc";

const DetailsDiv = styled.details`
  vertical-align: bottom;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
  margin: 1rem;
  padding: 20px 20px;
  border-radius: 7px;
  letter-spacing: 1px;
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputBox = styled.input`
  width: 100%;
  padding: 0.5rem 0;
  margin: 1rem 0;
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  resize: none;
  background: rgba(243, 55, 55, 0);
  transition: 0.3s ease;
  &:focus + span {
    transform: translateY(-1.2rem);
  }
  &:focus {
    border-bottom: 2px solid #4ae3b5;
  }
  &:not(:placeholder-shown)&:not(:focus) + span {
    transform: translateY(-1.2rem);
  }
`;

const Span = styled.span`
  position: absolute;
  left: 0;
  padding: 0.5rem 0;
  margin: 1rem 0;
  pointer-events: none;
  transition: 0.3s;
  color: #555;
  transition: 0.3s ease;
`;

const AddSkillButton = styled.button`
  font-size: 15px;
  padding: 8px;
  color: white;
  background: #4ae3b5;
  border: none;
  outline: none;
  border-radius: 25px;
  width: 100%;
  cursor: pointer;
`;

export const SkillsInput = ({ skill, skills, setSkill, setSkills }: any) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setSkill(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (skill === "") return;
    addSkill(skill);
    setSkill("");
  };

  const addSkill = (skill: {}): void => {
    setSkills(skills.concat(skill));
  };

  return (
    <>
      <DetailsDiv>
        <summary style={{ fontSize: 20, cursor: "pointer" }}>
          Skills <VscTools style={{ verticalAlign: "middle" }} />{" "}
        </summary>
        <form onSubmit={onSubmit}>
          <InputContainer>
            <InputBox
              type="text"
              placeholder=" "
              value={skill}
              onChange={handleChange}
            />
            <Span>Skill</Span>
          </InputContainer>
          <AddSkillButton>+ Add skill</AddSkillButton>
        </form>
      </DetailsDiv>
    </>
  );
};
