import React from 'react'
// import { useParams } from 'react-router-dom'
import  st from './LessonComponent.module.scss'
export default function LessonComponent() {
    // let {theme_id} = useParams()
    return (
        <div className={st.container}>
            <div className={st.area}>
                <div className={st.header}>Mavzu:Kirish darsi</div>
                <div className={st.lesson_area}>
                    <div className={st.lessonInfo}>
                        Htmkl
                    </div>
                </div>
            </div>
        </div>
    )
}
