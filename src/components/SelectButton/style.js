import styled from "styled-components";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

export const Container = styled.div`
  .SelectTrigger {
    width: 100%;
    margin-top: 1.6rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 24rem;

    padding-left: 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  .SelectContent {
    overflow: hidden;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .SelectViewport {
    padding: 3rem;
  }

  .SelectItem {
    color: red;
  }
`;

export const IconDown = styled(CaretDown).attrs(({ theme }) => ({
  size: "2.4rem",
}))`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconUp = styled(CaretUp).attrs(({ theme }) => ({
  size: "2.4rem",
}))`
  display: flex;
  justify-content: center;
  align-items: center;
`;
