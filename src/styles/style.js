import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;

  background-color: ${({theme}) => theme.body};
  display: grid;
  place-items: center;
  transition: all 0.5s ease;
`;
