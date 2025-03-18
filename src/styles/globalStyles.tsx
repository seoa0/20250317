import { css } from "@emotion/react";
import { colors } from "@resources/colors";

const styles = css`
  @font-face {
    font-family: "67d955652abfb";
    src: url("/fonts/67d955652abfb.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }

    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }

  html,
  body {
    font-family: "67d955652abfb", sans-serif !important;
  }

  body {
    background-color: ${colors.background.back_pink};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-size: 1rem;
    font-family: "67d955652abfb", sans-serif !important;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 1rem;
    font-family: "67d955652abfb", sans-serif !important;
  }

  input,
  textarea,
  select {
    font-size: 1rem;
    font-family: "67d955652abfb", sans-serif !important;
  }
`;

export const globalStyles = styles;
