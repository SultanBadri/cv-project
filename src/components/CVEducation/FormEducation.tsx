import React from "react";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
`;

const Ul = styled.ul`
  list-style: none;
`;

export const FormEducation = ({ education, achievements }: any) => {
  const renderAchievements = () => {
    if (achievements.length === 0) {
      return <p>Achievements</p>;
    }
  };

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
      {renderAchievements()}
      <ul>
        {achievements.map((achievement: string, i: number) => {
          return <li key={i}>{achievement}</li>;
        })}
      </ul>
    </>
  );
};
