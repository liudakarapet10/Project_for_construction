import styled from "styled-components";
import { colors } from "../../global";

export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 25vw;
  position: fixed;
  background-color: ${colors.black};
  z-index: 3;

  display: flex;
  flex-direction: column;
  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (min-width: 600px) {
    width: 80%;
  }

  @media (min-width: 1080px) {
    width: 30%;
  }
`;

export const StyledLink = styled.a`
  padding: 0 2rem;
  font-size: 1.5rem;
  color: ${colors.white};
  text-decoration: none;

  :hover {
    color: ${colors.lightblue};
  }

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }

  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
`;