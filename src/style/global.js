import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding: 0;
        background-color: var(--grey-0);
        font-family: 'Inter', sans-serif;
    }

    :root{
        --purple-50:#a29bfe;
        --purple-100:#6c5ce7;
        --white: #f5f5f5;
        --green: #27ae60;
        --grey-0: #ecf0f1;

    }
`;

export default GlobalStyle;
