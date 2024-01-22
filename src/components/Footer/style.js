import styled from "styled-components";
import { Hexagon } from "@phosphor-icons/react";

export const Container = styled.footer`
  grid-area: footer;
  width: 100%;
  height: 7.7rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.8rem;

  #brand {
    display: flex;
    align-items: center;
    gap: 0.6rem;

    > span {
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
      font-weight: 700;
      font-family: "Roboto", sans-serif;
      font-size: 1.5rem;
    }
  }

  #copyright {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const HexagonIcon = styled(Hexagon).attrs(({ theme }) => ({
  color: theme.COLORS.LIGHT_700,
  weight: "fill",
  size: 22,
}))``;
