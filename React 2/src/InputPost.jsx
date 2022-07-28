import React, {useState, useRef, useEffect} from 'react';
import { ContentsInput, TitleInput } from './styledComponents';

function InputPost({onChange, contents, title}) {
    const titleInput = useRef();
    const contentsInput = useRef();

    useEffect(()=>{ //바로 제목입력을 할 수 있도록 한다
        titleInput.current.focus();
    }, []);

    const onKeyUp = (e) => { //Enter키를 입력하면 내용 입력으로 넘어감
        if(e.key === 'Enter') {
            contentsInput.current.focus(); 

        }
    }
    return (
        <>
            <TitleInput  
                name="title" 
                type="text" 
                placeholder="제목을 입력해주세요 (15자 이내)" 
                value={title}
                onChange={onChange} 
                ref={titleInput}
                onKeyUp={onKeyUp}
                />
                <ContentsInput  
                name="contents"
                value={contents} 
                cols='30' 
                rows='10' 
                onChange={onChange}
                ref={contentsInput}
                ></ContentsInput>
        </>
    )
}

export default InputPost;