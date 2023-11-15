import styled from "styled-components";
import { Plus, Minus } from "@phosphor-icons/react";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  > span {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.LIGHT_100,
}))`
  cursor: pointer;
`;

export const MinusIcon = styled(Minus).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.LIGHT_100,
}))`
  cursor: pointer;
`;
