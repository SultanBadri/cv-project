import React from "react";
import * as Styles from "../Styles";
import { CgWorkAlt } from "react-icons/cg";

export const ExperienceInput = ({ experience, handleExperience }: any) => {
  return (
    <>
      <Styles.DetailsDiv>
        <summary style={{ fontSize: 20, cursor: "pointer" }}>
          Experience <CgWorkAlt style={{ verticalAlign: "middle" }} />
        </summary>
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="company"
            placeholder=" "
            value={experience.company}
            onChange={handleExperience}
          />
          <Styles.Label>Company</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="city"
            placeholder="City"
            value={experience.city}
            onChange={handleExperience}
          />
          <Styles.Label>City</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="state"
            placeholder=" "
            value={experience.state}
            onChange={handleExperience}
          />
          <Styles.Label>State</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="from"
            placeholder=" "
            value={experience.from}
            onChange={handleExperience}
          />
          <Styles.Label>From</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="to"
            placeholder=" "
            value={experience.to}
            onChange={handleExperience}
          />
          <Styles.Label>To</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="role"
            placeholder=" "
            value={experience.role}
            onChange={handleExperience}
          />
          <Styles.Label>Role</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="accomplishments"
            placeholder=" "
            value={experience.accomplishments}
            onChange={handleExperience}
          />
          <Styles.Label>Accomplishments</Styles.Label>
        </Styles.InputDiv>
        <br />
        <br />
      </Styles.DetailsDiv>
    </>
  );
};
