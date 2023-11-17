import styled from "styled-components";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import * as SelectPrimitive from "@radix-ui/react-select";

export const SelectTrigger = styled(SelectPrimitive.Trigger)`
  width: 100%;
  margin-top: 1.6rem;
  margin-bottom: 2.4rem;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  font-size: 1.4rem;
  font-family: "Roboto", sans-serif;
  line-height: 2.2rem;

  padding: 0 1.6rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const SelectViewport = styled(SelectPrimitive.Viewport)`
  padding: 1rem;
`;

export const SelectContent = styled(SelectPrimitive.Content)`
  width: var(--radix-select-trigger-width);
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 8px;
`;

export const SelectItem = styled(SelectPrimitive.Item)`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  padding: 1.6rem;

  font-size: 1.4rem;
  font-family: "Roboto", sans-serif;
  line-height: 2.2rem;

  cursor: pointer;
`;

//   .SelectContent {
//     overflow: hidden;
//     cursor: pointer;
//     color: ${({ theme }) => theme.COLORS.LIGHT_400};
//     background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
//     position: absolute;

//     .SelectViewport {
//       padding: 3rem;
//     }

//     .SelectItem {
//       color: red;
//       background-color: red;
//     }
//   }
// `;

export const IconDown = styled(CaretDown).attrs(({ theme }) => ({
  size: "2.4rem",
}))`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconUp = styled(CaretUp).attrs(({ theme }) => ({
  size: "2.4rem",
}))`
  display: flex;
  justify-content: center;
  align-items: center;
`;
