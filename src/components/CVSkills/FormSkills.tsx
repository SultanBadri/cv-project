import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  display: inline-block;
  margin: 0.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  background: #11698e;
  color: white;
  @media print {
    border: 2px solid #11698e;
    color: #11698e;
  }
`;

export const FormSkills = ({ skills }: any) => {
  const renderSkills = () => {
    if (skills.length === 0) {
      return <p>Skill</p>;
    }
  };

  return (
    <>
      <h2>Skills</h2>
      {renderSkills()}
      <Ul>
        {skills.map((skill: string, i: number) => {
          return <Li key={i}>{skill}</Li>;
        })}
      </Ul>
    </>
  );
};
