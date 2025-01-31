import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --primary-color: #6F4E37;
        --secundary-color: #A67B5B;
        --tertiary-color: #ECB176;
        --quartiary-color: #FED8B1;
        --light-color: #F8EDE3;
        --dark-color: #120C0799;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *::-webkit-scrollbar {
        width: 12px;
    }

    *::-webkit-scrollbar-track {
        background: var(--dark-color);
        border-radius: 20px;
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--tertiary-color);
        border-radius: 20px;
        border: 3px double var(--primary-color);
    }

    body {
        width: 100%;
        max-width: 1440px;
        min-width: 320px;
        min-height: 100vh;
        margin: auto;

        font-family: "Space Grotesk", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;

        color-scheme: light dark;
        color: var(--quartiary-color);
        background-color: var(--primary-color);

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
        color: var(--quartiary-color);
        text-decoration: none;
    }
`