import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 60%;
  margin: auto;
  margin-top: 5%;
  color: ${({ theme }) => theme.color.teal};
`;

export const Fieldset = styled.fieldset`
  border: 3px solid rgb(31, 119, 119);
  border-radius: 15px;
  background-color: whitesmoke;
  padding: 20px;
  margin: 20px 0;
  border-style: none;
  box-shadow: 2px 4px 24px 2px rgb(31, 119, 119);
`;

export const Legend = styled.legend`
  font-weight: 400;
  font-size: 1.5em;
  padding: 10px;
  border: 1px solid rgb(31, 119, 119);
  border-radius: 15px;
  background-color: whitesmoke;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  padding: 10px;
  font-weight: 300;
  display: block;
  width: 100%;
`;
export const Select = styled.select`
  padding: 5px;
  width: 100%;
  color: ${({ theme }) => theme.color.teal};
  text-align: center;
  margin-bottom: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  display: block;

  &:hover {
    background-color: rgb(177, 212, 234);
  }
`;

export const Input = styled.input`
  padding: 5px;
  
  
  width: 100%;
  color: ${({ theme }) => theme.color.teal};
  text-align: center;
  margin: 0 0 20px 0;
  border-radius: 10px;
  box-sizing: border-box;
  display: block;
`;

export const StyledCaption = styled.div`
  max-width: 60%;
  padding: 5px;
  color: rgb(255, 255, 255);
  font-weight: bolder;
  white-space: nowrap;
`;
