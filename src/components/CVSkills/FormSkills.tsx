import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  display: inline-block;
  margin: 0 1rem;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  background: #4ae3b5;
  color: white;
`;
export const FormSkills = ({ skills }: any) => {
  return (
    <>
      <h2>Skills</h2>
      <Ul>
        {skills.map((skill: string, i: number) => {
          return <Li key={i}>{skill}</Li>;
        })}
      </Ul>
    </>
  );
};
