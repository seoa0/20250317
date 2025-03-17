import styled from "@emotion/styled";
import { colors } from "@resources/colors";
import { media } from "@resources/breakpoints";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  background-color: ${({ disabled }) =>
    disabled ? colors.button.disabled : colors.button.primary};
  color: ${colors.text.disabled};

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? colors.button.disabled : colors.button.hover};
  }

  ${({ size = "medium" }) => {
    switch (size) {
      case "small":
        return `
          padding: 8px 16px;
          font-size: 14px;
        `;
      case "large":
        return `
          padding: 16px 32px;
          font-size: 18px;
        `;
      default:
        return `
          padding: 12px 24px;
          font-size: 16px;
        `;
    }
  }}

  ${media.tablet} {
    ${({ size = "medium" }) => {
      switch (size) {
        case "small":
          return `font-size: 15px;`;
        case "large":
          return `font-size: 20px;`;
        default:
          return `font-size: 17px;`;
      }
    }}
  }
`;

export const Button = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
