import React from "react";
import { StyledThirdArticle, StyledThirdArticleBox, StyledThirdArticleContentBox, StyledThirdArticleContentBoxTitle, StyledThirdArticleContentBoxLink, StyledThirdArticleContentBoxImageBox, StyledThirdArticleContentBoxImage, StyledThirdArticleContentBoxBlueBox, StyledThirdArticleContentBoxBigGlassHouse, StyledThirdArticleContentBoxGlassHouse, StyledThirdArticleContentBoxWrapper } from "./ThirdArticle.styled";



const ThirdArticle = () => {
    return (
        <StyledThirdArticle>
          <StyledThirdArticleBox> 
            <StyledThirdArticleContentBox>
              <StyledThirdArticleContentBoxTitle>Two Manifolds / Nuno Pimenta</StyledThirdArticleContentBoxTitle>
              <StyledThirdArticleContentBoxLink>more</StyledThirdArticleContentBoxLink>
              <StyledThirdArticleContentBoxWrapper>
                <StyledThirdArticleContentBoxImageBox>
                  <StyledThirdArticleContentBoxImage src={require('../../img/picture_one_third_article.jpeg')} alt="sea house"/>
                </StyledThirdArticleContentBoxImageBox>
                <StyledThirdArticleContentBoxBlueBox></StyledThirdArticleContentBoxBlueBox>
              </StyledThirdArticleContentBoxWrapper>
            </StyledThirdArticleContentBox>
            <StyledThirdArticleContentBoxGlassHouse>
              <StyledThirdArticleContentBoxTitle>Sacromonte Landscape Hotel Shelters / MAPA</StyledThirdArticleContentBoxTitle>
              <StyledThirdArticleContentBoxLink>more</StyledThirdArticleContentBoxLink>
              <StyledThirdArticleContentBoxWrapper>
                <StyledThirdArticleContentBoxImageBox>
                  <StyledThirdArticleContentBoxImage src={require('../../img/picture_two_third_article.jpeg')} alt="glass house"/>
                </StyledThirdArticleContentBoxImageBox>
                <StyledThirdArticleContentBoxBlueBox></StyledThirdArticleContentBoxBlueBox>
              </StyledThirdArticleContentBoxWrapper>
            </StyledThirdArticleContentBoxGlassHouse>
            <StyledThirdArticleContentBoxBigGlassHouse>
              <StyledThirdArticleContentBoxTitle>Hug & Link / Edam Architecture Design Group</StyledThirdArticleContentBoxTitle>
              <StyledThirdArticleContentBoxLink>more</StyledThirdArticleContentBoxLink>
              <StyledThirdArticleContentBoxWrapper>
                <StyledThirdArticleContentBoxImageBox>
                  <StyledThirdArticleContentBoxImage src={require('../../img/picture_thre_third_article.jpeg')} alt="big glass house"/>
                </StyledThirdArticleContentBoxImageBox>
                <StyledThirdArticleContentBoxBlueBox></StyledThirdArticleContentBoxBlueBox>
              </StyledThirdArticleContentBoxWrapper>
            </StyledThirdArticleContentBoxBigGlassHouse>
          </StyledThirdArticleBox> 
        </StyledThirdArticle>
    )
 };
 
 export default ThirdArticle;
 