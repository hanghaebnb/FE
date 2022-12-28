import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizeing: border-box;
  }
  @font-face {
  font-family: 'AirbnbCereal_W_Bd';
  src: local('AirbnbCereal_W_Bd') url('../fonts/AirbnbCereal_W_Bd.otf') fotmat('opentype');
  }
  @font-face {
    font-family: 'Cereal_Bk';
    src: url('../fonts/AirbnbCereal_W_Bk.otf');
  }
  @font-face {
    font-family: 'Cereal_Blk';
    src: url('../fonts/AirbnbCereal_W_Blk.otf');
  }
  @font-face {
    font-family: 'Cereal_Lt';
    src: url('../fonts/AirbnbCereal_W_Lt.otf');
  }
  @font-face {
    font-family: 'Cereal_Md';
    src: url('../fonts/AirbnbCereal_W_Md.otf');
  }
  @font-face {
    font-family: 'Cereal_XBd';
    src: url('../fonts/AirbnbCereal_W_XBd.otf');
  }
  @font-face {
    font-family: 'NotoSansKR-Regular';
    src: url('../fonts/NotoSansKR-Regular.otf');
  }
  /* body {
    font-family: 'Noto Sans KR', sans-serif;
  } */
`;

export default GlobalStyle;
