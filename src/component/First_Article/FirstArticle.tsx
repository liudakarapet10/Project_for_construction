import React from "react";
import { StyledFirstArticle, StyledFirstArticleBox, StyledFirstArticleImageApartmentBox, StyledFirstArticleImage, StyledFirstArticleBlueBox, StyledFirstArticleImageArtectureBox, StyledFirstArticleContentBox, StyledFirstArticleContentBoxPar, StyledFirstArticleBlueBoxSmall,
  StyledFirstArticleContentBoxSecond, StyledFirstArticleContentBoxSecondPar, StyledFirstArticleContentBoxSecondLink, StyledFirstArticleImageBusinessCenterBox, StyledFirstArticleBlueBoxSmallSecond, StyledFirstArticleContentBoxSpaces,
  StyledFirstArticleContentBoxSpacesTitle, StyledFirstArticleContentBoxSpacesSpan, StyledFirstArticleContentBoxSpacesPar, StyledFirstArticleContentBoxSpacesButton } from "./FirstArticle.styled";
import { IoIosArrowForward } from 'react-icons/io';



const FirstArticle = () => {
    return (
        <StyledFirstArticle>
          <StyledFirstArticleBox> 
            <StyledFirstArticleImageApartmentBox>
              <StyledFirstArticleImage src={require('../../img/apartment_one_article.jpg')} alt="apartment"/> 
            </StyledFirstArticleImageApartmentBox>
            <StyledFirstArticleBlueBox className="blue_box"></StyledFirstArticleBlueBox>
            <StyledFirstArticleImageArtectureBox>
              <StyledFirstArticleImage src={require('../../img/arhitecture_one_article.jpg')} alt="architecture"/> 
            </StyledFirstArticleImageArtectureBox>
            <StyledFirstArticleContentBox>
              <StyledFirstArticleContentBoxPar className="content_box_first_par">Nation’s Top in Design and Architecture</StyledFirstArticleContentBoxPar>
              <IoIosArrowForward className="content_box_arrow" />
            </StyledFirstArticleContentBox>
            <StyledFirstArticleBlueBoxSmall></StyledFirstArticleBlueBoxSmall>
            <StyledFirstArticleContentBoxSecond>
                <StyledFirstArticleContentBoxSecondPar>Rehabilitation Institute of Chicago’s Shirley Ryan AbilityLab, First-Ever “Translational” Research Hospital, Opens Doors</StyledFirstArticleContentBoxSecondPar>
                <StyledFirstArticleContentBoxSecondLink>continue reading</StyledFirstArticleContentBoxSecondLink> 
            </StyledFirstArticleContentBoxSecond>
            <StyledFirstArticleImageBusinessCenterBox>
              <StyledFirstArticleImage src={require('../../img/bisiness_center.jpg')} alt="architecture"/> 
            </StyledFirstArticleImageBusinessCenterBox>
            <StyledFirstArticleBlueBoxSmallSecond></StyledFirstArticleBlueBoxSmallSecond>
            <StyledFirstArticleContentBoxSpaces>
              <StyledFirstArticleContentBoxSpacesTitle><StyledFirstArticleContentBoxSpacesSpan>Spaces</StyledFirstArticleContentBoxSpacesSpan> That Inspire</StyledFirstArticleContentBoxSpacesTitle>
              <StyledFirstArticleContentBoxSpacesPar>If is there any list of the most important architecture projects of 2018 will definetely feature an abundance of superlatives.</StyledFirstArticleContentBoxSpacesPar>
              <StyledFirstArticleContentBoxSpacesButton>continue reading</StyledFirstArticleContentBoxSpacesButton>
            </StyledFirstArticleContentBoxSpaces>
          </StyledFirstArticleBox> 
        </StyledFirstArticle>
    )
 };
 
 export default FirstArticle;
 