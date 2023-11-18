import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: clamp(3.2rem, 2.057rem + 3.048vw, 4.8rem);

    font-weight: 700;
    font-family: "Roboto", sans-serif;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    margin-left: 1rem;
  }
`;
