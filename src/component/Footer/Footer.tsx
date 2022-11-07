import React from "react";
import { StyledFooterDiv, StyledFooterBox, StyledFooterBoxDiv, StyledFooterBoxTitle, StyledFooterBoxLink  } from "./Footer.styled";



const Footer = () => {
    return (
        <StyledFooterDiv>
          <StyledFooterBox> 
            <StyledFooterBoxDiv>
              <StyledFooterBoxTitle>Headline</StyledFooterBoxTitle>
              <StyledFooterBoxLink>Sample footer text</StyledFooterBoxLink>
            </StyledFooterBoxDiv>
            <StyledFooterBoxDiv>
              <StyledFooterBoxTitle>Headline</StyledFooterBoxTitle>
              <StyledFooterBoxLink>Sample footer text</StyledFooterBoxLink>
            </StyledFooterBoxDiv>
            <StyledFooterBoxDiv>
              <StyledFooterBoxTitle>Headline</StyledFooterBoxTitle>
              <StyledFooterBoxLink>Sample footer text</StyledFooterBoxLink>
            </StyledFooterBoxDiv>
          </StyledFooterBox> 
        </StyledFooterDiv>
    )
 };
 
 export default Footer;
 