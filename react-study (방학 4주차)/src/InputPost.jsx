import React, { useState, useRef, useEffect } from 'react'
import { ContentsInput, TitleInput } from './styledComponents'

export default function InputPost( {onChange, contents, title} ) {
    const titleInput = useRef();
    const contentsInput = useRef();
    useEffect(()=>{
        titleInput.current.focus();

    }, []);
    const onKeyUp = (e)=>{
        if(e.key === 'Enter'){
            contentsInput.current.focus();
        }
    }
  return (
    <>
        <TitleInput onKeyUp={onKeyUp} ref={titleInput} onChange={onChange} name="title" value={title} placeholder="제목을 입력해주세요" />
        <ContentsInput ref={contentsInput} onChange={onChange} name="contents" value={contents} cols='30' rows='10'></ContentsInput>
    </>
  )
}
