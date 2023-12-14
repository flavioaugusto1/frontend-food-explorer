import styled from "styled-components";

import { HeartStraight, PencilSimple } from "@phosphor-icons/react";

export const Container = styled.div`
  position: relative;

  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.2rem;

  padding: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_300};

  border-radius: 0.8rem;

  >img {
    cursor: pointer;
  }

  #titleDish {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    white-space: nowrap;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    cursor: pointer;
  }

  #descriptionDish {
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: center;
    line-height: 2.2rem;
    white-space: nowrap;
    max-width: 100%;
    overflow-x: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  #price {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
  }

  #buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    button {
      padding: 0.4rem 5.9rem;
    }
  }
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

export const PencilIcon = styled(PencilSimple).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.LIGHT_100,
}))`
  top: 1.6rem;
  right: 1.6rem;
  position: absolute;

  cursor: pointer;
`;
