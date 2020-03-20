import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html, body, #root {
        height: 100%;
    }

    #root {
        background: #f9f9f9;
        font-family: "Roboto", sans-serif;
    }

    * {
        color: #333;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
