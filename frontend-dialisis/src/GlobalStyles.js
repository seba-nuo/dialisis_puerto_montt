import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;700&display=swap');

    * {
        font-family: 'Karla', sans-serif;
        font-weight: 800;
        font-size: 1.2rem;
    }
`


export default GlobalStyles;