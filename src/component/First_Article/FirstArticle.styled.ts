import styled from "styled-components";
import { colors } from "../../global";

export const StyledFirstArticle = styled.div`
  width: 100%;
  height: auto;

`;

export const StyledFirstArticleBox = styled.div`
  width: 80%;
  height: auto; 
  margin: 0 auto; 
`;

export const StyledFirstArticleImageApartmentBox = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  position: relative;
  padding: 0;

  @media (min-width: 800px) {
    width: 90%;
    max-width: 690px;
    margin-left: -10%;
  }
`;

export const StyledFirstArticleImage = styled.img`
  width: 100%;
  height: auto; 
`;

export const StyledFirstArticleBlueBox = styled.div`
  width: 80%;
  max-width: 590px;
  height: 333px; 
  margin: 0 auto; 
  margin-top: -17px;
  background-color: ${colors.lightblue};

  @media (min-width: 800px) {
    width: 60%;
  }
`;

export const StyledFirstArticleImageArtectureBox = styled.div`
  width: 50%;
  height: auto;
  position: absolute;
  right: 13%;
  top: 35%;

  @media (min-width: 800px) {
    width: 35%;
    max-width: 400px;
    max-height: 365px;
    overflow: hidden;
    right: 20%;
    top: 50%;
  }

  @media (min-width: 1080px){
    right: 25%; 
  }
`;

export const StyledFirstArticleContentBox = styled.div`
  width: 75%;
  height: auto; 
  margin: 0 auto;
  box-shadow: 1px 1px 18px 8px rgb(0 0 0 / 0.2);
  background-color: ${colors.white};
  position: absolute;
  left: 0; 
  right: 0; 
  bottom: -50%;

  .content_box_arrow{
    width: 46px;
    height: 46px;
    margin-left: 5px;
    margin-bottom: 30px;
  }

  @media (min-width: 800px){
    width: 40%;
    height: 400px;
    max-width: 575px;
    right: -50%; 
    top: 20%;
  }

  @media (min-width: 1080px){
    right: -40%; 
  }
`;

export const StyledFirstArticleContentBoxPar = styled.p`
  display: inline-block;
  margin: 66px 38px 38px 13px;
  font-size: 42px;
  line-height: 46px;
  font-weight: lighter;

  @media (min-width: 800px){
    font-size: 52px;
    line-height: 60px;
  }
`;

export const StyledFirstArticleBlueBoxSmall = styled.div`
  width: 80%;
  max-width: 590px;
  height: 434px; 
  margin: 0 auto;
  background-color: ${colors.lightblue}; 

  @media (min-width: 800px) {
    width: 60%;
  }
`;

export const StyledFirstArticleContentBoxSecond = styled.div`
  width: 90%;
  max-width: 515px;
  max-height: 474px;
  height: auto; 
  margin: 0 auto;
  box-shadow: 1px 1px 18px 8px rgb(0 0 0 / 0.2);
  background-color: ${colors.white};

  @media (min-width: 800px) {
    width: 70%;
    margin-top: -465px;
    margin-left: -5%;
    position: absolute;
    z-index: 2;
  }
`;

export const StyledFirstArticleContentBoxSecondPar = styled.p`
  display: inline-block;
  margin: 66px 38px 38px 13px;
  font-size: 32px;
  line-height: 46px;
  font-weight: lighter;
`;

export const StyledFirstArticleContentBoxSecondLink = styled.a`
  display: inline-block;
  margin-left: 13px;
  margin-bottom: 44px;
  font-size: 16px;
  color: #9BCDFC;
  border-bottom: 2px solid #9BCDFC;
  padding-bottom: 4px;
`;

export const StyledFirstArticleImageBusinessCenterBox = styled.div`
  width: 95%;
  max-width: 890px;
  height: auto; 
  margin: 0 auto;

  @media (min-width: 800px) {
    width: 90%;
    z-index: 1;
    margin-top: -160px;
    margin-right: -5%;
    position: relative;

  }
`;

export const StyledFirstArticleBlueBoxSmallSecond = styled.div`
  width: 80%;
  max-width: 590px;
  height: 434px; 
  margin: 0 auto;
  background-color: ${colors.lightblue}; 
  height: 164px;
  margin-top: -5px;

  @media (min-width: 800px) {
    width: 60%;
  }
`;

export const StyledFirstArticleContentBoxSpaces = styled.div`
  width: 100%; 
  height: auto;
  text-align: left;
  margin-top: 132px;

  @media (min-width: 800px) {
    width: 50%;
    max-width: 360px;
    margin-top: 110px;
  }
`;

export const StyledFirstArticleContentBoxSpacesTitle = styled.h2`
  font-size: 46px;
  font-weight: 300;
  line-height: 55px;
`;

export const StyledFirstArticleContentBoxSpacesSpan = styled.span`
  display: inline-block;
  width: 100%;
`;

export const StyledFirstArticleContentBoxSpacesPar = styled.p`
  margin-top: -18px;
  margin-bottom: 43px;
  font-size: 16px;
`;

export const StyledFirstArticleContentBoxSpacesButton = styled.button`
  width: 202px;
  height: 42px;
  border: 2px solid ${colors.lightblue};
  background-color: white;
  font-size: 16px;
  letter-spacing: 1.5px;
  margin-bottom: 232px;
`;