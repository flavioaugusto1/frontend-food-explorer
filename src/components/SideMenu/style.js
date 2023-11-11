import styled from "styled-components";
import { X } from "@phosphor-icons/react";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  z-index: 1;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  z-index: 1;
  position: absolute;
`;

export const Header = styled.header`
  grid-area: "header";
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 6rem 2.8rem 2.8rem;

  > h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 2.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const CloseIcon = styled(X).attrs(({ theme }) => ({
  size: "2.6rem",
  color: theme.COLORS.LIGHT_100,
}))``;

export const Content = styled.section`
  grid-area: "content";
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  padding: 2.6rem;
`;


