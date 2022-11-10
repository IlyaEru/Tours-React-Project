import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: auto;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  html {
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: 'Permanent Marker', cursive, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  body {

    background-color: #f1f5f8;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;
  }
  .btn{
    background-color: transparent;
  align-items: center;
  border: 1px solid gray;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  cursor: pointer;
  text-decoration: none;
  transition: all 250ms;
  &:active {
    transform: scale(0.97);
  }
  }
.container{
display: flex;
flex-direction: column;
align-items: center;
  .refresh-btn{
    background: #49a6e9;
    color: #fff;

    font-size: 1.2rem;
   padding: 0.25rem 0.5rem;
  }}
`;
