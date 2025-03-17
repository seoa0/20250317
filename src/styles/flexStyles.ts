import { css } from "@emotion/react";
import { colors } from "@resources/colors";
import { fonts } from "@styles/fonts";

export const flexStyles = {
  columnCenter: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  center: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  spaceBetween: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  gap: (gap: string) => css`
    gap: ${gap};
  `,
  button: css`
    ${fonts.button}
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    color: ${colors.text.primary};
    transition: all 0.3s ease;
    font-size: 2rem;

    &:hover {
      font-size: 3rem;
    }

    &:active {
      transform: scale(0.95);
    }
  `,
} as const;
