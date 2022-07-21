import React, {useState, useEffect} from 'react';
import {
   
    LoadingDiv,
    LoadingImg,
    PagenumberDiv,
    PagingSection,
  
    PostListDiv,
 
    PostSection,
    PostTitle,
    PostTitleDiv,
    CursorDiv,
   
   
} from './styledComponent';
import { useNavigate } from 'react-router-dom';
import {
   
    faArrowsRotate,
    faPenToSquare,
  
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

const initialPostList =[
    {id: 1, title:'시사 n대학기자상 취재', replCount: 1},
    {id: 2, title:'시사 n대학기자상 취재', replCount: 43},
    {id: 3, title:'시사 n대학기자상 취재', replCount: 2},
];

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EachPost from './EachPost';
import loadingIcon from './loading.svg'
function ShowPostList({isPost, loading, addPost, postList}) {
    {/*로딩중인 상태를 구분하는 로딩 변수*/ }
    const [loading, setLoading] = useState(true);

    {/*포스트가 있는지 구분해줄 변수*/ }
    const [isPost, setIsPost] = useState(false);

    const [postList, setPostList] = useState([]);

    const addPost = () => {
        setPostList((postList) => [
            ...postList, {id:4, title:'학보,시사N 대학기자상 취재',replCount: 21},
        ]);
    };
    const navigate = useNavigate();
    const goWrite = () => {
        navigate('/write');
    }

    useEffect(()=> {
        setTimeout(()=>{
            setPostList(initialPostList);
            setLoading(false);
        },5000)
    }, []);
    return (
        <>
        <PostSection>
                    <PostTitleDiv>
                        <FontAwesomeIcon onClick={addPost} Icon={faArrowsRotate}/>
                        <PostTitle>익명게시판</PostTitle>
                        <CursorDiv>
                        <FontAwesomeIcon onClick={goWrite} Icon={faPenToSquare}/>
                        </CursorDiv>
                    </PostTitleDiv>
                    <PostListDiv>
                    {loading ? (
                        <LoadingDiv>
                            <LoadingImg src={loadingIcon} />
                        </LoadingDiv>
                    ) : 
                    (
                        isPost? (
                        <LoadingDiv>기록된 글이없습니다 </LoadingDiv>
                        ) : (
                        <ul>
                            {postList.map((element) => (
                                <EachPost key={element.id} title={element.title} replCount={element.replCount}/>
                            ))}
                          
                        </ul>)
                        )}
                   
                        
                    </PostListDiv>
                </PostSection>
                <PagingSection>
                    <PagenumberDiv>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </PagenumberDiv>
                    <PagenumberDiv>2</PagenumberDiv>
                    <PagenumberDiv>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </PagenumberDiv>
                </PagingSection>
            </>
    );
};

export default ShowPostList;