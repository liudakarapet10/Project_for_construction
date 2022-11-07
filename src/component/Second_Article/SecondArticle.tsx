import React from "react";
import { StyledSecondArticle, StyledSecondArticleBox, StyledSecondArticleImageBox, StyledSecondArticleImgBlockOfFlat, StyledSecondArticleImgModernHouse, StyledSecondArticleImage, StyledSecondArticleBlueBox, StyledSecondArticleContentBox, StyledSecondArticleContentBoxTitle, StyledSecondArticleContentBoxPar, StyledSecondArticleContentBoxButton, StyledSecondArticleImageArchitectureBox, StyledSecondArticleImgHightArhitecture} from "./SecondArticle.styled";



const FirstArticle = () => {
    return (
        <StyledSecondArticle>
          <StyledSecondArticleBox > 
            <StyledSecondArticleImageBox>
              <StyledSecondArticleImgBlockOfFlat>
                <StyledSecondArticleImage className='image' src={require('../../img/block_of_flat_secont_article.jpeg')} alt="architecture"/> 
              </StyledSecondArticleImgBlockOfFlat> 
              <StyledSecondArticleImgHightArhitecture>
                <StyledSecondArticleImage className='image' src={require('../../img/hight-architecture_second-article.jpg')} alt="architecture"/> 
              </StyledSecondArticleImgHightArhitecture>
              <StyledSecondArticleImgModernHouse>
                <StyledSecondArticleImage className='image' src={require('../../img/modern_house_second_article.jpg')} alt="architecture"/> 
              </StyledSecondArticleImgModernHouse>
              <StyledSecondArticleBlueBox>
                <StyledSecondArticleContentBox>
                  <StyledSecondArticleContentBoxTitle>30 world-famous buildings to inspire</StyledSecondArticleContentBoxTitle>
                  <StyledSecondArticleContentBoxPar>Anyone with a creative bone in their body cannot fail to be inspired by famous buildings. Outstanding architecture, stunning location and clever use of materials all contribute to what makes famous buildings such influences on creativity – and that's before you throw history and purpose into the mix.</StyledSecondArticleContentBoxPar>
                  <StyledSecondArticleContentBoxButton>continue reading</StyledSecondArticleContentBoxButton>
                </StyledSecondArticleContentBox>
                <StyledSecondArticleImageArchitectureBox>
                  <StyledSecondArticleImage className='image' src={require('../../img/architecture_third_article.jpeg')} alt="architecture"/> 
                </StyledSecondArticleImageArchitectureBox>
              </StyledSecondArticleBlueBox>
            </StyledSecondArticleImageBox>
          </StyledSecondArticleBox > 
        </StyledSecondArticle>
    )
 };
 
 export default FirstArticle;
 