import React from "react";
import * as Styles from "../Styles";
import styled from "styled-components";
import { CgWorkAlt } from "react-icons/cg";
import { BiAddToQueue } from "react-icons/bi";

const Button = styled.button`
  font-size: 15px;
  margin: 2.7rem auto 0 auto;
  padding: 8px;
  color: white;
  background: #11698e;
  border: none;
  outline: none;
  width: 100%;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background: #0b5675;
  }
`;

export const ExperienceInput = ({
  experience,
  handleExperience,
  accomplishment,
  accomplishments,
  setAccomplishment,
  setAccomplishments,
}: any) => {
  const handleAccomplishments = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    const { value } = e.currentTarget;
    setAccomplishment(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (accomplishment === "") return;
    addAccomplishment(accomplishment);
    setAccomplishment("");
  };

  const addAccomplishment = (accomplishment: {}): void => {
    setAccomplishments(accomplishments.concat(accomplishment));
  };
  return (
    <>
      <Styles.DetailsDiv>
        <summary style={{ color: "#b167bf", fontSize: 20, cursor: "pointer" }}>
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
            name="city"
            placeholder=" "
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
        <form onSubmit={onSubmit}>
          <Styles.InputDiv>
            <Styles.Input
              type="text"
              placeholder=" "
              value={accomplishment}
              onChange={handleAccomplishments}
            />
            <Styles.Label>Accomplishment</Styles.Label>
          </Styles.InputDiv>
          <Button>
            <BiAddToQueue /> Add accomplishment
          </Button>
        </form>
      </Styles.DetailsDiv>
    </>
  );
};
