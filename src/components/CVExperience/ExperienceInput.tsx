import React from "react";
import styled from "styled-components";
import { CgWorkAlt } from "react-icons/cg";

const DetailsDiv = styled.details`
  vertical-align: bottom;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
  margin: 1rem;
  padding: 20px 20px;
  border-radius: 7px;
  letter-spacing: 1px;
`;

const InputDiv = styled.div`
  position: relative;
  margin: 1.5rem 0;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 85%;
  height: 100%;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
  padding: 1rem;
  transition: 0.3s ease;
  &:focus {
    border: 2px solid #4ae3b5;
  }
  &:focus + label {
    top: -0.3rem;
    left: 0.5rem;
    font-weight: 500;
    font-size: 0.7rem;
  }
  &:not(:placeholder-shown)&:not(:focus) + label {
    top: -0.3rem;
    left: 0.5rem;
    font-weight: 500;
    font-size: 0.7rem;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: 0.5rem;
  background: white;
  color: #80868b;
  padding: 0 0.25rem;
  transition: 0.3s ease;
  pointer-events: none;
  font-size: 0.9rem;
`;

export const ExperienceInput = ({ experience, handleExperience }: any) => {
  return (
    <>
      <DetailsDiv>
        <summary style={{ fontSize: 20, cursor: "pointer" }}>
          Experience <CgWorkAlt style={{ verticalAlign: "middle" }} />
        </summary>
        <InputDiv>
          <Input
            type="text"
            name="company"
            placeholder=" "
            value={experience.company}
            onChange={handleExperience}
          />
          <Label>Company</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="city"
            placeholder="City"
            value={experience.city}
            onChange={handleExperience}
          />
          <Label>City</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="state"
            placeholder=" "
            value={experience.state}
            onChange={handleExperience}
          />
          <Label>State</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="from"
            placeholder=" "
            value={experience.from}
            onChange={handleExperience}
          />
          <Label>From</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="to"
            placeholder=" "
            value={experience.to}
            onChange={handleExperience}
          />
          <Label>To</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="role"
            placeholder=" "
            value={experience.role}
            onChange={handleExperience}
          />
          <Label>Role</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="accomplishments"
            placeholder=" "
            value={experience.accomplishments}
            onChange={handleExperience}
          />
          <Label>Accomplishments</Label>
        </InputDiv>
        <br />
        <br />
      </DetailsDiv>
    </>
  );
};
