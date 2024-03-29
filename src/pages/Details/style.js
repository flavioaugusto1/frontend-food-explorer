import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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
    padding: 1.2rem;
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
      > img {
        border-radius: 50%;
        width: clamp(29rem, 22.143rem + 14.286vw, 39rem);
        height: clamp(29rem, 22.143rem + 14.286vw, 39rem);
        object-fit: cover;
      }
    }
    #description-product {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2.4rem;
      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 2.4rem;
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
        text-align: justify;
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
      #addReceiptMobile {
        width: 100%;
        padding: 0.8rem 1.6rem;
        > svg {
          width: 2.1rem;
          height: 2.1rem;
          margin-right: 0.5rem;
        }
      }
      #addReceiptDesktop {
        display: none;
      }
    }
    #logo-product,
    #backPage {
      animation-name: slideLeft;
      animation-duration: 1.5s;
    }
    #description-product,
    #buttons {
      animation-name: slideRight;
      animation-duration: 1s;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 100%;
    padding: 0 7.2rem;
    margin-top: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    #wrap {
      max-width: 120rem;
    }
    #content-product {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4.7rem;
      margin-top: 4.2rem;
      #description-product {
        display: block;
        h1 {
          font-size: 3.4rem;
          font-weight: 500;
          line-height: 5.6rem;
        }
        p {
          font-size: 1.6rem;
          line-height: 3.3rem;
          margin: 2.4rem 0;
          text-align: justify;
        }
        #buttons {
          justify-content: flex-start;
          #addReceiptMobile {
            display: none;
          }
          #addReceiptDesktop {
            display: block;
          }
          span {
            font-size: 2rem;
          }
        }
      }
    }
  }
  @keyframes slideLeft {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }
  }
  @keyframes slideRight {
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }
  }
`;

export const BackButtonIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: "3.2rem",
  color: theme.COLORS.LIGHT_100,
}))`
  cursor: pointer;
`;