import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { 
    LoadingDiv,
    LoadingImg,
    PagenumberDiv,
    PagingSection,
    PostListDiv,
    PostRepl,
    PostSection,
    PostTitle,
    PostTitleDiv,
    CursorDiv,
    PostReplDiv,
    ReplTitleDiv,
    ReplWriter,
    Repl,
    WriterDiv,
    ReplInput,
    ReplSubmitDiv,
} from './styledComponent';

const postData = {
    title: '바운스',
    contents: "아기사자가 돌아서면 두 눈이 마주칠까, 심장이 bounce, bounce 두근 대 들릴까 봐 겁나 한참을 망설이다 용기를 내 밤새워 준비한 내 개사 들어줘, 처음 본 순간부터ㅓ 아기사자랑 친해질꺼야 생각했어~~, Baby, you're my trampoline You make me bounce Bound - 아기사자들은 다 귀여워 최고. ",
};

const replData = [
    {id: 2, content: '반가워요'},
    {id: 3, content: '멋쟁이 사자처럼 최고'},
];

const ShowPost = () => {
    const[post, setPost] = useState(postData);
    const[repls, setRepls] =useState(replData);
    const[postLoading, setPostLoading] = useState(true);
    const[replLoading, setReplLoading] = useState(false);

    const replCount = 0;

    return (
        <div>
           <PostSection>
            <PostTitleDiv>
                <PostTitle>{post && post.title}</PostTitle>
            </PostTitleDiv>

            {postLoading ? (
                <LoadingDiv>
                    <LoadingImg src={'$(process.env.PUBLIC_URL}/img/loading.svg'} />
                </LoadingDiv>
            ) : (
                <PostReplDiv>{post && post.contents}</PostReplDiv>
            )}

            {/*post content */}

            <ReplTitleDiv>댓글 {replCount}</ReplTitleDiv>
            {replLoading ? (
                <LoadingDiv>
                    <LoadingImg src={'$(process.env.PUBLIC_URL}/img/loading.svg'} />
                </LoadingDiv>
            ) : (
                repls &&
                repls.map((element) => (
                    <PostReplDiv key = {element.id}>
                    <ReplWriter>익명</ReplWriter>
                    <Repl>{element.contents}</Repl>
                    </PostReplDiv>
                ))
            )}

                <writerDiv>
                    <ReplInput></ReplInput>
                    <ReplSubmitDiv>
                        <span>입력</span>
                    </ReplSubmitDiv>
                </writerDiv>
            </PostSection>
        </div>
    );
};

export default ShowPost;