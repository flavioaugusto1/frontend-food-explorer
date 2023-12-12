import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: clamp(0.2rem, 1.057rem + 3.048vw, 2.8rem);

    font-weight: 700;
    font-family: "Roboto", sans-serif;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    margin-left: 1rem;
  }
`;
