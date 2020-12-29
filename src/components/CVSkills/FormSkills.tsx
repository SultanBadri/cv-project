import React from "react";

export const FormSkills = ({ skills }: any) => {
  return (
    <>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill: string, i: number) => {
          return <li key={i}>{skill}</li>;
        })}
      </ul>
    </>
  );
};
