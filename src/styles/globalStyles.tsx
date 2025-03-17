import { Global, css } from "@emotion/react";
import { colors } from "@resources/colors";

const styles = css`
  @font-face {
    font-family: "dahyun";
    src: url("%PUBLIC_URL%/fonts/dahyun.ttf") format("opentype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "dahyun", sans-serif !important;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    font-family: "dahyun", sans-serif !important;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-family: "dahyun", sans-serif !important;
  }

  body {
    background-color: ${colors.background.back_pink};
    font-family: "dahyun", sans-serif !important;
  }

  input,
  textarea,
  select {
    font-family: "dahyun", sans-serif !important;
  }
`;

export const globalStyles = styles;
