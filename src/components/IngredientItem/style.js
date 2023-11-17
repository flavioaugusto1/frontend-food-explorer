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
      isNew ? theme.COLORS.LIGHT_600 : theme.COLORS.LIGHT_500};
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;

    border: none;
  }
`;

export const PlusIcon = styled(Plus).attrs({})``;
export const CloseIcon = styled(X)``;
