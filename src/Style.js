import styled from "styled-components";

export const MyDiv = styled.div`
  padding: 2%;
  color: white;
  display: flex;
  border: 8px double green;
  border-radius: 30px;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
  width: 30%;
  height: 250px;
  margin: 10% auto;

  &:hover {
    width: 35%;
    height: 265px;
  }
`;
