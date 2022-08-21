import styled from "styled-components";

export const CardItem = styled.div`

  height: 3rem;
  width: 3rem;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .time {
    font-family: inherit;
    font-size: 2rem;
    font-weight: 700;
    color: ${({theme}) => theme.fontColor};
    
  }
  .name {
    font-family: inherit;
    font-size: .8rem;
    font-weight: 500;
    letter-spacing: 2px;
    color: ${({theme}) => theme.fontColor};
  }
`;
