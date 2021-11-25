import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--white);
  width: 300px;
  margin: 10px 0;
  border-radius: 10px;

  h1,
  button {
    margin: 0 10px;
  }

  img {
    width: 100px;
    height: 200px;
    margin: 10px auto;
  }

  h1 {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    height: 100px;
  }

  p {
    margin: 10px 10px;
    font-size: 0.8rem;
    color: var(--grey-50);
    height: 60px;
  }

  span {
    margin: 20px 10px;
    font-size: 1.3rem;
    color: var(--purple-100);
    font-weight: 600;
  }

  button {
    background-color: var(--purple-50);
    margin: 10px 0;
    font-size: 1rem;
    text-align: center;
    color: var(--white);
    font-weight: 600;
    transition: background-color 1s;
    margin: 0 auto;
    margin-bottom: 20px;

    :hover {
      background-color: var(--purple-100);
    }
  }
`;
