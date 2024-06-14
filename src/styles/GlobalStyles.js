import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *::-webkit-scrollbar {
        width: 12px;
    }

    *::-webkit-scrollbar-track {
        background: #120C07;
        border-radius: 20px;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #b688dd;
        border-radius: 20px;
        border: 3px double #581051;
    }

    body {
        width: 100%;
        max-width: 1440px;
        min-width: 320px;
        min-height: 100vh;
        margin: auto;

        font-family: "Space Grotesk", sans-serif;
        font-optical-sizing: auto;
        /* font-weight: <weight>; */
        font-style: normal;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ul {
        list-style: none;
    }

    img {
        width: 100%;
        height: auto;
    }

    a {
        color: #ffffff;
        text-decoration: none;
    }
`