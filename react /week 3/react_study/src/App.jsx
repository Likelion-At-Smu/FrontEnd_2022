import {
    Main,
    MediaDiv,
} from './styledComponent';

import { darkTheme, GlobalStyles } from '../../react_study/src/styles';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../react_study/src/styles';
import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';
import { useState } from 'react';

function App() {
    const initialPostList = [
        {id:1, title:', 시사N 대학기자상 취재', replCount:1},
        {id:2, title:'학보, 시사N 대학기자상 취재', replCount:43},
        {id:3, title:'학보, 시사N 대학기자상 취재', replCount:2},
    ];
    const [ darkMode, setDarkMode ] = useState(true);
    const [ loading, setLoading ] = useState(false);
    const [ isPost, setIsPost ] = useState(false);
    const [ postList, setPostList ] = useState(initialPostList);
    const addPost = () => {
        setPostList((postList) => [
            ...postList, 
            {id:4, title:'학보, 시사N 대학기자상 취재', replCount:21},
        ]);
    };
    return (
        <>
            <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
                <GlobalStyles />
                <MediaDiv>
                    <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                    <Main>
                        <Slogun />
                        <ShowPostList 
                        loading={loading} 
                        isPost={isPost} 
                        postList={postList}
                        addPost={addPost} 
                        />
                    </Main>
                    <Footer />
                </MediaDiv>
            </ThemeProvider>
        </>
    );
}

export default App;
