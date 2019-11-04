import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        line-height: 1.4;
        font-family: "Segoe UI", "Segoe UI Web (West European)", "Helvetica Neue", sans-serif;
        font-weight: 300;
    }
`;

export const theme = {
    leftNavBg: 'rgb(212, 212, 212)',
    leftNavColor: 'rgb(50, 49, 48)',
    leftNavSize: '14px', 
    leftNavBgHover: 'rgb(200, 200, 200)',
    leftNavBgActive: 'rgb(161, 161, 161)'
}


export const ComponentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const PageContent = styled.div`
    display: flex;
`;