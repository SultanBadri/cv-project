import React from "react";

export const EducationInput = ({ education, handleEducation }: any) => {
  return (
    <>
      <h2>Education</h2>
      <label>
        School Name: <br />
        <input
          type="text"
          name="schoolName"
          placeholder="School Name"
          value={education.schoolName}
          onChange={handleEducation}
        />
      </label>
      <br />
      <label>
        City: <br />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={education.city}
          onChange={handleEducation}
        />
      </label>
      <br />
      <label>
        State: <br />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={education.state}
          onChange={handleEducation}
        />
      </label>
      <br />
      <label>
        From: <br />
        <input
          type="text"
          name="from"
          placeholder="From"
          value={education.from}
          onChange={handleEducation}
        />
      </label>
      <br />
      <label>
        To: <br />
        <input
          type="text"
          name="to"
          placeholder="To"
          value={education.to}
          onChange={handleEducation}
        />
      </label>
      <br />
      <label>
        Degree: <br />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={education.degree}
          onChange={handleEducation}
        />
      </label>
      <br />
      <label>
        Awards and achievements: <br />
        <input
          type="text"
          name="achievements"
          placeholder="Awards and achievements"
          value={education.achievements}
          onChange={handleEducation}
        />
      </label>
    </>
  );
};
