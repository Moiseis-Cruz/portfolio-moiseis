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
        background-color: #ECB176;
        border-radius: 20px;
        border: 3px double #6F4E37;
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
        /* color: rgba(255, 255, 255, 0.87); */
        background-color: #242424;
        color: #FED8B1;
        background-color: #6F4E37;

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
        /* cores para mudanças */
        color: #6F4E37;
        color: #A67B5B;
        color: #ECB176;
        color: #F8EDE3;
        color: #FED8B1;
        /* Cor utilizada */
        /* color: #ffffff; */
        /* background-color: #A67B5B; */
        text-decoration: none;
    }
`