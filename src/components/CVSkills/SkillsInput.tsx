import React from "react";
import * as Styles from "../Styles";
import { VscTools } from "react-icons/vsc";

export const SkillsInput = ({ skill, skills, setSkill, setSkills }: any) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setSkill(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (skill === "") return;
    addSkill(skill);
    setSkill("");
  };

  const addSkill = (skill: {}): void => {
    setSkills(skills.concat(skill));
  };

  return (
    <>
      <Styles.DetailsDiv>
        <summary style={{ fontSize: 20, cursor: "pointer" }}>
          Skills <VscTools style={{ verticalAlign: "middle" }} />{" "}
        </summary>
        <form onSubmit={onSubmit}>
          <Styles.InputContainer>
            <Styles.InputBox
              type="text"
              placeholder=" "
              value={skill}
              onChange={handleChange}
            />
            <Styles.Span>Skill</Styles.Span>
          </Styles.InputContainer>
          <Styles.AddSkillButton>+ Add skill</Styles.AddSkillButton>
        </form>
      </Styles.DetailsDiv>
    </>
  );
};
