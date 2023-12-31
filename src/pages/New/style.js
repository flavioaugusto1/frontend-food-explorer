import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

import { CaretLeft, UploadSimple } from "@phosphor-icons/react";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

export const Content = styled.main`
  height: 100%;
  padding: 1rem 3.2rem 5.3rem;

  > h1 {
    font-size: 3.6rem;
    font-family: "Roboto", sans-serif;
    font-weight: 00;

    margin: 2.4rem 0;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  #backPage {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    > a {
      font-size: 1.6546rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 4rem 1em;
    margin: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  #image {
    .upload-image {
      display: flex;
      align-items: center;
      position: relative;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      border-radius: 8px;

      > label {
        width: 100%;
        overflow-x: auto;
        padding: 1.6rem 4rem;
        height: 4.8rem;
        font-size: 1.2rem;
        cursor: pointer;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    #logo {
      display: none;
    }

    > span {
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.6rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      cursor: text;
    }
  }

  label {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    cursor: text;
  }

  .ingredients {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    padding: 0.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 8px;
  }

  #buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 3.2rem;

    .buttonDelete {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      &:hover {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
      }
    }
  }

  .label-style {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 120rem;
    display: grid;
    grid-template-columns: 1fr 3fr 30rem;
    grid-template-rows: 1fr auto auto 1fr;
    grid-template-areas:
      "image name category"
      "ingredients ingredients price"
      "description description description"
      "button button button";
    justify-content: center;
    align-items: center;
    gap: 3.2rem;

    #image {
      grid-area: image;
    }

    #name-input {
      grid-area: name;
    }

    #category {
      grid-area: category;
    }

    #ingredients {
      grid-area: ingredients;
      .ingredients {
        justify-content: flex-start;
      }
    }

    #price {
      grid-area: price;
    }

    #description {
      grid-area: description;
    }

    #buttons {
      grid: "button";
      grid-column: 3;
      grid-column-end: auto;

      > button {
        flex: none;
        padding: 1.2rem 2.4rem;
      }
    }
  }
`;

export const BackButtonIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: "2.8rem",
  color: theme.COLORS.LIGHT_100,
}))``;

export const UploadIcon = styled(UploadSimple).attrs(({ theme }) => ({
  size: "2.8rem",
  color: theme.COLORS.LIGHT_100,
}))`
  position: absolute;
  left: 0.8rem;
  top: 0.8rem;
`;
