import styled from "styled-components";
import { PatternFormat } from "react-number-format";

export const Input = styled(PatternFormat)`
  display: flex;
  flex-direction: column;

  padding: 1.2rem 1.4rem;
  height: 4.8rem;
  outline: none;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-size: clamp(1.4rem, 1.294rem + 0.34vw, 1.6rem);
  font-family: "Roboto", sans-serif;

  border: none;
  border-radius: 8px;
`;
