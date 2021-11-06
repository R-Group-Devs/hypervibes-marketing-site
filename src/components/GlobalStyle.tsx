import { createGlobalStyle } from 'styled-components';
import { colors } from '../constants/colors';

export const GlobalStyle = createGlobalStyle`
  * {
    border-sizing: border-box;
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
    padding-top: 69px;
    background: linear-gradient(#090909 30%, #193c36 100%);
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
  }

  ::selection {
    color: ${colors.primary};
    background: ${colors.accent};
  }
`;
