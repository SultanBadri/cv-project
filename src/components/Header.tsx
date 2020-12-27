import React from "react";
import styled from "styled-components";

const DivHeader = styled.div`
  background: #4ae3b5;
  padding: 0.5rem;
  font-family: sans-serif;
  text-align: center;
`;

const HeaderH1 = styled.h1`
  color: white;
`;

const HeaderParagraph = styled.p`
  color: #2a5d67;
`;

export const Header = () => {
  return (
    <>
      <DivHeader>
        <HeaderH1>My CV-Maker</HeaderH1>
        <HeaderParagraph>Make your dream CV today!</HeaderParagraph>
      </DivHeader>
    </>
  );
};
