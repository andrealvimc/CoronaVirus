import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html, body, #root {
        background: #f9f9f9;
        height: 100%;
    }

    #root {
        font-family: "Roboto", sans-serif;
    }

    * {
        color: #333;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
