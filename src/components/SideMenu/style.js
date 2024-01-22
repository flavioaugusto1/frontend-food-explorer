import styled from "styled-components";
import { X, MagnifyingGlass } from "@phosphor-icons/react";

export const Container = styled.aside`
  width: 100%;
  height: 100vh;
  z-index: 1;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: max-content 1fr max-content;

  position: absolute;
  z-index: 1;

  transform: translateX(-200%);
  transition: transform 0.5s ease-in-out;

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 3rem 5.8rem 2.8rem;

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
}))`
  cursor: pointer;
`;

export const Content = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  padding: 2rem;

  #search {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    padding: 0 1.4rem;
    border-radius: 0.5rem;

    margin-bottom: 3.6rem;

    > div {
      input {
        width: 31rem;
        &::placeholder {
          font-size: 1.8rem;
          font-family: "Roboto", sans-serif;
          line-height: 1.6rem;
        }
      }
    }
  }
`;

export const SearchIcon = styled(MagnifyingGlass).attrs(({ theme }) => ({
  size: "2.4rem",
  color: theme.COLORS.LIGHT_100,
}))``;

export const MenuList = styled.ul`
  > li {
    margin-bottom: 1rem;
    border-bottom: 0.2rem solid ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 1rem 1rem 1rem 0;

    a {
      font-size: 2.4rem;
      font-weight: 300;
      line-height: 3.3rem;
    }
  }
`;
