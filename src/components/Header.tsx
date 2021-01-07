import React from "react";
import styled from "styled-components";
import { BsNewspaper } from "react-icons/bs";

const DivHeader = styled.div`
  background: #11698e;
  border-radius: 4px;
  padding: 1rem 0.5rem;
  margin: 2rem;
  font-family: sans-serif;
  text-align: center;
  @media print {
    display: none;
  }
`;

const HeaderH1 = styled.h1`
  color: white;
`;
const HeaderParagraph = styled.p`
  color: #bf8dc9;
  font-weight: bolder;
`;

export const Header = () => {
  return (
    <DivHeader>
      <HeaderH1>
        My CV-Maker <BsNewspaper />
      </HeaderH1>
      <HeaderParagraph>Build your dream CV today!</HeaderParagraph>
    </DivHeader>
  );
};
