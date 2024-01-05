import { createGlobalStyle, styled } from "styled-components";
import { ToastContainer } from "react-toastify";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    outline: none;
  }

`;

export const ToastStyled = styled(ToastContainer)`
  font-size: 1.6rem;
`;
