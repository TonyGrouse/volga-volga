import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `

    * {
        padding: 0px;
        margin: 0px;
        border: 0px;
    }

    *,
    *:before,
    *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    :focus,
    :active {
        outline: none;
    }

    a:focus,
    a:active {
        outline: none;
    }

    aside,
    nav,
    footer,
    header,
    section {
        display: block;
    }

    html,
    body {
        height: 100%;
        min-width: 320px;
    }

    body {
        line-height: 1;
        font-family: 'Roboto', sans-serif;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }

    input,
    button,
    textarea {
        font-family: 'Roboto', sans-serif;
    }

    input::-ms-clear {
        display: none;
    }

    button {
        cursor: pointer;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    a,
    a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: inherit;
        font-size: inherit;
    }

    body {
        background-color: #fff;
        color: rgb(20, 20, 20);
        font-size: 15px;
        overflow-x: hidden;
    }

    .container {
        max-width: 1170px;
        padding: 0 15px;
        margin: 0 auto;
        width: 100%;
    }

    @media (max-width: 1140px) {
        .container {
            max-width: 970px;
        }
    }

    @media (max-width: 991.98px) {
        .container {
            max-width: 750px;
        }
    }

    @media (max-width: 767.98px) {
        .container {
            max-width: none;
            padding: 0 10px;
        }
    }
`;