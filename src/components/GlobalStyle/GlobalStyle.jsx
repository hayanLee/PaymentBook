import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --main-color: #8fd0ff; // 배경
        --light-color : #abe63d; // 입력폼
        --first-color : #e1efce; //나머지 배경
        --second-color : #feffdc; // 카드
        --point-color : #fe1280; // 버튼, 호버
        --text : #0b0255;
        --point-text: #321098;

    }
    *{
        box-sizing: border-box;
    }
    body{
        width: 100vw;
        height: 100vh;

        /* background-color: black; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #root{
        width: 900px;
        height: 80%;
        min-height: 900px;
    }

`;

export default GlobalStyle;
