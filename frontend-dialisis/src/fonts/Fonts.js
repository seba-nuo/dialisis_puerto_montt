import { createGlobalStyle } from 'styled-components';

import Karla from './Karla.woff';
import Karla2 from './Karla.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Karla';
        src: local('Karla'), local('Karla'),
        url(${Karla2}) format('woff2'),
        url(${Karla}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;