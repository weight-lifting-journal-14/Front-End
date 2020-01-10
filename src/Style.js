import styled from "styled-components";

export const Mycontent = styled.img`
  width: 100%;
  height: 735px;
`;
export const MyDiv2 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2%;
  color: white;
  display: flex;
  border: 8px double grey;
  border-radius: 30px;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.5);

  width: 35%;
  height: 300px;
  margin: 5% auto;

  &:hover {
    width: 35%;
    height: 325px;
  }
`;

export const MyDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2%;
  color: white;
  display: flex;
  border: 8px double grey;
  border-radius: 30px;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.5);

  width: 30%;
  height: 250px;
  margin: 5% auto;

  &:hover {
    width: 35%;
    height: 265px;
  }
`;
export const Myinput = styled.input`
  margin: 1%;
  text-algin: center;
  border: 2px solid gray;
  background: #d6d6d6;

  &::placeholder {
    color: black;
  }
`;

export const Btn = styled.button`
  color: white;
  margin: 1%;
  width: 45%;
  height: 50px;
  border-radius: 35px;
  border: 5px double gray;
  background: none;
  ${"" /* background-color: black; */}
`;
