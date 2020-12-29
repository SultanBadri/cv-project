import React from "react";

export const ExperienceInput = ({ experience, handleExperience }: any) => {
  return (
    <>
      <h2>Experience</h2>
      <label>
        Company: <br />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={experience.company}
          onChange={handleExperience}
        />
      </label>
      <br />
      <label>
        City: <br />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={experience.city}
          onChange={handleExperience}
        />
      </label>
      <br />
      <label>
        State: <br />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={experience.state}
          onChange={handleExperience}
        />
      </label>
      <br />
      <label>
        From: <br />
        <input
          type="text"
          name="from"
          placeholder="From"
          value={experience.from}
          onChange={handleExperience}
        />
      </label>
      <br />
      <label>
        To: <br />
        <input
          type="text"
          name="to"
          placeholder="To"
          value={experience.to}
          onChange={handleExperience}
        />
      </label>
      <br />
      <label>
        Role: <br />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={experience.role}
          onChange={handleExperience}
        />
      </label>
      <br />
      <label>
        Accomplishments: <br />
        <input
          type="text"
          name="accomplishments"
          placeholder="Accomplishments"
          value={experience.accomplishments}
          onChange={handleExperience}
        />
      </label>
    </>
  );
};
