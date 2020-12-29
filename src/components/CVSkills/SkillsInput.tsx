import React from "react";

export const SkillsInput = ({ skill, skills, setSkill, setSkills }: any) => {
  const handleChange = (e: any) => {
    const { value } = e.target;
    setSkill(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (skill === "") return;
    addSkill(skill);
    setSkill("");
  };

  const addSkill = (skill: any) => {
    setSkills(skills.concat(skill));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h2>Skills</h2>
        <label>
          Add skill: <br />
          <input
            type="text"
            placeholder="Skills"
            value={skill}
            onChange={handleChange}
          />
        </label>
        <button>+ Add skill</button>
      </form>
    </>
  );
};
