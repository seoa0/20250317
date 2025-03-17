import styled from "@emotion/styled";
import { flexStyles } from "./flexStyles";

export const NavBar = styled.nav`
  ${flexStyles.spaceBetween}
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const NavLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavLinks = styled.div`
  ${flexStyles.center}
  gap: 2rem;
`;

export const NavLink = styled.a`
  font-size: 1rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
