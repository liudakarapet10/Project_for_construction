import { relative } from "path";
import styled from "styled-components";

import { colors } from "../../global";

export const StyledHamburger = styled.button<{ open: boolean }>`
  left: ${({ open }) => (open ? "5vw" : "3vw")};
  top: 4vw;
  width: 2rem;
  height: 2rem;
  padding: 0;
  margin-left: 10px;
  margin-top: 10px;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;

  @media (min-width: 600px) {
    left: ${({ open }) => (open ? "3vw" : "2vw")};
    right: ${({ open }) => (open ? "2vw" : "initial")};
    height: 3rem;
  }

  @media (min-width: 1080px) {
    height: 2rem;
  }

  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: ${({ open }) =>
      open ? colors.white : colors.black};
    z-index: ${({ open }) =>
    open ? 3 : 0}; 
    position: ${({ open }) =>
    open ? "fixed" : "relative"}; 

    
    @media (min-width: 600px) {
      width: 3rem;
      height: 0.35rem;
    }

    @media (min-width: 1080px) {
      width: 2rem;
      height: 0.25rem;
    }

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      margin-top: ${({ open }) => (open ? "40px" : "0")};
      margin-left: ${({ open }) => (open ? "80%" : "0")};

      @media (min-width: 600px){
        margin-left: ${({ open }) => (open ? "65%" : "0")};
      }

      @media (min-width: 1080px){
        margin-left: ${({ open }) => (open ? "130px" : "0")};
      }
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      margin-top: ${({ open }) => (open ? "80px" : "0")};
      margin-left: ${({ open }) => (open ? "80%" : "0")};

      @media (min-width: 600px){
        margin-left: ${({ open }) => (open ? "65%" : "0")};
        margin-top: ${({ open }) => (open ? "100px" : "0")};
      }

      @media (min-width: 1080px){
        margin-left: ${({ open }) => (open ? "130px" : "0")};
        margin-top: ${({ open }) => (open ? "82px" : "0")};
      }
     }
    }
  }
`;
