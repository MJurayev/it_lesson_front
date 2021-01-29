import React from 'react'
import st from './CoursesListComponent.module.scss'
import CourseItem from '../Course-item/CourseItem'
export default function CoursesListComponent({selected,onLeave, onFavourite, Course}) {
    return (
            <>
            <div className={st.course_section}>
                    <div className={st.courses_list}>
                        {
                            selected.length>0  ? selected.map((course)=>{
                                return <CourseItem key={course.id} onLeave={onLeave} onFavourite={onFavourite} Course = {course} />
                            }) :'No courses Found'
                        }
                    </div>
                </div> 
                
            </>
    )
}
