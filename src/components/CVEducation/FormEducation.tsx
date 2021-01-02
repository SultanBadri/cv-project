import React from "react";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
`;

export const FormEducation = ({ education, achievements }: any) => {
  return (
    <>
      <h2>Education</h2>
      <p>{education.degree !== "" ? education.degree : "Degree"}</p>
      <FlexDiv>
        <p>
          {education.schoolName !== "" ? education.schoolName : "School Name"}
          {" - "}
          {education.city !== "" ? education.city : "City"}
          {", "}
          {education.state !== "" ? education.state : "State"}
        </p>
        <p>
          {education.from !== "" ? education.from : "From"} -{" "}
          {education.to !== "" ? education.to : "To"}
        </p>
      </FlexDiv>
      <p>
        {education.achievements !== ""
          ? education.achievements
          : "Achievements"}
      </p>
      {/* <ul>
        {" "}
        {achievements.map((achievement: string, i: number) => {
          return <li key={i}>{achievement}</li>;
        })}
      </ul> */}
    </>
  );
};
