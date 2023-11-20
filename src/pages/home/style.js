import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100%;
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;

  #content {
    max-width: 48rem;
    #wrap {
      padding: 2rem;
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
      margin-bottom: 2.4rem;
      max-width: 100%;
      padding: 1.6rem;

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
      #main_dishes,
      #dessert {
        max-width: 100%;

        > h2 {
          font-size: 3.2rem;
        }

        .dishes {
          ul {
            display: flex;
            gap: 8rem;
          }
        }

        .card-food {
          width: 27.7rem;
          height: 44.4rem;

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
