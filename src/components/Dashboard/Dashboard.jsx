import { useState } from 'react'
import CoursesListComponent from '../features/CoursesListComponent/CoursesListComponent'
import st from './Dashboard.module.scss'

export default function Dashboard({courses, onLeave , onFavourite}) {
    const [category, setCategory] = useState('joined')
    const favourited = courses.filter(c=>c.isLiked)
    const joined = courses.filter(c=>c.joined)
    const data = (category ==="joined" ? joined : favourited)
    return (
        <>
            <div className={st.bottom}>
                <p>Your joined Courses</p>
                <ul className={st.navbar}>
                    <li onClick={()=>{setCategory("joined")}} className={st.nav_item+" "+ (category ==="joined" ? st.active :"")  }>Joined</li>                    
                    <li onClick={()=>{setCategory("favourite")}} className={st.nav_item+ " " +(category ==="favourite" ? st.active :"")}>Favourite</li>                    
                    {/* <li className={st.nav_item   }>Complete</li>                     */}
                </ul>
            </div>
            <CoursesListComponent onLeave={onLeave} onFavourite={onFavourite}  Course={courses} selected={data} />
        </>
    )
}
