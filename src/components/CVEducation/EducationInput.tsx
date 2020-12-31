import React from "react";
import styled from "styled-components";
import { MdSchool } from "react-icons/md";

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

export const EducationInput = ({ education, handleEducation }: any) => {
  return (
    <>
      <DetailsDiv>
        <summary style={{ fontSize: 20, cursor: "pointer" }}>
          Education <MdSchool style={{ verticalAlign: "middle" }} />{" "}
        </summary>
        <InputDiv>
          <Input
            type="text"
            name="schoolName"
            placeholder=" "
            value={education.schoolName}
            onChange={handleEducation}
          />
          <Label>School name</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="city"
            placeholder=" "
            value={education.city}
            onChange={handleEducation}
          />
          <Label>City</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="state"
            placeholder=" "
            value={education.state}
            onChange={handleEducation}
          />
          <Label>State</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="from"
            placeholder=" "
            value={education.from}
            onChange={handleEducation}
          />
          <Label>From</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="to"
            placeholder=" "
            value={education.to}
            onChange={handleEducation}
          />
          <Label>To</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="degree"
            placeholder=" "
            value={education.degree}
            onChange={handleEducation}
          />
          <Label>From</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="achievements"
            placeholder=" "
            value={education.achievements}
            onChange={handleEducation}
          />
          <Label>Awards and achievements</Label>
        </InputDiv>
        <br />
        <br />
      </DetailsDiv>
    </>
  );
};
