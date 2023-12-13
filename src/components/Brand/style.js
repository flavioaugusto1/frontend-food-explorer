import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: clamp(0.2rem, 1.057rem + 3.048vw, 2.8rem);

    font-weight: 700;
    font-family: "Roboto", sans-serif;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    margin-left: 1rem;
  }

  .brandAdmin {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: 2rem;

    > h1 {
      font-size: clamp(0.2rem, 1.057rem + 3.048vw, 2.8rem);

      font-weight: 700;
      font-family: "Roboto", sans-serif;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      margin-left: 1rem;
    }

    > span {
      font-family: "Roboto", sans-serif;
      font-size: 1.2rem;
      line-height: 1.92rem;
      font-weight: bold;


      color: ${({ theme }) => theme.COLORS.CAKE_200};

      align-self: flex-end;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      margin-top: 0;
      flex-direction: row;
      gap: .4rem;
    }
  }
`;
