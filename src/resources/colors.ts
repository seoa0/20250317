export const colors = {
  background: {
    back_pink: "#FB9EC6",
  },
  text: {
    primary: "#ffffff",
    secondary: "#333333",
    hover: "#666666",
    disabled: "#ffffff",
  },
  button: {
    primary: "#FBECB2",
    hover: "#AEDEFC",
    disabled: "#DDDDDD",
  },
} as const;

export type Colors = typeof colors;
