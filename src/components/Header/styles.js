import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-left: 10px;
  }
  div {
    display: flex;
    button {
      background-color: wheat;
      width: 50px;
      font-size: 1.2rem;
    }
    button + button {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;
