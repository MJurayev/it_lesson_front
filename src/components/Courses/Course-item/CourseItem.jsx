import st from './CourseItem.module.scss'
import { Link, useLocation } from 'react-router-dom'
export default function CourseItem({Course,onLeave, onFavourite}) {
    const    location = useLocation()
    const hiddenStyle = {
        visibility:Course.joined ? '' : 'hidden',
        opacity:Course.joined ? 1 :0,
        transition: "all .4s ease-in-out"
    }
    return (
        <div  className={st.container}>
            <div className={st.courseBox}>
                <div className={st.see_course}>
                    <Link to={`/courses/courses/${Course.id}`} className={st.btn}>See course</Link>
                    <div className={st.info}>{Course.title}</div>
                    <div style={hiddenStyle} onClick={()=>{onLeave(Course.id)}} className={st.trash}><i className={'fa fa-sign-out-alt'}></i></div>
                    <div onClick={()=>{onFavourite(Course.id)}} className={st.favourite}><i className={(Course.isLiked ? 'fa': 'far') +" fa-star " } ></i></div>
                </div>
                <img src={Course.walls} className={st.bg} alt={Course.title}/>

            </div>
        </div>
    )
}
