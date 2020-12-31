import React from "react";
import * as InputStyles from "../InputStyles";
import { CgWorkAlt } from "react-icons/cg";

export const ExperienceInput = ({ experience, handleExperience }: any) => {
  return (
    <>
      <InputStyles.DetailsDiv>
        <summary style={{ fontSize: 20, cursor: "pointer" }}>
          Experience <CgWorkAlt style={{ verticalAlign: "middle" }} />
        </summary>
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="company"
            placeholder=" "
            value={experience.company}
            onChange={handleExperience}
          />
          <InputStyles.Label>Company</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="city"
            placeholder="City"
            value={experience.city}
            onChange={handleExperience}
          />
          <InputStyles.Label>City</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="state"
            placeholder=" "
            value={experience.state}
            onChange={handleExperience}
          />
          <InputStyles.Label>State</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="from"
            placeholder=" "
            value={experience.from}
            onChange={handleExperience}
          />
          <InputStyles.Label>From</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="to"
            placeholder=" "
            value={experience.to}
            onChange={handleExperience}
          />
          <InputStyles.Label>To</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="role"
            placeholder=" "
            value={experience.role}
            onChange={handleExperience}
          />
          <InputStyles.Label>Role</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <InputStyles.InputDiv>
          <InputStyles.Input
            type="text"
            name="accomplishments"
            placeholder=" "
            value={experience.accomplishments}
            onChange={handleExperience}
          />
          <InputStyles.Label>Accomplishments</InputStyles.Label>
        </InputStyles.InputDiv>
        <br />
        <br />
      </InputStyles.DetailsDiv>
    </>
  );
};
