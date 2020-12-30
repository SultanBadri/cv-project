import React from "react";
import styled from "styled-components";
import { VscTools } from "react-icons/vsc";

const DetailsDiv = styled.details`
  background: #f2f2f2;
  margin: 1rem;
  padding: 10px 20px;
  border-radius: 7px;
  letter-spacing: 1px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputBox = styled.input`
  width: 98%;
  padding: 0.5rem 0;
  margin: 1rem 0;
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  resize: none;
  background: rgba(243, 55, 55, 0);
  transition: 0.3s ease;
  &:focus ~ span {
    transform: translateY(-1.2rem);
  }
  &:focus {
    border-bottom: 2px solid #4ae3b5;
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

export const SkillsInput = ({ skill, skills, setSkill, setSkills }: any) => {
  const handleChange = (e: any) => {
    const { value } = e.target;
    setSkill(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (skill === "") return;
    addSkill(skill);
    setSkill("");
  };

  const addSkill = (skill: any) => {
    setSkills(skills.concat(skill));
  };

  return (
    <>
      <DetailsDiv>
        <summary style={{ fontSize: 20 }}>
          Skills <VscTools style={{ verticalAlign: "middle" }} />{" "}
        </summary>
        <form onSubmit={onSubmit}>
          <InputContainer>
            <InputBox type="text" value={skill} onChange={handleChange} />
            <Span>Skill</Span>
          </InputContainer>
          <button>+ Add skill</button>
        </form>
      </DetailsDiv>
    </>
  );
};
