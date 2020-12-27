import React from "react";

export const FormExperience = ({ experience }: any) => {
  return (
    <>
      <h2>Experience</h2>
      <p>
        {experience.company !== "" ? experience.company : "Company"},{" "}
        {experience.city !== "" ? experience.city : "City"}
      </p>
      <p>
        {experience.from !== "" ? experience.from : "From"} -{" "}
        {experience.to !== "" ? experience.to : "To"}
      </p>
      <p>{experience.role !== "" ? experience.role : "Role"}</p>
      <p>
        {experience.accomplishments !== ""
          ? experience.accomplishments
          : "Accomplishments"}
      </p>
    </>
  );
};
