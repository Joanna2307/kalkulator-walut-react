import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  color: ${({ theme }) => theme.color.whitesmoke};
  background-color: rgb(31, 119, 119);
  border: none;

  &:active {
    background-color: rgb(167, 179, 217);
    transform: scale(1);
    color: ${({ theme }) => theme.color.teal};
  }

  &:hover {
    background-color: rgb(30, 120, 120);
    transform: scale(1.01);
    font-weight: bold;
  }
`;
