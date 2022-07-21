import { createGlobalStyle } from 'styled-components';

//yarn add styled-reset
import reset from 'styled-reset';

//라이트테마와 다크테마를 작성할 부분
export const lightTheme = {
    fontcolor: '#2c2c2c',
    bgColor: 'white',
};

export const darkTheme = {
    fontColor: 'white',
    bgColor: '#2c2c2c',

};

export const GlobalStyles = createGlobalStyle`
    ${reset}
`;
