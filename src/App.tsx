import React from "react";
import { createGlobalStyle } from "styled-components";
import FirstArticle from "./component/First_Article/FirstArticle";
import SecondArticle from './component/Second_Article/SecondArticle'
import Header from "./component/Header/Header";
import ThirdArticle from "./component/Third_Article/ThirdArticle";
import FourthArticle from "./component/Fourth_Article/FourthArticle";
import Footer from "./component/Footer/Footer";



const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    max-width: 1200px;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <FirstArticle />
      <SecondArticle />
      <ThirdArticle />
      <FourthArticle />
      <Footer />
    </div>
  );
};

export default App;