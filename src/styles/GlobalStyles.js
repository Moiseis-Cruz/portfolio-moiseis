import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        /* place-items: center; */
        background-color: #abacf0;
        width: 100%;
        max-width: 1440px;
        min-width: 320px;
        min-height: 100vh;
        margin: auto;
    }

    ul {
        list-style: none;
    }

    a {
        color: #000000;
        text-decoration: none;
    }
`