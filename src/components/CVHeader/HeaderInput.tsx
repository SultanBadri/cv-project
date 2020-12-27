import React from "react";

export const HeaderInput = ({ info, handleGeneralInfo }: any) => {
  return (
    <>
      <h2>General Information</h2>
      <label>
        First name: <br />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={info.firstName}
          onChange={handleGeneralInfo}
        />
      </label>
      <br />
      <label>
        Last name: <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={info.lastName}
          onChange={handleGeneralInfo}
        />
      </label>
      <br />
      <label>
        Current occupation: <br />
        <input
          type="text"
          name="occupation"
          placeholder="Current Occupation"
          value={info.occupation}
          onChange={handleGeneralInfo}
        />
      </label>
      <br />
      <label>
        Phone: <br />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={info.phone}
          onChange={handleGeneralInfo}
        />
      </label>
      <br />
      <label>
        Email: <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={info.email}
          onChange={handleGeneralInfo}
        />
      </label>
      <br />
      <label>
        LinkedIn: <br />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn"
          value={info.linkedin}
          onChange={handleGeneralInfo}
        />
      </label>
      <br />
      <label>
        GitHub: <br />
        <input
          type="text"
          name="github"
          placeholder="GitHub"
          value={info.github}
          onChange={handleGeneralInfo}
        />
      </label>
    </>
  );
};
