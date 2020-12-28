import React from "react";

export const FormEducation = ({ education }: any) => {
  return (
    <>
      <h2>Education</h2>
      <p>
        {education.schoolName !== "" ? education.schoolName : "School Name"},{" "}
        {education.city !== "" ? education.city : "City"}
      </p>
      <p>
        {education.from !== "" ? education.from : "From"} -{" "}
        {education.to !== "" ? education.to : "To"}
      </p>
      <p>{education.degree !== "" ? education.degree : "Degree"}</p>
    </>
  );
};
