import { Global, css } from '@emotion/react';
import React from 'react';

const style = css`
  html {
    font-size: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    overflow: initial !important;
    font-size: 15px;
    line-height: 1.46668;
    font-weight: 400;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  @font-face {
  }
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;
