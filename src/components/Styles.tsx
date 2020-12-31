import styled from "styled-components";

// Header.tsx
export const DivHeader = styled.div`
  background: #11698e;
  border-radius: 4px;
  padding: 1rem 0.5rem;
  margin: 0.5rem;
  font-family: sans-serif;
  text-align: center;
`;

export const HeaderH1 = styled.h1`
  color: white;
`;

export const HeaderParagraph = styled.p`
  color: #e7d9ea;
`;

// FormContainer.tsx
export const InputsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 2rem;
  font-family: sans-serif;
`;

export const CVDiv = styled.div`
  position: relative;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
  border-radius: 4px;
  font-family: sans-serif;
  margin: 2rem;
  padding: 1.5rem;
`;

// HeaderInput, ExperienceInput, EducationInput
export const DetailsDiv = styled.details`
  vertical-align: bottom;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
  margin: 1rem;
  padding: 20px 20px;
  border-radius: 7px;
  letter-spacing: 1px;
`;

export const InputDiv = styled.div`
  position: relative;
  margin: 1.5rem 0;
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 85%;
  height: 100%;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
  padding: 1rem;
  transition: 0.3s ease;
  &:focus {
    border: 2px solid #4ae3b5;
  }
  &:focus + label {
    top: -0.3rem;
    left: 0.5rem;
    font-weight: 500;
    font-size: 0.7rem;
  }
  &:not(:placeholder-shown)&:not(:focus) + label {
    top: -0.3rem;
    left: 0.5rem;
    font-weight: 500;
    font-size: 0.7rem;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: 0.5rem;
  background: white;
  color: #80868b;
  padding: 0 0.25rem;
  transition: 0.3s ease;
  pointer-events: none;
  font-size: 0.9rem;
`;
