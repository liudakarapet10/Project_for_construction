import styled from "styled-components";
import { colors } from "../../global";

export const StyledFourthArticle = styled.div`
  width: 100%;
  height: auto;
  
`;

export const StyledFourthArticleBox = styled.div`
  width: 100%;
  height: auto; 
  background-color: #F5FAFF;
  padding-top: 70px;
  padding-bottom: 15px;
  position: relative;

  @media (min-width: 1080px){
    display: flex;
  }

`;

export const StyledFourthArticleImageBox = styled.div`
  width: 85%;
  height: auto; 
  margin: 0 auto;
  margin-bottom: 30px;
  position: relative;

  @media (min-width: 800px){
    max-width: 560px;
    max-height: 650px;
    overflow: hidden;  
  }

`;

export const StyledFourthArticleImage = styled.img`
  width: 100%;
  height: auto;
`;

export const StyledFourthArticleParBox = styled.div`
  width: 85%;
  height: auto;
  margin: 0 auto;
  background-color: #4F5153;
  opacity: 0.8;
  position: absolute;
  left: 0;
  right: 0;
  top: 505px;

  @media (min-width: 600px){
    top: 1088px;
  }

  @media (min-width: 800px){
    max-width: 560px;
    top: 640px;
  }

  @media (min-width: 1200px){
    right: 650px;
    max-width: 550px;
  }
`;

export const StyledFourthArticlePar = styled.p`
  font-size: 16px;
  font-weight: 600;
  padding: 2px;
  color: ${colors.white};

`;

export const StyledFourthArticleIconsBox = styled.div`
  width: 100%;
  height: auto; 

  @media (min-width: 800px){
    display: flex;
    flex-wrap: wrap;
  }
`;

export const StyledFourthArticleIconDiv = styled.div`
    width: 80%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 30px;
    text-align: center;
    background-color: ${colors.white};
    padding-top: 40px;
    padding-bottom: 70px; 
    
    @media (min-width: 800px){
      width: 360px;

      :hover{
        background-color: ${colors.gray};
      }
    }

    @media (min-width: 1080px){
      width: 274px;
    }

    svg {
    width: 20%;
    height: auto;
    color: ${colors.lightblue};
    margin-top: 20px;
  }
`;

export const StyledFourthArticleIconBoxTitle = styled.h2`
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 30px;
`;

export const StyledFourthArticleIconBoxLink = styled.a`
  color: ${colors.lightblue};
`;