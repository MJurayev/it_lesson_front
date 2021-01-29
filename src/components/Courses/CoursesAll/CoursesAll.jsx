
import  st from './CourseAll.module.scss'
import CoursesListComponent from '../CoursesListComponent/CoursesListComponent'
export default function CoursesAll({onFavourite,onLeave, courses}) {
    return (
        <div className={st.course_container}>
           <div className={st.course_top}>
               <h2>All courses</h2>
               <ul className={st.course_types}>
                <li className={st.nav_items}>Free</li>
                <li className={st.nav_items +" "+ st.active}>Premium</li>
                <li className={st.nav_items}>Top</li>
                </ul>
            </div>
            {/* <div className={st.courses_items}>
                {courses.length>0 ? courses.map((course)=>{
                    return <CourseItem key={course.id} onLeave={onLeave} onFavourite={onFavourite} Course={course} />
                }) :'No courses Found'}
            </div> */}

            <CoursesListComponent onLeave={onLeave} onFavourite={onFavourite}  Course={courses} selected={courses} />
        </div>
    )
}
