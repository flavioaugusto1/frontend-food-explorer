import styled from "styled-components";

export const Container = styled.li`
  padding: .4rem .8rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  border-radius: 0.5rem;

  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 2.4rem;

  text-align: center;
  list-style: none;
`;
