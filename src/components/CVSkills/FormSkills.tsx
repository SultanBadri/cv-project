import React from "react";
import * as Styles from "../Styles";

export const FormSkills = ({ skills }: any) => {
  return (
    <>
      <h2>Skills</h2>
      <Styles.Ul>
        {skills.map((skill: string, i: number) => {
          return <Styles.Li key={i}>{skill}</Styles.Li>;
        })}
      </Styles.Ul>
    </>
  );
};
