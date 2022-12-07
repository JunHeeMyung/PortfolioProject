import { createGlobalStyle } from 'styled-components'
import NanumSquareNeo from 'font/NanumSquareNeo-Variable.woff'

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "NanumSquareNeo";
        src: url(${NanumSquareNeo}) format('woff');
        font-weight: normal;
    }

    html,body {
        font-family:'NanumSquareNeo';
        padding: ${props => props.padding || '0'};
        margin: ${props => props.margin || '0 auto'};
        background-color: ${props => props.backgroundColor || 'white'};
        color: ${props => props.color || 'black'};
        min-height:${props => props.minHeight || '100%'};
    }
`
export default GlobalStyle;