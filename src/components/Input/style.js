import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > p {
    font-size: clamp(1.4rem, 1.294rem + 0.34vw, 1.6rem);
    font-family: "Roboto", sans-serif;
    font-weight: 400;

    text-align: left;
    line-height: 16px;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {
    padding: 14px 16px;
    height: 4.8rem;
    outline: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: none;
    border-radius: 8px;

    ::placeholder {
      font-size: clamp(1.4rem, 1.294rem + 0.34vw, 1.6rem);
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      line-height: 1.6rem;
    }
  }
`;
