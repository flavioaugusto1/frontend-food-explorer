import styled from "styled-components";

import { Plus, Minus, HeartStraight } from "@phosphor-icons/react";

export const Container = styled.div`
  position: relative;

  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  padding: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_300};

  border-radius: 0.8rem;

  #titleDish {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  #price {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
  }

  #numberOfDishes {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;

    > span {
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      line-height: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  button {
    padding: 0.4rem 5.9rem;
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

export const HeartIcon = styled(HeartStraight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.LIGHT_100,
}))`
  top: 1.6rem;
  right: 1.6rem;
  position: absolute;

  cursor: pointer;
`;