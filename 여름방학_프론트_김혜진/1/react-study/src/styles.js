import { createGlobalStyle } from 'styled-components';

//yarn add styled-reset
import reset from 'styled-reset';

export const lightTheme = {};

export const darkTheme = {
    fontColor: 'pink',
    backgroundColor: 'gray',
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
`;
