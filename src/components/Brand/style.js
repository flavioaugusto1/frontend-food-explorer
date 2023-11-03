import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: clamp(3.8rem, 3.694rem + 0.34vw, 3.8rem);
    font-weight: 700;
    font-family: "Roboto", sans-serif;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    margin-left: 1rem;
  }
`;
