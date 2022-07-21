import React from 'react';

const WritePost = () => {
    return (
        <div>
            <div>write</div>
        </div>
    );
};

return (
    <PostSection>
      <WriteTitle />
      <PostWriteDiv>
        <InputPost onChange={onChange}>
          title={title} contents={contents}
        </InputPost>
      </PostWriteDiv>
      <PostSubmitDiv>
        <PostSubmit>작성완료</PostSubmit>
      </PostSubmitDiv>
      <SubmitComponent onSubmit={onSubmit} />
    </PostSection>
  );

export default WritePost;