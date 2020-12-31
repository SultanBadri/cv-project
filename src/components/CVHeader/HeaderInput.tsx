import React from "react";
import styled from "styled-components";
import { GrCircleInformation } from "react-icons/gr";

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

export const HeaderInput = ({ info, handleGeneralInfo }: any) => {
  return (
    <>
      <DetailsDiv>
        <summary style={{ fontSize: 20, cursor: "pointer" }}>
          General Information{" "}
          <GrCircleInformation style={{ verticalAlign: "middle" }} />
        </summary>
        <InputDiv>
          <Input
            type="text"
            name="firstName"
            placeholder=" "
            className="input"
            value={info.firstName}
            onChange={handleGeneralInfo}
          />
          <Label>First name</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="lastName"
            placeholder=" "
            value={info.lastName}
            onChange={handleGeneralInfo}
          />
          <Label>Last name</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="occupation"
            placeholder=" "
            value={info.occupation}
            onChange={handleGeneralInfo}
          />
          <Label>Current occupation</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="phone"
            placeholder=" "
            value={info.phone}
            onChange={handleGeneralInfo}
          />
          <Label>Phone</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="email"
            placeholder=" "
            value={info.email}
            onChange={handleGeneralInfo}
          />
          <Label>Email</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="linkedin"
            placeholder=" "
            value={info.linkedin}
            onChange={handleGeneralInfo}
          />
          <Label>LinkedIn</Label>
        </InputDiv>
        <br />
        <InputDiv>
          <Input
            type="text"
            name="github"
            placeholder=" "
            value={info.github}
            onChange={handleGeneralInfo}
          />
          <Label>GitHub</Label>
        </InputDiv>
        <br />
        <br />
      </DetailsDiv>
    </>
  );
};
