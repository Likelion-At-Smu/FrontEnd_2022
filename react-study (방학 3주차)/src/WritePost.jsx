import React, { useState } from "react";
import {
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostWriteDiv,
} from "./styledComponents";

import { /*PostSection,*/ PostTitle, PostTitleDiv, TitleInput, ContentsInput } from './styledComponents';


function WritePost () {

    
  const { title, contents } = inputs;

  // ... 기본 input 값 복사 후 적용
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
    });

    return (
        <PostSection>
            <PostTitleDiv>
                <PostTitle>글쓰기</PostTitle>
            </PostTitleDiv>
            <PostWriteDiv>
                <TitleInput onChange={onChange} name="title" value={title} placeholder="제목을 입력해주세요" />
                <ContentsInput onChange={onChange} name="contents" value={contents} cols='30' rows='10'></ContentsInput>
            </PostWriteDiv>
            <PostSubmitDiv>
                <PostSubmit>작성완료</PostSubmit>
            </PostSubmitDiv>
        </PostSection>
    );
};

export default WritePost;