import styled, { createGlobalStyle } from 'styled-components'

import BGImage from './images/pic.jpg'

export const GlobalStyle = createGlobalStyle `
  html {
    height: 100%;
  }

  body {
    background-color: #292b37;
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 2rem;
    text-align: center;
  }
  .start, .next {
    cursor: pointer;
    background: #DD9AC2;
    border-radius: 10px;
    border: none;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    text-align: center;
  }
  .start {
    max-width: 200px;
  }

  h1 { 
    text-align: center;
    font-size: 2.5rem;
    color: #fff;
  }

  p span {
    color: #fff;
    text-align: center;
  }
`