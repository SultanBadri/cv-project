import React from "react";
import styled from "styled-components";
import { BsNewspaper } from "react-icons/bs";

const DivHeader = styled.div`
  background: #11698e;
  border-radius: 4px;
  padding: 1rem 0.5rem;
  margin: 0.5rem;
  font-family: sans-serif;
  text-align: center;
`;

const HeaderH1 = styled.h1`
  color: white;
`;
const HeaderParagraph = styled.p`
  color: #e7d9ea;
`;

export const Header = () => {
  return (
    <DivHeader>
      <HeaderH1>
        My CV-Maker <BsNewspaper />
      </HeaderH1>
      <HeaderParagraph>Make your dream CV today!</HeaderParagraph>
    </DivHeader>
  );
};
