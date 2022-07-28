import { Main,MediaDiv } from './styledComponents';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './styles';

import Header from './Header';
import Footer from './Footer';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import { useState } from 'react';
// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons

import { Routes, Route } from "react-router-dom";
import ShowPost  from './ShowPost';
import WritePost from './WritePost';

function App() {
  const [darkMode,setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
        <GlobalStyles/>
        <MediaDiv>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Main>
              <Slogun />
              <Routes>
                <Route path="/" element=
                {<ShowPostList 
                />}>
                </Route>
                <Route path='/write' element={<WritePost></WritePost>}></Route>
                <Route path='/post/:postId' element={<ShowPost></ShowPost>}></Route>
              </Routes>
            </Main>
            <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;