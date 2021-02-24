import React, { createRef, useEffect, useRef , useState} from 'react'
import st from './CoursesListComponent.module.scss'
import CourseItem from '../Course-item/CourseItem'

export default function CoursesListComponent({selected,onLeave, onFavourite, Course}) {
    const item = useRef(null)
    const coursesList = useRef()
    const container = useRef()
    const [right, setRight] = useState(0)
    const prev=()=>{
        if(container.current.offsetWidth-coursesList.current.offsetWidth >=right){
            setRight(0)
        }else{
            setRight(x=>x-item.current.offsetWidth)
            
        }
        
    }
    const next=()=>{
        if(right>=-item.current.offsetWidth){
            setRight(container.current.offsetWidth-coursesList.current.offsetWidth)
        }else{
            setRight(x=>x+item.current.offsetWidth)
        }        
    }
    const coursesListStyle = {
        transition :'all .6s ease-in-out',
        transform:`translateX(${right} px)`
    }
    useEffect(()=>{
        coursesList.current.style.transform = `translateX(${right}px)`
    }, [right])
    return (
            <>
                    <div className={st.wrap}>
                        <div  className={st.controls}>
                            <span onClick={next} className={st.prev}>Old</span>
                            <span onClick={prev} className={st.next}>Key</span>
                        </div>
                        <div ref={container} className={st.container}>
                            <div ref={coursesList} style={coursesListStyle} className={st.courses_list}>
                                {
                                    selected.length>0  ? selected.map((course)=>{
                                        return <CourseItem refItem={item} key={course.id} onLeave={onLeave} onFavourite={onFavourite} Course = {course} />
                                    }) :'No courses Found'
                                }
                            </div>
                        </div>
                    </div>
                
            </>
    )
}
