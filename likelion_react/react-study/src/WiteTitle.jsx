import React from 'react';
import { PostTitleDiv, PostTitle } from './styledComponent';

function WiteTitle() {
    return (
      <PostTitleDiv>
        <PostTitle>글쓰기</PostTitle>
      </PostTitleDiv>
    );
}

export default React.memo(WritetTitle);