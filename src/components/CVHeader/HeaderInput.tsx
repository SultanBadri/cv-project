import React from "react";
import styled from "styled-components";
import { GrCircleInformation } from "react-icons/gr";

const DetailsDiv = styled.details`
  vertical-align: bottom;
  background: #f2f2f2;
  margin: 1rem;
  padding: 10px 20px;
  border-radius: 7px;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const HeaderInput = ({ info, handleGeneralInfo }: any) => {
  return (
    <>
      <DetailsDiv>
        <summary style={{ fontSize: 20 }}>
          General Information{" "}
          <GrCircleInformation style={{ verticalAlign: "middle" }} />
        </summary>
        <label>
          First name: <br />
          <input
            type="text"
            name="firstName"
            placeholder="First name"
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
            placeholder="Last name"
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
            placeholder="Current occupation"
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
      </DetailsDiv>
    </>
  );
};
