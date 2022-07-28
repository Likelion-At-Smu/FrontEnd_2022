import { useState, useEffect, useCallback } from 'react';
import {
    LoadingDiv,
    LoadingImg,
    PagenumberDiv,
    PagingSection,
    PostListDiv,
    CursorDiv,
    PostSection,
    PostTitle,
    PostTitleDiv,
} from './styledComponents';

import {
    faArrowsRotate,
    faPenToSquare,
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loadingIcon from './loading.svg'
import EachPost from './EachPost';

const initioalPostList = [
  {id:1,title:'학보,시사N 대학기자상 취재'},
  {id:2,title:'게시판 제목 글쓰기!'},
  {id:3,title:'상명대 멋사 3주차 과제!'},
];

function ShowPostList() {

  const [loading, setLoading] = useState(true);
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState([]);

  const addPost = useCallback(() => {
    setPostList((postList) => [
      ...postList,
      {id:4, title:'학보, 시사N 대학기자상 취재'},
    ]);
  }, [postList]);

  const navigate = useNavigate();
  const goWrite = () => {
    navigate('/write');
  };

  useEffect(()=>{
    setTimeout(()=>{
      setPostList(initioalPostList);
      setLoading(false);
    },600);
  }, []);
    return (
        <>
        <PostSection>
                <PostTitleDiv>
                  <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate}/>
                  <PostTitle>익명게시판</PostTitle>
                  <CursorDiv>
                    <FontAwesomeIcon onClick={goWrite} icon={faPenToSquare}/>
                  </CursorDiv>
                </PostTitleDiv>
                {loading ? (
                <LoadingDiv>
                  <LoadingImg src={loadingIcon}/>
                </LoadingDiv>) :(isPost?
                <LoadingDiv>
                아직 기록된 글이 없음
                </LoadingDiv>:
                (<ul>
                    {postList.map((element) => (
                        <EachPost key={element.id} title={element.title} postID={element.id} />
                    ))}

              </ul>))}

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
    )
}

export default ShowPostList 