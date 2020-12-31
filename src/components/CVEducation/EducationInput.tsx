import React from "react";
import * as InputStyles from "../InputStyles";
import { MdSchool } from "react-icons/md";

export const EducationInput = ({ education, handleEducation }: any) => {
  return (
    <>
      <InputStyles.DetailsDiv>
        <summary style={{ fontSize: 20, cursor: "pointer" }}>
          Education <MdSchool style={{ verticalAlign: "middle" }} />{" "}
        </summary>
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="schoolName"
            placeholder=" "
            value={education.schoolName}
            onChange={handleEducation}
          />
          <InputStyles.Label>School name</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="city"
            placeholder=" "
            value={education.city}
            onChange={handleEducation}
          />
          <InputStyles.Label>City</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="state"
            placeholder=" "
            value={education.state}
            onChange={handleEducation}
          />
          <InputStyles.Label>State</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="from"
            placeholder=" "
            value={education.from}
            onChange={handleEducation}
          />
          <InputStyles.Label>From</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="to"
            placeholder=" "
            value={education.to}
            onChange={handleEducation}
          />
          <InputStyles.Label>To</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="degree"
            placeholder=" "
            value={education.degree}
            onChange={handleEducation}
          />
          <InputStyles.Label>From</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="achievements"
            placeholder=" "
            value={education.achievements}
            onChange={handleEducation}
          />
          <InputStyles.Label>Achievements</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <br />
      </InputStyles.DetailsDiv>
    </>
  );
};
