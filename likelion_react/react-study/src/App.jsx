import {

    Main,
    MediaDiv,
 
} from './styledComponent';

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
import {
   
    faArrowsRotate,
    faPenToSquare,
    faLocationPin,
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { lightTheme,darkTheme,GlobalStyles } from './styles';
import { ThemeProvider } from 'styled-components';
import loadingIcon from './loading.svg'
import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import ShowPost from './ShowPost';
import WritePost from './WritePost';

import { useState } from 'react';
function App() {
    const initialPostList =[
        {id: 1, title:'시사 n대학기자상 취재', replCount: 1},
        {id: 2, title:'시사 n대학기자상 취재', replCount: 43},
        {id: 3, title:'시사 n대학기자상 취재', replCount: 2},
    ];
    const [ darkMode,setDarkMode ] = useState(true);
    
    const addPost = () => {
        setPostList((postList) => [
            ...postList, {id:4, title:'학보,시사N 대학기자상 취재',replCount: 21},
        ]);
    };
    return (
    <>
        {/*리셋을 적용하여 브라우저의 기본 디자인과 여백을 무시하는 코드*/}

      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
            <Header />
            <Main>
            <Slogun />
                <Routes>
                    <Route path="/" element={
                        <ShowPostList/>
                    }>

                    </Route>
                    <Route path="/write" element={<WritePost></WritePost>}>

                    </Route>
                    <Route path="/post/:postID" element={<ShowPost></ShowPost>}></Route>
                </Routes>
                
               
            </Main>
           <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
    );
}

export default App;
