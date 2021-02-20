import {useState} from 'react'
import AceEditorCustom from './Editor/AceEditorCustom'
import st from "./Compiler.module.scss"

export default function Compiler() {
    
    const onLoad =()=>{
        console.log("loaded")
    }
    const onChange=()=>{
        console.log("Changed")
    }
    
    return (
        <div>
            <AceEditorCustom onLoad={onLoad} onChange={onChange} />
        </div>
    )
}
