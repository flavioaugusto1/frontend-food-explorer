import styled from "styled-components";

import { CaretLeft } from "@phosphor-icons/react";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

export const Content = styled.main`
  height: 100%;
  padding: 1rem 3.2rem 5.3rem;

  #backPage {
    display: flex;
    align-items: center;

    > a {
      font-size: 1.6rem;
    }
  }

  > form {
    label {
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.6rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    input {
      margin: 1.6rem 0 2.4rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }

    #category {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
  }
`;

export const BackButtonIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: "3.2rem",
  color: theme.COLORS.LIGHT_100,
}))``;
