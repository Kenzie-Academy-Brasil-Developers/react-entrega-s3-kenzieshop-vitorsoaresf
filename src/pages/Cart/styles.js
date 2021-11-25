import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
export const ContainerProducts = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 700px;

  li {
    margin: 10px 10px;
  }
  @media (min-width: 1200px) {
    margin: 0 0 0 auto;
  }
`;

export const ContainerCart = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  width: 310px;
  height: 200px;
  margin: 10px auto;

  header {
    background-color: var(--purple-50);
    border-radius: 10px 10px 0 0;
    display: flex;
    flex-direction: column;

    p {
      /* text-align: center; */
      margin-left: 10px;
      height: 30px;
      color: var(--white);
      font-weight: 600;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      display: flex;
      height: 2px;
      align-items: center;
      height: 40px;
      justify-content: space-between;
      width: 100%;

      h2,
      span {
        margin: 0;
      }

      h2 {
        font-size: 1.3rem;
        margin-right: 10px;
        color: var(--purple-100);
      }

      span {
        font-size: 1rem;
        margin-left: 10px;
        color: var(--grey-100);
        font-weight: 500;
      }
    }

    button {
      background-color: var(--purple-100);
      color: var(--white);
      font-weight: 600;
      font-size: 1.1rem;
      transition: background-color 1s;

      :hover {
        background-color: var(--purple-50);
      }
    }
  }

  @media (min-width: 1200px) {
    margin-left: 50px;
  }
`;
