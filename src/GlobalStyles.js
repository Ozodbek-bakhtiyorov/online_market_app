import {createGlobalStyle} from "styled-components";
export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

  :root {
    --body-bg: #672a2a;
    --font-white: white;
    --dark-blue: #101018;
    --font-white2: #faebeb;
    --font-blue-darken: #0b0b2a;
    --bg-dark: #2a2222;
    --bg-dark2: #051438;
    --shadow: 0 6px 8px white;
    --font-black: black;
    --bg-btn: #72720f;
  }

  body {
    background: var(--body-bg);

    &::-webkit-scrollbar {
      width: 10px
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background: linear-gradient(30deg, #edd5d5, grey);
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: linear-gradient(30deg, #414966, #32186f);
      cursor: pointer;
      -webkit-transition: all .3s cubic-bezier(.42, .46, .82, .79);
      -moz-transition: all .3s cubic-bezier(.42, .46, .82, .79);
      -ms-transition: all .3s cubic-bezier(.42, .46, .82, .79);
      -o-transition: all .3s cubic-bezier(.42, .46, .82, .79);
      transition: all .3s cubic-bezier(.42, .46, .82, .79);
      &:hover {
        background: linear-gradient(30deg, #664d41, #6f6b18);
      }
    }
  }

  .container {
    width: 90%;
    margin: 0 auto;
  }

  .title {
    color: var(--font-blue-darken);
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      background: transparent;
      margin-right: 10px;
    }

    span .material-icons {
      color: var(--font-white);
      font-size: 50px;
      cursor: pointer;
    }
  }

  .logo {
    text-shadow: var(--shadow);
    display: inline-block;
  }

  .activeM {
    height: 100vh;
    opacity: 1;
    width: 100vw;
    transition: all .4s cubic-bezier(.42, .46, .82, .79);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
`