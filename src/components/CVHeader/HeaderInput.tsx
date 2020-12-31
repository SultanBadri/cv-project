import React from "react";
import * as InputStyles from "../InputStyles";
import { GrCircleInformation } from "react-icons/gr";

export const HeaderInput = ({ info, handleGeneralInfo }: any) => {
  return (
    <>
      <InputStyles.DetailsDiv>
        <summary style={{ fontSize: 20, cursor: "pointer" }}>
          General Information{" "}
          <GrCircleInformation style={{ verticalAlign: "middle" }} />
        </summary>
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="firstName"
            placeholder=" "
            className="input"
            value={info.firstName}
            onChange={handleGeneralInfo}
          />
          <InputStyles.Label>First name</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="lastName"
            placeholder=" "
            value={info.lastName}
            onChange={handleGeneralInfo}
          />
          <InputStyles.Label>Last name</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="occupation"
            placeholder=" "
            value={info.occupation}
            onChange={handleGeneralInfo}
          />
          <InputStyles.Label>Occupation</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="phone"
            placeholder=" "
            value={info.phone}
            onChange={handleGeneralInfo}
          />
          <InputStyles.Label>Phone</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="email"
            placeholder=" "
            value={info.email}
            onChange={handleGeneralInfo}
          />
          <InputStyles.Label>Email</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="linkedin"
            placeholder=" "
            value={info.linkedin}
            onChange={handleGeneralInfo}
          />
          <InputStyles.Label>LinkedIn</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="github"
            placeholder=" "
            value={info.github}
            onChange={handleGeneralInfo}
          />
          <InputStyles.Label>GitHub</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <br />
      </InputStyles.DetailsDiv>
    </>
  );
};
