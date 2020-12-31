import React from "react";
import { FiPhone, FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";

export const FormHeader = ({ info }: any) => {
  return (
    <>
      <h1>
        {info.firstName !== "" ? info.firstName : "John"}{" "}
        {info.lastName !== "" ? info.lastName : "Doe"}
      </h1>
      <p>{info.occupation !== "" ? info.occupation : "Occupation"}</p>

      <div
        style={{
          float: "right",
          position: "absolute",
          top: "5%",
          right: "5%",
        }}
      >
        <span>
          <FiPhone /> {info.phone !== "" ? info.phone : "Phone"}
        </span>
        <br />
        <span>
          <HiOutlineMail /> {info.email !== "" ? info.email : "Email"}
        </span>
        <br />
        <span>
          <AiOutlineLinkedin />{" "}
          {info.linkedin !== "" ? info.linkedin : "LinkedIn"}
        </span>
        <br />
        <span>
          <FiGithub /> {info.github !== "" ? info.github : "GitHub"}
        </span>
      </div>
    </>
  );
};
