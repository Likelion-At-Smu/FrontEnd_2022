import {
  HeaderDiv,
  SubHeaderDiv,
  TitleBig,
  TitleLogoDiv,
  TitleSmall,
} from './styledComponent';

import {
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header({ darkMode, setDarkMode}) {
  const toggleDarkMode = () => {
      setDarkMode((darkMode) => !darkMode)
  }
  return (
      <HeaderDiv>
          <TitleLogoDiv>
              <TitleBig>멋사</TitleBig>
              <TitleSmall>익명게시판</TitleSmall>
          </TitleLogoDiv>
          <SubHeaderDiv>
              {darkMode ? (
                  <FontAwesomeIcon onClick={toggleDarkMode} icon={faSun} />
              ) : (
                  <FontAwesomeIcon onClick={toggleDarkMode} icon={faMoon} />
              )}
          </SubHeaderDiv>
      </HeaderDiv>
  );
}

export default Header