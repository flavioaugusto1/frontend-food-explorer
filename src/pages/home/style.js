import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  align-items: center;
  justify-items: center;

  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr 1fr 1fr 1fr auto;
  grid-template-areas:
    "header"
    "wrap"
    "meals"
    "main_dishes"
    "dessert"
    "footer";

  #wrap {
    grid: "wrap";
    padding: 1.6rem;
    position: relative;

    #infos {
      height: 12rem;
      margin-top: 4.4rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      border-radius: 0.3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        margin-bottom: 2.6rem;
      }

      > div {
        h2 {
          font-size: 1.8rem;
          font-family: "Poppins", sans-serif;
          font-weight: 600;
          line-height: 2.5rem;
        }

        p {
          font-size: 1.2rem;
          font-family: "Poppins", sans-serif;
          font-weight: 400;
          line-height: 1.6rem;
        }
      }
    }
  }

  #meals {
    grid-area: "meals";
  }

  #main_dishes {
    grid-area: "main_dishes";
  }

  #dessert {
    grid-area: "dessert";
  }
`;
