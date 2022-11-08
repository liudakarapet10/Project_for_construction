import styled from "styled-components";
import { colors } from "../../global";

export const StyledThirdArticle = styled.div`
  width: 100%;
  height: auto;
`;

export const StyledThirdArticleBox = styled.div`
  width: 100%;
  height: auto;

  @media (min-width: 800px) {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const StyledThirdArticleContentBox = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  margin-top: 76px;

  @media (min-width: 800px) {
    width: 40%;
  }

  @media (min-width: 1080px) {
    width: 30%;
  }
`;

export const StyledThirdArticleContentBoxGlassHouse = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  margin-top: 76px;

  @media (min-width: 800px) {
    width: 40%;
    margin-top: 290px;
  }

  @media (min-width: 1080px) {
    width: 30%;
    margin-top: 390px;
    margin-left: 40px;
  }
`;

export const StyledThirdArticleContentBoxBigGlassHouse = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  margin-top: 76px;

  @media (min-width: 800px) {
    width: 40%;
    margin-top: -240px;
    margin-left: 40px;
  }

  @media (min-width: 1080px) {
    width: 30%;
    margin-top: 50px;
  }
`;

export const StyledThirdArticleContentBoxTitle = styled.h2`
  font-size: 24px;
  font-weight: 300;
  margin-right: 20%;
  margin-bottom: 25px;
`;

export const StyledThirdArticleContentBoxLink = styled.a`
  display: inline-block;
  font-size: 16px;
  color: ${colors.lightblue};
  margin-bottom: 67px;

  @media (min-width: 800px){
    :hover{
      color: ${colors.black};
      cursor: pointer;
    }
   }
`;

export const StyledThirdArticleContentBoxWrapper = styled.div`
     width: 90%;
     heigth: auto;
`;


export const StyledThirdArticleContentBoxImageBox = styled.div`
  width: 85%;
  height: auto;
  z-index: 1;
`;

export const StyledThirdArticleContentBoxImage = styled.img`
  width: 100%;
  height: auto;
`;

export const StyledThirdArticleContentBoxBlueBox = styled.div`
  width: 90%;
  height: 200px;
  background-color: ${colors.lightblue};
  margin-left: 10%;
  margin-top: -160px;
  z-index: 1;

  :last-of-type{
    margin-bottom: 60px;
  }

`;