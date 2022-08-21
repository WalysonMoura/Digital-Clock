import styled from "styled-components";

export const Containner = styled.section`
  height: 220px;
  max-width: 550px;
  padding: 0 1rem;
  width: 80%;

  font-family: inherit;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 12px;

  position: relative;

  button{
    border: none;
    padding: .25rem;
    background-color: ${({theme}) => theme.buttonColor};
    border-radius: 50%;

    position: absolute;
    right: 1rem;
    top: .5rem;

    display: grid;
    place-items: center;
    transition: all 0.5s ease;

    >svg{
      color: ${({theme}) => theme.iconColor};
      transition: all 0.5s ease;
    }
    
    
  }
`;

export const Cards = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap");

  font-family: "Orbitron", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  font-size: 3rem;
  font-family: inherit;

  
`;
