import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  align-items: center;
  justify-items: center;

  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "content"
    "footer";

  #content {
    padding: 2rem;

    #wrap {
      grid: "wrap";
      position: relative;

      #infos {
        position: relative;
        margin-top: 4.4rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        border-radius: 0.3rem;

        display: grid;
        grid-template-columns: 15rem auto;
        align-items: center;

        > img {
          width: clamp(2rem, -48.302rem + 251.009vw, 19rem);
          position: absolute;
          margin-bottom: 3rem;
          left: -2rem;
        }

        &::before {
          content: "";
          width: 10rem;
          height: 12rem;
        }

        #texts {
          padding: 1rem;

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

    #meals,
    #main_dishes,
    #dessert {
      > h2 {
        font-family: "Poppins", sans-serif;
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 2.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        margin-bottom: 2.4rem;
      }
    }

    #meals,
    #main_dishes,
    #dessert {
      margin-bottom: 2.4rem;
      width: 50rem;
      .dishes {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 1.2rem;
      }
    }

    #meals {
      grid-area: "meals";
      margin-top: 6.2rem;
    }

    #main_dishes {
      grid-area: "main_dishes";
    }

    #dessert {
      grid-area: "dessert";
    }
  }
`;
