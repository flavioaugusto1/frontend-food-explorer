import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  padding: 65px;
  margin-top: 15.8rem;

  > section {
    border-radius: 1.6rem;

    h1 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: clamp(2.5rem, 2.3rem + 1vw, 3.2rem);

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      display: none;
    }

    form {
      max-width: 35rem;
      display: flex;
      flex-direction: column;
      margin: 7.3rem auto 0;
      gap: 3.2rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: 9rem;

    display: flex;
    justify-content: space-around;
    align-items: center;

    section {
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      padding: 6.4rem;

      > h1 {
        display: block;
        text-align: center;
      }

      > form {
        width: 35rem;
        margin-top: 3.2rem;
      }
    }
  }
`;
