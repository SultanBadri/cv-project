import React from "react";
import * as Styles from "../Styles";
import { MdSchool } from "react-icons/md";

export const EducationInput = ({ education, handleEducation }: any) => {
  return (
    <>
      <Styles.DetailsDiv>
        <summary style={{ fontSize: 20, cursor: "pointer" }}>
          Education <MdSchool style={{ verticalAlign: "middle" }} />{" "}
        </summary>
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="schoolName"
            placeholder=" "
            value={education.schoolName}
            onChange={handleEducation}
          />
          <Styles.Label>School name</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="city"
            placeholder=" "
            value={education.city}
            onChange={handleEducation}
          />
          <Styles.Label>City</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="state"
            placeholder=" "
            value={education.state}
            onChange={handleEducation}
          />
          <Styles.Label>State</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="from"
            placeholder=" "
            value={education.from}
            onChange={handleEducation}
          />
          <Styles.Label>From</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="to"
            placeholder=" "
            value={education.to}
            onChange={handleEducation}
          />
          <Styles.Label>To</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="degree"
            placeholder=" "
            value={education.degree}
            onChange={handleEducation}
          />
          <Styles.Label>From</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="achievements"
            placeholder=" "
            value={education.achievements}
            onChange={handleEducation}
          />
          <Styles.Label>Achievements</Styles.Label>
        </Styles.InputDiv>
        <br />
        <br />
      </Styles.DetailsDiv>
    </>
  );
};
