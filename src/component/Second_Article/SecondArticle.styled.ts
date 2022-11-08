import styled from "styled-components";
import { colors } from "../../global";

export const StyledSecondArticle = styled.div`
  width: 100%;
  height: auto;


`;

export const StyledSecondArticleBox = styled.div`
  width: 100%;
  height: auto;
`;

export const StyledSecondArticleImageBox = styled.div`
  width: 90%;
  height: auto;
  margin-left: 5%;
  z-index: -1;
`;

export const StyledSecondArticleImgBlockOfFlat = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  z-index: 1;

  @media (min-width: 800px){
    width: 40%;
    max-width: 440px;
    margin-top: -715px;
    margin-right: 0px;
  }
`;

export const StyledSecondArticleImgHightArhitecture = styled.div`
   width: 70%;
   height: auto;
   margin: 0 auto;
   margin-top: -45px;

   @media (min-width: 800px){
    width: 40%;
    max-width: 520px;
    margin-right: 120px;
    margin-top: -80px;
  }
`;

export const StyledSecondArticleImgModernHouse = styled.div`
  width: 80%;
  height: auto;
  margin-left: 20%;
  margin-top: -55px;
  margin-bottom: 82px;
  z-index: 2;

  @media (min-width: 800px){
    width: 40%;
    margin-top: -60px;
    margin-left: 443px;
  }


  @media (min-width: 1080px){
    width: 40%;
    margin-top: -90px;
    margin-left: 620px;
  }
`;

export const StyledSecondArticleImage = styled.img`
  width: 100%;
  height: auto; 
`;

export const StyledSecondArticleBlueBox = styled.div`
  width: 80%;
  height: 893px;
  margin: 0 auto;
  background-color: #E4EDF8;
  padding-top: 75px;

  @media (min-width: 800px) {
    width: 70%;
    height: 650px;
    max-width: 570px;
    z-index: -1;
  }
`;

export const StyledSecondArticleContentBox = styled.div`
  width: 75%;
  height: auto;
  background-color: ${colors.white};
  padding: 26px 24px 54px 21px;
  box-shadow: 1px 1px 18px 8px rgb(0 0 0 / 0.2);
  margin-left: -15px;

  @media (min-width: 800px) {
    width: 45%;
    max-width: 527px;
    margin-left: 225px;
    margin-top: -162px;
    position: absolute;
    z-index: 2;
  }
`;

export const StyledSecondArticleContentBoxTitle = styled.h2`
  font-size: 28px;
  font-weight: 300;
  margin-right: 30%;
`;

export const StyledSecondArticleContentBoxPar = styled.p`
  font-size: 16px;
  font-style: italic;
  font-weight: 500;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const StyledSecondArticleContentBoxButton = styled.button`
  width: 204px;
  height: 44px;
  border: 2px solid ${colors.lightblue};
  background-color: white;
  font-size: 16px;
  letter-spacing: 1.5px;

  @media (min-width: 800px){
    :hover{
      color: ${colors.black};
      border-color: ${colors.black};
      cursor: pointer;
    }
   }
`;

export const StyledSecondArticleImageArchitectureBox = styled.div`
  width: 92%;
  height: auto;
  margin-left: -15px;
  margin-top: -20px;

  @media (min-width: 600px) {
    width: 85%;
    margin-left: -18px;
  }


  @media (min-width: 800px) {
    width: 100%;
    max-width: 570px;
    position:relative;
    z-index: 1;
    margin-top: 150px;
    margin-left: -120px;
  }
`;



