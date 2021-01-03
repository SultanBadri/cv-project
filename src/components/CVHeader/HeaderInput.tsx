import React from "react";
import * as Styles from "../Styles";
import { RiInformationLine } from "react-icons/ri";

export const HeaderInput = ({ info, handleGeneralInfo }: any) => {
  return (
    <>
      <Styles.DetailsDiv>
        <summary style={{ color: "#b167bf", fontSize: 20, cursor: "pointer" }}>
          General <RiInformationLine style={{ verticalAlign: "middle" }} />
        </summary>
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="firstName"
            placeholder=" "
            className="input"
            value={info.firstName}
            onChange={handleGeneralInfo}
          />
          <Styles.Label>First name</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="lastName"
            placeholder=" "
            value={info.lastName}
            onChange={handleGeneralInfo}
          />
          <Styles.Label>Last name</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="occupation"
            placeholder=" "
            value={info.occupation}
            onChange={handleGeneralInfo}
          />
          <Styles.Label>Occupation</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="phone"
            placeholder=" "
            value={info.phone}
            onChange={handleGeneralInfo}
          />
          <Styles.Label>Phone</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="email"
            placeholder=" "
            value={info.email}
            onChange={handleGeneralInfo}
          />
          <Styles.Label>Email</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="linkedin"
            placeholder=" "
            value={info.linkedin}
            onChange={handleGeneralInfo}
          />
          <Styles.Label>LinkedIn</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="github"
            placeholder=" "
            value={info.github}
            onChange={handleGeneralInfo}
          />
          <Styles.Label>GitHub</Styles.Label>
        </Styles.InputDiv>
        <br />
        <br />
      </Styles.DetailsDiv>
    </>
  );
};
