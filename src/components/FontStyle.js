import { createGlobalStyle } from 'styled-components';
// import MatrixWoff  from "../fonts/matrix-vs-miltown.woff";
// import MatrixWof2f  from "../fonts/matrix-vs-miltown.woff2";
import Roboto  from "../fonts/Roboto-Regular.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  src: url(${Roboto}) format('ttf')
}
`;

export default FontStyles;