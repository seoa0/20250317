import { css } from "@emotion/react";

export const fonts = {
  title: css`
    font-size: 3rem;
    font-weight: bold;
    color: #333;
    text-align: center;
    animation: titleAnimation 1s ease-out forwards,
      titleGlow 2s ease-in-out infinite;
  `,
  button: css`
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  `,
} as const;
