import React, { useState } from 'react';
import{
  ContentsInput,
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostTitle,
  PostTitleDiv,
  PostWriteDiv,
  TitleInput,
} from './styledComponent';
import WriteTitle from './WriteTitle';
import InputPost from './InputPost';

const SubmitComponent = React.memo(() => {
  <PostSubmitDiv>
    <PostSubmit>작성완료</PostSubmit>
  </PostSubmitDiv>
});

const WritePost = (props) => {
   const [inputs, setInputs] = useState({
    title: '',
    contents: '',
   });
   const {title, contents } = inputs;
   const onChange = (e) => {
    const { value,name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
   }
};

return (
    <PostSection>
      
      <WriteTitle />

      <PostWriteDiv>
       <InputPost onChange={onChange}
          title={title}
          contents={contents}></InputPost>
      
      </PostWriteDiv>
      <SubmitComponent />
    </PostSection>
  );

export default WritePost;