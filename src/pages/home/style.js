import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
  align-items: center;
  justify-items: center;
  align-content: space-between;

  header {
    animation-name: topDown;
    animation-duration: 2s;

    @keyframes topDown {
      0% {
        transform: translateY(-200%);
      }
    }
  }

  #content {
    max-width: 48rem;
    height: 100%;
    grid-area: content;

    #wrap {
      padding: 2rem;

      animation-name: appears;
      animation-duration: 1s;
      animation-delay: 1s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: backwards;

      #infos {
        max-width: 93rem;
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
          width: 31rem;
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
    #drinks,
    #dessert {
      margin-bottom: 2.4rem;
      max-width: 100%;
      padding: 1.6rem;

      animation-name: appears;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-delay: 2s;
      animation-fill-mode: backwards;

      > h2 {
        font-family: "Poppins", sans-serif;
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 2.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        margin-bottom: 2.4rem;
      }

      .card-food {
        #descriptionDish {
          display: none;
        }
      }

      .splide {
        padding: 0;
      }
    }

    #meals {
      margin-top: 6.2rem;
    }
  }

  @keyframes appears {
    0% {
      opacity: 0;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD_730}) {
    #content {
      max-width: 70rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    #content {
      max-width: 100rem;

      #wrap {
        #infos {
          height: 26rem;
          display: flex;
          justify-content: space-around;
          align-items: center;

          background: rgb(13, 42, 54);
          background: linear-gradient(
            200deg,
            rgba(13, 42, 54, 1) 22%,
            rgba(13, 29, 37, 1) 38%
          );

          &::before {
            content: "";
            flex: 1;
          }

          img {
            object-fit: cover;
            width: 37rem;
          }

          #texts {
            margin-right: 10rem;
            h2 {
              font-size: 4rem;
              line-height: 5.6rem;
              margin-bottom: 0.8rem;
            }
            p {
              font-size: 1.6rem;
            }
          }
        }
      }
      #meals,
      #drinks,
      #dessert {
        max-width: 100%;

        > h2 {
          font-size: 3.2rem;
        }

        .dishes {
          ul {
            display: flex;
            gap: 1rem;
          }
        }

        .card-food {
          width: 27.7rem;

          > img {
            width: 17.6rem;
            height: 17.6rem;
            object-fit: contain;
          }

          #titleDish {
            font-size: 2.4rem;
            font-weight: 700;
            line-height: 3.3rem;
          }

          #descriptionDish {
            display: inline;
          }

          #price {
            font-size: 3.2rem;
            line-height: 5.1rem;
          }

          #buttons {
            flex-direction: row;
            > div {
              span {
                font-size: 2rem;
              }
            }
            > button {
              padding: 1.2rem 1.4rem;
            }
          }
        }
      }
    }
  }
`;
