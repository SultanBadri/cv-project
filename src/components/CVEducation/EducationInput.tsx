import React from "react";
import styled from "styled-components";
import { MdSchool } from "react-icons/md";

const DetailsDiv = styled.details`
  background: #f2f2f2;
  margin: 1rem;
  padding: 10px 20px;
  border-radius: 7px;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const EducationInput = ({ education, handleEducation }: any) => {
  return (
    <>
      <DetailsDiv>
        <summary style={{ fontSize: 20 }}>
          Education <MdSchool style={{ verticalAlign: "middle" }} />{" "}
        </summary>
        <label>
          School Name: <br />
          <input
            type="text"
            name="schoolName"
            placeholder="School Name"
            value={education.schoolName}
            onChange={handleEducation}
          />
        </label>
        <br />
        <label>
          City: <br />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={education.city}
            onChange={handleEducation}
          />
        </label>
        <br />
        <label>
          State: <br />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={education.state}
            onChange={handleEducation}
          />
        </label>
        <br />
        <label>
          From: <br />
          <input
            type="text"
            name="from"
            placeholder="From"
            value={education.from}
            onChange={handleEducation}
          />
        </label>
        <br />
        <label>
          To: <br />
          <input
            type="text"
            name="to"
            placeholder="To"
            value={education.to}
            onChange={handleEducation}
          />
        </label>
        <br />
        <label>
          Degree: <br />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={education.degree}
            onChange={handleEducation}
          />
        </label>
        <br />
        <label>
          Awards and achievements: <br />
          <input
            type="text"
            name="achievements"
            placeholder="Awards and achievements"
            value={education.achievements}
            onChange={handleEducation}
          />
        </label>
      </DetailsDiv>
    </>
  );
};
