import React from 'react';
import { PostTitleDiv, PostTitle } from './styledComponent';

const WrtieTitle = () => {
   return (
      <PostTitleDiv>
        <PostTitle>글쓰기</PostTitle>
      </PostTitleDiv>
   );
};

export default React.memo(WrtieTitle);