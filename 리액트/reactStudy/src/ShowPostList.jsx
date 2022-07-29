import {
    LoadingDiv,
    LoadingImg,
    PagenumberDiv,
    PagingSection,
    PostSection,
    PostTitle,
    PostTitleDiv,
} from './styledComponent';
import {
    faArrowsRotate,
    faPenToSquare,
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import loadingIcon from './loading.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ShowPostList(isPost , loading) {
  return (
    <>
    <PostSection>
    <PostTitleDiv>
        <FontAwesomeIcon icon={faArrowsRotate}/>
        <PostTitle>익명게시판</PostTitle>
        <FontAwesomeIcon icon={faPenToSquare}/>
    </PostTitleDiv>
    {loading ?(
    <LoadingDiv>
        <LoadingImg src ={loadingIcon} />
    </LoadingDiv>) :  isPost ?(
    <LoadingDiv>
        아직 기록된 글이 없습니다.
        </LoadingDiv>
    ):(
    <ul>
            <EachPost />
        </ul>)}
   
</PostSection>
<PagingSection>
    <PagenumberDiv>
        <FontAwesomeIcon icon={faArrowLeft}/>
    </PagenumberDiv>
    <PagenumberDiv>
        2
    </PagenumberDiv>
    <PagenumberDiv>
        <FontAwesomeIcon icon={faArrowRight}/>
    </PagenumberDiv>
</PagingSection>
    </>
  )

}

export default ShowPostList