import React from "react";
import styled from "styled-components";
import * as Styles from "../Styles";
import { MdSchool } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";

const Button = styled.button`
  font-size: 15px;
  margin: 2.7rem 0 0 0;
  padding: 8px;
  color: white;
  background: #11698e;
  border: none;
  outline: none;
  border-radius: 25px;
  width: 100%;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background: #0b5675;
  }
`;

export const EducationInput = ({
  education,
  handleEducation,
  achievement,
  achievements,
  setAchievement,
  setAchievements,
}: any) => {
  const handleAchievements = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setAchievement(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (achievement === "") return;
    addSkill(achievement);
    setAchievement("");
  };

  const addSkill = (achievement: {}): void => {
    setAchievements(achievements.concat(achievement));
  };

  return (
    <>
      <Styles.DetailsDiv>
        <summary style={{ color: "#b167bf", fontSize: 20, cursor: "pointer" }}>
          Education <MdSchool style={{ verticalAlign: "middle" }} />{" "}
        </summary>
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="schoolName"
            placeholder=" "
            value={education.schoolName}
            onChange={handleEducation}
          />
          <Styles.Label>School name</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="degree"
            placeholder=" "
            value={education.degree}
            onChange={handleEducation}
          />
          <Styles.Label>Degree</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="city"
            placeholder=" "
            value={education.city}
            onChange={handleEducation}
          />
          <Styles.Label>City</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="state"
            placeholder=" "
            value={education.state}
            onChange={handleEducation}
          />
          <Styles.Label>State</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="from"
            placeholder=" "
            value={education.from}
            onChange={handleEducation}
          />
          <Styles.Label>From</Styles.Label>
        </Styles.InputDiv>
        <br />
        <Styles.InputDiv>
          <Styles.Input
            type="text"
            name="to"
            placeholder=" "
            value={education.to}
            onChange={handleEducation}
          />
          <Styles.Label>To</Styles.Label>
        </Styles.InputDiv>
        <br />
        <form onSubmit={onSubmit}>
          <Styles.InputDiv>
            <Styles.Input
              type="text"
              placeholder=" "
              value={achievement}
              onChange={handleAchievements}
            />
            <Styles.Label>Achievements</Styles.Label>
          </Styles.InputDiv>
          <Button>
            {" "}
            <BiAddToQueue /> Add achievement
          </Button>
        </form>
      </Styles.DetailsDiv>
    </>
  );
};
