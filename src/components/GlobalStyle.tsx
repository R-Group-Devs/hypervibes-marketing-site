import { createGlobalStyle } from 'styled-components';
import { colors } from '../constants/colors';
import circlesBg from '../assets/images/circles-bg.png';
import '../styles/fonts.css';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: 'iA Writer Mono', 'Courier New', Courier, monospace;
    font-size: 112.5%/1.45em;
    box-sizing: border-box;
    overflow-y: scroll;
  }

  body {
    margin: 0;
    background: url(${circlesBg}) 42% 100px no-repeat, linear-gradient(#090909 20%, #193c36 100%);
    background-size: 600px auto, auto;
    background-attachment: fixed;
    font-family: 'Decima Mono', 'Courier New', Courier, monospace;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';

    @media (min-width: 650px) {
      background-size: 800px auto, auto;
    }

    @media (min-width: 1260px) {
      background-size: 1004px auto, auto;
    }

    @media (min-width: 1800px) {
      background-size: 1200px auto, auto;
    }
  }

  a {
    padding-bottom: 7px;
    color: #fff;
    text-decoration: none;

    &:hover {
      padding-bottom: 6px;
      border-bottom: 1px solid #fff;
    }
  }

  p {
    font-weight: 300;
  }

  ::selection {
    color: ${colors.primary};
    background: ${colors.accent};
  }
`;
