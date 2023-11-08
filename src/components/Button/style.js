import styled from "styled-components";

import { Receipt } from "@phosphor-icons/react";

export const Container = styled.button`
  padding: 1.2rem 3.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-size: clamp(1.2rem, 1.133rem + 0.296vw, 1.4rem);
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  line-height: 2.4rem;

  border-radius: 5px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`;

export const ReceiptIcon = styled(Receipt).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.LIGHT_100,
}))``;
