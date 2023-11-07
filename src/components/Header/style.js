import styled from "styled-components";
import { List, Receipt, SignOut } from "@phosphor-icons/react";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  grid-area: "header";
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  height: 11.4rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  > div {
    font-size: clamp(2.1rem, 1.595rem + 2.45vw, 3.8rem);
  }

  #input,
  #wrapButton {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
      h1 {
        font-size: 24px;
      }
    }

    #input,
    #button,
    #signout {
      display: inline;
    }

    #input {
      width: 55rem;
    }

    #button {
      button {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }
    }

    #wrapButton {
      display: flex;
      align-items: center;
      gap: 3.2rem;
    }
  }
`;

export const ListIcon = styled(List).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.LIGHT_100,
}))`
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`;

export const ReceiptIcon = styled(Receipt).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.LIGHT_100,
}))`
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`;

export const SignOutIcon = styled(SignOut).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.LIGHT_100,
}))``;
