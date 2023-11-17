import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 14.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border-radius: 8px;
  border: none;
  resize: none;
  outline: none;

  padding: 1.4rem;

  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  line-height: 1.6rem;
`;
