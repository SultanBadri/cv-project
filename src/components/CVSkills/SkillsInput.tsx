import React from "react";

export const SkillsInput = ({ skills, handleSkills }: any) => {
  return (
    <>
      <h2>Skills</h2>
      <label>
        Add skill: <br />
        <input
          type="text"
          name=""
          placeholder="skills"
          value={skills}
          onChange={handleSkills}
        />
      </label>
    </>
  );
};
