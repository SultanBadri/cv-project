import React, { useState } from "react";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";

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
  const [inEditMode, setInEditMode] = useState(false);

  const renderSkills = () => {
    if (skills.length === 0) {
      return <p>Skill</p>;
    }
  };

  const editSkill = () => {
    console.log("hi");
  };

  return (
    <>
      <h2>Skills</h2>
      {renderSkills()}
      {/* {inEditMode ? <p>hi</p> : <p>no</p>} */}
      <Ul>
        {skills.map((skill: string, i: number) => {
          return (
            <Li key={i}>
              {skill}{" "}
              {/* <button onClick={editSkill}>
                <FaRegEdit /> Edit
              </button> */}
            </Li>
          );
        })}
      </Ul>
    </>
  );
};
