import styled from "styled-components";
import { Plus, X } from "@phosphor-icons/react";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 1.6rem;

  background: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};

  border-radius: 8px;
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  > input {
    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.LIGHT_600 : theme.COLORS.LIGHT_100};
    font-family: "Roboto", sans-serif;
    background: transparent;
    font-size: 1.6rem;
    line-height: 1.6rem;
    outline: none;
    border: none;
  }

  > button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const PlusIcon = styled(Plus)`
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
`;
export const CloseIcon = styled(X)`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
