import {
   
    HeaderDiv,
    SubHeaderDiv,
    TitleBig,
    TitleLogoDiv,
    TitleSmall,
} from './styledComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faSun,
    faMoon,
    
} from '@fortawesome/free-solid-svg-icons';


function Header({darkMode,setDarkMode}) {
    const toggleDarkMode = () => {
        setDarkMode((darkMode) =>!darkMode);
    };
    return (
        <HeaderDiv darkMode={darkMode} setDarkMode={setDarkMode}>
                <TitleLogoDiv>
                    <TitleBig>멋사</TitleBig>
                    <TitleSmall>익명게시판</TitleSmall>
                </TitleLogoDiv>
                <subHeaderDiv>
                    {darkMode ? (
                        <div>
                            <FontAwesomeIcon icon={faSun}/>
                        </div>
                        ) : (
                        <div>
                            <FontAwesomeIcon icon={faMoon}/>
                        </div>
                        )}
                </subHeaderDiv>
            </HeaderDiv>
    );
};

export default Header;