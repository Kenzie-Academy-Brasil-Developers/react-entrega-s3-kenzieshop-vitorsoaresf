import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--grey-50);

  h1 {
    font-size: 1.5rem;
    margin-left: 10px;
  }

  div {
    display: flex;
    button {
      width: 50px;
      font-size: 1rem;
    }

    button + button {
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 1.8rem;
    }
    div {
      button {
        font-size: 1.3rem;
      }
    }
  }
`;
