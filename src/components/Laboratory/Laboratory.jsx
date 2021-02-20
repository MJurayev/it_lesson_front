import React, { createRef, useRef } from 'react'
import st from './Laboratory.module.scss'
export default function Laboratory() {
    const selectedLang = useRef(null);
    const languages= [
        {language:"C++", template:"<html><html>"}
    ]
    function changeLang(){
        const found = languages.find(l=>l.language===selectedLang.current.value);
        localStorage.setItem('text_in_editor', found.template);
    }
    function onTyping(){
        localStorage.setItem('text_in_editor', content.current.innerHTML)
    }
    // useEffect(() => {
    //     content.current.innerHTML = localStorage.getItem('text_in_editor') !== null ?  localStorage.getItem('text_in_editor') :' '
    // }, [localStorage]);
    const EditorStyle ={
    height: '100%',
    width: '100%', 
    border: 'solid',
    borderWidth: '1px',
    // padding: '15px'
    }
     const content = createRef(null);
    return (
        <>
        
            <div className={st.laboratory}>
            <div className={st.editor_section}> 
                <div className={st.top}>
                    <div className={st.editorTitle}>Text editor with auto-save</div>
                    <select 
                    onChange={changeLang} 
                    ref={selectedLang} 
                    name="progLang" 
                    className={st.selectLang}> 
                    <option value="" selected>...</option>
                        {languages.map((l=>{
                            return <option  value={l.language}>{l.language}</option>
                        }))}
                        
                    </select>
                </div>
                <code
                    className={st.editor}
                    onKeyDown={onTyping} 
                    onKeyUp={onTyping} 
                    ref={content} 
                    contenteditable="true" 
                    style={EditorStyle}>
                </code>
            </div>
            <div className={st.result}>kl</div>
            </div>
        </>
    )
}
