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
  justify-items: center;
`;

export const Content = styled.section`
  margin-top: 1.6rem;

  #wrap {
    max-width: 32.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    #backPage {
      display: flex;
      align-items: center;
      margin-bottom: 1.6rem;

      > a {
        font-family: "Poppins", sans-serif;
        font-size: 2.4rem;
        line-height: 3.3rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }

    #logo-product {
      display: flex;
      justify-content: center;
    }

    #description-product {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2.4rem;

      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 2.7rem;
        font-weight: 500;
        line-height: 3.7rem;

        margin-top: 1.6rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      p {
        font-family: "Poppins", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.2rem;

        text-align: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      .ingredients {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.8rem;

        margin-bottom: 4.8rem;
      }
    }

    #buttons {
      margin-bottom: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      #addReceipt {
        width: 100%;
        padding: .8rem 1.6rem;
        > svg {
          width: 2.1rem;
          height: 2.1rem;
          margin-right: 0.5rem;
        }
      }
    }
  }
`;

export const BackButtonIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: "3.2rem",
  color: theme.COLORS.LIGHT_100,
}))``;
