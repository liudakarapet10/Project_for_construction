import styled from "styled-components";
import { colors } from "../../global";

export const StyledFooterDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: #1A1A1A;
 
`;

export const StyledFooterBox = styled.div`
    width: 70%;
    height: auto;
    margin: 0 auto;
    color: ${colors.white};
    padding-top: 40px;
    padding-bottom: 30px;

    @media (min-width: 800px) {
      width: 70%;
      max-width: 910px;
      display: flex;
      justify-content: space-between;
    }

`;

export const StyledFooterBoxDiv = styled.div`
   margin-bottom: 50px;

   @media (min-width: 800px){
     margin-top: 20px;
  }
`;

export const StyledFooterBoxTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 300;
`;

export const StyledFooterBoxLink = styled.a`
  font-size: 14px;
  font-weight: 400;

`;