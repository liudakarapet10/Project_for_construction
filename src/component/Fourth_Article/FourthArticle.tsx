import React from "react";
import { StyledFourthArticle, StyledFourthArticleBox, StyledFourthArticleImageBox, StyledFourthArticleImage, StyledFourthArticleParBox, StyledFourthArticlePar, StyledFourthArticleIconsBox, StyledFourthArticleIconDiv, StyledFourthArticleIconBoxTitle, StyledFourthArticleIconBoxLink } from "./FourthArticle.styled";
import { HiOutlineNewspaper } from 'react-icons/hi';
import {TbCalendarStats} from 'react-icons/tb';
import {RiArticleLine} from 'react-icons/ri';
import {BiConversation} from 'react-icons/bi';



const FourthArticle = () => {
    return (
        <StyledFourthArticle>
          <StyledFourthArticleBox> 
            <StyledFourthArticleImageBox>
              <StyledFourthArticleImage src={require('../../img/picture_one_fourth_article.jpg')} alt="architecture"/>
            </StyledFourthArticleImageBox>
            <StyledFourthArticleParBox>
            <StyledFourthArticlePar>Rundeskogen Towers by dRMM and Helen & Hard in Sandnes, Norway. Photograph by Alex de Rijke</StyledFourthArticlePar>
            </StyledFourthArticleParBox> 
            <StyledFourthArticleIconsBox>
              <StyledFourthArticleIconDiv>
                <HiOutlineNewspaper />
                <StyledFourthArticleIconBoxTitle>All Projects</StyledFourthArticleIconBoxTitle>
                <StyledFourthArticleIconBoxLink>read more</StyledFourthArticleIconBoxLink>
              </StyledFourthArticleIconDiv>
              <StyledFourthArticleIconDiv>
                <TbCalendarStats />
                <StyledFourthArticleIconBoxTitle>Events</StyledFourthArticleIconBoxTitle>
                <StyledFourthArticleIconBoxLink>read more</StyledFourthArticleIconBoxLink>
              </StyledFourthArticleIconDiv>
              <StyledFourthArticleIconDiv>
                <RiArticleLine />
                <StyledFourthArticleIconBoxTitle>Articles</StyledFourthArticleIconBoxTitle>
                <StyledFourthArticleIconBoxLink>read more</StyledFourthArticleIconBoxLink>
              </StyledFourthArticleIconDiv>
              <StyledFourthArticleIconDiv>
                <BiConversation />
                <StyledFourthArticleIconBoxTitle>Interviews</StyledFourthArticleIconBoxTitle>
                <StyledFourthArticleIconBoxLink>read more</StyledFourthArticleIconBoxLink>
              </StyledFourthArticleIconDiv>
            </StyledFourthArticleIconsBox>
          </StyledFourthArticleBox> 
        </StyledFourthArticle>
    )
 };
 
 export default FourthArticle;
 