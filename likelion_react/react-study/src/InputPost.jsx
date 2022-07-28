import React, {useState, useRef, useEffect } from 'react';
import { ContentsInput, TitleInput } from './styledComponent';

function InputPost(onChange, contents, title) {
    const titleInput = useRef();
    const contentsInput = useRef();
    useEffect(()=>{
        titleInput.current.focus();
    }, []);
    const onKeyUp=(e)=>{
        if(e.key === 'Enter'){
            contentsInput.current.focus();//제목입력칸에서 entet을 누르면 글쓰는 창으로 넘어가는 부분
        }
    }
    return(
        <>
        <TitleInput
        name="title"
        type="text"
        placeholder="제목을 입력해주세요. (15자이내)"
        value={title}
        onChange={onchange}
        ref={titleInput}
        onKeyUp={onKeyUP}
        />
        <ContentsInput
         name="contents"
         value={contents}
         cols="30"
         rows="10"
         onChange={onChange}
         ref={contentsInput}
         ></ContentsInput>
    </>
    )
}

export default InputPost;