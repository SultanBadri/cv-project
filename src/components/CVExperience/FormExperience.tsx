import React from "react";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
`;

export const FormExperience = ({ experience }: any) => {
  return (
    <>
      <h2>Experience</h2>
      <p>{experience.role !== "" ? experience.role : "Role"}</p>
      <FlexDiv>
        <p>
          {experience.company !== "" ? experience.company : "Company"}
          {" - "}
          {experience.city !== "" ? experience.city : "City"}
          {", "}
          {experience.state !== "" ? experience.state : "State"}
        </p>
        <p>
          {experience.from !== "" ? experience.from : "From"} -{" "}
          {experience.to !== "" ? experience.to : "To"}
        </p>
      </FlexDiv>
      <p>
        {experience.accomplishments !== ""
          ? experience.accomplishments
          : "Accomplishments"}
      </p>
    </>
  );
};
